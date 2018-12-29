// typed arrays - Javascript used not be able to deal with binary data, ES6 has ways of dealing with raw binary data

const buffer = new ArrayBuffer(8)
const view = new Int32Array(buffer)
view[0] = 5
view[1] = 15
view[2] = 30
console.log(view)