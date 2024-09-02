import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodedToken } from "./utils/jwt";
import { JwtPayload } from "jwt-decode";

// Define a custom type that includes the role
interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public pages (accessible to everyone)
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Get the token from the request cookies
  const token = req.cookies.get("accessToken")?.value;

  // Verify the token and extract the user role
  let userRole = null;
  if (token) {
    try {
      const user = (await decodedToken(token)) as CustomJwtPayload;
      userRole = user.role; // Assuming the role is part of the user object
    } catch (error) {
      // If token verification fails, redirect to login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect /dashboard/admin route for admin-only access
  if (pathname.startsWith("/dashboard/admin")) {
    if (!userRole || userRole !== "admin") {
      // Redirect non-admin users to the home page
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // Allow access for authenticated admin users
  return NextResponse.next();
}

// Define the matcher to apply middleware to the dashboard admin path
export const config = {
  matcher: ["/dashboard/:path*", "/dashboard/admin/:path*"],
};
