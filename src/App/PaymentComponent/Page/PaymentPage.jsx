import React from "react";

const PaymentPage = ({ children, submitPaymentForm }) => {
  return (
    <>
      <form
        id="paymentForm"
        method="post"
        action="/"
        onSubmit={submitPaymentForm}
      >
        <div className="payment-modal__form">{children}</div>
      </form>
    </>
  );
};

export default PaymentPage;
