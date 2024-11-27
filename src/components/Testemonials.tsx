
export default function Testemonials({name , image , review} : {name : string , image: string , review : string}) {
  return (
    <div className='flex flex-col mt-8 h-[350px] w-[350px] items-center rounded-lg bg-[#3A3F44]'>
            <div>
        <div className='h-[150px] w-[200px] text-xl flex items-center '>
        <h1>"{review}"</h1>
            </div>
        </div>
            <h2 className='text-center font-bold'>{name}</h2>
        <div className='flex items-center w-[200px] h-[200px] gap-3'>
            <img src={image} alt={name} className='w-[200px]  rounded-full' />
        </div>
    </div>
  )
}
