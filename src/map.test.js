import { map } from "./map.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

const doubleNumber = (num) => {return num*2}

const accessSpell = (obj) => {return obj.incantation}

const spells = [
  {
    "incantation": "Accio",
    "effect": "Summons an object",
    "type": "Charm"
  },
  {
    "incantation": "Aguamenti",
    "effect": "Shoots water from wand",
    "type": "Charm"
  },
  {
    "incantation": "Alohomora",
    "effect": "Opens locked objects",
    "type": "Charm"
  }
];


test('array of positive numbers', () => {
  const result = map([1,2,3], doubleNumber);
  const expectedResult = [2,4,6];

  expect(result).toEqual(expectedResult)
})

test('array of spells', () => {
  const result = map(spells, accessSpell);
  const expectedResult = ['Accio', 'Aguamenti', 'Alohomora'];

  expect(result).toEqual(expectedResult)
})




