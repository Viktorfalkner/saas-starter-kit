"use client";

import { useState } from "react";

const MENU_ITEMS = [
  { title: "Habits", icon: "", page: "/habits" },
  { title: "Challenges", page: "/challenges" },
  { title: "Leaderboard", page: "/leaders" },
];

function Sidebar() {
  const [selected, setSelected] = useState<string>(""); // State to track selected item
  //   const router = useRouter(); // For route navigation

  const handleClick = (item: { title: string; page: string }) => {
    setSelected(item.title); // Set the selected item
  };

  return (
    <div className="flex flex-col w-[300px] h-screen bg-slate-500">
      {MENU_ITEMS.map((item) => (
        <button
          key={item.title}
          onClick={() => handleClick(item)}
          className={`h-[40px] w-[240px] mx-auto mt-2 rounded-md ${
            selected === item.title
              ? "bg-blue-500 text-white"
              : "bg-gray-400 text-black"
          }`} // Change style if selected
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
