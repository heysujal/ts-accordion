"use client";
import { ReactNode } from "react";
import BarTitle from "./BarTitle";
import Content from "./Content";

interface BarProps {
  title: string;
  content: string;
  id: string;
  handleToggle: (id: string) => void;
  show: boolean;
}

const Bar = ({ title, content, id, handleToggle, show }: BarProps): ReactNode => {
  return (
    <div>
      <BarTitle handleClick={() => handleToggle(id)} title={title} />
      <Content content={content} show={show} />
    </div>
  );
};

export default Bar;
