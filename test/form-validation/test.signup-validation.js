import { assert, expect, should } from 'chai';
import * as validation from '../../src/js/form-validation/signup-validation.js';

// Test email username format
describe('test email username format', () => {
  it('should have only the first letter in uppercase', () => {
    const usernameValidated = validation.checkUsernameFormat();
    expect(usernameValidated)
      .to.be.a('string')
      .that.matches(/[A-Z][a-z]{1}[a-z]/);
  });
});

// Test email arroba symbol
describe('test email arroba symbol', () => {
  it('should have only one arroba symbol', () => {
    const arrobaValidated = validation.checkArrobaSymbol();
    expect(arrobaValidated).to.be.a('number').that.matches(1);
  });
});

// Test email server name
describe('test email server name', () => {
  it('should have between 5 and 10 lowercase letters', () => {
    const serverValidated = validation.checkServerName();
    expect(serverValidated)
      .to.be.a('string')
      .that.matches(/[a-z]{5-10}/);
  });
});

// Test email domain .com
describe('test email domain', () => {
  it('should be .com, .net or .gov', () => {
    const serverValidated = validation.checkServerName();
    expect(serverValidated).to.be.a('string').that.matches('.com');
  });
});

// Test email domain .net
describe('test email domain', () => {
  it('should be .com, .net or .gov', () => {
    const serverValidated = validation.checkServerName();
    expect(serverValidated).to.be.a('string').that.matches('.net');
  });
});

// Test email domain .gov
describe('test email domain', () => {
  it('should be .com, .net or .gov', () => {
    const serverValidated = validation.checkServerName();
    expect(serverValidated).to.be.a('string').that.matches('.gov');
  });
});
