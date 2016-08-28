import { takeLatest, eventChannel } from 'redux-saga'
import { take, call, put, cancel, fork, cancelled } from 'redux-saga/effects'
import { getFiles } from '../system/files'
import { watch } from '../system/fswatch'

import {getFilesOk, getFilesErr, GET_FILES, updatedFiles} from '../actions/content'

// Need to do it 'outside' to do it sync
let watcher
window.onbeforeunload = () => {
  if (watcher) {
    watcher.close()
  }
}

function createFileWatcherChannel (path) {
  return eventChannel(emit => {
    const pathChange = (eventType, filename) => {
      emit(updatedFiles())
    }
    watcher = watch(path, pathChange)

    const unsubscribe = () => {
      watcher.close()
    }

    return unsubscribe
  })
}

function * watcherListener (path) {
  const watchChannel = yield call(createFileWatcherChannel, path)
  try {
    while (true) {
      yield take(watchChannel)
      const files = yield call(getFiles, path)
      yield put(getFilesOk(files))
    }
  } finally {
    if (yield cancelled()) {
      watchChannel.close()
    }
  }
}

// The current watcher, used to cancel it on events
let currentDirWatcher
function * getFilesGen (action) {
  try {
    // Remove watcher from old path?
    if (currentDirWatcher && currentDirWatcher.isRunning()) {
      cancel(currentDirWatcher)
    }

    // Put watcher on new path
    currentDirWatcher = yield fork(watcherListener, action.path)
    const files = yield call(getFiles, action.path)
    yield put(getFilesOk(files))
  } catch (e) {
    yield put(getFilesErr(e.message))
  }
}

export function * filesSaga () {
  yield * takeLatest(GET_FILES, getFilesGen)
}

