import JKLogo from '../assets/jk-logo-white.svg'

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="grid place-items-center bg-zinc-800 py-8">
        <img src={JKLogo} width="75px" className="my-8" />
        <h2 className="my-4 text-4xl lg:text-8xl">Jay Khan</h2>
        <h2 className="my-4 tracking-widest">Proof of Work</h2>
        <div className="my-20 items-center space-x-4 text-center text-2xl lg:flex">
          <a href="">
            <p>jaykhan.sound@gmail.com</p>
          </a>
          <p className="rotate-90 lg:rotate-0">|</p>
          <p>613-707-0696</p>
        </div>
        <div className="space-x-4 text-2xl">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>

      <div className="w-full items-center justify-center space-x-4 bg-zinc-900 py-4 text-center lg:flex">
        <h2 className="text-sm font-bold uppercase">
          The Jay Khan Sound 2022 | Made with React.
        </h2>
      </div>
    </footer>
  )
}

export default Footer
