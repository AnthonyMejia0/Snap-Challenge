import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/solid";

function CompanyDropDown({ isMobile = false }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDisplayed(!isDisplayed)}
        className="flex items-center medium-gray hover:font-bold w-28"
      >
        <p className="cursor-pointer">Company</p>
        {!isDisplayed ? (
          <ChevronDownIcon className="h-5 w-5" />
        ) : (
          <ChevronUpIcon className="h-5 w-5" />
        )}
      </button>
      {isDisplayed ? <Menu isMobile={isMobile} /> : null}
    </div>
  );
}

const Menu = ({ isMobile = false }) => {
  return (
    <div
      className={`${
        !isMobile ? "absolute shadow-xl" : ""
      } w-36 bg-white bottom-[-11rem] left-0 p-6 rounded-xl text-[#696969]`}
    >
      <ul className="flex flex-col space-y-3 w-full">
        <li className="feature-item">
          <p>History</p>
        </li>
        <li className="feature-item">
          <p>Our Team</p>
        </li>
        <li className="feature-item">
          <p>Blog</p>
        </li>
      </ul>
    </div>
  );
};

export default CompanyDropDown;
