import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import CardTicket from './../../components/CardTicket';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-4xl text-white'>Buen Día, Antony</h1>
        <div className='flex items-center gap-2 text-3xl'>
          <RiArrowLeftSLine className='hover:cursor-pointer hover:text-white transition-colors' />
          <RiArrowRightSLine className='hover:cursor-pointer hover:text-white transition-colors' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        <CardTicket ticket="total" totalTickets="5,000" text="Tickets Totales" />
        <CardTicket ticket="pending" totalTickets="145,000" text="Tickets Pendientes" />
        <CardTicket ticket="inProcess" totalTickets="130,000" text="Tickets en Proceso" />
        <CardTicket ticket="close" totalTickets="10,000" text="Tickets Cerrados" />
      </div>
      <div>
        <h1 className='text-2xl text-white my-6'>Ticktes Más Recientes ...</h1>
      </div>
      <div className='bg-secondary-100 p-8 rounded-lg'>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 p-4 font-bold'>
          <h5>ID</h5>
          <h5>Descripción</h5>
          <h5>Estatus</h5>
          <h5>Fecha</h5>
          <h5>Acciones</h5>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold'>ID</h5>
            <span>#2525</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Descripción</h5>
            <p>Mi Computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Estatus</h5>
            <span className='py-1 px-2 bg-yellow-500/10  text-yellow-500 rounded-lg'>Abierto</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Fecha</h5>
            <span>28 de Octubre 2022</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Acciones</h5>
            <Menu menuButton={<MenuButton className='flex items-center gap-x-2 rounded-lg transition.colors'>Acciones</MenuButton>} transition arrow arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
              <MenuItem className='p-0 hover:bg-transparent'>
                <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Dashboard Tickets</Link>
              </MenuItem>
              <MenuItem className='p-0 hover:bg-transparent'>
                <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Ver Información</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold'>ID</h5>
            <span>#2525</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Descripción</h5>
            <p>Mi Computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Estatus</h5>
            <span className='py-1 px-2 bg-blue-500/10  text-blue-500 rounded-lg'>En Progreso</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Fecha</h5>
            <span>28 de Octubre 2022</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Acciones</h5>
            <Menu menuButton={<MenuButton className='flex items-center gap-x-2 rounded-lg transition.colors'>Acciones</MenuButton>} transition arrow arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Dashboard Tickets</Link>
            </MenuItem>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Ver Información</Link>
            </MenuItem>
          </Menu>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 bg-secondary-900 p-4 rounded-xl'>
          <div>
            <h5 className='md:hidden text-white font-bold'>ID</h5>
            <span>#2525</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Descripción</h5>
            <p>Mi Computadora no prende</p>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Estatus</h5>
            <span className='py-1 px-2 bg-green-500/10  text-green-500 rounded-lg'>Cerrado</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Fecha</h5>
            <span>28 de Octubre 2022</span>
          </div>
          <div>
            <h5 className='md:hidden text-white font-bold'>Acciones</h5>
            <Menu menuButton={<MenuButton className='flex items-center gap-x-2 rounded-lg transition.colors'>Acciones</MenuButton>} transition arrow arrowClassName='bg-secondary-100' menuClassName='bg-secondary-100 p-4'>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Dashboard Tickets</Link>
            </MenuItem>
            <MenuItem className='p-0 hover:bg-transparent'>
              <Link to='/profile' className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1'>Ver Información</Link>
            </MenuItem>
          </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;