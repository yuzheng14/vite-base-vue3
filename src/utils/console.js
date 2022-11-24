import reportWebVitals from '../../webVitals'

const runInDev = (func) => {
  if (import.meta.env.MODE === 'development') {
    func instanceof Function && func()
  }
}

export const log = (...args) => {
  runInDev(() => console.log(...args))
}

export const warn = (...args) => {
  runInDev(() => console.warn(...args))
}

export const error = (...args) => {
  runInDev(() => console.error(...args))
}

export const logWebVitals = () => {
  runInDev(() => reportWebVitals(console.log))
}
