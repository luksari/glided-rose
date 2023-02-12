# Glided rose Refactor + UI

## 1. Refactor

I've refactored the existing model by not reading existing code but adding unit tests, as existing code was barely readable. I've written Unit tests for all the business cases which led me to way simpler implementation of Glided Rose class.
After writing unit tests I've refactored the code by creating domain methods for updating sell in and quality properties in readable maneur.

## 2 UI

Not much time left to acomplish this task that is why I've decided to make it as simple as possible but still with proper practices. But definietly have the list of TODO's for the future which you can find below

### 2.1 TODOS UI

1. Fix state management by using API that handles domain glided rose model
2. Accessibility
3. Virtualize list of items so the list is dynamically removed from DOM, it makes the app smoother
4. Consider SSR/SSG
5. Display more details about Glided Rose Item but it is up to domain
6. Add more functionalities e.g adding items to cart, but it is not handled by the domain for now
7. Animations in Framer Motion when the quality/sell-in changes
8. Handle domain states/different items by UI representation. E.g Quality is red when it is below 0, Sell in gets orange if it reaches end for normal items or so
9. Write some tests of user flow

## How to start

```bash
yarn dev
```
