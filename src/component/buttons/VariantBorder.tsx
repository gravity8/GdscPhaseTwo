// import React from 'react'

const VariantBorder = (props:{content:string}) => {
  return (
    <div className='w-[10rem] h-[2.25rem] text-primaryVariantTwo border-[1.5px] border-primaryVariantTwo 
    flex justify-center items-center rounded-sm cursor-pointer hover:bg-secondary duration-200 hover:text-white'>
        <p className='text-[0.75rem]'>{props.content}</p>
    </div>
  )
}

export default VariantBorder