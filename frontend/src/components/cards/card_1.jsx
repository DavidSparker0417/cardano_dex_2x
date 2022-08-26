import React from 'react'
import { ASSETS } from '../../assets/path'
import { FaArrowLeft } from 'react-icons/fa'
import { SearchForm } from '../SearchInput';

export const ProcessCard = ({ Heading, Paragraph, SubHeading_1, SubHeading_2, onSearch, placeholder, onSubmit }) => {

    const content = <div className={`w-full  sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-6`}>
        <div className='space-y-6'>

            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white'>
                    <FaArrowLeft onClick={() => onSubmit(1, false)} className='text-lg cursor-pointer' />
                    <div className='text-white text-2xl font-Semibold'>
                        {Heading}
                    </div>
                </div>
                <p className='text-gray-primary text-sm'>{Paragraph}</p>
            </div>


            <div className='border-2 flex items-center justify-between px-4 py-2  border-border-card rounded-xl text-white font-semibold text-base mx-6'>
                <button className=' rounded-lg px-4 py-1 whitespace-nowrap'>{SubHeading_1}</button>
                <button className='px-4 rounded-lg py-1 btn-gradient'>{SubHeading_2}</button>
            </div>
            <SearchForm
                onEnterSearch={onSearch}
                placeholder={placeholder}
            />
            <div className='py-4 bg-gray-secandary border-2 border-border-card cursor-pointer rounded-xl flex flex-col space-y-4 mt-4  px-3 lg:px-5 2xl:px-10'>
                <div className='text-xs text-white font-semibold'>
                    Pair found
                </div>
                <div className='flex items-center space-x-3 text-xs text-white'>
                    <div className='flex'>
                        <img src={ASSETS.CURRENCY.ADA} alt="" />
                        <img src={ASSETS.CURRENCY.USDC} alt="" className='-ml-1' />
                    </div>
                    <div className='font-bold text-base'>ADA/madUSDC</div>
                </div>
            </div>

            <div className='space-y-5'>
                <button
                    // onClick={() => navigate(Link)}
                    onClick={() => onSubmit(2, true)}
                    className='btn-gradient w-full text-center text-xs py-3 sm:text-base font-semibold'>Continue</button>
            </div>

        </div>
    </div>

    return (
        content
    )
}
