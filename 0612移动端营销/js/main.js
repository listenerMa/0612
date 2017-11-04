//禁止系统默认行为
document.addEventListener('touchstart',function(ev){
  ev = ev||event;
  ev.preventDefault();
});
//rem适配
(function(){
  var styleNode = document.createElement('style');
  var width = document.documentElement.clientWidth;
  styleNode.innerHTML = 'html{font-size:'+width/16+'px!important}';
  document.body.appendChild(styleNode);
})();


function beginPage() {
  var Lists = $('#wrap .page');
//页面滑动位置标识
  var flag = 0;
//上一次页面滑动位置标识
  var oldflag = 0;
//鼠标的开始位置
  var startY = 0;
//鼠标的结束位置
  var endY = 0;
//鼠标滑动的距离
  var distance = 0;
//一次鼠标滑动事件是否完成
  var isMoved = true;
  var height = document.documentElement.clientHeight;
  //音乐播放
  var music = $('.music audio');
  var musicWrap = $('.music');
  //首次直接自动播放(由开机画面，直接进入)
  music[0].play();
  musicWrap.addClass('active');
  $(document).on('click',function () {
    if(music[0].paused){
      music[0].play();
      musicWrap.addClass('active');
    }else {
      music[0].pause();
      musicWrap.removeClass('active');
    }
  })




  Lists.eq(0).addClass("preCurrent");
  $(document).on('touchstart',function (event) {
    event = event || window.event;
    startY = event.originalEvent.changedTouches[0].clientY;
    //避免用户点击，而执行end中的distance>0或distance<0逻辑
    distance = 0;
  });
  $(document).on('touchmove',function (event) {
    event = event || window.event;
    endY = event.originalEvent.changedTouches[0].clientY;
    distance = endY - startY;
    if(distance>0){
      Lists.eq(oldflag).css({
        transform: "translateY("+distance*0.00001+"px)"+" scale("+(1-(distance/height)*0.2)+")",
      });
      //降低当前视口页面的层级
      // Lists.eq(oldflag).addClass("preCurrent");
      //判断是否是一次滑动事件
      if(isMoved){
        flag--;
        // Lists.eq(flag).css({//没必要这么做
        //   transform: "translateY(-100%)",
        // });
        Lists.eq(oldflag).addClass("toBottomOrigin");
        isMoved = false;
      };
      //滑动的临界点判断
      (flag<0)&&(flag=4);
      //先让页面去除隐藏
      Lists.eq(flag).removeClass("hide");
      Lists.eq(flag).css({
        transform: "translateY("+(-height+distance)+"px)",
      });
      //提升出来页面的层级
      Lists.eq(flag).addClass("current");
    }else if(distance < 0){
      Lists.eq(oldflag).css({
        transform: "translateY("+distance*0.00001+"px)"+" scale("+(1+(distance/height)*0.2)+")",
      });
      //降低当前视口页面的层级,如果preCurrent已处在该类，则添加类失败，但不报错
      // Lists.eq(oldflag).addClass("preCurrent");
      //判断是否是本次滑动事件
      if(isMoved){
        flag++;
        // Lists.eq(flag).css({//没必要这么做
        //   transform: "translateY(-100%)",
        // });
        //添加页面元素缩小（变换）的源点
        Lists.eq(oldflag).addClass("toTopOrigin");
        isMoved = false;
      };
      //滑动的临界点判断
      (flag>4)&&(flag=0);
      //先让页面去除隐藏
      Lists.eq(flag).removeClass("hide");
      Lists.eq(flag).css({
        transform: "translateY("+(height+distance)+"px)",
      });
      //提升出来页面的层级
      Lists.eq(flag).addClass("current");
    }
  });
  $(document).on('touchend',function () {
    if(distance>0){
      // clearInterval(timer1);//transform中的属性都不是叠加的，而都是相对于最开始的位置
      Lists.eq(oldflag).addClass("moveToBottom");
      Lists.eq(flag).addClass("moveFromTop ");
      setTimeout(function () {
        Lists.eq(oldflag).css({
          transform: "translateY(0)"+" scale(1)",   //此处需要对页面还原处理，否则去除含义动画的类(class)，页面会回到手指滑动的地方；
        });
        Lists.eq(oldflag).removeClass("moveToBottom");  //去除含义动画的类(class)
        //去除scale源点
        Lists.eq(oldflag).removeClass("toBottomOrigin");
        Lists.eq(flag).css({
          transform: "translateY(0)",
        });
        //移除动画
        Lists.eq(flag).removeClass("moveFromTop ");
        //移除层级(新元素降低层级)
        Lists.eq(flag).removeClass("current");
        Lists.eq(flag).addClass("preCurrent");
        Lists.eq(oldflag).removeClass("preCurrent");
        //动画效果的类active
        // Lists.eq(flag).addClass("active");
        // Lists.eq(oldflag).removeClass("active");
        //移出视口的页面，重新赋类让其隐藏
        Lists.eq(oldflag).addClass("hide");
        //选择此时赋值
        oldflag = flag;
        //本次滑动事件执行完毕
        isMoved = true;
      },600);

    }else if(distance<0){
      Lists.eq(oldflag).addClass("moveToTop");
      Lists.eq(flag).addClass("moveFromTop ");
      setTimeout(function () {
        Lists.eq(oldflag).css({
          transform: "translateY(0)"+" scale(1)",   //此处需要对页面还原处理，否则去除含义动画的类(class)，页面会回到手指滑动的地方；
        });
        Lists.eq(oldflag).removeClass("moveToTop");  //去除含义动画的类(class)
        //去除scale源点
        Lists.eq(oldflag).removeClass("toTopOrigin");
        Lists.eq(flag).css({
          transform: "translateY(0)",
        });
        //移除动画
        Lists.eq(flag).removeClass("moveFromTop ");
        //移除层级(新元素降低层级)
        Lists.eq(flag).removeClass("current");
        Lists.eq(flag).addClass("preCurrent");
        Lists.eq(oldflag).removeClass("preCurrent");
        //移出视口的页面，重新赋类让其隐藏
        Lists.eq(oldflag).addClass("hide");
        //选择此时赋值
        oldflag = flag;
        //本次滑动事件执行完毕
        isMoved = true;
      },600);
    }


  });



}



