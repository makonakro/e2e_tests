import {test as base} from '@playwright/test'
import { Steps } from '../ui/steps'

export const test = base.extend<{steps: Steps}>({

steps: async({page}, use) => {
  const steps = new Steps({page});
  await use(steps)
}
})

