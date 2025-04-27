import Navbar from "../../components/Navbar";

const projects = [
  { id: 1, name: "Project 1", description: "Description of Project 1" },
  { id: 2, name: "Project 2", description: "Description of Project 2" },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">My Projects</h1>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}