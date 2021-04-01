// 获取 canvas
const canvas = document.querySelector('#canvas')

// 设置 canvas 大小
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// 获取 webgl 的画笔
const gl = canvas.getContext('webgl')

// 设置底色
gl.clearColor(0, 0, 0, 1)

// 刷色
gl.clear(gl.COLOR_BUFFER_BIT)
