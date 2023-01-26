import React, { useState } from "react";
import styled from "styled-components";

const AccordionUI = ({ accordionData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onAccordionToggle = (event) => {
    if (isOpen === event) {
      return setIsOpen(false);
    }
    setIsOpen(event);
  };

  return (
    <div>
      {accordionData.map((accordion, event) => (
        <div>
          {!accordion.disabled ? (
            <AccordionTitle onClick={() => onAccordionToggle(event)}>
              <div>{accordion.title}</div>
              <span
                className={
                  isOpen === event
                    ? "fa-solid fa-chevron-up fa-2xs"
                    : "fa-solid fa-chevron-down fa-2xs"
                }
              ></span>
            </AccordionTitle>
          ) : (
            <AccordionTitleDisabled>{accordion.title}</AccordionTitleDisabled>
          )}
          {isOpen === event && (
            <AccordionDescriptionOpen>
              {accordion.description}
            </AccordionDescriptionOpen>
          )}
        </div>
      ))}
    </div>
  );
};

const AccordionTitle = styled.div`
  font-size: 20px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
  background-color: #8fb593;
  color: #fff;
`;

const AccordionTitleDisabled = styled.div`
  font-size: 20px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 7px;
  margin-bottom: 7px;
  background-color: #d8d8d8;
  color: #fff;
`;

const AccordionDescriptionOpen = styled.div`
  font-size: 12px;
  border: 1px solid #8fb593;
  border-radius: 4px;
  padding: 8px;
  width: 500px;
`;

export default AccordionUI;