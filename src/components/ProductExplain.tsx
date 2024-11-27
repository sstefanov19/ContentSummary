import video from '../../public/product video.mov'


export default function ProductExplain() {
  return (
    <div className='mb-8'>
        <h1 className='text-center text-2xl font-bold mt-10'>Video showing how to use the product</h1>
   <video className='h-[800px] w-[1000px]' controls>
        <source src={video}>

        </source>
    </video>
    </div>
)
}
