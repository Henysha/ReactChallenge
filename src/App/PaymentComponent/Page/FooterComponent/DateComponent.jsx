import React from "react";

const DateComponent = ({ totalDue }) => {
  const monthNumToText = (mm) => {
    const monthMap = {
      1: "January",
      2: "Feburary",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    return monthMap[mm];
  };
  function getPrettyDate(date) {
    const month = monthNumToText(date.getMonth() + 1);
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  const today = new Date();

  const prettyDate = getPrettyDate(today, "mm/dd/yyyy");

  return (
    <div
      style={{
        textAlign: "left",
        fontSize: "12px",
        color: "#7d7d7d",
      }}
    >
      By selecting Pay, I authorize Overture Law, P.C. to charge {totalDue} to
      my card on {prettyDate}.
    </div>
  );
};

export default DateComponent;
