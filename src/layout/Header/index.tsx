import React from 'react'
import { BiVideoPlus } from 'react-icons/bi';
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <div className='bg-white px-6 py-2 flex items-center justify-between'>
            <div>
                <img className='h-5' alt="logo" src={Logo.src} />
            </div>
            <div className='flex items-center gap-5'>
                <button>
                    <BiVideoPlus className='text-3xl' />
                </button>
                <button
                    className='bg-orange-500 h-10 w-10 rounded-full flex justify-center items-center text-white'
                >
                    <span>I</span>
                </button>
            </div>
        </div>
    )
}

export default Header