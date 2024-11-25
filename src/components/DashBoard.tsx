import React from 'react'
import Testemonials from './Testemonials'
import logo from '../../public/png-transparent-computer-icons-person-random-icons-miscellaneous-image-file-formats-text.png'
import ProductExplain from './ProductExplain'

export default function Introduction() {
  return (
    <div className='min-h-screen w-screen text-zinc-200 items-center  flex flex-col '>
        <div className='mt-32 flex flex-col items-center h-[300px]'>
            <h1 className='text-zinc-200 font-bold' > Are You Tired of Wasting Time on Lengthy Texts?</h1>
            <p className='text-zinc-100 text-center font-semibold'>Let us simplify the text for you using AI powered model!</p>
        <button className='mt-4 border-solid border-2 text-zinc-200 rounded-lg w-[100px] '>
            Start using
        </button>
        </div>
            {/* Section of showing the product */}

        <ProductExplain />
        <div className='flex justify-between gap-36'>
        <Testemonials name="Stefan" review="I have been using the product for a while its amazing" image={logo} />
        <Testemonials name="Stefan" review="I have been using the product for a while its amazing" image={logo} />
        </div>
        {/* Section for testimonials */}
    </div>
  )
}
