// import React from 'react'

const VariantBg = (props:{content:string}) => {
  return (
    <div className='w-[10rem] h-[2.25rem] text-white bg-primary flex justify-center items-center 
    rounded-sm cursor-pointer hover:bg-secondary duration-200'>
        <p className='text-[0.75rem]'>{props.content}</p>
    </div>
  )
}

export default VariantBg