import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlusG } from 'react-icons/fa';
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8">Login - Intro</h1>
        <form className='mb-6'>
          <button className="flex items-center justify-center py-2 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-4 hover:text-gray-500">
            <FaGooglePlusG className='w-6 h-6' />Enter with Google
          </button>
          <div className='relative mb-4'>
            <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type="email" placeholder='Email' className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' />
          </div>
          <div className='relative mb-4'>
            <RiLockLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary' />
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='py-2 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary' />
            {
              showPassword ? (
                <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
              ) : (
                <RiEyeLine onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary' />
              )
            }
          </div>
          <div>
            <button type='submit' className='bg-primary text-black w-full py-3 px-4 font-bold rounded-lg hover:text-white transition-colors'>Login</button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4'>
          <Link to='/recovery' className='hover:text-primary transition-colors'>Forgot your password?</Link>
          <Link to='/register' className='text-primary hover:text-gray-100 transition-colors'>Register your new Account?</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;