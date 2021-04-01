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

// **********************************

// 获取着色器的源码
const vsSource = document.querySelector('#vertexShader').innerHTML
const fsSource = document.querySelector('#fragmentShader').innerHTML

initShaders(gl, vsSource, fsSource)

// 模拟 Css 颜色
const rgbaCss = 'rgba(0, 0, 0)'

// 使用第三方库
const color = new Color(rgbaCss)

const { r, g, b } = color

gl.clearColor(r, g, b, 1)

gl.clear(gl.COLOR_BUFFER_BIT)

gl.drawArrays(gl.POINTS, 0, 1)

// **********************************
