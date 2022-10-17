import TailwindLogo from '../assets/tailwind-logo.png'

const Software = () => {
  return (
    <div className="my-20">
      <h2 className="my-8 text-sm uppercase tracking-widest text-gray-500">
        preferred tech stack for web development
      </h2>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-md border border-white/25 p-4">
          <i className="fa-brands fa-react text-7xl"></i>
          <p>React JS</p>
        </div>

        <div className="rounded-md border border-white/25 p-4">
          <i className="fa-brands fa-apple text-7xl"></i>
          <p>macOS</p>
        </div>

        <div className="rounded-md border border-white/25 p-4">
          <i className="fa-brands fa-bitcoin text-7xl"></i>
          <p>Bitcoin</p>
        </div>

        <div className="grid place-items-center rounded-md border border-white/25 p-4">
          <img src={TailwindLogo} width="70px" />
          <p>Tailwind CSS</p>
        </div>

        <div className="rounded-md border border-white/25 p-4">
          <i className="fa-brands fa-figma text-7xl"></i>
          <p>Figma</p>
        </div>
      </div>
    </div>
  )
}

export default Software
