/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`text-center min-h-screen items-center justify-between p-24`}>
      <h1>Welcome</h1>
      <p>
        This is supposed to be where you see the website, like it and register,
        then you login, and see it's just like any other social app, nothing
        special, yeap
      </p>
      <button
        className='rounded mt-5 w-32 h-8 bg-slate-400 text-white'
        onClick={() => router.push("/posts")}>
        so let's go
      </button>
    </main>
  );
}
