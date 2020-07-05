const wrap = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
        console.log(`Reading property "${propKey}"`)
        return target[propKey]
    }
  })
}
const object = { message: 'hello world' }
const wrapped = wrap(object)
console.log(wrapped.message)