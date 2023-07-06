//(function(){})()//利됱떆�ㅽ뻾�⑥닔

(function(){
  let yOffset=0;// �꾩껜 �ㅽ겕濡� 媛�
  let prevScrollHeight=0;//�꾩옱 �쒖꽦�붾맂 section �댁쟾�� �믪씠媛�
  let currentScene=0;//�꾩옱 �쒖꽦�붾맂(�붾㈃�� 蹂댁씠��) section
  let enterNewScene=false; //�덈줈�큦ection�� 吏꾩엯�덉쓣�� �뚮젮二쇰뒗 ��븷

  function setCanvasImages(){
      //canvas�� �대�吏�瑜� 洹몃━湲곗쐞�� �⑥닔
      let imgEle;
      for(let i=0; i<sceneInfo[0].values.videoImageCount; i++){
          //imgEle=document.createElement('img');
          imgEle=new Image();
          imgEle.src=`./video/001/img_${1 + i}.jpg`;
          sceneInfo[0].objs.videoImages.push(imgEle)
      }

      let imgEle2;
      for(let i=0; i<sceneInfo[2].values.videoImageCount; i++){
          //imgEle=document.createElement('img');
          imgEle2=new Image();
          imgEle2.src=`./video/002/img_${301 + i}.jpg`;
          sceneInfo[2].objs.videoImages.push(imgEle2)
      }
      
  }

  setCanvasImages();

function setLayout(){
  //媛� �곸뿭�� �믪씠媛믪쓣 �뗮똿
  for(let i=0;i<sceneInfo.length;i++){
      sceneInfo[i].scrollHeight= sceneInfo[i].heightNum*window.innerHeight
      sceneInfo[i].objs.container.style.height=`${sceneInfo[i].scrollHeight}px`;
  }
  yOffset=pageYOffset;

  let totalScrollHeight=0;

  for(let i=0; i<sceneInfo.length; i++){
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if(totalScrollHeight>=yOffset){
          currentScene=i;
          break;
      }
  }

  document.body.setAttribute('id',`show-scene-${currentScene}`)

  //canvas �ш린議곗젅
  //const heightRatio=window.innerHeight/1080;
  const heightRatio=window.innerHeight/980;
  console.log(heightRatio)
  sceneInfo[0].objs.canvas.style.transform=`translate3d(-50%, -50%,0) scale(${heightRatio})`;
  sceneInfo[2].objs.canvas.style.transform=`translate3d(-50%, -50%,0) scale(${heightRatio})`;

} /* //setLayout */

function calcValues(values, currentYOffset){
  let rv;
  let scrollHeight=sceneInfo[currentScene].scrollHeight;
  let scrollRatio=currentYOffset/scrollHeight;

  if(values.length === 3){
      //values�� �붿냼媛� 3媛쒖씤吏� �뺤씤
      //start~end�ъ씠�� �좊땲硫붿씠�섏씠 �ㅽ뻾
      //�쒖옉�� 援ы븯湲�
      let partScrollStart=values[2].start*scrollHeight;
      let partScrollEnd=values[2].end*scrollHeight;
      let partScrollHeight=partScrollEnd - partScrollStart;
      if(currentYOffset>=partScrollStart && currentYOffset<=partScrollEnd){
          rv=(currentYOffset - partScrollStart)/partScrollHeight*(values[1]-values[0])+values[0];
      }else if(currentYOffset<partScrollStart){
          rv=values[0];
      }else if(currentYOffset>partScrollEnd){
          rv=values[1];
      }

  }else{
      rv=scrollRatio*(values[1]-values[0])+values[0]
  }
  return rv;
}

  function playAnimation(){
      let objs=sceneInfo[currentScene].objs;
      let values=sceneInfo[currentScene].values;

      let currentYOffset=yOffset - prevScrollHeight;
      let scrollHeight=sceneInfo[currentScene].scrollHeight;
      let scrollRatio=currentYOffset/scrollHeight;
      switch (currentScene){
          case 0:
              let sequence=Math.round(calcValues(values.imageSequence,currentYOffset))
              //console.log(sequence)
              objs.context.drawImage(objs.videoImages[sequence],0,0,1920,1080)

              //canvas opacity
              objs.canvas.style.opacity=calcValues(values.canvas_opacity,currentYOffset)



              //console.log('0 play');
              if(scrollRatio<=0.22){
                  objs.MessageA.style.opacity=calcValues(values.messageA_opacity_in,currentYOffset)
                  objs.MessageA.style.transform=`translateY(${calcValues(values.messageA_translateY_in,currentYOffset)}%)`;
              }else{
                  objs.MessageA.style.opacity=calcValues(values.messageA_opacity_out,currentYOffset) 
                  objs.MessageA.style.transform=`translateY(${calcValues(values.messageA_translateY_out,currentYOffset)}%)`;
              }

              if (scrollRatio <= 0.42) {
                  // in
                  objs.MessageB.style.opacity = calcValues(values.messageB_opacity_in,currentYOffset);
                  objs.MessageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in,currentYOffset)}%, 0)`;
                } else {
                  // out
                  objs.MessageB.style.opacity = calcValues(values.messageB_opacity_out,currentYOffset);
                  objs.MessageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out,currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.62) {
                  // in
                  objs.MessageC.style.opacity = calcValues(values.messageC_opacity_in,currentYOffset);
                  objs.MessageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in,currentYOffset)}%, 0)`;
                } else {
                  // out
                  objs.MessageC.style.opacity = calcValues(values.messageC_opacity_out,currentYOffset);
                  objs.MessageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out,currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.82) {
                  // in
                  objs.MessageD.style.opacity = calcValues(values.messageD_opacity_in,currentYOffset);
                  objs.MessageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in,currentYOffset)}%, 0)`;
                } else {
                  // out
                  objs.MessageD.style.opacity = calcValues(values.messageD_opacity_out,currentYOffset);
                  objs.MessageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out,currentYOffset)}%, 0)`;
                }
             
              break;
          case 1:
              //console.log('1 play');
              break;
          case 2:
              //console.log('2 play');
              let sequence2=Math.round(calcValues(values.imageSequence,currentYOffset))
              //console.log(sequence)
              objs.context.drawImage(objs.videoImages[sequence2],0,0,1920,1080)

              //canvas opacity

              if(scrollRatio<=0.5){
                  objs.canvas.style.opacity=calcValues(values.canvas_opacity_in,currentYOffset)
              }else{
                  objs.canvas.style.opacity=calcValues(values.canvas_opacity_out,currentYOffset)
              }


              if (scrollRatio <= 0.25) {
                  // in
                  objs.messageA.style.opacity = calcValues(values.messageA_opacity_in,currentYOffset);
                  objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in,currentYOffset)}%, 0)`;
                } else {
                  // out
                  objs.messageA.style.opacity = calcValues(values.messageA_opacity_out,currentYOffset);
                  objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out,currentYOffset)}%, 0)`;
                }
                if (scrollRatio <= 0.57) {
                  // in
                  objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in,currentYOffset)}%, 0)`;
                  objs.messageB.style.opacity = calcValues(values.messageB_opacity_in,currentYOffset);
                  objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY,currentYOffset)})`;
                } else {
                  // out
                  objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out,currentYOffset)}%, 0)`;
                  objs.messageB.style.opacity = calcValues(values.messageB_opacity_out,currentYOffset);
                  objs.pinB.style.transform = `scaleY(${calcValues(values.pinB_scaleY,currentYOffset)})`;
                }

                if (scrollRatio <= 0.83) {
                  // in
                  objs.messageC.style.transform = `translate3d(0, ${calcValues(
                    values.messageC_translateY_in,
                    currentYOffset
                  )}%, 0)`;
                  objs.messageC.style.opacity = calcValues(
                    values.messageC_opacity_in,
                    currentYOffset
                  );
                  objs.pinC.style.transform = `scaleY(${calcValues(
                    values.pinC_scaleY,
                    currentYOffset
                  )})`;
                } else {
                  // out
                  objs.messageC.style.transform = `translate3d(0, ${calcValues(
                    values.messageC_translateY_out,
                    currentYOffset
                  )}%, 0)`;
                  objs.messageC.style.opacity = calcValues(
                    values.messageC_opacity_out,
                    currentYOffset
                  );
                  objs.pinC.style.transform = `scaleY(${calcValues(
                    values.pinC_scaleY,
                    currentYOffset
                  )})`;
                }
        


              break;
          case 3:
              //console.log('3 play');
              break;
      }
      
  }/* //playAnimation */


function scrollLoop(){
  enterNewScene=false;
  prevScrollHeight=0;
  for(let i=0; i<currentScene;i++){
      prevScrollHeight += sceneInfo[i].scrollHeight

  }

  if(yOffset>prevScrollHeight+sceneInfo[currentScene].scrollHeight){
      enterNewScene=true
      currentScene++;
  }
  if(yOffset<prevScrollHeight){
      enterNewScene=true
      currentScene--;
  }

  //console.log(currentScene)
  document.body.setAttribute('id',`show-scene-${currentScene}`)

  if(enterNewScene) {
      return;
  }
  //湲��먯븷�덈찓�댁뀡�� 蹂꾨룄濡� �⑥닔濡� �ㅼ젙�쒕떎
  playAnimation();
} 



window.addEventListener('scroll',()=>{
  yOffset=pageYOffset;
  //console.log(yOffset);
  scrollLoop();
})
window.addEventListener('resize',setLayout)
window.addEventListener('load',()=>{
  setLayout();
  sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0],0,0,1920,1080)
}
)

})()

