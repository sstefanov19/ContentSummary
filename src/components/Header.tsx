import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='fixed top-0 text-white  w-2/4 h-[80px] z-50 p-3 '>
        <div className='rounded-lg  border-2 h-full p-3 '>
            <ul className="flex justify-between">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/transcript'>Product</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}
