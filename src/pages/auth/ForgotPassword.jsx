import { Link } from 'react-router-dom';
import { RiMailLine } from 'react-icons/ri';

const ForgotPassword = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8">Pass Recovery</h1>
        <form className='mb-6'>
          <div className='relative mb-4'>
            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type="email" placeholder='Email' className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' />
          </div>
          <div>
            <button type='submit' className='bg-primary text-black w-full py-3 px-4 font-bold rounded-lg hover:text-white transition-colors'>Send</button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4'>
          <Link to='/login' className='hover:text-primary transition-colors'>You have an account?</Link>
          <Link to='/register' className='text-primary hover:text-gray-100 transition-colors'>Register your new Account?</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;