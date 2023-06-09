import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/Navbar";
import { UserContextProvider } from "./context/currentUserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PokeFun",
  description: "Pokemon app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <UserContextProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </UserContextProvider>
      </UserProvider>
    </html>
  );
}
