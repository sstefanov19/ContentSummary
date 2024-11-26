
export default function Testemonials({name , image , review} : {name : string , image: string , review : string}) {
  return (
    <div className='flex flex-col h-[250px] w-[200px] items-center rounded-lg bg-[#3A3F44]'>
            <div>
        <div className='h-[150px] w-[150px] flex items-center '>
        <h1>"{review}"</h1>
            </div>
        </div>
        <div className='flex items-center w-[150px] h-[100px]'>
            <img src={image} alt={name} className='h-[80px] w-[80px] rounded-full' />
            <h2 className='text-center'>{name}</h2>
        </div>
    </div>
  )
}
