import { BrowserContext } from "@playwright/test";


export const addCookie = async (
  cookie_name: string,
  cookie_value: string,
  context: BrowserContext,
  domain: string,
 ) => {
  await context.addCookies([
    {
      name: cookie_name,
      value: cookie_value,
      path: '/',
      domain: domain,
    }
  ])
 }

