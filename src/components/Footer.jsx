const Footer = () => {
  return (
    <footer className="w-full border-t border-white/25 bg-black p-4 py-4 text-white">
      <div className="w-full items-center justify-center space-x-4 text-center lg:flex">
        <h1 className="text-sm font-bold uppercase">
          Made with React, GSAP, ThreeJS, SupaBase.
        </h1>
        <div className="space-x-4 text-2xl">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
