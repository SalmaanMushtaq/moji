import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moji | About",
  description: "A modern shopping app Moji",
};
export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">About</h1>
      <p className="text-center">
        Moji is a modern shopping app built with Next.js, Tailwind CSS, and
        TypeScript.
      </p>
    </div>
  );
}
