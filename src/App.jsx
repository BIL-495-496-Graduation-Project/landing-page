import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import DashboardPreviewSection from './components/DashboardPreviewSection'
import TeamSection from './components/TeamSection'
import TechnologiesSection from './components/TechnologiesSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-10 pt-6 sm:px-10 lg:px-14">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WorkflowSection />
        <DashboardPreviewSection />
        <TeamSection />
        <TechnologiesSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
