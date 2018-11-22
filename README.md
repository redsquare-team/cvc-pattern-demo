# [CVC (Context View Controller) pattern for ReactJS 16.6+](https://github.com/redsquare-team/cvc-pattern-demo)

CVC (Context View Controller) is an experimental pattern that i've formalized that helps you to create 
extremely reusable and extendible components with latest React version without use any other library. 

In this example i've implemented a modal with CVC pattern for React 16.6 using SMART and DUMB components 
that interacts with each other via new Context API and render props pattern.
It also provides a wrapper method to fully extends this component via Decorator pattern 
(aka High order Component in React) if needed.

These sources also contains an example of how to use Context API to replace Redux in most cases.

DEMO: [https://redsquare-team.github.io/cvc-pattern-demo/build/](https://redsquare-team.github.io/cvc-pattern-demo/build/)

## WHAT YOU SHOULD KNOW BEFORE START :
 
 * ReactJS
 
 * Model View Controller pattern (SUGGESTED)

 * Difference between Normal Components and Stateless components (SUGGESTED)

 * High order Components and Decorator pattern (SUGGESTED)

 * Render Props pattern (SUGGESTED)

 * ReduxJS (SUGGESTED)

## ARCHITECTURE

CVC Architecture is similar to MVC but it uses Context as middleware for controller and the Model is optional since in most of the cases context is quite enough to handle data.

ReactJS implies to avoid inheritance to extend component functionalities and use composition, high order components, render props and other alternative patterns instead.

The CVC pattern combines HoC, Composition and Context (that users render props internally) allowing you to reuse and extends components in a very easy and elegant way

![](https://docs.google.com/drawings/d/e/2PACX-1vSO16_6qKIIv9OhgE3pLUZ7Cxm18w4gksqImch-Q-TsL5p5Nj5d6xVDRVm4Wsie-zmEI9B7Lo_HYH9-/pub?w=1440&h=1080)

All parts of the CVC pattern can be reused, extended or replaced. This allows you for example to replace or exends the "View" part changing its design, but keep untouched the logic (controller) and vice versa.

We will now analyze component by component this pattern:

### CONTEXT

```javascript
// CONTEXT
// This is simply the React API to create a Context
// that we will fill with a SMART state via Controller
var Context = React.createContext();
```





## Context as Redux replacement