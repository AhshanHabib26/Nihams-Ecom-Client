"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardNavbar from "@/shared/dashboard/DashboardNavbar";
import { isLoggedIn } from "@/services/auth.services";
import Spinner from "@/loader/Spinner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      if (!isLoggedIn()) {
        router.push("/login");
      } else {
        setLoading(false); // Stop loading when the user is logged in
      }
    };

    checkLoginStatus();
  }, [router]);

  if (loading) {
    // Show a loading indicator while checking login status
    return <Spinner />;
  }

  return <DashboardNavbar>{children}</DashboardNavbar>;
};

export default DashboardLayout;
