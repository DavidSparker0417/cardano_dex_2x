import React, { useState } from 'react'
import { ASSETS } from '../../assets/path'
import { FaArrowDown, FaArrowLeft } from 'react-icons/fa'

export const ConfirmSwap = ({ onEnterToken }) => {
    const [asd, setasd] = useState(128.20)


    const content = <div className={`w-full my-10 sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 }`}>
        <div className='space-y-6'>
            <div className='text-white flex items-center text-2xl font-Semibold space-x-3'>
                <FaArrowLeft onClick={() => onEnterToken(1, false)} className='text-lg cursor-pointer' />
                <div>Confirm  Swap</div>

            </div>

            <div className=''>
                <div className='flex flex-col'>
                    <div className=' bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 rounded-xl'>

                        <div className='flex items-center justify-between w-full'>
                            <div className='py-2  cursor-pointer w-28 bg-white rounded-lg flex items-center justify-center  space-x-1'>
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <div className='text-base font-semibold'>ADA</div>
                            </div>
                            <div className='text-3xl text-right font-semibold text-white w-full'>{asd}</div>
                        </div>

                    </div>

                </div>
                <div className='-mt-2  w-full  flex items-center justify-center'>
                    <div className=' flex items-center justify-center text-white z-30 text-sm md:text-base w-8 h-8 rounded-md bg-gray-primary'>
                        <FaArrowDown />
                    </div>
                </div>
                <div className='flex flex-col -mt-2 -z-2'>
                    <div className='bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 rounded-xl'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='py-2  cursor-pointer w-28 bg-white rounded-lg flex items-center justify-center  space-x-1'>
                                <img src={ASSETS.CURRENCY.USDC} alt="" />
                                <div className='text-base font-semibold'>ADA</div>
                            </div>
                            <div className='text-3xl text-right font-semibold text-white w-full'>{asd}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-5'>

                <div className='py-3 bg-gray-secandary space-y-5 border-2 border-border-card cursor-pointer  rounded-lg'>
                    <div className='flex flex-col space-y-2 px-3 lg:px-5 2xl:px-10'>
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
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>Liquidity Provider Fee</div><div>0.0598 ADA</div>
                        </div>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>Network Fee</div><div>0.0098 ADA($0.05)</div>
                        </div>
                    </div>
                    <div className='py-4 border-t font-semibold border-border-card text-gray-light px-3 lg:px-5 2xl:px-10 text-xs'>
                        Output is estimated. You will receive at least 5.0453 AVAX or the transaction will revert
                    </div>
                </div>
                <div onClick={() => onEnterToken(2, true)} className='btn-gradient text-center text-xs py-3 sm:text-base font-semibold'>Confirm Swap</div>
            </div>

        </div>
    </div>

    return (
        content
    )
}
