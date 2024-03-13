/** Custom Error */
class CustomError {
  constructor(_message, _status, _error) {
    this.name = 'Custom Error'
    this.message = _message
    this.status = _status
    this.error = _error
  }
}

export { CustomError }
