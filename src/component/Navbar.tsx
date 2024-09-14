import {useState} from 'react'
import VariantBg from './buttons/VariantBg'
import { Twirl as Hamburger } from 'hamburger-react';

const Navbar = ({isStuck}:{isStuck:boolean}) => {

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <nav className={`flex justify-between items-center w-full sticky top-0 max-lg:px-[4rem] maxSm:px-[2rem] py-5 z-20 md:px-[10.3rem] ${isStuck?" bg-white":""}`}>
        <ul className=' list-none flex justify-between md:w-[15.31rem] maxSm:hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <h1 className='text-[1.63rem] font-semibold text-[#37447E]'>Landing</h1>
        <div className='maxSm:hidden'>
          <VariantBg content='Buy Now'/>
        </div>
        <div className={`md:hidden`}>
        <Hamburger
          toggled={openDrawer}
          toggle={setOpenDrawer}
          size={28}
        />
      </div>
      <ul className={` absolute top-[5rem] list-none gap-[1.5rem] py-[2rem] px-5 bg-white w-[20rem] border justify-center items-center md:w-[15.31rem] ${openDrawer ? "flex flex-col" : "hidden"}`}>
            <li>Home</li>
            <hr className='border-[#CDD1D4] border-[0.5px] w-full'/>
            <li>About</li>
            <hr className='border-[#CDD1D4] border-[0.5px] w-full'/>
            <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar