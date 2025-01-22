import handspread from '../assets/handspread.png'
import handp from '../assets/handpoint.png'
import couple from '../assets/couple.png'

const Showaca = () => {
  return (
    <>
      <div className='flex flex-row justify-between bg-black'>
        <img className='pl-2' src={handspread} height={311} width={304} alt="Hand down" />

        <div className='relative inline-block'>
          <img className='pr-2' src={couple} alt="Couple Image" />
          <div className='absolute top-1/3 left-1/2 h-24 w-24 border border-b border-black rounded-full inset-0 flex items-center justify-center
           bg-gray bg-opacity-50 text-white text-2xl'>
            <p className='font-inter'>Play</p>
          </div>
        </div>

        <img src={handp} alt="Hand pointing" width={312} height={203} />
      </div>
    </>
  )
}

export default Showaca