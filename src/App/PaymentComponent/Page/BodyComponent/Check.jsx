import React, { useState, useEffect } from "react";

const Check = ({ bankData, setBankData }) => {
  const [accountNumberError, setAccountNumberError] = useState(false);
  const onChangeName = (e) => {
    setBankData({
      ...bankData,
      nameOnAccount: e.target.value,
    });
  };

  const onAccountTypeChange = (e) => {
    setBankData({
      ...bankData,
      accountType: e.target.value,
    });
  };

  const handleRoutingNumberChange = (e) => {
    if (e.target.value.length > 9) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setBankData({
        ...bankData,
        routingNumber: e.target.value,
      });
    }
  };

  const handleAccountNumberChange = (e) => {
    if (e.target.value.length > 17) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setBankData({
        ...bankData,
        accountNumber: e.target.value,
      });
    }
  };

  const handleAccountNumberConfirmChange = (e) => {
    if (e.target.value.length > 17) return;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setBankData({
        ...bankData,
        accountNumberConfirm: e.target.value,
      });
    }
  };

  const confirmAccountNumber = () => {
    // check if account number === accountNumberConfirm
    // if not set error to true to visualise error to user
    if (bankData.accountNumberConfirm !== bankData.accountNumber) {
      setAccountNumberError(true);
    } else {
      setAccountNumberError(false);
    }
  };

  useEffect(() => {
    // when account number is updated, clear out the confirm inoput
    setBankData({
      ...bankData,
      accountNumberConfirm: "",
    });
  }, [bankData.accountNumber]);

  return (
    <div className="payment-modal__inputs payment-modal__inputs--bank-account">
      <div className="payment-modal__inputs__input--full-width">
        <label htmlFor="nameOnAccount">Name on Account</label>
        <input
          type="text"
          name="cardholderName"
          placeholder="Name on account"
          className="name"
          onChange={onChangeName}
          value={bankData.nameOnAccount}
        />
      </div>
      <div className="payment-modal__inputs__input">
        <label htmlFor="accountType">Account Type</label>
        <select
          name="accountType"
          onChange={onAccountTypeChange}
          value={bankData.accountType}
        >
          <option value=""></option>
          <option value="checking">Checking</option>
          <option value="businessChecking">Business Checking</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <div className="payment-modal__inputs__input">
        <label htmlFor="routingNumber">Routing Number</label>
        <input
          type="text"
          name="routingNumber"
          id="routingNumber"
          placeholder="123456789"
          onChange={handleRoutingNumberChange}
          value={bankData.routingNumber}
        />
      </div>
      <div className="payment-modal__inputs__input">
        <label htmlFor="accountNumber">Account Number</label>
        <input
          style={{ borderColor: accountNumberError ? "red" : "#d1d1d1" }}
          type="text"
          name="accountNumber"
          id="accountNumber"
          placeholder="12345678900000000"
          onChange={handleAccountNumberChange}
          value={bankData.accountNumber}
        />
      </div>
      <div className="payment-modal__inputs__input">
        <label htmlFor="accountNumberConfirm">Confirm Account Number</label>
        <input
          style={{ borderColor: accountNumberError ? "red" : "#d1d1d1" }}
          type="text"
          name="accountNumberConfirm"
          id="accountNumberConfirm"
          placeholder="12345678900000000"
          onChange={handleAccountNumberConfirmChange}
          onBlur={confirmAccountNumber}
          value={bankData.accountNumberConfirm}
        />{" "}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Check;
