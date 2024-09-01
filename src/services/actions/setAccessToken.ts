"use server";

import { authKey } from "@/constants/authkey";
import { cookies } from "next/headers";

const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);
};

export default setAccessToken;
