import React from "react";
import CreditIcon from "../../../../../img/credit-card.svg";
import BankIcon from "../../../../../img/bank.svg";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  const handlePaymentMethodChange = (method) => setPaymentMethod(method);
  const methodSelectStyle = {
    border: "solid 1px #d1d1d1",
    borderRadius: "6px",
    height: "50px",
    width: "210px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div
      style={{
        position: "relative",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
      }}
      className="payment-modal__payment-method"
    >
      <div
        style={{
          position: "absolute",
          height: "5px",
          width: "210px",
          backgroundColor: "#1890ff",
          top: "-2px",
          left: paymentMethod === "creditCard" ? "0px" : "248px",
          transition: ".5s, transform 1s",
        }}
      />
      <div
        style={{
          width: "210px",
        }}
      >
        <div
          style={methodSelectStyle}
          id="creditCard"
          onClick={() => handlePaymentMethodChange("creditCard")}
        >
          <img src={CreditIcon} alt="Credit Icon" />
        </div>
        <div style={{ marginTop: "5px" }}>Credit Card</div>
      </div>
      <div
        style={{
          width: "210px",
        }}
      >
        <div
          style={methodSelectStyle}
          id="bankAccount"
          onClick={() => handlePaymentMethodChange("bankAccount")}
        >
          <img src={BankIcon} alt="Bank Icon" />
        </div>
        <div style={{ marginTop: "5px" }}>Bank Account</div>
      </div>
    </div>
  );
};

export default PaymentMethod;
