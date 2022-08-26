import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Main } from '../main';
import { WALLET } from './constant';

export const ConnectWallet = () => {

    const content = <div className='w-full my-auto sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0'>
        <div className='flex items-center justify-end text-white '><Link to="/"><FaTimes /></Link></div>
        <div className='space-y-6'>
            <div className='space-y-2'>
                <div className='text-white text-2xl font-Semibold'>
                    Connect Wallet
                </div>
                <p className='text-gray-primary text-sm'>Connect with one of our available wallet providers</p>
            </div>

            <div className='border-2 border-border-card rounded-xl overflow-hidden'>
                {
                    WALLET.map((item, index) => <Link to={`/connect-account/${item.id}`} key={index} className='flex items-center space-x-6 text-left text-white bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4  border border-border-card'>
                        <img src={item?.img} alt="" className='w-1/4 h-10 ' />
                        <span>{item?.name + " " + "Wallet"}</span>
                    </Link>)
                }
            </div>
    

        </div>
    </div>

    return (
        <Main content={content} />
    )
}
