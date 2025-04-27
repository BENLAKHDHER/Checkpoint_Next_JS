import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          I am a passionate developer specializing in web development.
        </p>
      </main>
    </div>
  );
}