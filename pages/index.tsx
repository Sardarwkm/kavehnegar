/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      sd
      <button className='' onClick={() => router.push("/posts")}>
        let's go
      </button>
    </main>
  );
}
