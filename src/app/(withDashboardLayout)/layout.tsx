"use client";

import DashboardNavbar from "@/shared/dashboard/DashboardNavbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardNavbar>{children}</DashboardNavbar>
    </div>
  );
}
