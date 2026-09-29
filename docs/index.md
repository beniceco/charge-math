# charge-math

A small JavaScript file with the arithmetic behind everyday charging questions: how many phone charges a power bank gives, whether it can go in hand luggage, what a USB-C cable really limits a charger to, and whether a phone gains or loses charge while navigating on a car charger.

It has no dependencies and works in the browser or in Node.js.

## Install

Copy `charge-math.js` into your project, or load it directly in a page:

```html
<script src="charge-math.js"></script>
<script>
console.log(chargeMath.phoneCharges(10000, 4500).toFixed(1)); // about 1.8
</script>
```

In Node.js:

```js
const chargeMath = require("./charge-math.js");
chargeMath.airlineCategory(26800, 3.85); // "approval"
```

## What it is for

The numbers printed on chargers and power banks are measured in different units and at different voltages, so comparing them by eye usually gives the wrong answer. These functions do the conversion consistently and document every assumption, so the result can be checked by hand.

## Licence

MIT. See `LICENSE` in the repository. Corrections and additions are welcome as issues or pull requests.
