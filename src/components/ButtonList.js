import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnList = ["All", "Sitcom", "Live"];
  return (
    <div className="flex">
      {btnList.map((btn, index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
