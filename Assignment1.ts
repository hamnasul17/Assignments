#!/usr/bin/env node

// Define the distance in miles
const miles = 130;

// Conversion factor from miles to kilometers
const conversionFactor = 1.60934;

// Calculate the equivalent distance in kilometers
const kilometers = miles * conversionFactor;

// Print the result
console.log(`The distance of ${miles} kilometers is equal to ${kilometers.toFixed(4)} miles.`);