import { expect } from 'chai';
import * as validation from '../../src/js/form-validation/validation-helper.js';

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

// Test checkUserData
describe('Getting user from data given the email and password', () => {
  it('should return the user object', () => {
    const userValidated = validation.checkUserData(
      'miquelmail@email.com',
      '1234',
      testData
    );
    expect(userValidated).to.equal(testData[1]);
  });
  it('should return undefined', () => {
    const userValidated = validation.checkUserData(
      'miquelmail@email.com',
      '',
      testData
    );
    expect(userValidated).to.equal(undefined);
  });
  it('should return undefined', () => {
    const userValidated = validation.checkUserData('', '1234', testData);
    expect(userValidated).to.equal(undefined);
  });
});
