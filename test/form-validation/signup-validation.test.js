import { expect } from 'chai';
import * as validation from '../../src/js/form-validation/validation-helper.js';

// Test isNameLengthValid
describe('Test user name length', () => {
  it('should return true if the username is between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('Bernat');
    expect(usernameValidated).to.equal(true);
  });
  it('should return false if the username is not between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('');
    expect(usernameValidated).to.equal(false);
  });
  it('should return false if the username is not between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('randomTestString');
    expect(usernameValidated).to.equal(false);
  });
});

// Test isEmailIntoData
const testData = [
  {
    user: 'ElBerny',
    name: 'Bernat',
    lastName: 'Smith',
    email: 'bernatmail@email.com',
    password: '1234',
  },
  {
    user: 'ElMikel',
    name: 'Miquel',
    lastName: 'Smith',
    email: 'miquelmail@email.com',
    password: '1234',
  },
];
describe('Test if email is into the users array', () => {
  it('should return true if the email is into the users array', () => {
    const usernameValidated = validation.isEmailIntoData(
      testData,
      'miquelmail@email.com'
    );
    expect(usernameValidated).to.equal(true);
  });
  it('should return false if the email is not into the users array', () => {
    const usernameValidated = validation.isEmailIntoData(
      testData,
      'randomTestString'
    );
    expect(usernameValidated).to.equal(false);
  });
});

// Test isEmailWellFormatted
describe('Test the email format', () => {
  it('should return true if the email is well formatted', () => {
    const usernameValidated = validation.isEmailWellFormatted(
      'miquelmail@email.com'
    );
    expect(usernameValidated).to.equal(true);
  });
  it('should return false if the email is not well formatted', () => {
    const usernameValidated = validation.isEmailWellFormatted(
      'randomTestString.com@email'
    );
    expect(usernameValidated).to.equal(false);
  });
});
