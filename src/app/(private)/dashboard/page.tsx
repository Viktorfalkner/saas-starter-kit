import { redirect } from "next/navigation";

import { createClient } from "@/app/utils/supabase/server";

export default async function PrivateDashboard() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="border border-red-400 w-full">
      <p>Hello {data.user.email}</p>
    </div>
  );
}
