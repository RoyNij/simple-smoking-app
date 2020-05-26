const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("./index.html")
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
})

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})

// function main(){
//     const tracker = new Tracker( settings );

//     console.log(
//         tracker.timeDif(),
//         tracker.moneySaved(),
//         tracker.money.getProgress(tracker.moneySaved()),
//         tracker.health.getProgress(tracker.timeDif())
//     );
// }

// main()