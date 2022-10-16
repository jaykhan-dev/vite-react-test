import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className="flex bg-black text-white py-4 justify-center font-mono uppercase fixed top-0 w-full">
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
