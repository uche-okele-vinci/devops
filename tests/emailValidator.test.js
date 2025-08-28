const emailValidator = require('../src/emailValidator');

describe('Email Validator', () => {
  test('Valid email passes', () => {
    expect(emailValidator('user@example.com')).toBe(true);
  });

  test('Missing @ fails', () => {
    expect(emailValidator('userexample.com')).toBe(false);
  });

  test('No text before @ fails', () => {
    expect(emailValidator('@example.com')).toBe(false);
  });

  test('No text after @ fails', () => {
    expect(emailValidator('user@')).toBe(false);
  });

  test('No dot in domain fails', () => {
    expect(emailValidator('user@examplecom')).toBe(false);
  });

  test('Dot at end of domain fails', () => {
    expect(emailValidator('user@example.')).toBe(false);
  });

  test('Email with space fails', () => {
    expect(emailValidator('user@ example.com')).toBe(false);
  });
});
