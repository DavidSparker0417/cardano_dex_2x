import React, { useState } from 'react' 
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa'

import { MdInfoOutline } from 'react-icons/md';

export const ConfirmWithdrawProcess = ({ Heading, onSubmit }) => {
    
    const [transactionDetails, settransactionDetails] = useState(false)

    const content = <div className={`w-full sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-auto`}>
        <div className='space-y-6'>
            <div className='flex items-center space-x-2 text-white'>
            <FaArrowLeft onClick={() => onSubmit(1, true)} className='text-lg cursor-pointer' />
                <div className='text-white text-2xl font-Semibold'>
                    {Heading}
                </div>
            </div>

            <div className=''>
                <div className='flex flex-col space-y-8'>
                    <div className='font-semibold bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 text-3xl text-center text-white rounded-xl'>
                        50%
                    </div>


                    <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer rounded-xl flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>Address</div><div>addr1233454686907857695079</div>
                        </div>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>Removing Token</div><div>234.2 USDC($120)</div>
                        </div>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>Remaining in Pool</div><div>34.2 USDC($120)</div>
                        </div>
                    </div>

                    <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer  rounded-lg  space-x-1'>
                        <div className={`  flex items-center justify-between px-3 lg:px-5 2xl:px-10`}>
                            <div className='flex items-center space-x-2 '>
                                <div className='text-sm font-semibold text-white '>Transaction Details</div>
                                <MdInfoOutline className='text-sm text-gray-primary' />
                            </div>
                            <FaChevronDown onClick={() => settransactionDetails(!transactionDetails)} className='text-sm cursor-pointer text-gray-primary' />
                        </div>
                        {
                            transactionDetails && <div className='flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>
                                <div className='flex items-center justify-between text-xs text-gray-light'>
                                    <div>ADA per USDC</div><div>0.00345667</div>
                                </div>
                                <div className='flex items-center justify-between text-xs text-gray-light'>
                                    <div>USDC per ADA</div><div>0.00345667</div>
                                </div>
                                <div className='flex items-center justify-between text-xs text-gray-light'>
                                    <div>Price Impact</div><div>-0.2%</div>
                                </div>
                                <div className='flex items-center justify-between text-xs text-gray-light'>
                                    <div>Route</div><div>{"ADA > USDC"}</div>
                                </div>

                            </div>
                        }
                    </div>
                </div>


            </div>

            <div className='space-y-5'>
                <button
                    onClick={() => onSubmit(3, true)}
                    className='btn-gradient w-full text-center text-xs py-3 sm:text-base font-semibold'>Confirm Widthdraw</button>
            </div>

        </div>
    </div>

    return (
        content
    )
}
