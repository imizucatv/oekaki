const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true, // 自動フルスクリーン化
    autoHideMenuBar: true, // メニューバー非表示
    webPreferences: { nodeIntegration: false }
  });
  
  // wwwフォルダの中のindex.htmlを読み込む（修正済み）
  win.loadFile('www/index.html');
}

app.whenReady().then(createWindow);