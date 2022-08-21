# Refactoring

by Martin Fowler

## Rule #1.

> When you have to add a feature to a program but the code is not structured in
> a convenient way, first refactor the program to make it easy to add the feature, then
> add the feature.

## Rule #2.

> Before you start refactoring, make sure you have a solid suite of tests. These
> tests must be selfchecking.

## Rule #3.

> Refactoring changes the programs in small steps, so if you make a mistake, it
> is easy to find where the bug is.

## Rule #4.

> Any fool can write code that a computer can understand. Good programmers
> write code that humans can understand.

## Rule #5.

> When programming, follow the camping rule: Always leave the code base
> healthier than when you found it.

## Rule #6.

> The true test of good code is how easy it is to change it.

<br/>

# DEFINING REFACTORING

> Refactoring (noun): a change made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior.

> If someone says their code was broken for a couple of days while they are
> refactoring, you can be pretty sure they were not refactoring.

# Why we should Refactoring?

1. Refactoring Improves the Design of Software

2. Refactoring Helps Me Find Bugs

3. Refactoring Helps Me Program Faster

# When should we refactor?

> The Rule of Three

> The first time you do something, you just do it.
> The second time you do something similar, you wince at the
> duplication, but you do the duplicate thing anyway. The third time you do
> something similar, you refactor.

> You have to refactor when you run into ugly code—but excellent code needs plenty of refactoring too.

# PROBLEMS WITH REFACTORING ??

> The whole purpose of refactoring is to make us program faster, producing more value with less effort.

The most dangerous way that people get trapped is when they try to justify refactoring in terms of “clean code,” “good engineering practice,” or similar moral reasons.

The point of refactoring isn’t to show how sparkly a code base is—it is purely economic. We refactor because it makes us faster—faster to add features, faster to fix bugs.

#

> When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous.

> Make sure all tests are fully automatic and that they check their own results.

> A suite of tests is a powerful bug detector that decapitates the time it takes to
> find bugs.

> Always make sure a test will fail when it should.

> Run tests frequently. Run those exercising the code you’re working on at least
> every few minutes; run all tests at least daily.

> It is better to write and run incomplete tests than not to run complete tests.

> Think of the boundary conditions under which things might go wrong and
> concentrate your tests there.

> Don’t let the fear that testing can’t catch all bugs stop you from writing tests
> that catch most bugs.

> When you get a bug report, start by writing a unit test that exposes the bug.
