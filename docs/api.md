# API

All functions are pure and return numbers or short strings.

## wattHours(mAh, volts = 3.7)

Energy stored in a battery: `mAh × volts ÷ 1000`.

```js
chargeMath.wattHours(10000); // 37
```

## phoneCharges(bankMah, phoneMah, options)

Estimated full phone charges from a power bank. Options: `bankVolts` (default 3.7), `phoneVolts` (default 3.85), `efficiency` (default 0.85).

```js
chargeMath.phoneCharges(20000, 5000); // about 3.3
```

## wirelessCharges(bankMah, phoneMah, efficiency = 0.65)

The same estimate for magnetic or pad charging, which loses more energy as heat.

## airlineCategory(mAh, volts = 3.7)

Returns `"cabin"` up to 100 Wh, `"approval"` from 100 to 160 Wh and `"forbidden"` above 160 Wh, following the usual airline limits for spare lithium batteries. Always check your airline's own rules.

## usbCWatts(chargerWatts, cableAmps = 3, volts = 20)

The power a USB-C connection can carry: the lower of the charger rating and cable current × voltage. An unmarked cable is 3 A; an e-marked cable is 5 A.

```js
chargeMath.usbCWatts(100);    // 60, limited by an unmarked cable
chargeMath.usbCWatts(100, 5); // 100
```

## netPercentPerHour(supplyWatts, loadWatts, batteryMah, options)

Battery change per hour for a device in use while charging. Positive means the battery rises. Options: `efficiency` (default 0.85), `volts` (default 3.85).

```js
chargeMath.netPercentPerHour(5, 6.5, 4500);  // about -13, a weak car charger with a hotspot on
chargeMath.netPercentPerHour(20, 6.5, 4500); // about +61
```
