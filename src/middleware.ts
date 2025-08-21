import { NextRequest, NextResponse } from "next/server";

// La función middleware intercepta todas las solicitudes
export function middleware(request: NextRequest) {
  // Comprobamos si la ruta es "/"
  if (request.nextUrl.pathname === "/") {
    // Redireccionamos a "/home"
    return NextResponse.redirect(new URL("/home", request.url));
  } // Si no, continuamos normalmente
  return NextResponse.next();
}

// Configuración para que solo actúe sobre la raíz "/"
export const config = {
  matcher: ["/"],
};
