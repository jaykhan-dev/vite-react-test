import { Outlet, Link } from 'react-router-dom'
import JKLogo from '../assets/jk-logo-white.svg'

const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full justify-center border-b border-white/25 bg-black/50 py-4 uppercase text-white backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={JKLogo} width="40px" />
          </Link>
          <Link to="/projects">
            <p className="hover:text-blue-500">Projects</p>
          </Link>
          <Link to="/music">Music</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
