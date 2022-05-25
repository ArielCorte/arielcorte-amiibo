import _products from './products.json'

const TIMEOUT = 100

const Amebo = {
  getProducts: (cb, timeout) =>
    setTimeout(() => cb(_products), timeout || TIMEOUT),
}

export default Amebo
