import { motion } from 'framer-motion';
import { Outlet, Link } from 'react-router-dom';

const NavBarLi = function ({ setShow }) {
    return (
        <div>
            <nav>
                <ul className='lg:flex '>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-10 lg:hover:text-blue-300 lg:hover:border-b-2' to="/" onClick={() => setShow(false)}>Inicio</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-6 lg:hover:text-blue-300 lg:hover:border-b-2' to="/registrarse" onClick={() => setShow(false)}>Registrarse</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-6 lg:hover:text-blue-300 lg:hover:border-b-2' to="/registroEquipos" onClick={() => setShow(false)}>Equipos</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-6 lg:hover:text-blue-300 lg:hover:border-b-2' to="/mostrarServicios" onClick={() => setShow(false)}>Servicios</Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-6 lg:hover:text-blue-300 lg:hover:border-b-2' to="/mostrarNotificaciones" onClick={() => setShow(false)}>Notificaciones</Link>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                        className='my-4 lg:my-0 border-b-2 lg:border-b-0'
                    >
                        <Link className='text-[1.4rem] px-6 lg:hover:text-blue-300 lg:hover:border-b-2' to="/mostrarInfo" onClick={() => setShow(false)}>Panel de control</Link>
                    </motion.div>
                </ul>
            </nav>
            <Outlet />
        </div>



    )
}

export default NavBarLi;