import { RiNotification3Line, RiArrowDownSLine, RiSettings3Line, RiLogoutCircleRLine, RiThumbUpLine, RiChat3Line } from 'react-icons/ri';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-2'>
        <Menu menuButton={<MenuButton className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'><RiNotification3Line /><span className='absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold'>2</span></MenuButton>} transition arrow align='end' arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
          <h1 className='text-gray-300 text-center font-medium'>Notifications (2)</h1>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/' className='text-gray-300 flex items-center flex-1 gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <img src='./vite.svg' className='w-8 h-8 object-cover rounded-full' alt='logo' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Antony Villa</span>{' '}<span className='text-[10px]'>24/04/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>You have news messages of text.</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/' className='text-gray-300 flex items-center flex-1 gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <RiThumbUpLine className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New Like</span>{' '}<span className='text-[10px]'>24/04/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>Antony likes your publication.</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/' className='text-gray-300 flex items-center flex-1 gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg'>
              <RiChat3Line className='p-2 bg-blue-200 text-blue-700 box-content rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>New Comment</span>{' '}<span className='text-[10px]'>24/04/2023</span>
                </div>
                <p className='text-gray-500 text-xs'>Antony commented your publication.</p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent flex justify-center cursor-default'>
            <Link to='/' className='text-gray-400 text-sm hover:text-white transition-colors'>All Notifications</Link>
          </MenuItem>
        </Menu>
        <Menu menuButton={<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition.colors'><img src='./vite.svg' alt='user' className='w-6 h6 object-cover rounded-full' /><span>Antony Jordan</span><RiArrowDownSLine /></MenuButton>} transition arrow arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
            <img src='./vite.svg' alt='user' className='w-8 h-8 object-cover rounded-full' />
            <div className='flex flex-col text-sm'>
              <span className='text-sm'>Antony Jordan</span>
              <span className='text-xs text-gray-500'>antony_vc@gmail.com</span>
            </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/configuration' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiSettings3Line />Configuration
            </Link>
          </MenuItem>
          <MenuItem className='p-0 hover:bg-transparent'>
            <Link to='/login' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>
              <RiLogoutCircleRLine />Sign Out
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}

export default Header;