/**
 @Author：Wyunfei
 @Date：2019/1/25/8:01
 @FileName: init.js
 */
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 16 + 'px';
};
