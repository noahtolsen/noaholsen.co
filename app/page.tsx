import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsDashboard from "@/components/StatsDashboard";
import ProjectsGrid from "@/components/ProjectsGrid";
import DogLog from "@/components/DogLog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsDashboard />
      <ProjectsGrid />
      <DogLog />
      <Footer />
    </main>
  );
}
