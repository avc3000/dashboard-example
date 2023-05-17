import { useState } from 'react';
import { RiBarChart2Line, RiEarthLine, RiMessage3Line, RiCalendarTodoLine, RiLogoutCircleRLine, RiArrowRightSLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <>
      <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full ${showMenu ? 'left-0' : '-left-full'} top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 transition-all`}>
        <div>
          <h1 className='text-center text-2xl font-bold text-white mb-10'>Admin<span className='text-primary text-4xl'>.</span></h1>
          <ul>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiBarChart2Line className='text-primary' />Analytic
              </Link>
            </li>
            <li>
              <button onClick={() => setShowSubmenu(!showSubmenu)} className='w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <span className='flex items-center gap-4'>
                  <RiEarthLine className='text-primary' />Social Media
                </span>
                <RiArrowRightSLine className={`mt-1 ${showSubmenu && 'rotate-90'} transition-all`} />
              </button>
              <ul className={`${showSubmenu ? 'h-[130px]' : 'h-0'} overflow-y-hidden transition-all`}>
                <li>
                  <Link to='/' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                  before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 
                  before:border-secondary-100 hover:text-white'>Posts</Link>
                </li>
                <li>
                  <Link to='/' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                  before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 
                  before:border-secondary-100 hover:text-white'>Statistics</Link>
                </li>
                <li>
                  <Link to='/' className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute 
                  before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 
                  before:border-secondary-100 hover:text-white'>Profiles</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/ticket' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiMessage3Line className='text-primary' />Messages
              </Link>
            </li>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiCalendarTodoLine className='text-primary' />Calendar
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link to='/login' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
            <RiLogoutCircleRLine className='text-primary' />Logout
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
        {
          showMenu ? <RiCloseLine /> : <RiMenu3Line />
        }
      </button>
    </>
  )
}

export default Sidebar;