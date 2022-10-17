import Loader from '../components/Loader'

const Projects = () => {
  return (
    <div className="grid h-screen place-items-center bg-black text-white">
      <div className="grid place-items-center">
        <Loader />
        <h1 className="my-4 font-mono text-4xl font-bold lg:text-8xl">
          Projects
        </h1>
      </div>
    </div>
  )
}

export default Projects
