# E2E tests
There is an example of E2E tests for [todoist.com](https://todoist.com) and API tests for [jsonplaceholder](https://jsonplaceholder.typicode.com).

## Structure of the tests
```
└── helpers                         # Helpers methods for tests
├── test-config                          
    └── test-base.ts                # Fixture which extends default Playwright test fixture
├── tests                           # Specs with tests                
├── ui                              # Pages, modals and elements for tests
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── env.example                     # Example of variables
├── package-lock.json
├── package.json                    
├── playwright.config.ts            # Playwright config
├── README.md
└── tsconfig.json
```

## How to run
Example of variables look in env.example

- Clone the repo
- Run ```npm i```
- Run ```npm run test```

