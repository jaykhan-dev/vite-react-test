import { data } from "autoprefixer"
import useFetch from "../components/useFetch";

const Home = () => {
  const [data] = useFetch("https://api.coinlore.net/api/ticker/?id=90")
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div className="grid place-items-center h-screen">
              <div className="text-center">
              <h1 className="uppercase font-bold my-4">BTC Price:</h1>
              <p className="lg:text-8xl text-4xl font-bold font-mono text-blue-900">${item.price_usd}</p>
              </div>
            </div>
          )
        })}
    </>
  );
};

export default Home