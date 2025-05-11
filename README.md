# Schedule Channel API Testing

## Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/msuneela/typescript-api-tests.git
```


A text editor or IDE of your choice. Visual Studio Code is a very popular option, but feel free to use a different one.

Installing and running the Project After cloning the repo on your machine, open a terminal, CD into the project's root folder and run below

$ npm install # Installs test dependencies

$ npm run test # Executes the tests defined in feature file

.
├── features/               # Gherkin feature files (scenarios)
├── manual-tests/          # Manual teest added in feature file
├── step-definitions/      # Step implementations for each scenario
├── support/               # Shared utilities (e.g., response context)
├── package.json           # Project configuration and scripts
└── tsconfig.json          # TypeScript configuration
