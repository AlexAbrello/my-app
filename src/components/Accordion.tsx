import React, {useState} from 'react';
import AccordionBody from "./AccordionBody";

type AccordionType = {
  name: string
}

const Accordion = (props: AccordionType) => {

  const [collapsed, setCollapsed] = useState(false)
  const changeHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
      <div>
        <h3 onClick={changeHandler}>{props.name}</h3>
        <AccordionBody collapsed={collapsed}/>
      </div>
  );
};

export default Accordion;