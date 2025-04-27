import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <p className="text-lg text-gray-600 mt-4">
          Hi, I'm BEN LAKHDHER MALEK. I specialize in AUTOMATION AND COMPUTER SCIENCE.
        </p>
      </main>
    </div>
  );
}