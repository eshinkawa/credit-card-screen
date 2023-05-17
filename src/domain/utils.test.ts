import {
  areAllFieldsValidated,
  isAmexCard,
  isValidCardNumber,
  isValidCvv,
  isValidExpirationDate,
  isValidName,
  isValidZipCode,
  luhnValidation
} from './utils';

describe('utils', () => {
  describe('luhnValidation', () => {
    test('returns true for valid card number', () => {
      expect(luhnValidation('4111111111111111')).toBe(true);
    });

    test('returns false for invalid card number', () => {
      expect(luhnValidation('4111111111111112')).toBe(false);
    });
  });

  describe('isValidCardNumber', () => {
    test('returns true for valid card number', () => {
      expect(isValidCardNumber('4111111111111111')).toBe(true);
    });

    test('returns false for invalid card number', () => {
      expect(isValidCardNumber('4111111111111112')).toBe(false);
    });
  });

  describe('isValidExpirationDate', () => {
    test('returns true for valid expiration date', () => {
      expect(isValidExpirationDate('12/23')).toBe(true);
    });

    test('returns false for invalid expiration date', () => {
      expect(isValidExpirationDate('12/20')).toBe(false);
    });
  })


  describe('isValidCvv', () => {
    test('returns true for valid cvv code', () => {
      expect(isValidCvv('123')).toBe(true);
    });

    test('returns false for invalid cvv code', () => {
      expect(isValidCvv('12')).toBe(false);
    });
  })


  describe('isValidName', () => {
    test('returns true for valid name', () => {
      expect(isValidName('John Doe')).toBe(true);
    });

    test('returns false for invalid name', () => {
      expect(isValidName('John123')).toBe(false);
    });
  })


  describe('isValidZipCode', () => {

    test('returns true for valid zip code', () => {
      expect(isValidZipCode('12345')).toBe(true);
    });

    test('returns false for invalid zip code', () => {
      expect(isValidZipCode('123456')).toBe(false);
    });
  })

  describe('isAmexCard', () => {
    test('returns true for Amex card number', () => {
      expect(isAmexCard('371111111111111')).toBe(true);
    });

    test('returns false for non-Amex card number', () => {
      expect(isAmexCard('4111111111111111')).toBe(false);
    });
  })


  describe('areAllFieldsValidated', () => {
    test('returns true for all valid fields', () => {
      expect(areAllFieldsValidated('4111111111111111', '12/23', '123', 'John', 'Doe', '12345')).toBe(true);
    });

    test('returns false for invalid fields', () => {
      expect(areAllFieldsValidated('4111111111111112', '12/20', '12', 'John123', 'Doe', '123456')).toBe(false);
    });


  })

})
