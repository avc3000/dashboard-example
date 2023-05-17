import { RiEdit2Line, RiShieldCheckLine, RiErrorWarningLine } from 'react-icons/ri';
import { FaGooglePlusG, FaGithub, FaSlack } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [google, setGoogle] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const [slack, setSlack] = useState(false);

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-4">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-4 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-4">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img src="vite.svg" alt="Antony" className='w-28 h-28 object-cover rounded-lg' />
                <label htmlFor='avatar' className='absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24'><RiEdit2Line /></label>
                <input type="file" id='avatar'className='hidden' />
              </div>
              <p className='text-gray-500 text-sm'>Tipos de archivos: png, jpg, jpeg.</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Nombre Completo <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900' placeholder='Nombre(s)' />
              </div>
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900' placeholder='Apellido(s)' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Nombre de Empresa <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900' placeholder='Empresa' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Número de Telefono <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900' placeholder='Número de telefono' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Página Web <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className='w-full'>
                <input type="text" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900' placeholder='Página web' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>País <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1">
              <select name="pais" id="pais" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900 appearance-none'>
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="Perú">Perú</option>
                <option value="México">México</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Ciudad <span className='text-red-500'>*</span></p>
            </div>
            <div className="flex-1">
              <select name="ciudad" id="ciudad" className='w-full py-2 px-2 outline-none rounded-lg bg-secondary-900 appearance-none'>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Lima">Lima</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Caracas</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-4 border-gray-500/30" />
        <div className='flex justify-end'>
          <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Guardar</button>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-4">
        <h1 className="text-xl text-gray-100">Usuario y Contraseña</h1>
        <hr className="my-4 border-gray-500/30" />
        <form className='mb-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-gray-100'>Correo Electrónico</h4>
              <p className='text-gray-500 text-sm'>antony@gmail.com</p>
            </div>
            <div>
              <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors'>Cambiar</button>
            </div>
          </div>
          <hr className='my-4 border-gray-500/30 border-dashed' />
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-gray-100'>Contraseña</h4>
              <p className='text-gray-500 text-sm'>**********</p>
            </div>
            <div>
              <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors'>Cambiar</button>
            </div>
          </div>
        </form>
        <div className='grid grid-cols-1 md:grid-cols-8 items-center bg-blue-600/10 p-4 rounded-lg border border-dashed border-red-100'>
          <div className='flex justify-center'>
            <RiShieldCheckLine className='text-4xl' />
          </div>
          <div className='md:col-span-6'>
            <h5 className='text-gray-100 text-xl mb-2'>Proteja su Cuenta</h5>
            <p className='text-gray-500'>La autenticación de dos factores añade una capa adicional de seguridad a su cuenta.</p>
          </div>
          <div className='flex justify-center'>
            <button className='bg-secondary-900/50 hover:bg-secondary-900 transition-colors py-2 px-4 rounded-lg text-gray-100'>Activar</button>
          </div>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-4">
        <h1 className="text-xl text-gray-100">Conectar con Cuentas</h1>
        <hr className="my-4 border-gray-500/30" />
        <div className='flex gap-4 items-center bg-blue-600/10 p-4 mb-4 rounded-lg border border-dashed border-red-100'>
          <div className='flex justify-center'>
            <RiShieldCheckLine className='text-4xl' />
          </div>
          <div className='flex-1'>
            <p className='text-gray-500'>Puedes inciar sesión con cualquiera de las cuentas que se muestra a continuación. Sin preocuparte por la seguridad. <Link to='/' className='text-primary'>Leer Más</Link></p>
          </div>
        </div>
        <form className='mb-4'>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-4'>
              <FaGooglePlusG className='w-8 h-8 object-cover' />
              <div className='flex flex-col gap-y-1'>
                <h5 className='text-gray-100'>Google</h5>
                <p className='text-gray-500 text-sm'>Planifique adecuadamente su flujo de trabajo.</p>
              </div>
            </div>
            <div>
              <button type='button' className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors' onClick={() => setGoogle(!google)}>{google ? "Desactivar" : "Activar"}</button>
            </div>
          </div>
          <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center gap-4'>
              <FaGithub className='w-8 h-8 object-cover' />
              <div className='flex flex-col gap-y-1'>
                <h5 className='text-gray-100'>GitHub</h5>
                <p className='text-gray-500 text-sm'>Planifique adecuadamente su flujo de trabajo.</p>
              </div>
            </div>
            <div>
              <button type='button' className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors' onClick={() => setGitHub(!gitHub)}>{gitHub ? "Desactivar" : "Activar"}</button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <FaSlack className='w-8 h-8 object-cover' />
              <div className='flex flex-col gap-y-1'>
                <h5 className='text-gray-100'>Slack</h5>
                <p className='text-gray-500 text-sm'>Planifique adecuadamente su flujo de trabajo.</p>
              </div>
            </div>
            <div>
              <button type='button' className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors' onClick={() => setSlack(!slack)}>{slack ? "Desactivar" : "Activar"}</button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <h1 className="text-xl text-gray-100">Desactivar Cuenta</h1>
        <hr className="my-4 border-gray-500/30" />
        <div className='flex gap-4 items-center bg-primary/30 p-4 mb-4 rounded-lg border border-dashed border-red-100'>
          <div className='flex justify-center'>
            <RiErrorWarningLine className='text-4xl' />
          </div>
          <div className='flex-1'>
            <h5 className='text-gray-100 text-xl mb-2'>Desactiva tu Cuenta</h5>
            <p className='text-gray-500'>Puedes desactivar tu cuenta y proteger tus datos personales. Sin preocuparte por la exposición de los mismos. <Link to='/' className='text-blue-300'>Leer Más</Link></p>
          </div>
        </div>
        <form className='flex items-center gap-4'>
          <input type="checkbox" className='accent-primary' id='idInactive' />
          <label htmlFor="idInactive" className='text-gray-500'>Confirmo la desactivación de mi cuenta.</label>
        </form>
        <hr className="my-4 border-gray-500/30" />
        <div className='flex justify-end'>
          <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Desactivar Cuenta</button>
        </div>
      </div>
    </>
  )
}

export default Profile;