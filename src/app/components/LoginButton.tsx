"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { createClient } from "../utils/supabase/client";

function LoginButton() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  const handleLogout = async () => {
    console.log("Attempting to log out user");

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("Error Logging User out", error);
    } else {
      console.log("User Logged out");
    }
  };

  useLayoutEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null); // Update user state based on session
    });

    return () => {
      subscription?.unsubscribe(); // Clean up the subscription on unmount
    };
  }, [supabase]); // Only depend on supabase

  return (
    //  {/* Login Button */}
    <div className="flex justify-end lg:flex-1">
      {user ? (
        <button
          onClick={handleLogout}
          className="py-2 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors"
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="py-2 px-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition-colors">
            Login
          </button>
        </Link>
      )}
    </div>
  );
}

export default LoginButton;
