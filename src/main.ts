import Cookies from "js-cookie"

function sum(a: number, b: number): number {
  const c: number = a + b
  alert(233)
  return c
}

// 会被 tree shaking
function minus(a: number, b: number): number {
  const c: number = a - b
  return c
}

export {
  sum,
  Cookies,
}
