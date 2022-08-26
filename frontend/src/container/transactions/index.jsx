import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { ProcessCard } from '../../components/cards/card_1'
import { ProcessCard_2 } from '../../components/cards/card_2'
import { RequestSubmitted } from '../../components/cards/card_3'
import { WidthrowProcess_1 } from '../../components/cards/card_4'
import { ConfirmWithdrawProcess } from '../../components/cards/card_5'
import { AddLiquidity } from '../../components/cards/card_6'
import { ConfirmPair } from '../../components/cards/card_7'
import { SearchForm } from '../../components/SearchInput'
import { Main } from '../main'


export const Transactions = () => {
    const navigate = useNavigate()

    const [tab, settab] = useState(1)
    const [toggleID, settoggleID] = useState('')
    const [LiquidityPool, setLiquidityPool] = useState(
        [
            {
                token_pair: 'ADA/madUSDC',
                liquidity: '$123M',
                base_price: '2.3556ADA',
                volume24h: 'Volume 24h',
                time_locked: '$100M',
            },
        ])


    const content = (
        <div className="page-padding py-4 md:py-10 w-full md:w-10/12 space-y-6">

            <div className="border-2 space-y-4 flex flex-col border-border-card bg-black-dark rounded-xl w-full py-4 xl:py-8 px-4 lg:px-10">
                <div className='flex space-y-3 md:space-y-0 flex-col md:flex-row md:items-center md:justify-between '>
                    <div className='border-2 flex items-center px-1 py-2  border-border-card rounded-xl text-white font-semibold text-base'>
                        <button
                            onClick={() => settab(1)}
                            className={`${tab === 1 && 'btn-gradient'} px-4 py-1 rounded-lg`}>Pending</button>
                        <button
                            onClick={() => settab(2)}
                            className={`${tab === 2 && 'btn-gradient'} px-4 py-1 rounded-lg`}>Rejected</button>
                        <button
                            onClick={() => settab(3)}
                            className={`${tab === 3 && 'btn-gradient'} px-4 py-1 rounded-lg`}>Completed</button>
                    </div>
                    <SearchForm placeholder={'Search by token name'} onEnterSearch={"Search by token name"} />
                </div>
                <div className="rounded-xl bg-gray-table w-full overflow-hidden border-2  border-border-card">
                    <div className="overflow-x-auto">
                        {tab === 1 ?
                            <table className="table-auto border-collapse space-y-10  w-full  text-white">
                                {/* Table header */}
                                <thead className="text-xs uppercase  text-gray-light border-b-2 border-border-card">
                                    <tr className="py-4 ">
                                        <th className="px-4 whitespace-nowrap py-4 ">
                                            <div className="font-semibold text-left">
                                                Type
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Event
                                            </div>
                                        </th>
                                        <th className="px-4 flex items-center space-x-2 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Status
                                            </div>
                                        </th>
                                    </tr>
                                </thead>


                                {LiquidityPool?.map((item, index) => (
                                    <tbody key={index}>
                                        <tr
                                            className="text-xs border-b border-border-card font-semibol">
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.token_pair}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.liquidity}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                <button className='border-2 border-border-card bg-gray-table py-2 px-4'>Pending</button>
                                            </td>
                                        

                                            <td className="px-3  py-4 whitespace-nowrap w-42 flex items-center justify-end">
                                                <button onClick={() => item.id === toggleID ? settoggleID('') : settoggleID(item.id)} className="btn-gradient-outline  py-1 px-4 font-semibold w-16">
                                                    {toggleID === item.id ? "Less" : "More"}
                                                </button>
                                            </td>
                                        </tr>
                                        {
                                            item.id === toggleID && <tr

                                                className="text-xs border-b bg-black-dark rounded-xl overflow-hidden border-border-card font-semibold w-full">
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>LP Fee</div>
                                                    <div className='font-semibold'>0.3%</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Cardano Explorer</div>
                                                    <div className='font-semibold'>01E...42C</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Duration of Lock</div>
                                                    <div className='font-semibold'>4 Months</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Percentage Locked</div>
                                                    <div className='font-semibold'>92.8%</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    {/* <div className='text-gray-light'>Percentage Locked</div>
                                          <div className='font-semibold'>92.8%</div> */}
                                                </td>


                                                <td className="px-4 py-4 whitespace-nowrap space-x-2 w-42 flex items-center justify-end">

                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                ))}

                            </table>
                            : tab === 2 ?
                                <table className="table-auto border-collapse space-y-10  w-full  text-white">
                                    {/* Table header */}
                                    <thead className="text-xs uppercase  text-gray-light border-b-2 border-border-card">
                                        <tr className="py-4 ">
                                            <th className="px-4 whitespace-nowrap py-4 ">
                                                <div className="font-semibold text-left">
                                                    Type
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Event
                                                </div>
                                            </th>
                                            <th className="px-4 flex items-center space-x-2 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Status
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>


                                    {LiquidityPool?.map((item, index) => (
                                        <tbody key={index}>
                                            <tr
                                                className="text-xs border-b border-border-card font-semibol">
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.token_pair}
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.liquidity}
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    <button className='border-2 border-border-card bg-gray-table py-2 px-4'>Pending</button>
                                                </td>
                                          

                                                <td className="px-3  py-4 whitespace-nowrap w-42 flex items-center justify-end">
                                                    <button onClick={() => item.id === toggleID ? settoggleID('') : settoggleID(item.id)} className="btn-gradient-outline  py-1 px-4 font-semibold w-16">
                                                        {toggleID === item.id ? "Less" : "More"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {
                                                item.id === toggleID && <tr

                                                    className="text-xs border-b bg-black-dark rounded-xl overflow-hidden border-border-card font-semibold w-full">
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>LP Fee</div>
                                                        <div className='font-semibold'>0.3%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Cardano Explorer</div>
                                                        <div className='font-semibold'>01E...42C</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Duration of Lock</div>
                                                        <div className='font-semibold'>4 Months</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Percentage Locked</div>
                                                        <div className='font-semibold'>92.8%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        {/* <div className='text-gray-light'>Percentage Locked</div>
                                      <div className='font-semibold'>92.8%</div> */}
                                                    </td>


                                                    <td className="px-4 py-4 whitespace-nowrap space-x-2 w-42 flex items-center justify-end">

                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    ))}

                                </table>
                                :
                                <table className="table-auto border-collapse space-y-10  w-full  text-white">
                                    {/* Table header */}
                                    <thead className="text-xs uppercase  text-gray-light border-b-2 border-border-card">
                                        <tr className="py-4 ">
                                            <th className="px-4 whitespace-nowrap py-4 ">
                                                <div className="font-semibold text-left">
                                                    Type
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Event
                                                </div>
                                            </th>
                                            <th className="px-4 flex items-center space-x-2 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Status
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>


                                    {LiquidityPool?.map((item, index) => (
                                        <tbody key={index}>
                                            <tr
                                                className="text-xs border-b border-border-card font-semibol">
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.token_pair}
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.liquidity}
                                                </td>
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    <button className='border-2 border-border-card bg-gray-table py-2 px-4'>Pending</button>
                                                </td>
                                            

                                                <td className="px-3  py-4 whitespace-nowrap w-42 flex items-center justify-end">
                                                    <button onClick={() => item.id === toggleID ? settoggleID('') : settoggleID(item.id)} className="btn-gradient-outline  py-1 px-4 font-semibold w-16">
                                                        {toggleID === item.id ? "Less" : "More"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {
                                                item.id === toggleID && <tr

                                                    className="text-xs border-b bg-black-dark rounded-xl overflow-hidden border-border-card font-semibold w-full">
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>LP Fee</div>
                                                        <div className='font-semibold'>0.3%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Cardano Explorer</div>
                                                        <div className='font-semibold'>01E...42C</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Duration of Lock</div>
                                                        <div className='font-semibold'>4 Months</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Percentage Locked</div>
                                                        <div className='font-semibold'>92.8%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        {/* <div className='text-gray-light'>Percentage Locked</div>
                                      <div className='font-semibold'>92.8%</div> */}
                                                    </td>


                                                    <td className="px-4 py-4 whitespace-nowrap space-x-2 w-42 flex items-center justify-end">

                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    ))}

                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    return <Main content={
        content
    }
    />
}
