import { Pages } from '../pages'
import AddTask from './add-task'

export class Modals {
  constructor(
    private readonly pages: Pages,
    readonly add_task = new AddTask(pages)
  ) {}
}
