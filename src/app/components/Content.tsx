import { ReactNode } from "react";

interface ContentProps {
  content: string;
  show: boolean
}

const Content = ({ content, show }: ContentProps): ReactNode => {
  return show && <div className="accordion-bar-content">{content}</div>;
};

export default Content;
