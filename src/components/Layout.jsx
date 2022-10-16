import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav className="flex bg-black text-white py-4 justify-center font-mono uppercase fixed top-0 w-full">
        <ul className="flex space-x-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout