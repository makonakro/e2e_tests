import {randomBytes} from 'crypto'

export default class CommonUtils {

  static taskName() {
    return `${randomBytes(7).toString('hex')}`
  }
}