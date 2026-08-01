import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import DashboardPreviewSection from './components/DashboardPreviewSection'
import TeamSection from './components/TeamSection'
import ReportsSection from './components/ReportsSection'
import TechnologiesSection from './components/TechnologiesSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import { features, siteConfig, teamMembers, technologies, workflowSteps } from './data/siteContent'

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 -z-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-10 pt-6 sm:px-10 lg:px-14">
        <NavBar projectName={siteConfig.projectName} />
        <HeroSection config={siteConfig} />
        <AboutSection
          problem={siteConfig.problem}
          solution={siteConfig.solution}
          scope={siteConfig.projectScope}
        />
        <FeaturesSection features={features} />
        <WorkflowSection steps={workflowSteps} />
        <DashboardPreviewSection
          demoVideoUrl={siteConfig.demoVideoUrl}
          demoPreviews={siteConfig.demoPreviews}
        />
        <TeamSection members={teamMembers} />
        <ReportsSection reports={siteConfig.reports} />
        <TechnologiesSection technologies={technologies} />
        <ContactSection
          advisor={siteConfig.advisor}
          teamEmail={siteConfig.teamEmail}
          githubUrl={siteConfig.githubUrl}
        />
      </main>

      <FooterSection config={siteConfig} />
    </div>
  )
}

export default App
