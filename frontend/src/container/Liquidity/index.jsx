import React, { useState } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ASSETS } from '../../assets/path'
import { ProcessCard } from '../../components/cards/card_1'
import { ProcessCard_2 } from '../../components/cards/card_2'
import { RequestSubmitted } from '../../components/cards/card_3'
import { WidthrowProcess_1 } from '../../components/cards/card_4'
import { ConfirmWithdrawProcess } from '../../components/cards/card_5'
import { AddLiquidity } from '../../components/cards/card_6'
import { ConfirmPair } from '../../components/cards/card_7'
import { SearchForm } from '../../components/SearchInput'
import { Main } from '../main'
import { CreatePool } from './createPool'

export const Liquidity = () => {

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

    const [manageLiquidity, setmanageLiquidity] = useState({
        status: false,
        modal: 1,
    })

    const [poolToggle, setpoolToggle] = useState({
        status: false,
        modal: 1,
    })


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

    const onClickAddLiquidityBtn = (value, modalStatus) => {
        const clone = { ...manageLiquidity }
        clone.status = modalStatus,
            clone.modal = value
        setmanageLiquidity(clone)
    }

    const onClickPoolBtn = (value, modalStatus) => {
        const clone = { ...poolToggle }
        clone.status = modalStatus,
            clone.modal = value
        setpoolToggle(clone)
    }

    const content = (
        <div className="page-padding py-4 md:py-10 w-full md:w-10/12 space-y-6">
            <div className="border-2 space-y-3 md:space-y-0 border-border-card bg-black-dark rounded-xl flex flex-col md:flex-row md:items-center md:justify-between w-full py-4 xl:py-8 px-4 lg:px-10">
                <div className="space-y-2">
                    <div className="text-white text-2xl font-Semibold">
                        Liquidity
                    </div>
                    <p className="text-gray-primary text-sm">
                        Choose a pair from the list of pools
                    </p>
                </div>
                <div className="flex items-center space-x-4 text-xs text-center sm:text-sm xl:text-base h-8 sm:h-12">
                    <button
                        onClick={() => onClickLockedBtn(1, true)}
                        className="btn-gradient h-full px-2 sm:px-4 font-semibold w-full flex items-center justify-center  space-x-2">
                        <span>Lock Liquidity</span>
                        <img
                            src={ASSETS.LIQUIDITY.LIQUIDITY_LOCK}
                            alt=""
                            className="w-4 h-4 bg-re"
                        />
                    </button>
                    <button
                        onClick={() => onClickPoolBtn(1, true)}
                        className="btn-gradient-outline h-full px-2 sm:px-4 font-semibold w-full">
                        Create New Pool
                    </button>
                </div>
            </div>

            <div className="border-2 space-y-4 flex flex-col border-border-card bg-black-dark rounded-xl w-full py-4 xl:py-8 px-4 lg:px-10">
                <div className='flex space-y-3 md:space-y-0 flex-col md:flex-row md:items-center md:justify-between '>
                    <div className='border-2 flex items-center justify-center sm:justify-start px-1 py-2  border-border-card rounded-xl text-white font-semibold text-xs sm:text-sm md:text-base'>
                        <button onClick={() => settab(1)} className={`${tab === 1 && 'btn-gradient'} px-2 sm:px-4 py-1 whitespace-nowrap rounded-lg`}>Liquidity Pool</button>
                        <button onClick={() => settab(2)} className={`${tab === 2 && 'btn-gradient'} px-2 sm:px-4 py-1 whitespace-nowrap rounded-lg`}>Liquidity Pool</button>
                        <button onClick={() => settab(3)} className={`${tab === 3 && 'btn-gradient'} px-2 sm:px-4 py-1 whitespace-nowrap rounded-lg`}>Locked Liquidity</button>
                    </div>
                    <SearchForm onEnterSearch={"Search by token name"} />
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
                                                Token Pair
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Liquidity
                                            </div>
                                        </th>
                                        <th className="px-4 flex items-center space-x-2 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Base Price
                                            </div>
                                            <BsQuestionCircle />
                                        </th>

                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Volume 24h
                                            </div>
                                        </th>
                                        <th className="px-4 whitespace-nowrap py-4">
                                            <div className="font-semibold text-left">
                                                Volume 24h
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
                                            <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                {item.time_locked}
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
                                                    <button className="btn-gradient-outline  py-1 px-4 font-semibold">
                                                        Swap
                                                    </button>
                                                    <button
                                                        onClick={() => onClickAddLiquidityBtn(1, true)}
                                                        className="btn-gradient  py-1 px-4 font-semibold h-7">
                                                        Add Liquidity
                                                    </button>
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
                                                    Token Pair
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Liquidity
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Owned LP Tokens
                                                </div>

                                            </th>

                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Volume 24h
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Fees 24h
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
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.volume24h}
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
                                                        <div className='text-gray-light'>Issued LP Tokens</div>
                                                        <div className='font-semibold'>0.3%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>ADA Value</div>
                                                        <div className='font-semibold'>01E...42C</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>madUSDC Value</div>
                                                        <div className='font-semibold'>4 Months</div>
                                                    </td>

                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                    </td>


                                                    <td className="px-4 py-4 whitespace-nowrap space-x-2 w-42 flex items-center justify-end">
                                                        <button
                                                            onClick={() => onClickWithdrawBtn(1, true)}
                                                            className="btn-gradient-outline  py-1 px-4 font-semibold">
                                                            Widthdraw
                                                        </button>
                                                        <button
                                                            onClick={() => onClickWithdrawBtn(1, true)}
                                                            className="btn-gradient  py-1 px-4 font-semibold h-7">
                                                            Manage
                                                        </button>
                                                    </td>
                                                </tr>
                                            }

                                        </tbody>
                                    ))}

                                </table> :
                                <table className="table-auto border-collapse space-y-10  w-full  text-white">
                                    {/* Table header */}
                                    <thead className="text-xs uppercase  text-gray-light border-b-2 border-border-card">
                                        <tr className="py-4 ">
                                            <th className="px-4 whitespace-nowrap py-4 ">
                                                <div className="font-semibold text-left">
                                                    Token Pair
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Value Locked
                                                </div>
                                            </th>
                                            <th className="px-4  whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Unlock Date
                                                </div>
                                            </th>
                                            <th className="px-4 whitespace-nowrap py-4">
                                                <div className="font-semibold text-left">
                                                    Locked Liquidity
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
                                                <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                    {item.time_locked}
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
                                                        <div className='text-gray-light'>Cardano Explorer</div>
                                                        <div className='font-semibold'>0.3%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>ADA Value</div>
                                                        <div className='font-semibold'>01E...42C</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>madUSDC Value</div>
                                                        <div className='font-semibold'>4 Months</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Total LP Tokens</div>
                                                        <div className='font-semibold'>92.8%</div>
                                                    </td>
                                                    <td className="w-1/4 space-y-2  whitespace-nowrap px-4 py-4">
                                                        <div className='text-gray-light'>Total LP Locked</div>
                                                        <div className='font-semibold'>92.8%</div>
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
    return <Main content={
        LockedToken.status && LockedToken.modal === 1 ?
            <ProcessCard
                Heading={'Lock Liquidity'}
                Paragraph="Use the locker to prove to investors you have locked liquidity."
                SubHeading_1={'Lock Liquidity'}
                SubHeading_2={'Withdraw Liquidity'}
                onSearch={''}
                onSubmit={(value, status) => onClickLockedBtn(value, status)}
                // Link={'/approve-lock-liquidity'}
                placeholder={'Enter the pair address you would like to lock liquidity for'}
            /> : LockedToken.status && LockedToken.modal === 2 ?
                <ProcessCard_2
                    Heading={'Lock Liquidity'}
                    Paragraph="Use the locker to prove to investors you have locked liquidity."
                    SubHeading_1={'Lock Liquidity'}
                    SubHeading_2={'Withdraw Liquidity'}
                    onSearch={''}
                    onSubmit={(value, status) => onClickLockedBtn(value, status)}
                /> : LockedToken.status && LockedToken.modal === 3 ?
                    <RequestSubmitted
                        Heading={'Lock Liquidity Submitted'}
                        onSubmit={(value, status) => onClickLockedBtn(value, status)}
                        Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'} />
                    : widthdrawToken.status && widthdrawToken.modal === 1 ?
                        <WidthrowProcess_1
                            Heading={'Manage Liquidity'}
                            Paragraph="Add or Remove liquidity for ADA/USDC"
                            SubHeading_1={'Add Liquidity'}
                            SubHeading_2={'Withdraw Liquidity'}
                            onSubmit={(value, modal) => onClickWithdrawBtn(value, modal)}
                        /> :
                        widthdrawToken.status && widthdrawToken.modal === 2 ?
                            <ConfirmWithdrawProcess
                                Heading={'Confirm Withdraw'}
                                onSubmit={(value, modal) => onClickWithdrawBtn(value, modal)}
                            /> : widthdrawToken.status && widthdrawToken.modal === 3 ?
                                <RequestSubmitted
                                    Heading={'Remove Liquidity Request Submitted'}
                                    onSubmit={(value, status) => onClickWithdrawBtn(value, status)}
                                    Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'} />
                                :
                                manageLiquidity.status && manageLiquidity.modal === 1 ?
                                    <AddLiquidity
                                        onSubmit={(value, modal) => onClickAddLiquidityBtn(value, modal)}
                                    /> :
                                    manageLiquidity.status && manageLiquidity.modal === 2 ?
                                        <ConfirmPair
                                            Heading={'Confirm  Pair'}
                                            onSubmit={(value, modal) => onClickAddLiquidityBtn(value, modal)}
                                        /> :
                                        manageLiquidity.status && manageLiquidity.modal === 3 ?
                                            <RequestSubmitted
                                                Heading={'Add Liquidity Request Submitted'}
                                                Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'}
                                                onSubmit={(value, modal) => onClickAddLiquidityBtn(value, modal)}
                                            /> :
                                            poolToggle.status && poolToggle.modal === 1 ?
                                                <CreatePool
                                                    onSubmit={(value, modal) => onClickPoolBtn(value, modal)}
                                                /> :
                                                poolToggle.status && poolToggle.modal === 2 ?
                                                    <ConfirmPair
                                                        Heading={'Confirm  Liquidity'}
                                                        onSubmit={(value, modal) => onClickPoolBtn(value, modal)}
                                                    /> :
                                                    poolToggle.status && poolToggle.modal === 3 ?
                                                        <RequestSubmitted
                                                            Heading={'New Pool Submitted'}
                                                            Paragraph={'It may take a while for your transaction to be confirmed by the blockchain after submitting. You can always check your transaction status in transaction list.'}
                                                            onSubmit={(value, modal) => onClickPoolBtn(value, modal)}
                                                        /> :

                                                        content
    }
    />
}
