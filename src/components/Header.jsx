import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-300 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to="/">
                <h1 className="text-sm sm:text-xl font-bold flex flex-wrap">
                    <span className="text-slate-600">Watamu</span>
                    <span className="text-slate-900">Homes</span>
                </h1>
            </Link>
            
            <form className="bg-slate-100 p-3 rounded-lg flex item-center">
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64"/>
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
                <Link to="/about"><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
                <Link to="/sign-in">
                    <li className='text-slate-700 hover:underline text-semibold'>Sign In</li>
                </Link>
            </ul>
        </div>
      
    </header>
  )
}

export default Header
