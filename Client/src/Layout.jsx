import "./index.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar/>
      <main style={{ backgroundColor: 'var(--bg-primary)' }}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}