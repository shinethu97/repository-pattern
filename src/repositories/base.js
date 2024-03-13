import { CustomError } from '../util'

class Abstract {
  static throwCustomError(_err, _message, _status, _errors) {
    if (!_status) {
      _status = 500
    }

    if (_err instanceof CustomError) {
      throw _err
    } else {
      throw new CustomError(_message, _status, _errors)
    }
  }
}

export default Abstract
