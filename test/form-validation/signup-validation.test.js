import { assert, expect, should } from 'chai';
import * as validation from '../../src/js/form-validation/signup-validation.js';

// Test email username format
describe('test user name length', () => {
  it('should return true if the username is between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('Bernat');
    expect(usernameValidated).to.be.a('boolean').that.matches(true);
  });
  it('should return true if the username is not between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('');
    expect(usernameValidated).to.be.a('boolean').that.matches(false);
  });
  it('should return true if the username is not between 1 and 10 characters', () => {
    const usernameValidated = validation.isNameLengthValid('Bernatblablabla');
    expect(usernameValidated).to.be.a('boolean').that.matches(false);
  });
});
