let a
let c
const change = (b) => b = 2

a = 1
change(a)
console.log(a)

const changeObj = (d) => {
  d.prop1 = function() {}
  d.prop2 = {}
}

c = {}
c.prop1 = {}
changeObj(c)
console.log(c)
