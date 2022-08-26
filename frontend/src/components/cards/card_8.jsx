import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { ASSETS } from '../../assets/path'
import { SearchForm } from '../SearchInput'

export const SelectTokenComponent = ({ onEnterToken }) => {
    const content = (
        <div
            className={`w-full bg-transparent sm:w-10/12 md:w-7/12 lg:w-1/2 xl:w-1/3 rounded-2xl z-30 p-4 md:p-6 lg:p-8 2xl:p-10 sm:border-2 sm:border-border-card mx-5 sm:mx-0 my-auto`}>
            <div className="space-y-6">
                <div className="text-white flex items-center text-2xl font-Semibold space-x-3">
                    <FaArrowLeft
                        onClick={() => onEnterToken(1, false)}
                        className="text-lg cursor-pointer"
                    />
                    <div>Select Token</div>
                </div>

                <SearchForm
                    style={true}
                    placeholder={'Search by name or paste address'}
                />
                <div className="border-2 border-border-card flex flex-col cursor-pointer  rounded-lg">
                    <div className="flex px-3 lg:px-5 2xl:px-10 items-center border-b py-2 border-border-card justify-between text-xs text-gray-light">
                        <div>Token Name</div>
                        <div>Amount</div>
                    </div>
                    <div
                        onClick={() => onEnterToken(1, false)}
                        className="flex  flex-col space-y-4 max-h-40 overflow-y-scroll px-3 lg:px-5 2xl:px-10 py-5 font-bold text-xs sm:text-sm text-white">
                        <div className="flex items-center justify-between ">
                            <div className="space-x-2 flex items-center">
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <span>ADA</span>
                            </div>
                            <div>0</div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="space-x-2 flex items-center">
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <span>ADA</span>
                            </div>
                            <div>0</div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="space-x-2 flex items-center">
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <span>ADA</span>
                            </div>
                            <div>0</div>
                        </div>
                        <div className="flex items-center justify-between ">
                            <div className="space-x-2 flex items-center">
                                <img src={ASSETS.CURRENCY.ADA} alt="" />
                                <span>ADA</span>
                            </div>
                            <div>0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return content
}
