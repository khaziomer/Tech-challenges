
import "./index.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

