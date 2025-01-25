import woman from '../assets/woman.png'
import laptop from '../assets/laptop.png'
import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
  return (
    <div className="flex flex-row">

      <div className="relative w-full">
        <img
          src={woman}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col top-2/3 left-12 text-white">
          <h1 className="text-3xl mb-4">It's also about creating the<br /> best work environment.</h1>
          <button className="w-24 h-12 bg-[#3549CB] rounded-lg hover:bg-blue-600">About Us</button>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src={laptop}
          alt="Background"
          className="w-full h-full object-cover"
        />

        <h1 className="absolute inset-0 text-4xl mb-4 top-1/4 left-12 text-white">Sharing knowledge and<br /> growing as a community.</h1>
        <button className='absolute inset-0 flex flex-row w-24 h-10 gap-3 top-1/2 left-2/3 border border-white p-1 text-white'>Careers <FiArrowUpRight className='h-6 w-10' /></button>
      </div>

    </div>
  )
}

export default Service