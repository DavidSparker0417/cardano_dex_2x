import React, { useState } from 'react'
import { ASSETS } from '../../assets/path'
import { FaArrowDown, FaArrowLeft, FaChevronDown } from 'react-icons/fa'
import { BiError } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { SelectTokenComponent } from '../../components/cards/card_8'

export const CreatePool = ({ onSubmit }) => {


    const [asd, setasd] = useState(0)
    const [usdc, setusdc] = useState(0)
    const [transactionDetails, settransactionDetails] = useState(false)
    const [selectToken, setselectToken] = useState({
        status: false,
        modal: 1,
    })

    const onClickTokenBtn = (value, modalStatus) => {
        const clone = { ...selectToken }
        clone.status = modalStatus,
            clone.modal = value
        setselectToken(clone)
    }

    const content = <div className={`w-full sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 ${transactionDetails ? 'my-4' : 'my-auto'}`}>
        <div className='space-y-6'>
            <div className='space-y-2'>
                <div className='flex items-center space-x-2 text-white'>
                    <FaArrowLeft onClick={() => onSubmit(1, false)} className='text-lg cursor-pointer' />
                    <div className='text-white text-2xl font-Semibold'>
                        Creat A New Pool
                    </div>
                </div>
                <p className='text-gray-primary text-sm'>Select a pair of tokens to provide liquidity to a new pool.</p>
            </div>

            <div className=''>
                <div className='flex flex-col'>
                    <div className=' bg-gray-secandary px-3 lg:px-5 2xl:px-10 py-4 rounded-xl'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between space-x-4'>
                                <input type='number' step="any" min={0} max={128.25} value={asd}
                                    onChange={(e) => e.target.value >= 0 && e.target.value <= 128.25 && setasd(e.target.value)} className='text-3xl bg-transparent border-none outline-none font-semibold text-white w-full' />
                                <div className='flex items-center space-x-3'>
                                    <div className='btn-gradient rounded-lg text-xs py-1.5 px-3 font-semibold'>Max</div>
                                    <div
                                        onClick={() => onClickTokenBtn(1, true)}
                                        className='py-2  cursor-pointer w-28 bg-white rounded-lg flex items-center justify-center  space-x-1'>
                                        <img src={ASSETS.CURRENCY.ADA} alt="" />
                                        <div className='text-base font-semibold'>ADA</div>
                                        <FaChevronDown className='text-sm' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-xs space-x-1'><span className='text-white font-semibold'>Max:</span><span className='text-gray-primary'> 128.25 ADA</span></div>
                                <div className='text-xs space-x-1'><span className='text-white font-semibold'>Balance:</span><span className='text-gray-primary'> $129.25</span></div>
                            </div>
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
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between space-x-4'>
                                <input type='number' step="any" min={0} max={128.25} value={usdc}
                                    onChange={(e) => e.target.value >= 0 && e.target.value <= 128.25 && setusdc(e.target.value)} className='text-3xl bg-transparent border-none outline-none font-semibold text-white w-full' />
                                <div className='flex items-center space-x-3'>
                                    {/* <div className='btn-gradient rounded-lg text-xs py-1.5 px-3 font-semibold'>Max</div> */}
                                    <div
                                        onClick={() => onClickTokenBtn(1, true)}
                                        className='py-2  cursor-pointer bg-white w-28 rounded-lg flex items-center justify-center space-x-1'>
                                        <img src={ASSETS.CURRENCY.USDC} alt="" />
                                        <div className='text-base font-semibold'>USDC</div>
                                        <FaChevronDown className='text-sm' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='text-xs space-x-1'><span className='text-white font-semibold'>Max:</span><span className='text-gray-primary'> 128.25 USDC</span></div>
                                <div className='text-xs space-x-1'><span className='text-white font-semibold'>Balance:</span><span className='text-gray-primary'> $129.25</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {asd > 0 && usdc > 0 &&

                <div className='py-3 bg-gray-secandary border-2 border-border-card cursor-pointer  rounded-lg  space-x-1'>
                    <div className={`  flex items-center justify-between px-3 lg:px-5 2xl:px-10`}>
                        <div className='flex items-center space-x-2 '>
                            <div className='text-sm font-semibold text-white '>Receive LP Tokens:62 2345| Total fee: 4.678 ADA</div>
                        </div>
                        <FaChevronDown onClick={() => settransactionDetails(!transactionDetails)} className='text-sm cursor-pointer text-gray-primary' />
                    </div>
                    {
                        transactionDetails && <div className='flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10'>
                            <div className='flex items-center justify-between text-xs text-gray-light'>
                                <div>Transaction Fee</div><div>1.1792 ADA</div>
                            </div>
                        </div>
                    }
                </div>
            }
            <div className='space-y-5'>
                <button
                    onClick={() => onSubmit(2, true)}
                    className='btn-gradient w-full text-center text-xs py-3 sm:text-base font-semibold'>Add Liquidity</button>

            </div>

            {
                asd == 0 && usdc == 0 &&
                <div className='flex flex-col space-y-2 mt-4  px-3 lg:px-5 2xl:px-10 bg-gray-secandary border-2 border-border-card cursor-pointer  rounded-lg  '>
                    <div className='text-xs text-gray-light py-2 flex items-center space-x-2'>
                        <BiError /> <span>To create a pool, you need collateral</span>
                    </div>
                </div>
            }
        </div>
    </div>

    return (
        selectToken.status && selectToken.modal === 1 ?
            <SelectTokenComponent onEnterToken={(value, modal) => onClickTokenBtn(value, modal)} />
            :
            content
    )
}
