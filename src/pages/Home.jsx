/* eslint-disable react/jsx-key */
import useFetch from '../components/useFetch'
import Software from '../components/Software'

const Home = () => {
  const [data] = useFetch('https://api.coinlore.net/api/ticker/?id=90')
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="grid w-full place-items-center bg-black text-white">
              <div className="mt-20 flex items-center space-x-4 text-center">
                <h1 className="font-bold uppercase">BTC Price:</h1>
                <p className="font-bold text-blue-500">${item.price_usd}</p>
              </div>
              <div className="grid w-full place-items-center text-center text-white">
                <h1 className="text-center text-5xl lg:w-1/3 lg:text-7xl">
                  I create user interfaces and digital assets.
                </h1>
                <p className="my-8 p-2 text-2xl lg:w-1/3">
                  Web development is a means to share experiences with the
                  world. After many years of learning how to build websites, I
                  have found the form of expression that works for me.
                </p>
              </div>
              <div>
                <Software />
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Home
