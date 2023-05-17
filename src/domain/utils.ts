export const luhnValidation = (value: string): boolean => {
  let sum = 0;
  let isAlternate = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i), 10);

    if (isAlternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isAlternate = !isAlternate;
  }

  return sum % 10 === 0;
};

// Validation logic for each field

export const isValidCardNumber = (cardNumber: string): boolean => {
  const cardNumberRegex: RegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13})$/;
  return !(!cardNumberRegex.test(cardNumber) || !luhnValidation(cardNumber));
}

export const isValidExpirationDate = (expirationDate: string): boolean => {
  const currentDate = new Date();
  const [expirationMonth, expirationYear] = expirationDate.split('/');
  const cardExpirationDate = new Date(
    parseInt('20' + expirationYear, 10),
    parseInt(expirationMonth, 10) - 1
  );
  return (
    expirationDate.length === 5 &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate) &&
    cardExpirationDate >= currentDate
  );
}

export const isValidCvv = (cvv: string): boolean => {
  const cvvRegex: RegExp = /^(?:[0-9]{3}|[0-9]{4})$/;
  return cvvRegex.test(cvv);
}

export const isValidName = (name: string): boolean => {
  const nameRegex: RegExp = /^[a-zA-Z ]{1,255}$/;
  return !(!nameRegex.test(name));
}

export const isValidZipCode = (zipCode: string): boolean => {
  const zipCodeRegex: RegExp = /^\d{5}$/;
  return zipCodeRegex.test(zipCode);
}

export const isAmexCard = (cardNumber: string): boolean => {
  return cardNumber.startsWith('34') || cardNumber.startsWith('37');
};

export const areAllFieldsValidated = (cardNum: string, expDate: string, cvvCode: string, first: string, last: string, zip: string): boolean =>
  isValidCardNumber(cardNum) && isValidExpirationDate(expDate) && isValidCvv(cvvCode) && isValidName(first) && isValidName(last) && isValidZipCode(zip)



