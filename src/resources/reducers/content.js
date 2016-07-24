const content = (state = '/', action) => {
  switch (action.type) {
    case 'LOAD_PATH':
      return Object.assign({}, state, {path: action.path})
  }
}

// No init state, should be retrieved by a redux-sagas!

export default content
