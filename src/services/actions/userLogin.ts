"use server";

import setAccessToken from "./setAccessToken";


export const userLogin = async (data: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
      // cache: "no-store",
    }
  );
  const userInfo = await res.json();


  if (userInfo.data.accessToken) {
    setAccessToken(userInfo.data.accessToken, {
      redirect: "/dashboard",
    });
  }

  return userInfo;
};
