import electron from 'electron'
import {client as livereload} from 'electron-connect'

// TODO do it
// import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';

// installExtension(REDUX_DEVTOOLS)
//     .then((name) => console.log(`Added Extension:  ${name}`))
//     .catch((err) => console.log('An error occurred: ', err));

const npmLifecycle = process.env.npm_lifecycle_event

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  // Create the browser window.
  let options = {
    width: 1000,
    height: 600,
    minWidth: 400,
    minHeight: 200
  }
  mainWindow = new BrowserWindow(options)

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
