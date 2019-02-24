/**
 @Author：Wyunfei
 @Date：2019/2/24/10:43
 @FileName: nav.js
 */
export function nav() {
  // 层
  var menu = document.getElementById('menu')
  var close = document.getElementById('close')
  var menuMini = document.getElementById('menu-mini')
  var closeMini = document.getElementById('close-mini')
  var mask = document.getElementById('mask')
  var maskMini = document.getElementById('mask-mini')
  if (menu) {
    menu.onclick = function () {
      mask.style.display = 'block'
      mask.style.zIndex = 102
    }
  }
  if (close) {
    close.onclick = function () {
      mask.style.display = 'none'
      mask.style.zIndex = 100
    }
  }
  if (menuMini) {
    menuMini.onclick = function () {
      maskMini.style.display = 'block'
      maskMini.style.zIndex = 102
    }
  }
  if (closeMini) {
    closeMini.onclick = function () {
      maskMini.style.display = 'none'
      maskMini.style.zIndex = 100
    }
  }
}
