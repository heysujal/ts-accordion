import { useState } from "react";
import Bar from "./Bar";

interface accordionEntry {
  id: string;
  title: string;
  content: string;
}

type accordionData = accordionEntry[];

const accordionData: accordionEntry[] = [
  {
    id: "1",
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.",
  },
  {
    id: "2",
    title: "What is a component?",
    content:
      "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.",
  },
  {
    id: "3",
    title: "What is JSX?",
    content:
      "JSX stands for JavaScript XML. It allows us to write HTML in React. JSX makes it easier to write and add HTML in React.",
  },
  {
    id: "4",
    title: "How does useState work?",
    content:
      "The useState hook allows you to add React state to function components. It returns a stateful value and a function to update it.",
  },
];

interface AccordionProps {
  multiOpen: boolean;
}

const Accordion = ({ multiOpen }: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (multiOpen) {
      // if allowed, then just either remove or add to the array of ids
      const isAlreadyOpen = openIds.includes(id);
      let openIdsCopy = [...openIds];
        if (isAlreadyOpen) {
            openIdsCopy = openIdsCopy.filter((x) => x !== id);
            setOpenIds(openIdsCopy);
        } else {
            openIdsCopy = [...openIdsCopy, id];
            setOpenIds(openIdsCopy);
            }
        console.log(openIdsCopy);
    } else {
        // singleOpen mode;
        let finState:string[] = [];
        
        if (openIds.includes(id)) {
            setOpenIds(() => finState);
        } else {
            finState = [id];
            setOpenIds(() => [id]);
        }
        console.log(finState);

    }
  };

  return (
    <div className="accordion">
      {accordionData.map(({ id, title, content }: accordionEntry) =>
         (
          <div className="accordion-bar" key={id}>
            <Bar
              id={id}
              title={title}
              content={content}
              handleToggle={handleToggle}
              show={openIds.includes(id)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Accordion;
