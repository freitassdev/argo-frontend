import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme.provider";
import { Toaster } from "@/components/ui/sonner";
import { UserStoreProvider } from "@/providers/stores/user-store.provider";
import { CartStoreProvider } from "@/providers/stores/cart-store.provider";

export const metadata: Metadata = {
  title: "Óticas Argo",
  description: "Loja  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`bg-background overflow-x-hidden antialiased max-sm:mx-3 sm:mx-3 md:w-[600px] lg:w-[800px] xl:w-[1100px] 2xl:x md:mx-auto`}
      >

        <UserStoreProvider>
          <CartStoreProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
              {children}
            </ThemeProvider>
            <Toaster position="top-center" />
          </CartStoreProvider>
        </UserStoreProvider>
      </body>
    </html>
  );
}
