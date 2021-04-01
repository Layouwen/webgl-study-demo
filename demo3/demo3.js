// 使用 three 的 css 函数替代手动获取 rgb 颜色
import { Color } from 'https://unpkg.com/three/build/three.module.js'

// 获取 canvas
const canvas = document.querySelector('#canvas')

// 设置 canvas 大小
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 获取 webgl 的画笔
const gl = canvas.getContext('webgl')

// 模拟 Css 颜色
const rgbaCss = 'rgba(255, 100, 0)'

// **********************************

// 使用第三方库
const color = new Color(rgbaCss)

!(function ani() {
  color.offsetHSL(0.005, 0, 0)
  // 设置颜色
  gl.clearColor(color.r, color.g, color.b, 1)
  // 刷色
  gl.clear(gl.COLOR_BUFFER_BIT)
  webkitRequestAnimationFrame(ani)
})()

// **********************************
