import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='bottom-0  text-white flex justify-center w-full h-[150px] p-3'>
      <ul className='flex space-x-8 items-center'>
        <li className="text-2xl">
          <Link to='https://github.com/sstefanov19'>
            <FaGithub />
          </Link>
        </li>
        <li className="text-2xl">
          <Link to='https://www.linkedin.com/in/stefan19/'>
            <FaLinkedin />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
