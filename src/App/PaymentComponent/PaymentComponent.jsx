import React, { useState, useEffect } from "react";
import PaymentPage from "./Page/PaymentPage";
import Amount from "./Page/HeaderComponent/Amount";
import MethodOfPayment from "./Page/HeaderComponent/MethodOfPayment";
import Check from "./Page/BodyComponent/Check";
import CreditOrDebitCard from "./Page/BodyComponent/CreditOrDebitCard";
import DateComponent from "./Page/FooterComponent/DateComponent";
import ErrorsForPayment from "./Page/FooterComponent/ErrorsForPayment";
import SubmitFinalPayment from "./Page/FooterComponent/SubmitFinalPayment";

const PaymentComponent  = ({
  totalDue,
  setShowPaymentModal,
  setShowPaymentSuccessModal,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    cardData: {
      fullName: true,
      cardno: true,
      expirydt: true,
      cvc: true,
      zip: true,
    },
  });

  const [bankData, setBankData] = useState({
    accountNumber: "",
    routingNumber: "",
    nameOnAccount: "",
    accountType: "",
    accountNumberConfirm: "",
  });

  const [cardData, setCardData] = useState({
    fullName: "",
    cardno: "",
    expirydt: "",
    cvc: "",
    zip: "",
  });

  const submitPaymentForm = (e) => {
    e.preventDefault();

    if (formSubmitting) {
      console.log("form is already being submitted, preventing double submit");
      return;
    }

    var authData = { paymentApiKey: "TestPaymentKey" };
    var secureData = {};
    secureData.authData = authData;

    setTimeout(() => {
      setShowPaymentModal(false);
      setShowPaymentSuccessModal(true);
      setFormSubmitting(false);
    }, 1000);
  };

  useEffect(() => {
    if (paymentMethod === "bankAccount") {
      setBankData({
        ...bankData,
        nameOnAccount: cardData.fullName,
      });
    }
    if (paymentMethod === "creditCard") {
      setCardData({
        ...cardData,
        fullName: bankData.nameOnAccount,
      });
    }
  }, [paymentMethod]);

  return (
    <div
      className={"payment-modal "}
      onClick={(e) => setShowPaymentModal(false)}
    >
      <div
        className="payment-modal__container center-block"
        onClick={(e) => e.stopPropagation()}
      >
        <PaymentPage submitPaymentForm={submitPaymentForm}>
          {/* ---- Header ----- */}
          <Amount totalDue={totalDue} />
          <MethodOfPayment
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          {/* ---- Body ----- */}
          <div className="form-body">
            {paymentMethod === "creditCard" && (
              <CreditOrDebitCard
                cardData={cardData}
                setCardData={setCardData}
                errors={errors}
              />
            )}
            {paymentMethod === "bankAccount" && (
              <Check
                bankData={bankData}
                setBankData={setBankData}
                errors={errors}
              />
            )}
          </div>
          {/* ---- Footer ----- */}
          <DateComponent totalDue={totalDue} />
          <ErrorsForPayment
            cardData={cardData}
            errors={errors}
            setErrors={setErrors}
          />
          <SubmitFinalPayment
            paymentMethod={paymentMethod}
            errors={errors}
            setErrors={setErrors}
            totalDue={totalDue}
          />
        </PaymentPage>
      </div>
    </div>
  );
};

export default PaymentComponent;
