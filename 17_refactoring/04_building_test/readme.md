# THE VALUE OF SELF-TESTING CODE

Make sure all tests are fully automatic and that they check their own results.

A suite of tests is a powerful bug detector that decapitates the time it takes to find bugs.

## Example

```
npm install
cd ./example
npm test
```

## Tips

- Always make sure a test will fail when it should.

- Run tests frequently. Run those exercising the code you’re working on at least every few minutes; run all tests at least daily.

- Think of the boundary conditions under which things might go wrong and
  concentrate your tests there.

- Don’t let the fear that testing can’t catch all bugs stop you from writing tests
  that catch most bugs.

- When you get a bug report, start by writing a unit test that exposes the bug.
