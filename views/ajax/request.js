class Request {
  constructor(method = 'GET', url, data = null, options) {
    this.method = method
    this.url = url
    this.data = this.formData(data)
  }
  formData(data) {
    if (typeof data != 'object' || data == null) data = {}
    let form = new FormData()

    for (const [name, value] of Object.entries(data)) {
      form.append(name, value)
    }
    return form
  }
  static get(url, data) {
    return new Request('GET', url, data).xhr()
  }
  static post(url, data) {
    return new Request('POST', url, data).xhr()
  }
  xhr() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(this.method, this.url)
      xhr.send(this.data)
      debugger
      xhr.onload = function () {
        if (xhr.status == 200) {
          resolve(xhr.response)
        } else {
          reject(`${xhr.status}:${xhr.statusText}`)
        }
      }
      xhr.onerror = function (error) {
        debugger
        reject(error)
      }
    })
  }
}
