import { logos } from '../constants'
import { FiArrowUpRight } from "react-icons/fi";

const Logoshow = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <div className='grid grid-cols-4 gap-6 mt-20'>
        {
          logos.map((logo, index) => (
            <img height={50} width={155} key={index} src={logo} alt={`Logo ${index + 1}`} />))
        }
      </div>
      
      <div className='flex flex-row justify-center items-center m-8 space-x-12'>
        <button className='flex flex-row gap-3 border border-gray-400 p-3 text-white'>What we do <FiArrowUpRight className='h-6 w-8' /></button>
        <button className='border border-gray-400 p-3 text-white'>Testimonies</button>
      </div>
    </div>
  )
}

export default Logoshow