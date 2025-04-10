import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Services from "../Components/Service"
import Founders from "../Components/founders"
import TechSupport from "../Components/tech_support"
import Footer from "../Components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Founders />
      <TechSupport />
      <Footer />
    </main>
  )
}

