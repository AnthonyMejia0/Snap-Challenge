import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronUpIcon } from "@heroicons/react/solid";

import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

function FeaturesDropDown({ isMobile = false }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDisplayed(!isDisplayed)}
        className="flex items-center medium-gray hover:font-bold w-28"
      >
        <p className="cursor-pointer">Features</p>
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
      } w-44 bg-white bottom-[-13.5rem] right-0 p-6 rounded-xl text-[#696969]`}
    >
      <ul className="flex flex-col space-y-3 w-full">
        <li className="feature-item">
          <img className="w-4 h-4" src={todo} alt="Todo Icon" />
          <p>To Do List</p>
        </li>
        <li className="feature-item">
          <img className="w-4 h-4" src={calendar} alt="Todo Icon" />
          <p>Calendar</p>
        </li>
        <li className="feature-item">
          <img className="w-4 h-4" src={reminder} alt="Todo Icon" />
          <p>Reminders</p>
        </li>
        <li className="feature-item">
          <img className="w-4 h-4" src={planning} alt="Todo Icon" />
          <p>Planning</p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesDropDown;
