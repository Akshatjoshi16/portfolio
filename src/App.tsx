import { ThemeProvider } from "./context/ThemeContext";
import Background from "./components/Background";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import StatusHUD from "./components/StatusHUD";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AIJourney from "./components/AIJourney";
import Timeline from "./components/Timeline";
import CertificationsAchievements from "./components/CertificationsAchievements";
import GithubStats from "./components/GithubStats";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <Loader />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <StatusHUD />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIJourney />
        <Timeline />
        <CertificationsAchievements />
        <GithubStats />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
