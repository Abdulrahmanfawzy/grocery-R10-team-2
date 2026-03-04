import Navbar from '../navbar/Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Mainlayout