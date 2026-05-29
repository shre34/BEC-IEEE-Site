"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Users, Calendar, Target, Award, ExternalLink, Menu, X } from "lucide-react"
import SocietySelector from "./society-selector"
import VisionMission from "./vision-mission"
import Events from "./events"
import ExecutiveCommittee from "./executive-committee"
import ParticleBackground from "./particle-background"
import Statistics from "./statistics"
import { societiesData } from "../data/societies"
import { affinityData } from "../data/affinity";
import Footer from "../Home/Footer"

export default function SocietyPage({ type = "societies" }) {
  const data = type === "affinities" ? affinityData : societiesData;
  const [selectedSociety, setSelectedSociety] = useState(data[0])
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("vision")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.6])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["vision", "statistics", "events", "committee"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSocietyChange = (societyId) => {
    const society = data.find((s) => s.id === societyId)
    if (society) {
      setSelectedSociety(society)
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "vision", label: "Vision & Mission", icon: <Target className="w-4 h-4" /> },
    { id: "statistics", label: "Statistics", icon: <Award className="w-4 h-4" /> },
    { id: "events", label: "Events", icon: <Calendar className="w-4 h-4" /> },
    { id: "committee", label: "Executive Committee", icon: <Users className="w-4 h-4" /> },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-gray-200">
      <ParticleBackground />

      {/* Hero Section with Animation */}
      <motion.div style={{ opacity: headerOpacity, scale: headerScale }} className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(52,4,91,0.3)] to-black"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center z-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[rgb(52,4,91)] via-[rgb(52,4,91)] to-black opacity-75 blur-xl"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
  {type === "affinities" ? "IEEE Affinity Groups" : "IEEE Societies"}
</h1>
            <p className="relative text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
              Connecting professionals and advancing technology for the benefit of humanity
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="mt-12"
          >
            <button
              onClick={() => scrollToSection("content")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[rgb(52,4,91)] to-purple-700 text-white font-medium hover:from-[rgb(72,14,111)] hover:to-purple-600 transition-all duration-300 shadow-[0_0_15px_rgba(52,4,91,0.5)] hover:shadow-[0_0_25px_rgba(52,4,91,0.7)]"
            >
              Explore Societies
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <button
            onClick={() => scrollToSection("content")}
            className="text-white flex flex-col items-center animate-bounce"
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>

      {/* Sticky Navigation */}
      <div
        className={`sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[rgb(52,4,91)]/50 transition-all duration-300 ${
          scrollY > 100 ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <SocietySelector
  societies={data}
  selectedSociety={selectedSociety.id}
  onSelect={handleSocietyChange}
/>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-md flex items-center gap-1.5 text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[rgb(52,4,91)] to-purple-800 text-white font-medium shadow-[0_0_10px_rgba(52,4,91,0.3)]"
                      : "hover:bg-[rgb(52,4,91)]/20 text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-md flex items-center gap-2 text-sm transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-[rgb(52,4,91)] to-purple-800 text-white font-medium"
                        : "hover:bg-[rgb(52,4,91)]/20 text-gray-300"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div id="content" className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[rgb(52,4,91)] to-black rounded-full shadow-[0_0_15px_rgba(52,4,91,0.5)] flex items-center justify-center overflow-hidden">
              <img
                src={selectedSociety.logo || "/placeholder.svg?height=200&width=200"}
                alt={`${selectedSociety.name} logo`}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedSociety.name}</h2>
              <p className="text-purple-200">{selectedSociety.shortDescription}</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-4xl">{selectedSociety.description}</p>

          {selectedSociety.website && (
            <a
              href={selectedSociety.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300 font-medium group"
            >
              Visit Official Website
              <ExternalLink className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
        </motion.div>

        {/* Vision & Mission Section */}
        <section id="vision" className="mb-24">
          <VisionMission vision={selectedSociety.vision} mission={selectedSociety.mission} />
        </section>

        {/* Statistics Section */}
        <section id="statistics" className="mb-24">
          <Statistics society={selectedSociety} />
        </section>

        {/* Events Section */}
        <section id="events" className="mb-24">
          <Events events={selectedSociety.events} />
        </section>

        {/* Executive Committee Section */}
        <section id="committee" className="mb-16">
          <ExecutiveCommittee committee={selectedSociety.executiveCommittee} />
        </section>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}

