import { Pages } from '../pages'
import AddTask from './add-task'
import DeleteTask from './delete-dialog'
import TaskMenu from './task-menu'

export class Modals {
  constructor(
    private readonly pages: Pages,
    readonly add_task = new AddTask(pages),
    readonly task_menu = new TaskMenu(pages),
    readonly delete_task = new DeleteTask(pages)
  ) {}
}
