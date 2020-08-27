# hellofresh-module

A Javascript (Node) module for interfacing with the HelloFresh API

## Installation

```
npm install --save lipsumar/hellofresh-module
```

## Importing

```
import HelloFreshApi from 'hello-fresh';
```

## Usage

**Initialize**

```js
const hf = new HelloFreshApi({
  bearerToken: "...",
  locale: "fr-BE",
  country: "be",
});
```

**Search**

```js
hf.Recipes.search({ q: "Pizza" }).then((results) => {
  console.log(results); // Returns all recipes matching "Pizza"
});
```

**Recipes**

```js
hf.Recipes.list().then((recipes) => {
  console.log(recipes); // Returns all recipes
});
```
