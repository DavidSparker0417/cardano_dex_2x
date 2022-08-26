import React, { useState } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ASSETS } from '../../assets/path'
import { ProcessCard } from '../../components/cards/card_1'
import { ProcessCard_2 } from '../../components/cards/card_2'
import { RequestSubmitted } from '../../components/cards/card_3'
import { WidthrowProcess_1 } from '../../components/cards/card_4'
import { ConfirmWithdrawProcess } from '../../components/cards/card_5'
import { SearchForm } from '../../components/SearchInput'
import { Main } from '../main'

export const TokenLocker = () => {
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

    const [LockedToken, setLockedToken] = useState({
        status: false,
        modal: 1,
    })

    const [widthdrawToken, setwidthdrawToken] = useState({
        status: false,
        modal: 1,
    })


    const content = (
        <div className="page-padding py-4 md:py-10 w-full md:w-10/12 space-y-6">
            <div className="space-y-4 md:space-y-0 border-2 border-border-card bg-black-dark rounded-xl flex flex-col md:flex-row md:items-center md:justify-between w-full py-4 xl:py-8 px-4 lg:px-10">
                <div className="space-y-2">
                    <div className="text-white text-2xl font-Semibold">
                        Token Locker
                    </div>
                    <p className="text-gray-primary text-sm md:w-1/2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis ipsum leo scelerisque egestas varius. Sagittis mauris viverra varius diam feugiat aliquam. Sagittis fusce ornare odio.
                    </p>
                </div>
                <div className="text-base sm:text-sm xl:text-base h-12">
                    <button
                        onClick={() => onClickLockedBtn(1, true)}
                        className="btn-gradient h-full px-8 font-semibold w-full flex items-center space-x-2">
                        <span>Lock Token</span>
                        <img
                            src={ASSETS.LIQUIDITY.LIQUIDITY_LOCK}
                            alt=""
                            className="w-4 h-4"
                        />
                    </button>
                </div>
            </div>

            <div className="border-2 space-y-4 flex flex-col border-border-card bg-black-dark rounded-xl w-full py-4 xl:py-8 px-4 lg:px-10">
                <div className='flex space-y-4 md:space-y-0 flex-col md:flex-row md:items-center md:justify-between '>
                    <div className='border-2 flex items-center px-1 py-2  border-border-card rounded-xl text-white font-semibold text-base'>
                        <button onClick={() => settab(1)} className={`${tab === 1 && 'btn-gradient'} px-4 py-1 rounded-lg`}>Token Locked</button>
                        <button onClick={() => settab(2)} className={`${tab === 2 && 'btn-gradient'} px-4 py-1 rounded-lg`}>Completed Lock</button>
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
                                                Token Name
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Locked Amount
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Unlock Date
                                            </div>
                                        </th>

                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Lock ID
                                            </div>
                                        </th>
                                    </tr>
                                </thead>


                                {LiquidityPool?.map((item, index) => (
                                    <tbody key={index}>
                                        <tr
                                            className="text-xs  border-b border-border-card font-semibol">
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.token_pair}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.liquidity}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.base_price}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.volume24h}
                                            </td>

                                            <td className="px-2 text-transparent first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.volume24h}
                                            </td>


                                            <td className="px-3   py-4 whitespace-nowrap flex items-center justify-end">
                                                <button onClick={() => item.id === toggleID ? settoggleID('') : settoggleID(item.id)} className="btn-gradient-outline  py-1 px-4 font-semibold w-16">
                                                    {toggleID === item.id ? "Less" : "More"}
                                                </button>
                                            </td>
                                        </tr>
                                        {
                                            item.id === toggleID && <tr

                                                className="text-xs border-b bg-black-dark rounded-xl overflow-hidden border-border-card font-semibold w-full">
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Owner ID</div>
                                                    <div className='font-semibold'>0.3%</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Cardano Explorer</div>
                                                    <div className='font-semibold'>01E...42C</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Token Address</div>
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

                                                    <button
                                                        disabled={true}
                                                        className="btn-gradient-outline  py-1 px-4 font-semibold h-7">
                                                        Widthdraw
                                                    </button>
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
                                                Token Name
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Locked Amount
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Unlock Date
                                            </div>
                                        </th>

                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Lock ID
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
                                                {item.base_price}
                                            </td>
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.volume24h}
                                            </td>
                                            <td className="px-2 text-transparent first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.volume24h}
                                            </td>


                                            <td className="px-3  py-4 whitespace-nowrap flex items-center justify-end">
                                                <button onClick={() => item.id === toggleID ? settoggleID('') : settoggleID(item.id)} className="btn-gradient-outline  py-1 px-4 font-semibold w-16">
                                                    {toggleID === item.id ? "Less" : "More"}
                                                </button>
                                            </td>
                                        </tr>
                                        {
                                            item.id === toggleID && <tr

                                                className="text-xs border-b bg-black-dark rounded-xl overflow-hidden border-border-card font-semibold w-full">
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Owner ID</div>
                                                    <div className='font-semibold'>0.3%</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Cardano Explorer</div>
                                                    <div className='font-semibold'>01E...42C</div>
                                                </td>
                                                <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    <div className='text-gray-light'>Token Address</div>
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

                                                    <button
                                                        onClick={() => onClickWithdrawBtn(1, true)}
                                                        className="btn-gradient  py-1 px-4 font-semibold h-7">
                                                        Widthdraw
                                                    </button>
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

    const onClickLockedBtn = (value, modalStatus) => {
        const clone = { ...LockedToken }
        clone.status = modalStatus,
            clone.modal = value
        setLockedToken(clone)
    }

    const onClickWithdrawBtn = (value, modalStatus) => {
        const clone = { ...widthdrawToken }
        clone.status = modalStatus,
            clone.modal = value
        setwidthdrawToken(clone)
    }

    return <Main content={
        LockedToken.status && LockedToken.modal === 1 ?
            <ProcessCard
                Heading={'Token Locker'}
                Paragraph="Use the locker to prove to investors you have locked liquidity."
                SubHeading_1={'Lock Token'}
                SubHeading_2={'Withdraw Token'}
                onSearch={''}
                onSubmit={(value, status) => onClickLockedBtn(value, status)}
                // Link={'/approve-lock-liquidity'}
                placeholder={'Enter the pair address you would like to lock liquidity for'}
            /> : LockedToken.status && LockedToken.modal === 2 ?
                <ProcessCard_2
                    Heading={'Token Locker'}
                    Paragraph="Use the locker to prove to investors you have locked liquidity."
                    SubHeading_1={'Lock Token'}
                    SubHeading_2={'Withdraw Token'}
                    onSearch={''}
                    onSubmit={(value, status) => onClickLockedBtn(value, status)}
                // Link="/lock-request"
                /> : LockedToken.status && LockedToken.modal === 3 ?
                    <RequestSubmitted
                        Heading={'Lock Token Submitted'}
                        onSubmit={(value, status) => onClickLockedBtn(value, status)}
                        Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'} />
                    : widthdrawToken.status && widthdrawToken.modal === 1 ?
                        <WidthrowProcess_1
                            Heading={'Withdraw Token'}
                            Paragraph="Use the locker to prove to investors you have locked liquidity."
                            SubHeading_1={'Lock Token'}
                            SubHeading_2={'Withdraw Token'}
                            onSubmit={(value, modal) => onClickWithdrawBtn(value, modal)}
                        /> :
                        widthdrawToken.status && widthdrawToken.modal === 2 ?
                            <ConfirmWithdrawProcess
                                Heading={'Withdraw Token'}
                                onSubmit={(value, modal) => onClickWithdrawBtn(value, modal)}
                            /> : widthdrawToken.status && widthdrawToken.modal === 3 ?
                                <RequestSubmitted
                                    Heading={'Remove Liquidity Request Submitted'}
                                    onSubmit={(value, status) => onClickWithdrawBtn(value, status)}
                                    Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'} />
                                :

                                content}
    />
}
