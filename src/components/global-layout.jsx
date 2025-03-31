import Link from "next/link";
import style from "./global-layout.module.css"

export default function GlobalLayout ({ children }) {

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 REACT BOOKS</Link>
        </header>
      <main className={style.main}>
        { children }
      </main>
      <footer className={style.footer}>제작 @kmk</footer>
    </div>
  );
}