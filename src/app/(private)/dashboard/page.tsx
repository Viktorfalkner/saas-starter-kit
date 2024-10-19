import { redirect } from "next/navigation";

import { createClient } from "@/app/utils/supabase/server";
import HabitTracker from "./components/HabitTracker";
import HabitHeader from "./components/HabitHeader";

const completedDays = [
  new Date(2024, 0, 1), // Jan 1, 2024
  new Date(2024, 0, 5), // Jan 5, 2024
  new Date(2024, 1, 15), // Feb 15, 2024
  // Add more dates as needed
];

const stats = {
  streak: 5,
  consistency: 53,
  checkIns: 438,
};

export default async function PrivateDashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="border border-red-400 w-full">
      <HabitHeader />
      <HabitTracker />
      {/* <p>Hello {data.user.email}</p> */}
    </div>
  );
}
