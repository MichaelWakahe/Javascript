# Testing React 16 Applications with Jest 26
by Daniel Stern

Isomorphic React website: http://isomorphic-react-x.herokuapp.com

Isomorphic finished application: https://github.com/danielstern/isomorphic-react

Isomorphic finished application together with tests: https://github.com/danielstern/isomorphic-react/tree/jest


## Getting Started
To install the Jest CLI globally, type: `npm install -g jest-cli` \
This will bring the latest CLI which should be compatible with lower versions of Jest. \
You can then type `jest` on the command line.

Install the package list with: `npm install [--legacy-peer-deps]`

Jest test files can have the file extension `.spec.js` or `.test.ts`. This way the tests can be put side-by-side with
the modules they are testing. Alternatively, they can be put in a folder named `__test__` and can be given any name
while in that folder.