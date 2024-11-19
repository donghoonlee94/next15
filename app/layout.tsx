import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

// Reqeust Memoization
async function Footer() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
      { cache: "force-cache" }
    );

    if (!response.ok) return <footer>@summberhoony</footer>;

    const books: BookData[] = await response.json();
    const bookCount = books.length;

    return (
      <footer>
        <div>@summberhoony</div>
        <div>{bookCount}개의 도서가 등록되어 있습니다</div>
      </footer>
    );
  } catch {
    return <div>Footer 로딩 중 오류가 발생하였습니다.</div>;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
