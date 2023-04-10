import React from 'react';

type AccordionBodyType = {
  collapsed: boolean
}
const AccordionBody = (props: AccordionBodyType) => {

  const accordionStyle = {
    display: props.collapsed ? 'block' : 'none'
  }

  return (
      <div>
        <ul style={accordionStyle}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
  );
};

export default AccordionBody;