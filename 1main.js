


// /* (function(){})() */ //즉시실행함수


// (function () {

//     let YOffset = 0; //전체 스크롤 값
//     let prevScrollHeight = 0; //현재 활성화된 section 이전의 section 높이값
//     let currentScene = 0; // 현재 보이는 section
//     let enterNewScence = false; //새로운씬에 진입했을 때를 알려줌


//     function setCanvasImages(){
//       //canvas에 이미지를 그리기 위한 함수
//       let imgEle;
//       for(let i=0; i<sceneInfo[0].values.videoImageCount;i++){
//         // imgEle=document.createElement('img');
//         imgEle=new Image();
//         imgEle.scr=`./video/001/img_${1 + i}.jpg`;
//         sceneInfo[0].objs.videoImages.push(imgEle);
//     }
//     // console.log(sceneInfo[0].objs.videoImages);
//   }

//     setCanvasImages();

//     function setLayout() {
//         //각 영역의 높이값을 세팅
//         for (let i = 0; i < sceneInfo.length; i++) {
//             sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
//             sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
//         }

//         YOffset = pageYOffset;

//         let totalScrollHeight = 0;
//         for (let i = 0; i < sceneInfo.length; i++) {
//             totalScrollHeight += sceneInfo[i].scrollHeight
//             if (totalScrollHeight >= YOffset) {
//                 currentScene = i;
//                 break;
//             }
//         }
//         document.body.setAttribute('id', `show-scene-${currentScene}`)

//         //canvas 크기조절

//         const heightRatio=window.innerHeight;
//         console.log(heightRatio);
//         sceneInfo[0].objs.canvas.style.transform=`translate3d(-50%,-50%,0) scale(${heightRatio})`;


//     }

//     function calcValues(values, currentYOffset) {
//         let rv;
//         let scrollHeight = sceneInfo[currentScene].scrollHeight;
//         let scrollRatio = currentYOffset / scrollHeight;

//         if (values.length === 3) {
//             //value의 요소가 3개인지 확인
//             //start~end 사이에 애니메이션이 실행
//             //시작점 구하기
//             let partScrollStart = values[2].start * scrollHeight;
//             let partScrollEnd = values[2].end * scrollHeight;
//             let partScrollHeight = partScrollEnd - partScrollStart;
//             if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
//                 rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0]
//             } else if (currentYOffset < partScrollStart) {
//                 rv = values[0];
//             } else if (currentYOffset > partScrollEnd) {
//                 rv = values[1];
//             }

//         } else {
//             rv = scrollRatio * (values[1] - values[0]) + values[0];
//         }
//         return rv;
//     }


//     function playAnimation() {
//         let objs = sceneInfo[currentScene].objs;
//         let values = sceneInfo[currentScene].values;
//         let currentYOffset = YOffset - prevScrollHeight;
//         let scrollHeight = sceneInfo[currentScene].scrollHeight;
//         let scrollRatio = currentYOffset / scrollHeight;
//         // console.log(currentYOffset/sceneInfo[currentScene].scrollHeight);


//         switch (currentScene) {
//             case 0:
//               let sequence=Math.round(calcValues(values.imageSequence,currentYOffset));
//               // console.log(sequence);
//               objs.context.drawImage(objs.videoImages[sequence],0,0,1920,1080);







//                 // console.log('0 play');
//                 if (scrollRatio <= 0.22) {

//                     objs.MessageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
//                     objs.MessageA.style.transform = `translateY(${calcValues(values.messageA_translateY_in,currentYOffset)}%)`
//                 } else {
//                     objs.MessageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
//                     objs.MessageA.style.transform = `translateY(${calcValues(values.messageA_translateY_out,currentYOffset)}%)`
//                 }
//                 if (scrollRatio <= 0.42) {
//                     // in
//                     objs.MessageB.style.opacity = calcValues(
//                         values.messageB_opacity_in,
//                         currentYOffset
//                     );
//                     objs.MessageB.style.transform = `translate3d(0, ${calcValues(
//                       values.messageB_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                 } else {
//                     // out
//                     objs.MessageB.style.opacity = calcValues(
//                         values.messageB_opacity_out,
//                         currentYOffset
//                     );
//                     objs.MessageB.style.transform = `translate3d(0, ${calcValues(
//                       values.messageB_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                 }
//                 if (scrollRatio <= 0.62) {
//                     // in
//                     objs.MessageC.style.opacity = calcValues(
//                       values.messageC_opacity_in,
//                       currentYOffset
//                     );
//                     objs.MessageC.style.transform = `translate3d(0, ${calcValues(
//                       values.messageC_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                   } else {
//                     // out
//                     objs.MessageC.style.opacity = calcValues(
//                       values.messageC_opacity_out,
//                       currentYOffset
//                     );
//                     objs.MessageC.style.transform = `translate3d(0, ${calcValues(
//                       values.messageC_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                   }
//                   if (scrollRatio <= 0.82) {
//                     // in
//                     objs.MessageD.style.opacity = calcValues(
//                       values.messageD_opacity_in,
//                       currentYOffset
//                     );
//                     objs.MessageD.style.transform = `translate3d(0, ${calcValues(
//                       values.messageD_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                   } else {
//                     // out
//                     objs.MessageD.style.opacity = calcValues(
//                       values.messageD_opacity_out,
//                       currentYOffset
//                     );
//                     objs.MessageD.style.transform = `translate3d(0, ${calcValues(
//                       values.messageD_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                   }
//                 break;
//             case 1:
//                 // console.log('1 play');
//                 break;
//             case 2:
                
//                 // console.log('2 play');
//                 if (scrollRatio <= 0.25) {
//                     // in
//                     objs.messageA.style.opacity = calcValues(
//                       values.messageA_opacity_in,
//                       currentYOffset
//                     );
//                     objs.messageA.style.transform = `translate3d(0, ${calcValues(
//                       values.messageA_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                   } else {
//                     // out
//                     objs.messageA.style.opacity = calcValues(
//                       values.messageA_opacity_out,
//                       currentYOffset
//                     );
//                     objs.messageA.style.transform = `translate3d(0, ${calcValues(
//                       values.messageA_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                   }
//                   if (scrollRatio <= 0.57) {
//                     // in
//                     objs.messageB.style.transform = `translate3d(0, ${calcValues(
//                       values.messageB_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                     objs.messageB.style.opacity = calcValues(
//                       values.messageB_opacity_in,
//                       currentYOffset
//                     );
//                     objs.pinB.style.transform = `scaleY(${calcValues(
//                       values.pinB_scaleY,
//                       currentYOffset
//                     )})`;
//                   } else {
//                     // out
//                     objs.messageB.style.transform = `translate3d(0, ${calcValues(
//                       values.messageB_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                     objs.messageB.style.opacity = calcValues(
//                       values.messageB_opacity_out,
//                       currentYOffset
//                     );
//                     objs.pinB.style.transform = `scaleY(${calcValues(
//                       values.pinB_scaleY,
//                       currentYOffset
//                     )})`;
//                   }
//                   if (scrollRatio <= 0.83) {
//                     // in
//                     objs.messageC.style.transform = `translate3d(0, ${calcValues(
//                       values.messageC_translateY_in,
//                       currentYOffset
//                     )}%, 0)`;
//                     objs.messageC.style.opacity = calcValues(
//                       values.messageC_opacity_in,
//                       currentYOffset
//                     );
//                     objs.pinC.style.transform = `scaleY(${calcValues(
//                       values.pinC_scaleY,
//                       currentYOffset
//                     )})`;
//                   } else {
//                     // out
//                     objs.messageC.style.transform = `translate3d(0, ${calcValues(
//                       values.messageC_translateY_out,
//                       currentYOffset
//                     )}%, 0)`;
//                     objs.messageC.style.opacity = calcValues(
//                       values.messageC_opacity_out,
//                       currentYOffset
//                     );
//                     objs.pinC.style.transform = `scaleY(${calcValues(
//                       values.pinC_scaleY,
//                       currentYOffset
//                     )})`;
//                   }
//                 break;
//             case 3:
//                 // console.log('3 play');
//                 break;
//         }
//     }

//     function scrollLoop() {
//         enterNewScence = false;
//         prevScrollHeight = 0;
//         for (let i = 0; i < currentScene; i++) {
//             prevScrollHeight += sceneInfo[i].scrollHeight
//         }
//         if (YOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
//             enterNewScence = true;
//             currentScene++;
//         }
//         if (YOffset < prevScrollHeight) {
//             enterNewScence = true;
//             currentScene--;
//         }
//         // console.log(currentScene);
//         document.body.setAttribute('id', `show-scene-${currentScene}`)


//         if (enterNewScence) return;

//         //글자애니메이션을 별도로 함수로 설정한다.
//         playAnimation();
//     }

//     window.addEventListener('scroll', () => {
//         YOffset = pageYOffset;
//         scrollLoop();
//     })
//     window.addEventListener('resize', setLayout)
//     window.addEventListener('load', setLayout)
// })()