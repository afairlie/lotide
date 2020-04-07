# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @a_fairlie/lotide`

**Require it:**

`const _ = require('@a_fairlie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

✔️ assertArraysEqual (arr1, arr2) | console.log assertion that two arrays are deep equals.

✔️ assertEqual (actual, expected) | console.log assertion that two arrays are deep equals.

✔️ assertObjectsEqual (obj1, obj2) | console.log assertion that key-value pairs in an object are deep equals

✔️ countLetters (string) | count the number of times each letter of a string occurs

✔️ countOnly (array, obj{key: true, key: true, etc.}) | receive an array and an object. It will return an object containing counts of everything that the input object listed.

✔️ eqArrays (arr1, arr2) | check that two arrays are deep equals. return true/false

✔️ eqObjects (obj1, obj2) | check that key-value pairs in an object are deep equals. return true/false

✔️ findKey (object, callback) | scan an object and return the first key for which the provided callback returns a truthy value. If no key is found, then it should return undefined.

✔️ findKeyByValue (object, value) | can the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

✔️ head (array) | return the first item of an array

✔️ letterPositions (string) | return all the indices (zero-based positions) in the string where each character is found.

✔️ map (array, callback) | return new array mutated by callback function

✔️ middle (array) | take in an array and return the middle-most element(s) of the given array.

✔️ tail (array) | take in an array and return exluding first value

✔️ takeUntil (array, callback) | receive array and return copy of array based on callback

✔️ without (array, callback) | return a subset of a given array, removing unwanted elements.
