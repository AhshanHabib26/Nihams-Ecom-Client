import { useEffect, useState } from "react";
import { getFromLocalStorage } from "@/utils/local-storage";
import { decodedToken } from "@/utils/jwt";
import { JwtPayload } from "jwt-decode";
import { authKey } from "@/constants/authkey";

interface UserInfo extends JwtPayload {
  userId: string;
  email?: string;
  role: string;
  userName?: string;
}

const useUserInfo = (): UserInfo | null => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    const fetchUserInfo = () => {
      const authToken = getFromLocalStorage(authKey);
      if (authToken) {
        const decodedData = decodedToken(authToken) as UserInfo;
        setUserInfo({
          ...decodedData,
          userId: decodedData.userId, // Make sure userId is captured
          role: decodedData.role?.toLowerCase() || "",
        });
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []);

  return userInfo;
};

export default useUserInfo;
