class HD {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(executor) {
    this.status = HD.PENDING
    this.value = null
    this.callbacks = []
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value) {
    console.log(this)
    if (this.status == HD.PENDING) {
      this.status = HD.FULFILLED
      this.value = value
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value)
        })
      })
    }
  }
  reject(reason) {
    console.log(this)
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED
      this.value = reason
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(reason)
        })
      })
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled != 'function') {
      onFulfilled = () => this.value
    }
    if (typeof onRejected != 'function') {
      onRejected = () => this.value
    }
    return new HD((resolve, reject) => {
      if (this.status == HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value)
              if (result instanceof HD) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
          onRejected: (value) => {
            try {
              let result = onRejected(value)
              if (result instanceof HD) {
                result.then(resolve, reject)
              } else {
                resolve(result)
              }
            } catch (error) {
              reject(error)
            }
          },
        })
      }
      if (this.status == HD.FULFILLED) {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.value)
            if (result instanceof HD) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.status == HD.REJECTED) {
        setTimeout(() => {
          try {
            let result = onRejected(this.value)
            if (result instanceof HD) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}
