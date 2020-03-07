/*
description: bot for DQS
version: 1.0.0
authoer: hajimela (polarbear127)
*/

function autoTouch(img,pX,pY,pW,pH,likelihood) {
    // parameters
    var img_path = "./img/"
    var target = images.read(img_path+img)
    var tmpImg = captureScreen()
    images.save(tmpImg,"/storage/emulated/0/tmp.png") //save tmp capture in grayscale
    var screenShot = images.read("/storage/emulated/0/tmp.png") 
    var b =findImage(screenShot,target,{
        region: [pX, pY, pW, pH],
        threshold: likelihood
    })
    if(b){
        randX = b.x+Math.round(Math.random() * 5)
        randY = b.y+Math.round(Math.random() * 5)
        press(randX,randY,150) // click on (x,y) with random 5px offset
    }else{
        toastLog("Not found")
    }
    sleep(1000)
}

function storyMode(){

}

// check screen capture (paramter = true if the screnn to be the landscape)
if(!requestScreenCapture()){toast("Failed to capture screen");exit();}

// loop
while(true){
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
    'ok']
    for (i = 0; i < target_imgs.length; i++) {
        autoTouch(target_imgs[i],0,0,800,1280,0.85)
    }
}