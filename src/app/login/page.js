"use client";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const navigateToOne = (e) => {
    router.push("/login/" + e);
  };
  return (
    <>
      <h5>Login Page</h5>
      <button onClick={() => navigateToOne("admin")}>admin register</button>
      <br></br>
      <button onClick={() => navigateToOne("user")}> user register</button>
    </>
  );
}
