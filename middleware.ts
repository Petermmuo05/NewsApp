import { auth } from "./lib/auth";

export default auth(async function middleware(req) {
  console.log("Middleware is running");

  if (!req.auth && req.nextUrl.pathname.startsWith("/admin")) {
    return Response.redirect(new URL("/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/admin", "/admin/:path*"], // Protects all routes under /admin
};
