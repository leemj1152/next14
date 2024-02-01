"use client";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
