"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const navigate = useRouter();
  const navigateToOne = (e) => {
    navigate.push(e);
  };
  const navigateToTwo = () => {
    navigate.push("/login");
  };

  return (
    <>
      <h1>Routing in Next js</h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/register">register</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
      <button onClick={() => navigateToOne("/register")}>
        Click to register
      </button>
      <br />
      <br />
      <button onClick={navigateToTwo}>Click to login</button>
    </>
  );
}
