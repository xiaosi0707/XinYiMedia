/**
 @Author：Wyunfei
 @Date：2019/2/24/11:45
 @FileName: fixed.js
 */
export function fixed() {
  // 导航 显示/隐藏
  var mybody = document.getElementsByTagName('body')[0];
  var startX, startY, moveEndX, moveEndY, X, Y;
  mybody.addEventListener('touchstart', function(e) {
    // e.preventDefault();
    var e = e || window.event
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
  }, false);
  mybody.addEventListener('touchmove', function(e) {
    // e.preventDefault();
    var e = e || window.event
    moveEndX = e.changedTouches[0].pageX;
    moveEndY = e.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;

    // 兼容处理 - IOS还真得做兼容，不做兼容处理IOS系统不支持，判断失效 系统版本为12.1.3
    var top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset

    if ( top <= 0 ) {
      document.getElementById('banner').style.display = 'block'
      document.getElementById('banner-mini').style.display = 'none'
    }
    else if( Math.abs(Y) > Math.abs(X) && Y < 0 ) {// up
      console.log('向上')
      document.getElementById('banner').style.display = 'none'
      document.getElementById('banner-mini').style.display = 'block'
    }
    else{//没有发生滑动
      console.log('没有发生滑动');
    }
  })
}
