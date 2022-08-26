import React, { useState } from 'react'
import { ASSETS } from '../../assets/path'
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa'
import { BiError } from 'react-icons/bi';

export const ProcessCard_2 = ({ Heading, Paragraph, SubHeading_1, SubHeading_2, onSearch, Link, onSubmit }) => {


    const [value, setvalue] = useState(50)

    const content = <div className={`w-full  sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-6`}>
        <div className='space-y-6'>

            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white'>
                    <FaArrowLeft onClick={() => onSubmit(1, true)} className='text-lg cursor-pointer' />
                    <div className='text-white text-2xl font-Semibold'>
                        {Heading}
                    </div>
                </div>
                <p className='text-gray-primary text-sm'>{Paragraph}</p>
            </div>

            <div className='border-2 flex items-center justify-between px-4 py-2  border-border-card rounded-xl text-white font-semibold text-xs sm:text-sm md:text-base mx-6'>
                <button className=' rounded-lg px-4 py-1 whitespace-nowrap'>{SubHeading_1}</button>
                <button className='px-4 rounded-lg py-1 btn-gradient'>{SubHeading_2}</button>
            </div>

            <div className=' bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 rounded-xl'>
                <div className='space-y-3'>
                    <div className='text-xs text-white font-semibold'>Lock amount</div>
                    <div className='flex items-center justify-between space-x-4'>
                        <input type='number' step="any" min={0} max={128.25}
                            value={value}
                            onChange={(e) => e.target.value >= 0 && e.target.value <= 128.25 && setvalue(e.target.value)}
                            className='text-3xl bg-transparent border-none outline-none font-semibold text-white w-full' />

                        <div className='flex items-center space-x-3'>
                            <div className='btn-gradient rounded-lg text-xs py-1.5 px-3 font-semibold'>Max</div>
                            <div className='py-2  cursor-pointer w-28 bg-white rounded-lg flex items-center justify-center  space-x-1'>
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <div className='text-sm font-semibold'>ADA/USDC</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='text-xs space-x-1'><span className='text-white font-semibold'>Max:</span><span className='text-gray-primary'> 128.25 ADA</span></div>
                        <div className='text-xs space-x-1'><span className='text-white font-semibold'>Balance:</span><span className='text-gray-primary'> $129.25</span></div>
                    </div>
                    <div className='flex items-center justify-between space-x-1 text-white'>
                        <div onClick={() => setvalue(25)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 25 && value > 0 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>25%</div>
                        <div onClick={() => setvalue(50)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 50 && value > 25 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>50%</div>
                        <div onClick={() => setvalue(75)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 75 && value > 50 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>75%</div>
                        <div onClick={() => setvalue(100)} className={`rounded-lg px-4 py-2 font-semibold ${value > 75 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>100%</div>
                    </div>

                </div>
            </div>
            <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer rounded-xl flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>

                <div className='flex items-center justify-between text-xs text-gray-light'>
                    <div>
                        Unlock date
                    </div>
                    <div className='font-bold text-sm'>October 10, 2022</div>
                </div>
                <div className='flex items-center justify-between space-x-4'>
                    <input type='number' step="any" min={0} max={128.25}
                        value={value}
                        onChange={(e) => e.target.value >= 0 && e.target.value <= 128.25 && setvalue(e.target.value)}
                        className='text-3xl bg-transparent border-none outline-none font-semibold text-white w-full' />

                    <div className='py-2  cursor-pointer w-28 border-2 border-gray-primary text-white rounded-lg flex items-center justify-center  space-x-3'>
                        <div className='text-sm font-semibold'>Days</div>
                        <FaChevronDown className='text-xs mt-0.5' />
                    </div>
                </div>
            </div>
            <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer rounded-xl flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>

                <div className='flex items-center justify-between text-xs text-gray-light'>
                    <div>
                        Service Fee
                    </div>
                    <div className='font-bold text-xs'>1.2123 ADA</div>
                </div>
                <div className='flex items-center justify-between text-xs text-gray-light'>
                    <div>
                        Total Lockup Amount
                    </div>
                    <div className='font-bold text-xs'>2.45679 ADA</div>
                </div>
                <div className='flex items-center justify-between text-xs text-gray-light'>
                    <div>
                        Unlock Date
                    </div>
                    <div className='font-bold text-xs'>10/07/2022 06:41 AM +01:00</div>
                </div>
            </div>

            <div className='text-xs text-gray-light'>
                Once tokens are locked they cannot be withdrawn under any circumstances until the timer has expired. Please ensure the parameters are correct, as they are final.
            </div>

            <div className='flex space-x-4'>
                <button
                    onClick={() => onSubmit(3, true)}
                    className='btn-gradient w-full text-center text-xs py-2 sm:text-base font-semibold'>Approve Lock</button>
                <button
                    onClick={() => onSubmit(3, true)}
                    className='btn-gradient-outline w-full text-center text-xs py-2 sm:text-base font-semibold'>Lock</button>
            </div>

            <div className='flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10 bg-gray-secandary border-2 border-border-card cursor-pointer  rounded-lg  '>
                <div className='text-xs text-gray-light py-2 flex items-center space-x-2'>
                    <BiError /> <span className='text-red-error'>You don’t have enough ADA in your wallet to perform this transaction.</span>
                </div>
            </div>

        </div>
    </div>

    return (
        content
    )
}
