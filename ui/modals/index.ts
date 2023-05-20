import { Pages } from '../pages'
import AddTask from './add-task-modal'
import AddDate from './date-modal'

export class Modals {
  constructor(
    private readonly pages: Pages,
    readonly add_task = new AddTask(pages),
    readonly add_date = new AddDate(pages)
  ) {}
}
