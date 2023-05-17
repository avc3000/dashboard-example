import { Link } from 'react-router-dom';
import { RiTicketLine, RiMore2Fill, RiAddLine } from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const CardTicket = ({ ticket, totalTickets, text }) => {
  let status = '';
  let textColor = '';

  switch (ticket) {
    case 'pending':
      status = 'bg-yellow-500/10 text-yellow-500';
      textColor = 'text-yellow-500';
      break;
    case 'inProcess':
      status = 'bg-blue-500/10 text-blue-500';
      textColor = 'text-blue-500';
      break;
    case 'close':
      status = 'bg-green-500/10 text-green-500';
      textColor = 'text-green-500';
      break;
    case 'total':
      status = 'bg-pink-500/10 text-pink-500';
      textColor = 'text-pink-500';
      break;
  }

  return (
    <div>
      <div className='bg-secondary-100 p-4 rounded-xl'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <RiTicketLine className={`text-4xl ${status} p-2 box-content rounded-xl`} />
          </div>
          <Menu menuButton={<MenuButton className='flex items-center gap-x-2 hover:bg-secondary-900 py-2 px-4 rounded-lg transition.colors'><RiMore2Fill /></MenuButton>} transition arrow arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Dashboard Tickets</Link>
            </MenuItem>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Ver Información</Link>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <h1 className='text-4xl text-white font-bold mb-4'>{totalTickets}</h1>
          <p className={textColor}>{text}</p>
        </div>
        <hr className='border border-dashed border-gray-500/50 my-4' />
        <div>
          <Link to='/' className='flex items-center gap-2 text-white/70 hover:text-white' ><RiAddLine /> Agregar Nuevo Ticket</Link>
        </div>
      </div>
    </div>
  )
}

export default CardTicket;