import React from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Main } from '../main';
import { WALLET } from './constant';

export const ConnectAccount = () => {
    let { id } = useParams();
    const navigate = useNavigate()

    const content = <div className='w-full my-auto sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0'>
        <div className='flex items-center justify-end text-white '><Link to="/connect-wallet"><FaTimes /></Link></div>
        <div className='space-y-6'>
            <div className='space-y-2'>
                <div className='text-white text-2xl font-Semibold'>
                    Account
                </div>
                <p className='text-gray-primary text-sm'>Connect with one of our available wallet providers</p>
            </div>

            <div className='border-2 border-border-card rounded-xl overflow-hidden'>
                {
                    WALLET.map((item, index) =>
                        item.id === parseInt(id) &&
                        <div key={index} className='flex flex-col  space-y-3  text-left text-white bg-gray-secandary px-3 lg:px-8 2xl:px-10 py-4  border border-border-card'>
                            <div className='text-sm'>
                                <span>Connected to {item?.name}</span>
                            </div>
                            <div className='flex items-center space-x-3 py-4 text-sm justify-between'>
                                <img src={item?.img} alt="" className='h-10 ' />
                                <div className='space-y-1'>
                                    <div className='flex items-center text-sm space-x-2 sm:space-x-4'>
                                        <span>addr1q9gcqed8m65c95n…qqffq30</span><FaChevronDown className='text-gray-light' />
                                    </div>
                                    <div className='flex items-center space-x-2 md:space-x-3 text-xs'>
                                        <div className='underline text-gray-light cursor-pointer'>View on Explorer</div>
                                        <div className='underline text-gray-light cursor-pointer'>Copy an Address</div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

            </div>
            <button onClick={() => navigate('/connect-wallet')} className='btn-gradient w-full py-2 font-semibold'>
                Disconnect
            </button>
        </div>
    </div>

    return (
        <Main content={content} />
    )
}
