import React from "react";
import { useRouter } from "next/router";

const LongButton = ({ ...props }) => {
  

 

  return (
    <div className="flex justify-center py-4">
      <div className="bg-red-500 rounded-full text-center cursor-pointer text-white p-4 px-8">
        <a>{props.children}</a>
      </div>
    </div>
  );
};

export default LongButton;
