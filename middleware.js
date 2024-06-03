import { NextResponse } from "next/server";

// Función para verificar el rol
export function hasRequiredRole(req, role) {
  const token = req.cookies.get("token"); // Obtén el token de la cookie
  console.log(token);
  if (!token) {
    return false;
  }
  const [encodedHeader, encodedPayload, encodedSignature] =
    token?.value.split(".");
  const decodedPayload = atob(encodedPayload);
  const payloadObject = JSON.parse(decodedPayload);
  //console.log(payloadObject);

  const user = payloadObject;
  //console.log(user.role, "HOLAAAAAAAAAAAAAAA");
  // 2. Verifica si el usuario tiene el rol necesario
  return user && user.role === role;
}

export function middleware(req) {
  const url = req.nextUrl.pathname; // Protege las rutas de cliente

  if (url.startsWith("/perfil-cliente") && !hasRequiredRole(req, "cliente")) {
    return NextResponse.redirect(new URL("/", req.url));
  } // Protege las rutas de músico

  if (url.startsWith("/perfil-musico") && !hasRequiredRole(req, "musico")) {
    return NextResponse.redirect(new URL("/", req.url));
  } // Permite otras rutas (como /login, /public, etc.)

  return NextResponse.next();
}

// Configuración del Middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
