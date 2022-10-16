/* eslint-disable react/react-in-jsx-scope */
import Loader from '../components/Loader'

const Projects = () => {
  return (
    <div className="grid place-items-center bg-black text-white h-screen">
      <div className="grid place-items-center">
        <Loader />
        <h1 className="lg:text-8xl text-4xl my-4 font-bold font-mono">
          Projects
        </h1>
      </div>
    </div>
  )
}

export default Projects
