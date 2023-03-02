## vCita_test_task
Project was created as a test for vacation on position QA automation

## INFO
Project currently supports Chrome and Firefox browsers for running tests

## Setup
There is a prereqs for running the e2e tests locally:
 - Make sure Node.js 14 and above is installed
 - Chrome or FireFox browser should be installed

## Installing the project
Clone repo
```bash
git clone https://github.com/OlekLiakh/vCita_test_task
```
Open folder vCita_test_task
```bash
cd vCita_test_task
```
You will need to call command to install the project before first run
```bash
npm install
```
# Running the project
### With script using
Command for running the project with Chrome:
```bash
npm run testWithChrome
```
with Firefox:
```bash
npm run testWithFirefox
```
### Standard way
```bash
npx nightwatch tests/testSuit/TC_003.js --env chrome
```