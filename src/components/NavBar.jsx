import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import  NavBarLi  from './subComponents/navDesign';


export const NavBar = () => {

    const [show, setShow] = useState(false)
    return (
        <div className='bg-sky-950  h-[6rem] px-8 py-4 relative'>
            <div className='flex justify-between'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 2 }}
                >
                    <h1 className='text-[1.5rem] text-blue-100'>{'SISTEMA WEB QR'}</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 2 }}
                    className='lg:hidden'
                >
                    <button onClick={() => setShow(!show)} >
                        {show ?
                            <AiOutlineClose className='w-[2rem] h-[2rem]' /> :
                            <AiOutlineAlignRight className='w-[2rem] h-[2rem]' />
                        }Xsdd
                    </button>
                </motion.div>

                <div className='hidden lg:block'>
                    <NavBarLi />
                </div>

            </div>

            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ right: "-100%" }}
                        animate={{ right: "0%" }}
                        exit={{ right: "-100%" }}
                        transition={{ duration: 0.7 }}
                        className='lg:hidden h-screen bg-white text-black absolute w-[70%] top-[3.9 rem] right-0 -40'
                    >
                        <div className='mt-[4rem] mx-2'>
                            <NavBarLi setShow={setShow}/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}