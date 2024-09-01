"use server";

import { TUser } from "@/types/user.type";

export const userRegister = async (formData: TUser) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // If the response status is not in the 200-299 range, throw an error
    const errorData = await res.json();
    throw new Error(JSON.stringify(errorData));
  }

  const userInfo = await res.json();
  return userInfo;
};
