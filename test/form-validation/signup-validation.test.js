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
    const emailValidated = validation.isEmailIntoData(
      testData,
      'miquelmail@email.com'
    );
    expect(emailValidated).to.equal(true);
  });
  it('should return false if the email is not into the users array', () => {
    const emailValidated = validation.isEmailIntoData(
      testData,
      'randomTestString'
    );
    expect(emailValidated).to.equal(false);
  });
});

// Test isEmailWellFormatted
describe('Test the email format', () => {
  it('should return true if the email is well formatted', () => {
    const emailValidated = validation.isEmailWellFormatted(
      'miquelmail@email.com'
    );
    expect(emailValidated).to.equal(true);
  });
  it('should return false if the email is not well formatted', () => {
    const emailValidated = validation.isEmailWellFormatted(
      'randomTestString.com@email'
    );
    expect(emailValidated).to.equal(false);
  });
});

//Test isPasswWellFormatted
describe('Test the password format', () => {
  it('should return true if the password is well formatted', () => {
    const passwValidated = validation.isPasswWellFormatted('A1@alualu');
    expect(passwValidated).to.equal(true);
  });
  it('should return false if the password is not well formatted', () => {
    const passwValidated = validation.isPasswWellFormatted('abc123');
    expect(passwValidated).to.equal(false);
  });
});

//Test verifyPasswordsMatch
describe('Test passwords match', () => {
  it('should return true if both passwords match', () => {
    const userPassws = validation.verifyPasswordsMatch(
      'A1@alualu',
      'A1@alualu'
    );
    expect(userPassws).to.equal(true);
  });
  it("should return false if both passwords don't match", () => {
    const userPassws = validation.verifyPasswordsMatch(
      'A1@alualu',
      'A1@elaela'
    );
    expect(userPassws).to.equal(false);
  });
});
