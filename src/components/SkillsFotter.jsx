import Image from "next/image";
import React from "react";

const SkillsFooter = ({ items }) => {
  return (
    <>
      {items &&
        items.map((val, indx) => {
          return (
            <div className="p-4" key={indx}>
              <Image
                src={val?.img}
                alt={val?.alt}
                className="rounded-full w-auto max-h-20"
              />
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
