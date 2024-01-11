import { randomBytes } from 'crypto'

export default class CommonUtils {
  static generate_task_name() {
    return `${randomBytes(7).toString('hex')}`
  }
}
