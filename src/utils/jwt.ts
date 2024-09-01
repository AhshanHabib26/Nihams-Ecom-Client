import { jwtDecode, JwtPayload } from "jwt-decode";

export const decodedToken = (token: string) => {
  return jwtDecode(token);
};

export interface CustomJwtPayload extends JwtPayload {
  role?: string; 
}