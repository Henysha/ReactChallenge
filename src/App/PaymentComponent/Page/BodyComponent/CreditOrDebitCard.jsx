import React from "react";
import cards from "../../../../../img/cards.png";

const CreditOrDebitCard = ({ cardData, setCardData, errors }) => {
  const onChangeName = (e) => {
    setCardData({
      ...cardData,
      fullName: e.target.value,
    });
  };

  const onChangeCard = (e) => {
    const re = /^[0-9\b\ ]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        cardno: e.target.value,
      });
    }
  };

  const onChangeExp = (e) => {
    const re = /^[0-9\b\/]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        expirydt: e.target.value,
      });
    }
  };

  const onChangeCVC = (e) => {
    if (e.target.value.length > 3) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        cvc: e.target.value,
      });
    }
  };

  const onChangeZip = (e) => {
    if (e.target.value.length > 5) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setCardData({
        ...cardData,
        zip: e.target.value,
      });
    }
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" ") : value;
  };

  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  console.log("errrors", errors);
  return (
    <div
      id="card-js"
      className="payment-modal__inputs payment-modal__inputs--credit-card"
    >
      <div className="payment-modal__inputs__input ">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          style={{
            borderColor:
              errors.showErrors && errors.cardData.cardno ? "red" : "#d1d1d1",
          }}
          type="text"
          placeholder="1574 4567 9022 0010"
          onChange={onChangeCard}
          value={cc_format(cardData.cardno)}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--one-third">
        <label htmlFor="expiration">Expiration date</label>
        <input
          style={{
            borderColor:
              errors.showErrors && errors.cardData.expirydt ? "red" : "#d1d1d1",
          }}
          type="text"
          name="expiry-data"
          placeholder="MM / YY"
          onChange={onChangeExp}
          value={expriy_format(cardData.expirydt)}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--one-sixth">
        <label htmlFor="cardCode">CVC</label>
        <input
          style={{
            borderColor:
              errors.showErrors && errors.cardData.cvc ? "red" : "#d1d1d1",
          }}
          type="text"
          name="cvc"
          placeholder="123"
          onChange={onChangeCVC}
          value={cardData.cvc}
        />
      </div>

      <div className="payment-modal__inputs__input ">
        <label htmlFor="cardholderName">Name on card</label>
        <input
          style={{
            borderColor:
              errors.showErrors && errors.cardData.fullName ? "red" : "#d1d1d1",
          }}
          type="text"
          name="cardholderName"
          placeholder="First name Last name"
          onChange={onChangeName}
          value={cardData.fullName}
        />
      </div>

      <div className="payment-modal__inputs__input ">
        <label htmlFor="cardZip">ZIP code</label>
        <input
          style={{
            borderColor:
              errors.showErrors && errors.cardData.zip ? "red" : "#d1d1d1",
          }}
          type="text"
          name="cardZip"
          placeholder="12345"
          onChange={onChangeZip}
          value={cardData.zip}
        />
      </div>
      <div className="payment-modal__inputs__input payment-modal__inputs__input--fullWidth">
        <div style={{ width: 128, height: 64, overflow: "hidden" }}>
          <img src={cards} />
        </div>
      </div>
    </div>
  );
};

export default CreditOrDebitCard;
