const { app, BrowserWindow, Menu } = require('electron')

app.commandLine.appendSwitch('disable-pinch');

let win;

function createWindow () {
  Menu.setApplicationMenu(null)
  win = new BrowserWindow({
    title: "MatesRapidas",
    width: 800, 
    height: 600,
    icon: __dirname + '/dist/favicon.ico',
    resizable: false,
    show: false
    
    })

    win.once('ready-to-show', () => {
      
      win.show()
    })
  win.loadURL(`file://${__dirname}/dist/index.html`)
  //win.loadURL(`http://localhost:4200`)
  
  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})