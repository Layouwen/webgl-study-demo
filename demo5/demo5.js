// 使用 three 的 css 函数替代手动获取 rgb 颜色
import { Color } from 'https://unpkg.com/three/build/three.module.js'
import { initShaders } from '../initShaders.js'

// 获取 canvas
const canvas = document.querySelector('#canvas')

// 设置 canvas 大小
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 获取 webgl 的画笔
const gl = canvas.getContext('webgl')

// 获取着色器的源码
const vsSource = document.querySelector('#vertexShader').innerHTML
const fsSource = document.querySelector('#fragmentShader').innerHTML

// 初始化
initShaders(gl, vsSource, fsSource)

// **********************************

// 获取变量
const a_Position = gl.getAttribLocation(gl.program, 'a_Position')
const a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')

// 保存坐标组
const a_points = []

// 在 canvas 画布中添加点击事件
canvas.addEventListener('click', ({ clientX, clientY }) => {
  // 解构 canvas 的属性
  const { left, top, width, height } = canvas.getBoundingClientRect()
  const [cssX, cssY] = [clientX - left, clientY - top]

  // 解决坐标原点位置的差异
  const [halfWidth, halfHeight] = [width / 2, height / 2]
  let [xBaseCenter, yBaseCenter] = [cssX - halfWidth, cssY - halfHeight]

  // 解决 y 方向的差异
  yBaseCenter = -yBaseCenter

  // 解决坐标基底的差异
  const [x, y] = [xBaseCenter / halfWidth, yBaseCenter / halfHeight]

  // 随机大小
  const size = Math.random() * 50 + 10

  // 添加到坐标组
  a_points.push({ x, y, size })

  // 渲染
  render()
})

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT)
  a_points.forEach(({ x, y, size }) => {
    // 设置属性
    gl.vertexAttrib2f(a_Position, x, y)
    gl.vertexAttrib1f(a_PointSize, size)
    // 绘制
    gl.drawArrays(gl.POINTS, 0, 1)
  })
}

// **********************************

// 模拟 Css 颜色
const rgbaCss = 'rgba(0, 0, 0)'

// 使用第三方库
const color = new Color(rgbaCss)

const { r, g, b } = color

gl.clearColor(r, g, b, 1)

gl.clear(gl.COLOR_BUFFER_BIT)
