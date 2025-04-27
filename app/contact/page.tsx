import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form className="max-w-md mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-left mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}