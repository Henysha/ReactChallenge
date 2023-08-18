import React from "react";

const PaymentAmount = ({ totalDue }) => {
  return (
    <div
      className={"loose-caps"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
      }}
    >
      <div
        style={{
          color: "grey",
          fontSize: "12px",
        }}
      >
        Payment Amount
      </div>
      <div
        style={{
          fontSize: "22px",
        }}
      >
        {totalDue}
      </div>
    </div>
  );
};

export default PaymentAmount;
