import Testemonials from './Testemonials'
import { Link } from 'react-router-dom'
import face2 from '../../public/face2.avif'
import face from '../../public/face1.webp'
import ProductExplain from './ProductExplain'

export default function Introduction() {
  return (
    <div className='min-h-screen w-screen text-zinc-200 items-center  flex flex-col '>
        <div className='mt-32 flex flex-col items-center h-[100px]'>
            <h1 className='text-zinc-200 font-bold' > Do you want to turn your video lectures into text?</h1>
            <p className='text-zinc-100 text-center font-semibold'>Let us do that for you using AI powered model! Without ads</p>
        <Link className='mt-4 border-solid border-2 text-zinc-200 rounded-lg w-[100px] text-center' to="/transcript" >
            Start using
        </Link>
        </div>
            {/* Section of showing the product */}
        <ProductExplain />
        <div className='flex justify-between gap-36'>
        <Testemonials name="Josh" review="Finaly a transcription app without ads!" image={face} />
        <Testemonials name="George" review="I have been using that to transcript my lectures its awesome" image={face2} />
        </div>
        {/* Section for testimonials */}
    </div>
  )
}
