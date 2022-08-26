import React, { useState } from 'react'
import { ASSETS } from '../../assets/path'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { MdInfoOutline } from 'react-icons/md';
import { Settings } from './settings';

export const WidthrowProcess_1 = ({ Heading, Paragraph, onSubmit, SubHeading_1, SubHeading_2 }) => {

    const [modal, setmodal] = useState(1)
    const [value, setvalue] = useState(0)

    const content = <div className={`w-full  sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-6`}>
        <div className='space-y-6'>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <div className='flex items-center space-x-2 text-white'>
                    <FaArrowLeft onClick={() => onSubmit(1, false)} className='text-lg cursor-pointer' />
                        <div className='text-white text-2xl font-Semibold'>
                            {Heading}
                        </div>
                    </div>
                    <p className='text-gray-primary text-sm'>{Paragraph}</p>
                </div>
                <img 
                className='cursor-pointer'
                onClick={()=> setmodal(2)} src={ASSETS.LIQUIDITY.LIQUIDITY_SETTINGS} alt="" />
            </div>

            <div className='border-2 flex items-center justify-between px-4 py-2  border-border-card rounded-xl text-white font-semibold text-base mx-6'>
                <button className=' rounded-lg px-4 py-1 whitespace-nowrap'>{SubHeading_1}</button>
                <button className='px-4 rounded-lg py-1 btn-gradient'>{SubHeading_2}</button>
            </div>
            <div className=''>
                <div className='flex flex-col space-y-8'>
                    <div className='font-semibold bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 text-3xl text-center text-white rounded-xl'>
                        {value}%
                    </div>
                    <input id="default-range" type="range" onChange={(e) => setvalue(e.target.value)} step={5} value={value} className="w-full h-1 bg-gradient-to-r from-orange-dark to-orange-light rounded-lg appearance-none cursor-pointer"></input>
                    <div className='flex items-center justify-between text-white'>
                        <div onClick={() => setvalue(25)} className={`rounded-lg px-7 py-2 font-semibold ${value <= 25 && value > 0 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>25%</div>
                        <div onClick={() => setvalue(50)} className={`rounded-lg px-7 py-2 font-semibold ${value <= 50 && value > 25 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>50%</div>
                        <div onClick={() => setvalue(75)} className={`rounded-lg px-7 py-2 font-semibold ${value <= 75 && value > 50 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>75%</div>
                        <div onClick={() => setvalue(100)} className={`rounded-lg px-7 py-2 font-semibold ${value > 75 ? "btn-gradient" : "bg-gray-table"} cursor-pointer`}>100%</div>
                    </div>

                    <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer rounded-xl flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>ADA per USDC</div><div>0.00345667</div>
                        </div>
                        <div className='flex items-center justify-between text-xs text-gray-light'>
                            <div>USDC per ADA</div><div>0.00345667</div>
                        </div>
                    </div>

                    <div className={`bg-gray-secandary border-2 text-white border-border-card cursor-pointer rounded-xl py-2  flex items-center justify-between px-3 lg:px-5 2xl:px-10`}>
                        <div className='flex items-center space-x-2 '>
                            <div className='text-sm font-semibold text-white '>Total Fees</div>
                            <MdInfoOutline className='text-sm text-gray-primary' />
                        </div>
                        0.00345667$
                    </div>
                </div>


            </div>
          
                <button
                    onClick={() => onSubmit(2, true)}
                    className='btn-gradient w-full text-center text-xs py-3 sm:text-base font-semibold'>Widthdraw Liquidity</button>             
        </div>
    </div>

    return (
        modal === 1 ?
        content
        :
        <Settings onSubmit={(value)=> setmodal(value)}/>
    )
}
