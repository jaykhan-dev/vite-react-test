import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 flex w-full justify-center border-b border-white/50 bg-black py-4 font-mono uppercase text-white">
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/music">Music</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
