const electron = require('electron');
const path = require('path');
const url = require('url');

const isDev = true;

// TODO: Add developer extensions automatically if not installed
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
    minHeight: 200,
    frame: false
  }
  mainWindow = new BrowserWindow(options)

  let ELECTRON_START_URL = url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  if(isDev){
    ELECTRON_START_URL='http://localhost:3000';
   }

  // and load the index.html of the app.
  mainWindow.loadURL(ELECTRON_START_URL)
  mainWindow.openDevTools();
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
