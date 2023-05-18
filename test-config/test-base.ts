import { test as base } from '@playwright/test'
import { Steps } from '../ui/steps'
import CommonUtils from '../common-utilities/common-utils'

export const test = base.extend<
  { steps: Steps },
  {
    name: string
  }
>({
  steps: async ({ page }, use) => {
    const steps = new Steps({ page })
    await use(steps)
  },
  name: [
    async ({ browser }, use) => {
      const taskName = CommonUtils.taskName()
      await use(taskName)
    },
    { scope: 'worker', auto: true },
  ],
})
