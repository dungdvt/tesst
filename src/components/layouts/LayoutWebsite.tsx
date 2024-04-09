import { Outlet } from 'react-router-dom'
import Footer from '../footer'
import Header from '../header'

const LayoutWebsite = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutWebsite
