// 获取 canvas
const canvas = document.querySelector('#canvas')

// 设置 canvas 大小
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 获取 webgl 的画笔
const gl = canvas.getContext('webgl')

// **********************************

// 模拟 Css 颜色
const rgbaCss = 'rgba(255, 100, 0, 1)'
// 正则匹配括号内容
const reg = RegExp(/\((.*)\)/)
// 获取数据
const rgbaStr = reg.exec(rgbaCss)[1]
// 处理数据
const rgba = rgbaStr.split(',').map(n => parseInt(n))
// 保存颜色 webgl 中的颜色为 0~1
const r = rgba[0] / 255
const g = rgba[1] / 255
const b = rgba[2] / 255
const a = rgba[4]

// **********************************

// 替换为动态颜色
gl.clearColor(r, g, b, a)

// 刷色
gl.clear(gl.COLOR_BUFFER_BIT)
