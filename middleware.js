import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // for login requests
  if (req.nextUrl.pathname == "/api/user/login") return;

  // for frontend requests
  const restrictedFrontendPaths = [];
  if (restrictedFrontendPaths.includes(req.nextUrl.pathname))
    validateFrontendRequests(req);

  // for backend requests
  if (req.nextUrl.pathname.startsWith("/api/")) validateBackendRequests();
  // for other requests
  if (req) return;
}

const validateFrontendRequests = () => {};

const validateBackendRequests = async (req) => {
  let token;

  if (
    req.headers.get("Authorization") &&
    req.headers.get("Authorization")?.startsWith("Bearer")
  ) {
    const response = NextResponse.next();
    try {
      token = req.headers.get("Authorization")?.split(" ")[1];
      if (!token || !process.env.JWT_SECRET) return;

      const decoded = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );
      response.headers.set(
        "X-Custom-Data",
        JSON.stringify(decoded.payload.sub)
      );
      return response;
    } catch (error) {
      return NextResponse.json(
        { errorTitle: "Not Authorized", errorDesc: "Session Expired" },
        { status: 401 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Not authorized, no token" },
      { status: 401 }
    );
  }
};

export const config = {
  matcher: ["/:path*"],
};
