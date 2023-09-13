"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import Container from "react-bootstrap/Container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <Container>{children}</Container>
        <AppFooter></AppFooter>
      </body>
    </html>
  );
}
