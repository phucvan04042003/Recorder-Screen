const { app, BrowserWindow, screen } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) { 
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const display = screen.getPrimaryDisplay()
  const maxiSize = display.workAreaSize
  const mainWindow = new BrowserWindow({
    width: maxiSize.width,
    height:maxiSize.height ,
    webPreferences: {    
      nodeIntegration: true
    }
  });

  // Disable toggle bar
  mainWindow.setMenuBarVisibility(false)

  // Load file html
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// Window start
app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
