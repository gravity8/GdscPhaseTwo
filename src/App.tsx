
import { useState , useEffect} from 'react'
import './App.css'
import VariantBg from './component/buttons/VariantBg'
import VariantBorder from './component/buttons/VariantBorder'
import Navbar from '@/component/Navbar'
import HeroBg from '@/assets/hero-bg.svg?react';
import Icon from '@/assets/Icon.svg?react'
import FooterCurve from '@/assets/FooterCurve.svg?react'
import Hero from '@/assets/hero.png'
import imageOne from '@/assets/image-1.png'
import imageTwo from '@/assets/image-2.png'
import imageThree from '@/assets/image-3.png'
import imageFour from '@/assets/image-4.png'
// import Twitter from '@/assets/Path.svg?react'
import Instagram from '@/assets/Instagram.svg?react'
import Shape from '@/assets/Shape.svg?react'
import Twitter from '@/assets/Path.svg?react'
import LinkedIn from '@/assets/Combined.svg?react'
import Facebook from '@/assets/Facebook.svg?react'


function App() {

  const [isStuck, setIsStuck] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
        setIsStuck(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (  
    <section className=''>
      <Navbar isStuck={isStuck}/>
      <div className='flex w-full items-center md:ps-[10.3rem] px-[2rem] justify-between relative'>
        <div className='md:mt-[14rem] mt-[7rem] mb-[28.7rem]'>
          <h1 className='md:text-[3.13rem] text-[2.5rem] mb-[1.25rem] md:w-[33.69rem] text-primaryVariantTwo text-start md:leading-[4.13rem] leading-[2.8rem]'>
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className='text-[1.13rem] md:w-[33.69rem] text-secondary text-start leading-[1.88rem] mb-[4.31rem]'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className='flex flex-col md:flex-row gap-[1.875rem] items-center'>
            <VariantBg content='Purchase UI Kit'/>
            <VariantBorder content='Learn More'/>
          </div>
        </div>
        {/* <div className='relative h-screen'> */}
          <img src={Hero} className='z-10 md:w-[40.13rem] md:h-[48.8rem] absolute right-0 top-[15rem] maxSm:top-[88vh]'/>
          {/* <HeroBg className='absolute'/> */}
        {/* </div> */}
      </div>
      <HeroBg className='absolute md:top-0 md:right-0 -z-10 md:h-[72.56rem] hidden md:flex'/>
      <div className='flex flex-col gap-20 md:flex-row items-center md:px-[10rem] px-[2rem] justify-between font-roboto py-[6.875rem]'>
        <div className='flex flex-col flex-[0.9]'>
          <h2 className='text-[2.25rem] text-primaryVariantTwo mb-[1rem]'>Light, Fast & Powerful</h2>
          <p className='text-secondary leading-[1.65rem]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className='flex flex-col md:flex-row mt-[5rem] maxSm:gap-[2rem]'>
            <div className='flex flex-col maxSm:text-center maxSm:items-center'>
              <Icon className='mb-[0.87rem]'/>
              <h3 className='font-medium mb-[0.87rem]'>Title Goes Here</h3>
              <p className='text-[0.75rem] text-[#5D6970]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              </p>
            </div>
            <div className='flex flex-col maxSm:text-center maxSm:items-center'>
              <Icon className='mb-[0.87rem]'/>
              <h3 className='font-medium mb-[0.87rem]'>Title Goes Here</h3>
              <p className='text-[0.75rem] text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
          </div>
        </div>
        <img src={imageOne} alt="imageOne" className='md:w-[33.75rem] md:h-[32.75rem]'/>
      </div>
      <div className='flex flex-col gap-20 md:flex-row items-center justify-between md:px-[10rem] px-[2rem] py-[7.66rem] '>
        <img src={imageTwo} alt="" />
        <div className='md:w-[27.81rem]'>
          <h2 className='text-[2.25rem] text-primaryVariantTwo mb-[1rem]'>Light, Fast & Powerful</h2>
          <p className=' text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>
      <div className='flex flex-col gap-20 md:flex-row items-center justify-between md:px-[10rem] px-[2rem] py-[7.66rem]'>
        <img src={imageThree} alt="" />
        <div className='md:w-[27.81rem]'>
          <h2 className='text-[2.25rem] text-primaryVariantTwo mb-[1rem]'>Light, Fast & Powerful</h2>
          <p className=' text-secondary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>
      <div className='flex flex-col gap-20 md:flex-row items-center justify-between md:px-[10rem] px-[2rem] py-[7.66rem]'>
        <img src={imageFour} alt="" />
        <div className='md:w-[27.81rem]'>
          <h2 className='text-[2.25rem] text-primaryVariantTwo mb-[1rem]'>Light, Fast & Powerful</h2>
          <p className=' text-secondary mb-[2.5rem]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <VariantBg content='Purchase Now'/>
        </div>
      </div>
      <div className='relative text-center font-roboto'>
        {/* <div className='overflow-hidden'> */}
          <FooterCurve className='w-full absolute -z-10 hidden md:flex'/>
        {/* </div> */}
        <h2 className='maxSm:px-[2rem] text-[2.5rem] leading-[2.5rem] md:text-[2.25rem] text-primaryVariantTwo mb-[1rem] pt-[13.88rem]'>A Price To Suit Everyone</h2>
        <p className='maxSm:px-[2rem]  text-secondary mb-[2.24rem] md:w-[37.50rem] mx-auto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <h3 className='maxSm:px-[2rem] text-[3.13rem] text-primary  font-medium leading-[4.13rem]'>$40</h3>
        <small className='maxSm:px-[2rem] text-[1rem] text-[#37447E]'>UI Design Kit</small>
        <p className='maxSm:px-[2rem] text-[#5D6970] mt-[3.75rem] text-[0.88rem]'>See, One price. Simple.</p>
        <div className='flex justify-center mt-[0.48rem] mb-[10.75rem]'> 
          <VariantBg content='Purchase Now'/>
        </div>
      </div>
      <div className='w-full md-[13.50rem] bg-[#E7ECFF] z-[100] bottom-0 md:px-[10rem] px-[2rem] py-16'>
          <div className='flex md:flex-row flex-col maxSm:gap-[2rem] justify-between items-center'>
            <p className='text-[#939EA4]'>&copy;{new Date().getFullYear()} Yourcompany</p>
            <h1 className='text-[1.63rem] font-semibold text-[#37447E]'>Landing</h1>
            <VariantBg content='Purchase Now'/>
          </div>
          <hr className='border-[1px] border-[#CDD1D4] mt-10'/>
          <div className='mt-6 flex md:flex-row flex-col maxSm:gap-[2rem] justify-between'>
            <ul className=' list-none flex justify-center maxSm:gap-[0.6rem] md:justify-between md:w-[15.31rem]'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <ul className=' list-none flex justify-center maxSm:gap-[2rem] md:justify-between md:w-[15.31rem] items-center'>
              <Facebook />
              <LinkedIn />
              <Twitter />
              <Shape />
              <Instagram />
            </ul>
          </div>
      </div>
    </section>
  )
}

export default App
