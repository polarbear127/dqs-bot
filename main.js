/*
description: bot for DQS
version: 1.0.0
authoer: hajimela (polarbear127)
*/
function getScreen(){
    // to avoid captureScreen failure
    while(!tmpImg){var tmpImg = captureScreen();}
    //save tmp captured screen
    images.save(tmpImg,"/storage/emulated/0/tmp.png"); 
}
function autoTouch(img,pX,pY,pW,pH,likelihood) {
    // parameters
    var img_path = "./img/";
    var target = images.read(img_path+img);
    var height = device.height;
    var width = device.width;
    var ra = new RootAutomator();
    // set screen resolution
    //toastLog("Screen resolution width:" + width + ";height:" + height);
    ra.setScreenMetrics(width,height);
    getScreen();
    var screenShot = images.read("/storage/emulated/0/tmp.png");
    var b =findImage(screenShot,target,{
        region: [pX, pY, pW, pH],
        threshold: likelihood
    });
    if(b){
        randX = b.x+Math.round(Math.random() * 5);
        randY = b.y+Math.round(Math.random() * 5);
        ra.press(randX,randY,150); // click on (x,y) with random 5px offset
    }
    sleep(500)
}

function story(){

}

function teamRaid(){

}

// check screen capture (paramter = true if the screnn to be the landscape)
if(!requestScreenCapture()){toast("Failed to capture screen");exit();}

while(true){
    var height = device.height;
    var width = device.width;
    var target_imgs = ['main-story-new-spot.png',
    'side-story-new-spot.png',
    'new-stage-on-map.png',
    'new-stage.png',
    'skip.png',
    'go-there.png',
    'confirm.png',
    'go.png',
    'get-result.png',
    'conti.png',
    'ok.png'];
    for (i = 0; i < target_imgs.length; i++) {
        autoTouch(target_imgs[i],0,0,width,height,0.8);
    }
}