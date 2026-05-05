// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


// isPhoneNumber false
test('(55)67 not a phone number', () => {
    expect(isPhoneNumber('(55)67')).toBe(false);
});

// isPhoneNumber false
test('(555)667-434 not a phone number', () => {
    expect(isPhoneNumber('(555)667-434')).toBe(false);
});

// isPhoneNumber true
test('(555)667-4345 is a phone number', () => {
    expect(isPhoneNumber('(555)667-4345')).toBe(true);
});

// isPhoneNumber true
test('(858)667-4345 is a phone number', () => {
    expect(isPhoneNumber('(858)667-4345')).toBe(true);
});



// isEmail true
test('janojrengaraj@gmail.com is an email', () => {
  expect(isEmail('janojrengaraj@gmail.com')).toBe(true);
});

// isEmail true
test('apatil@gmail.com is an email', () => {
  expect(isEmail('apatil@gmail.com')).toBe(true);
});

// isEmail false
test('apatil@gmail.comlo is not an email', () => {
  expect(isEmail('apatil@gmail.comlo')).toBe(false);
});

// isEmail false
test('jrengaraj.comlo is not an email', () => {
  expect(isEmail('jrengaraj.comlo')).toBe(false);
});


// isStrongPassword true
test('abc123 is a strong password', () => {
    expect(isStrongPassword('abc123')).toBe(true);
});

// isStrongPassword true
test('Password_123 is a strong password', () => {
    expect(isStrongPassword('Password_123')).toBe(true);
});

// isStrongPassword false
test('1abc123 is not a strong password', () => {
    expect(isStrongPassword('1abc123')).toBe(false);
});

// isStrongPassword false
test('ab!123 is not a strong password', () => {
    expect(isStrongPassword('ab!123')).toBe(false);
});



// isDate true
test('1/2/2026 is a date', () => {
    expect(isDate('1/2/2026')).toBe(true);
});

// isDate true
test('12/25/2026 is a date', () => {
    expect(isDate('12/25/2026')).toBe(true);
});

// isDate false
test('1-2-2026 is not a date', () => {
    expect(isDate('1-2-2026')).toBe(false);
});

// isDate false
test('12/25/26 is not a date', () => {
    expect(isDate('12/25/26')).toBe(false);
});



// isHexColor true
test('#fff is a hex color', () => {
    expect(isHexColor('#fff')).toBe(true);
});

// isHexColor true
test('#123abc is a hex color', () => {
    expect(isHexColor('#123abc')).toBe(true);
});

// isHexColor false
test('#12 is not a hex color', () => {
    expect(isHexColor('#12')).toBe(false);
});

// isHexColor false
test('#12345g is not a hex color', () => {
    expect(isHexColor('#12345g')).toBe(false);
});