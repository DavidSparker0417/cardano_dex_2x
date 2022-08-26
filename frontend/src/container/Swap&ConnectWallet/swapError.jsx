import React from 'react'
import { useNavigate } from 'react-router-dom';
 
import { ASSETS } from '../../assets/path';

import { Main } from '../main';


export const SwapError = ({onEnterToken}) => {
    const navigate = useNavigate()

    const content = <div className='w-full my-auto sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0'>
        <div className='space-y-6 flex flex-col items-center'>
            <img src={ASSETS.CONNECT_WALLET.CONNECT_WALLET_CANCEL} />
            <div className='space-y-2'>
                <div className='text-white text-2xl font-Semibold text-center'>
                    Swap Error
                </div>
            </div>

            <div className='text-gray-light text-xs sm:text-sm text-center'>
            An error occured, transaction wasn’t completed. Please try again
            </div>
            <button onClick={() => onEnterToken(1,false)} className='btn-gradient w-full py-2 font-semibold'>
                Close
            </button>
        </div>
    </div>

    return (
        content
    )
}
