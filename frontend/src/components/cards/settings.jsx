import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import Switch from "react-switch";

export const Settings = ({ onSubmit }) => {

    const [value, setvalue] = useState(0)
    const [checked, setchecked] = useState(false)

    const handleChange = (value) => {
        setchecked(value)
    }
    
    const content = <div className={`w-full  sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-6`}>
        <div className='space-y-6'>
            <div className='flex items-center justify-between text-white'>
                <div className='text-white text-2xl font-Semibold'>
                    SWAP & LIQUIDITY
                </div>
                <FaTimes className='cursor-pointer' onClick={() => onSubmit(1)} />

            </div>

            <div className=''>
                <div className='flex flex-col space-y-6'>
                    <p className='text-gray-primary text-sm space-x-1 flex'><span>Default Transaction Speed (GWEI)</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                    <div className='flex items-center justify-between text-white space-x-1'>
                        <div onClick={() => setvalue(50)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 50 && value > 25 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            Standard (5)
                        </div>
                        <div onClick={() => setvalue(75)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 75 && value > 50 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            Fast (6)
                        </div>
                        <div onClick={() => setvalue(100)} className={`rounded-lg px-4 py-2 font-semibold ${value > 75 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            Instant (7)
                        </div>
                    </div>

                    <p className='text-gray-primary text-sm space-x-1 flex'><span>Slippage Tolerance</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                    <div className='flex items-center justify-between text-white space-x-1'>
                        <div onClick={() => setvalue(50)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 50 && value > 25 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            0.1%
                        </div>
                        <div onClick={() => setvalue(75)} className={`rounded-lg px-4 py-2 font-semibold ${value <= 75 && value > 50 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            0.5%
                        </div>
                        <div onClick={() => setvalue(100)} className={`rounded-lg px-4 py-2 font-semibold ${value > 75 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            0.1%
                        </div>
                        <div onClick={() => setvalue(100)} className={`rounded-lg px-4 py-2 font-semibold ${value > 75 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>
                            0.5%
                        </div>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-primary text-sm space-x-1 flex'><span>Tx deadline (mins)</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                            <div
                                // onClick={() => setvalue(50)} 
                                className={`rounded-lg px-4 py-2 font-semibold bg-gray-table text-white cursor-pointer`}>
                                0.1%
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-primary text-sm space-x-1 flex'><span>Zap (Beta)</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                            <Switch onChange={handleChange} checked={checked} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-primary text-sm space-x-1 flex'><span>Expert Mode</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                            <Switch onChange={handleChange} checked={checked} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-primary text-sm space-x-1 flex'><span>Disable Multihops</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                            <Switch onChange={handleChange} checked={checked} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-primary text-sm space-x-1 flex'><span>Flippy Sounds</span><AiOutlineQuestionCircle className='text-sm text-gray-primary' /></p>
                            <Switch onChange={handleChange} checked={checked} />
                        </div>
                    </div>

                </div>


            </div>


        </div>
    </div>

    return (
        content
    )
}
