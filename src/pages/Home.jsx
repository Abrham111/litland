import Header from '../components/Header';
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Header />
      <div className='bg-black text-white h-screen flex items-center justify-center'>
        <div className='flex flex-col'>
          <h1 className='font-manrope text-7xl'>We design<br/> experiences that<br/> move businesses to<br/> the future.</h1>
          <div className='flex flex-row justify-start mt-8 gap-12'>
            <button className='flex flex-row gap-3 border border-gray-400 p-3'>Play showreel <FiArrowUpRight className='h-6 w-6' /></button>
            <button className='border border-gray-400 p-3'>About us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home