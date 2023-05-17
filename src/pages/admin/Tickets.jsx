import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiArrowLeftLine, RiArrowRightLine, RiFileTextLine, RiFilter2Fill, RiGithubLine, RiMessage2Line, RiSearch2Line, RiTicket2Line, RiTwitterLine } from 'react-icons/ri';

const Tickets = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(true);
  const [tab3, setTab3] = useState(true);

  return (
    <div>
      <div className='flex items-center justify-between gap-y-4 mb-4'>
        <div>
          <h1 className='font-bold text-gray-100 text-xl'>Vista General</h1>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <Link to='/' className='hover:text-primary transition-colors'>Home</Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button className='bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors'>
            <RiFilter2Fill /> Filter
          </button>
          <button className='bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors'>
            Create
          </button>
        </div>
      </div>
      <div className='bg-secondary-100 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='p-4'>
          <h1 className='text-2xl mb-4 '>¿Cómo lo podemos ayudar?</h1>
          <form>
            <div className='relative'>
              <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-4' />
              <input type="text" className='bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full' placeholder='Buscar algo ...' />
            </div>
          </form>
        </div>
        <div className='flex justify-center'>
          <img src="vite.svg" alt="logo" className='w-64 h-64 object-cover' />
        </div>
      </div>
      <div className='bg-secondary-100 p-4'>
        <div className='bg-secondary-900 p-4 rounded-lg'>
          <menu className='flex flex-col md:flex-row justify-start gap-2'>
            <li className='py-2 px-4 mr-4 rounded-lg bg-secondary-100 hover:text-gray-100 transition-colors outline-none'><button onClick={() => { setTab1(!tab1); setTab2(true); setTab3(true); }}>Tickets</button></li>
            <li className='py-2 px-4 mr-4 rounded-lg bg-secondary-100 hover:text-gray-100 transition-colors outline-none'><button onClick={() => { setTab1(true); setTab2(!tab2); setTab3(true); }}>Tutoriales</button></li>
            <li className='py-2 px-4 mr-4 rounded-lg bg-secondary-100 hover:text-gray-100 transition-colors outline-none'><button onClick={() => { setTab1(true); setTab2(true); setTab3(!tab1); }}>Licencias</button></li>
          </menu>
        </div>
        <div>
          <div className={tab1 ? 'hidden' : 'show grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'}>
            <div className='mb-4 p-4 bg-secondary-900 rounded-lg'>
              <div className='flex items-center justify-between'>
                <h1 className='text-white text-lg'>Más Populares</h1>
                <Link to='/' className='flex items-center gap-2 text-primary'>Soporte <RiArrowRightLine /></Link>
              </div>
              <hr className="my-4 border-gray-500/30" />
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Aprende sobre Hooks - React</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de React.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Instalar en una máquina local - Laravel</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Laravel.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Extender licencia de trabajo - Next JS</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Next JS.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Implmentar arquitecturas BBF - Angular</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Angular.</p>
              </details>
            </div>
            <div className='mb-4 p-4 bg-secondary-900 rounded-lg'>
              <div className='flex items-center justify-between'>
                <h1 className='text-white text-lg'>Más Canales</h1>
                <Link to='/' className='flex items-center gap-2 text-primary'>Explorar <RiArrowRightLine /></Link>
              </div>
              <hr className="my-4 border-gray-500/30" />
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Aprende sobre Hooks - React</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de React.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Instalar en una máquina local - Laravel</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Laravel.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Extender licencia de trabajo - Next JS</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Next JS.</p>
              </details>
              <details className='mb-2'>
                <summary className='font-bold text-sm'>Implmentar arquitecturas BBF - Angular</summary>
                <p className='text-white p-4 text-sm'>Función que permite crear/acceder al estado y a los ciclos de vida de Angular.</p>
              </details>
            </div>
          </div>
          <div className={tab2 ? 'hidden' : 'show grid grid-cols-1 md:grid-cols-4 mt-4'}>
            <div className='col-span-3 mb-4 p-4 bg-secondary-900 rounded-lg'>
              <form>
                <div className='relative'>
                  <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-4' />
                  <input type="text" className='bg-secondary-100 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full' placeholder='Buscar algún tutorial ...' />
                </div>
              </form>
              <h1 className='text-white text-2xl my-4'>Tutoriales más populares</h1>
              <div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-red-500' />
                    <Link to='/' className='text-xm hover:text-primary transition-colors'>Uso de Netronic con el framework Django</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>Python</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-green-500' />
                    <Link to='/' className='text-xm hover:text-green-500 transition-colors'>Uso de Material UI con el framework Angular</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>Angular</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-orange-500' />
                    <Link to='/' className='text-xm hover:text-orange-500 transition-colors'>Uso de Bootstrap con el framework React</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>React</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-blue-500' />
                    <Link to='/' className='text-xm hover:text-blue-500 transition-colors'>Uso del framework Flex para Python</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>Python</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-yellow-500' />
                    <Link to='/' className='text-xm hover:text-yellow-500 transition-colors'>Uso de NodeJS para aplicaciones backend</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>Java Script</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <RiTicket2Line className='text-2xl text-red-500' />
                    <Link to='/' className='text-xm hover:text-primary transition-colors'>Uso de Entity Framework para .NET</Link>
                    <span className='bg-secondary-900 text-white text-sm py-0.5 px-2 rounded-lg'>C#</span>
                  </div>
                  <div className='px-10'>
                    <p className='text-sm text-gray-500'>Un framework que puede ayudarte a simplificar el tiempo de desarrollo e integración.</p>
                  </div>
                </div>
              </div>
              <div className='p-4 flex mt-4 justify-center'>
                <nav className='flex items-center gap-8'>
                  <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'><RiArrowLeftLine /></button>
                  <div className='flex items-center gap-2'>
                    <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'>1</button>
                    <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'>2</button>
                    <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'>3</button>
                    <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'>4</button>
                    <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'>5</button>
                  </div>
                  <button className='p-2 hover:bg-secondary-100 rounded-lg transition-colors hover:text-gray-100'><RiArrowRightLine /></button>
                </nav>
              </div>
            </div>
            <div className='col-span-1 bg-secondary-100 ml-2'>
              <div className='bg-secondary-900 p-4 rounded-lg'>
                <h1 className='text-2xl text-white mb-8'>Más Canales</h1>
                <div>
                  <div className='flex items-center gap-4 mb-4'>
                    <RiFileTextLine className='text-4xl text-primary' />
                    <div className='flex flex-col gap-1'>
                      <h5 className='text-white'>Proyectos</h5>
                      <p className='text-xs'>Revisa en todo momento nuestra <Link to='/' className='text-primary'>Política de Seguridad</Link></p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 mb-4'>
                    <RiMessage2Line className='text-4xl text-primary' />
                    <div className='flex flex-col gap-1'>
                      <h5 className='text-white'>Discusión</h5>
                      <p className='text-xs'>Comentanos tus dudas <Link to='/' className='text-primary'>antony@gmail.com</Link></p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 mb-4'>
                    <RiTwitterLine className='text-4xl text-primary' />
                    <div className='flex flex-col gap-1'>
                      <h5 className='text-white'>Noticias</h5>
                      <p className='text-xs'>Revisa lo último de tecnología <Link to='/' className='text-primary'>Siguenos siempre</Link></p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 mb-4'>
                    <RiGithubLine className='text-4xl text-primary' />
                    <div className='flex flex-col gap-1'>
                      <h5 className='text-white'>GitHub Access</h5>
                      <p className='text-xs'>Accede a nuestro repo siempre <Link to='/' className='text-primary'>Antony vc3000</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={tab3 ? 'hidden' : 'show grid grid-cols-1 md:grid-cols-4 mt-4'}>
            <div className='col-span-4 mb-4 p-4 bg-secondary-900 rounded-lg'>
              <div className='mb-4'>
                <h1 className='text-2xl text-white mb-2'>Preguntas Frecuentes</h1>
                <p className='text-gray-500'>Primero, el proceso de entrada es escribiendo un blog y publicarlo a menudo.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='bg-secondary-100 rounded-lg p-4'>
                  <h1 className='text-xl text-white mb-4'>Comprando Productos</h1>
                  <hr className="my-4 border-gray-500/30" />
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Licencia de Antivirus - Panda</summary>
                    <p className='text-white p-4 text-sm'>Lo mejor que puede hacer para asegurar tu información personal.</p>
                  </details>
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Framework Django</summary>
                    <p className='text-white p-4 text-sm'>El mejor amigo de Python es un framewrok completo para poder trabajar.</p>
                  </details>
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Node JS - Java Script</summary>
                    <p className='text-white p-4 text-sm'>El paquete y entorno de trabajo para backend de java script.</p>
                  </details>
                </div>
                <div className='bg-secondary-100 rounded-lg p-4'>
                  <h1 className='text-xl text-white mb-4'>Instalación</h1>
                  <hr className="my-4 border-gray-500/30" />
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Postman - Testing API Rest</summary>
                    <p className='text-white p-4 text-sm'>Aprende la mejor funcionalidad de Postman para poder testear tus servicios.</p>
                  </details>
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Visual Studio Code IDE</summary>
                    <p className='text-white p-4 text-sm'>Lo mejor de tus entornos de desarrollo para tus aplicaciones es VS Code.</p>
                  </details>
                  <details className='mb-2'>
                    <summary className='font-bold text-sm'>Visual Studio IDE</summary>
                    <p className='text-white p-4 text-sm'>Si lo tuyo es trabajar en aplicaciones .Net este IDE es lo mejor.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tickets;