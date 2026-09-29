# Background and assumptions

## Why mAh alone is misleading

Milliamp-hours measure charge, not energy. Energy depends on voltage as well, which is why the functions convert everything to watt-hours first. Power bank cells are normally rated at 3.7 V; most phone batteries since around 2017 at 3.85 V. The <a href="https://en.wikipedia.org/wiki/Lithium-ion_battery">lithium-ion battery</a> article covers the chemistry behind these nominal voltages.

## Efficiency

Energy is lost in the power bank's boost converter, the cable and the phone's charging circuit. Over a cable, 80 to 90 percent reaching the phone is typical. Wireless charging through <a href="https://en.wikipedia.org/wiki/Inductive_charging">inductive coupling</a> loses more, and alignment and heat matter a great deal.

## Airline limits

The 100 Wh and 160 Wh thresholds come from the dangerous-goods rules that airlines apply to spare lithium batteries; the <a href="https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/">IATA lithium battery guidance</a> is the usual reference. Individual airlines can be stricter.

## USB-C power

USB-C cables carry 3 A unless they contain an electronic marker that declares 5 A support. Power levels above 100 W use the Extended Power Range at up to 48 V, described in the <a href="https://www.usb.org/usb-charger-pd">USB Power Delivery</a> specification.

## Checking results against real products

The defaults are averages. For real products, use the capacity and output printed on the device. Retailer spec sheets are a quick way to collect those figures; for example, the listing of each <a href="https://cairovolt.com/en/power-banks">power bank</a> on one Egyptian store's page gives capacity and port wattage side by side, which can be fed straight into `phoneCharges` and `airlineCategory`.
