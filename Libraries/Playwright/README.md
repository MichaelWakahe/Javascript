# README

These are examples utilizing [Playwright](https://playwright.dev/).

## Getting Started

Install the VS Code Playwright extension by Microsoft.

## Useful commands

npx playwright test
npx playwright test --ui
npx playwright test --headed
npx playwright test --debug
npx playwright test example.spec.ts --debug

npx playwright test --project webkit
npx playwright test --project webkit --project firefox

npx playwright test landing-page.spec.ts
npx playwright test tests/todo-page/ tests/landing-page/
npx playwright test -g "add a todo item"

npx playwright show-report

npx playwright --version

Generate tests for a website: npx playwright codegen <http://your.website>
