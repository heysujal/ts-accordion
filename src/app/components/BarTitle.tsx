"use client";
import React, { ReactNode } from "react";

interface BarTitleProps {
  title: string;
  handleClick: () => void;
}

const BarTitle = ({ title, handleClick }: BarTitleProps): ReactNode => {
  return (
    <div className="bartitle" onClick={handleClick}>
      {title}
    </div>
  );
};

export default BarTitle;
