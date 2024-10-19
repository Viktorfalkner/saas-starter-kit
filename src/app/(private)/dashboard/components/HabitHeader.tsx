import React from "react";
import { FaPlus } from "react-icons/fa6";

function HabitHeader() {
  return (
    <div className="flex border items-center h-[60px]">
      <span className="text-4xl font-bold">Habits</span>
      <button className="h-[30px] w-[30px] text-3xl font-bold">
        <FaPlus className="ml-2" />
      </button>
    </div>
  );
}

export default HabitHeader;
