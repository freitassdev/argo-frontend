import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { EUserAccessNivel } from "./types";

const publicPages = ["/", "/assets/*", "/product/*"];
const authPages = ["/login", "/cadastro"];
const workerPages = ['/restrict/worker/*', '/restrict/worker'];
const adminPages = ['/restrict/admin/*', '/restrict/admin'];

const testPagesRegex = (pages: string[], pathname: string) => {
    const escapeRegex = (str: string) =>
        str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const pagePattern = pages
        .map((page) => {
            if (page.endsWith("/*")) {
                return `${escapeRegex(page.slice(0, -2))}(?:/.*)?`;
            }
            return escapeRegex(page);
        })
        .join("|");

    const regex = `^(?:${pagePattern})(?:/|\\?|#|$)`;
    if (!pathname.endsWith("/")) {
        pathname += "/";
    }
    return new RegExp(regex, "i").test(pathname);
};

export async function middleware(req: NextRequest) {
    const { pathname, origin } = req.nextUrl;
    const isPublicPage = testPagesRegex(publicPages, pathname);
    const isAuthPage = testPagesRegex(authPages, pathname);
    const isAdminPage = testPagesRegex(adminPages, pathname);
    const isWorkerPage = testPagesRegex(workerPages, pathname);
    const token = req.cookies.get("userAccessNivel")?.value.trim();
    if (token) {
        if (isAuthPage) {
            const url = new URL("/", origin);
            return NextResponse.redirect(url);
        }
        if(isWorkerPage && parseInt(token) === EUserAccessNivel.USER) { //desse jeito, apenas os funcionarios e admins podem acessar essas paginas
            const url = new URL("/", origin);
            return NextResponse.redirect(url);
        }

        if(isAdminPage && parseInt(token) !== EUserAccessNivel.ADMIN) {
            const url = new URL("/", origin);
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } else {
        if (isPublicPage || isAuthPage) {
            return NextResponse.next();
        }

        const url = new URL(`/`, origin);
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|search.json).*)"],
};