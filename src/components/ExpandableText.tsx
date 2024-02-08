import React, { useState } from "react";
import { ReactNode } from "react";

interface ExpandableTextProps {
  maxChar?: number;
  children: string;
}

function truncateChildren(
  children: string,
  maxChar: number,
  isExtended: boolean
) {
  if (!isExtended) {
    return children.substring(0, maxChar);
  }
}
const ExpandableText = ({ maxChar = 10, children }: ExpandableTextProps) => {
  const [isExtended, setExtended] = useState(false);
  return (
    <>
      <div>
        {isExtended
          ? children
          : truncateChildren(children, maxChar, isExtended) + "..."}
      </div>
      {children.length > maxChar ? (
        <button
          onClick={() => {
            setExtended(!isExtended);
          }}
        >
          {isExtended ? "Less" : "More"}
        </button>
      ) : (
        ""
      )}
      {}
    </>
  );
};

export default ExpandableText;
