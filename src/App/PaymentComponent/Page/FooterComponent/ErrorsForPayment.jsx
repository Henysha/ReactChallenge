import React, { useEffect } from "react";

const ErrorsForPayment = ({ cardData, errors, setErrors }) => {
  console.log("cardData", cardData);
  useEffect(() => {
    // check cardno for errors
    if (cardData.cardno.length === 20) {
      delete errors.cardData.cardno;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.cardno = true;
      setErrors({
        ...errors,
      });
    }
    // check fullName for errors
    if (cardData.fullName.length > 1) {
      delete errors.cardData.fullName;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.fullName = true;
      setErrors({
        ...errors,
      });
    }
    // check expirydt for errors
    if (cardData.expirydt.length > 1) {
      delete errors.cardData.expirydt;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.expirydt = true;
      setErrors({
        ...errors,
      });
    }
    // check cvc for errors
    if (cardData.cvc.length > 1) {
      delete errors.cardData.cvc;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.cvc = true;
      setErrors({
        ...errors,
      });
    }
    // check cvc for errors
    if (cardData.zip.length > 1) {
      delete errors.cardData.zip;
      setErrors({
        ...errors,
      });
    } else {
      errors.cardData.zip = true;
      setErrors({
        ...errors,
      });
    }
  }, [cardData]);

  return <div className="payment-error"></div>;
};

export default ErrorsForPayment;
