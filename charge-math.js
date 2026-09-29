// charge-math: small, dependency-free estimates for portable charging.
// MIT licence. All results are estimates; see the documentation for assumptions.

// Energy in watt-hours from a capacity in mAh and a nominal cell voltage.
function wattHours(mAh, volts = 3.7) {
return (mAh * volts) / 1000;
}

// Full phone charges from a power bank.
// bankMah at bankVolts (usually 3.7 V), phoneMah at phoneVolts (usually 3.85 V),
// efficiency is the share of stored energy that reaches the phone (0.8 to 0.9 over a cable).
function phoneCharges(bankMah, phoneMah, options = {}) {
const { bankVolts = 3.7, phoneVolts = 3.85, efficiency = 0.85 } = options;
return (wattHours(bankMah, bankVolts) * efficiency) / wattHours(phoneMah, phoneVolts);
}

// Same estimate for wireless charging, where efficiency is typically 0.55 to 0.72.
function wirelessCharges(bankMah, phoneMah, efficiency = 0.65) {
return phoneCharges(bankMah, phoneMah, { efficiency });
}

// Airline category for a spare lithium battery by watt-hours.
// Returns "cabin" (up to 100 Wh), "approval" (100 to 160 Wh) or "forbidden" (above 160 Wh).
function airlineCategory(mAh, volts = 3.7) {
const wh = wattHours(mAh, volts);
if (wh <= 100) return "cabin";
if (wh <= 160) return "approval";
return "forbidden";
}

// Watts a USB-C link can actually deliver: the lower of charger and cable ratings.
// cableAmps is 3 for an unmarked cable, 5 for an e-marked one; voltage is 20 V for SPR, 48 V for EPR.
function usbCWatts(chargerWatts, cableAmps = 3, volts = 20) {
return Math.min(chargerWatts, cableAmps * volts);
}

// Net battery change per hour, in percent, for a device drawing loadWatts
// while connected to a supply delivering supplyWatts at the given efficiency.
function netPercentPerHour(supplyWatts, loadWatts, batteryMah, options = {}) {
const { efficiency = 0.85, volts = 3.85 } = options;
return ((supplyWatts * efficiency - loadWatts) / wattHours(batteryMah, volts)) * 100;
}

const chargeMath = { wattHours, phoneCharges, wirelessCharges, airlineCategory, usbCWatts, netPercentPerHour };

if (typeof module !== "undefined" && module.exports) {
module.exports = chargeMath;
} else if (typeof window !== "undefined") {
window.chargeMath = chargeMath;
}
