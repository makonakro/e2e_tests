import { Pages } from "../pages"
import AddTask from "./add-task";


export class Modals {
  constructor (
    private readonly pages: Pages,
    readonly addTask = new AddTask(pages)
  ) {}
}