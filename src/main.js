// 设计宽度
var deviseW = 750
// 设计高度
var deviseH = 1508

function getScale () {
  
  const scaleBox = document.getElementsByClassName('scale-box')[0]
  // 如果比例大于1则进入电脑模式
  // alert(window.innerWidth / window.innerHeight)
  if ((window.innerWidth / window.innerHeight) < 1) {
    var scale = window.innerWidth / deviseW
    scaleBox.style.width = deviseW + 'px'
    scaleBox.style.height = deviseH + 'px'
    scaleBox.style.transform = `scale(${scale}, ${scale})`
    // console.log(window.innerHeight, deviseH * scale)
    scaleBox.style.transformOrigin = `0 ${(window.innerHeight - deviseH * scale) + 'px' } 0`
    setTimeout(() => {
      console.log(scaleBox.offsetHeight, scale)
      document.getElementsByTagName('html')[0].style.height = scaleBox.offsetHeight * scale + 'px'
    }, 0)
    document.body.classList.remove('pc')
  } else {
    document.body.classList.add('pc')
  }

}

getScale()

let timer = null
window.onresize = () => {
  // console.log(timer)
  window.clearTimeout(timer)
  timer = setTimeout(() => {
    getScale()
  }, 300)
}

function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})