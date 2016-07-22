import electron from 'electron'
import {client as livereload} from 'electron-connect'
import './events'

const npmLifecycle = process.env.npm_lifecycle_event

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/../../build/index.html`)

  if (npmLifecycle === 'start-watch') {
    livereload.create(mainWindow)
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
