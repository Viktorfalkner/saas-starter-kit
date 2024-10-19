import React from "react";
import { CiBellOn } from "react-icons/ci";

const tracker = {
  habit: "Workout 💪",
  goal: "Be healthy & good looking",
  notificationTime: "5pm",
  streak: "53",
  checkIns: "438",
  consistency: "53%",
};

function HabitTracker() {
  return (
    <div className="bg-zinc-300 h-[400px] w-[650px] rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <span className="text-black text-3xl font-bold">
              {tracker.habit}
            </span>
            <button className="ml-3 flex items-center text-black cursor-pointer text-lg">
              <CiBellOn /> {tracker.notificationTime}
            </button>
          </div>
          <span className="text-gray-600 text-lg">{tracker.goal}</span>
        </div>
        <input className="h-[40px] w-[40px] mr-3" type="checkbox" />
      </div>

      <div className="flex justify-between mx-4 mt-10">
        <div className="flex flex-col items-center border">
          <span className="text-black text-3xl font-bold">
            {tracker.streak}
          </span>
          <span className="text-gray-700 text-xl font-bold">Streak</span>
        </div>
        <div className="flex flex-col items-center border">
          <span className="text-black text-3xl font-bold">
            {tracker.consistency}
          </span>
          <span className="text-gray-700 text-xl font-bold">Consistency</span>
        </div>
        <div className="flex flex-col items-center border">
          <span className="text-black text-3xl font-bold">
            {tracker.checkIns}
          </span>
          <span className="text-gray-700 text-xl font-bold">Check-ins</span>
        </div>
      </div>
    </div>
  );
}

export default HabitTracker;
