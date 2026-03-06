import Navbar from '../navbar/Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Mainlayout