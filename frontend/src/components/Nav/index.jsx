import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ASSETS } from '../../assets/path'
import { BsPlusCircle } from 'react-icons/bs'
export const Nav = () => {
    const navigate = useNavigate()

    const location = useLocation()

    const [colorChange, setColorchange] = useState(false)

    const [menu, setmenu] = useState(false)

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setColorchange(true)
            } else {
                setColorchange(false)
            }
        }
        window.addEventListener('scroll', changeNavbarColor)
        return () => {
            document.removeEventListener('scroll', changeNavbarColor)
        }
    }, [])

    const NavStyle =
        'cursor-pointer h-full flex items-center border-b-3 text-white border-transparent'

    const NavStyleActive =
        'cursor-pointer h-full flex items-center border-b-3 text-orange-dark border-orange-dark'

    return (
        <div className="relative w-full">
            <div
                className={`page-padding h-20  flex items-center justify-between border-b border-border-card  w-full z-50 duration-1000 ${
                    colorChange
                        ? 'bg-purple-primary text-white'
                        : 'bg-transparent text-white'
                } `}>
                <div className="flex space-x-20 h-full">
                    <Link to="/" className="flex jus items-center space-x-2 ">
                        <img src={ASSETS.LOGO.LOGO_1} alt="" />
                    </Link>
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-8 h-full text-xs lg:text-sm xl:text-base">
                        <div className="space-x-3 lg:space-x-6 h-full flex items-center Poppins-Regular">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? NavStyleActive : NavStyle
                                }>
                                Events
                            </NavLink>
                            <NavLink
                                to="/liquidity"
                                className={({ isActive }) =>
                                    isActive ? NavStyleActive : NavStyle
                                }>
                                Liquidity
                            </NavLink>
                            <NavLink
                                to="/token-locker"
                                className={({ isActive }) =>
                                    isActive ? NavStyleActive : NavStyle
                                }>
                                Token Locker
                            </NavLink>
                            <NavLink
                                to="/transactions"
                                className={({ isActive }) =>
                                    isActive ? NavStyleActive : NavStyle
                                }>
                                Transactions
                            </NavLink>
                        </div>
                    </div>
                </div>
                {location.pathname != '/' ? (
                    <Link
                        to="/connect-wallet"
                        className="btn-gradient-outline hidden md:flex items-center space-x-2 text-center text-xs py-3 px-5 font-semibold">
                        <span>addr1q9…qfq30</span>
                        <img src={ASSETS.NAV.FINANCE} />
                    </Link>
                ) : (
                    <Link
                        to="/connect-wallet"
                        className="btn-gradient hidden md:flex items-center space-x-2 text-center text-xs py-3 px-3 sm:text-base font-semibold">
                        <span>Connect Wallet</span>
                        <BsPlusCircle />
                    </Link>
                )}
                <FaBars
                    className="text-white cursor-pointer block md:hidden"
                    onClick={() => setmenu(!menu)}
                />
            </div>
            {menu && (
                <div className="md:hidden   min-h-screen z-50 text-white flex flex-col items-center w-full bg-purple-standard text-lg">
                    <div className="flex items-start justify-end w-full p-10">
                        <FaTimes
                            className="text-white cursor-pointer"
                            onClick={() => setmenu(!menu)}
                        />
                    </div>
                    <div className="space-y-10 text-center Poppins-Regular">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? NavStyleActive : NavStyle
                            }>
                            Events
                        </NavLink>
                        <NavLink
                            to="/liquidity"
                            className={({ isActive }) =>
                                isActive ? NavStyleActive : NavStyle
                            }>
                            Liquidity
                        </NavLink>
                        <NavLink
                            to="/token-locker"
                            className={({ isActive }) =>
                                isActive ? NavStyleActive : NavStyle
                            }>
                            Token Locker
                        </NavLink>
                        <NavLink
                            to="/transactions"
                            className={({ isActive }) =>
                                isActive ? NavStyleActive : NavStyle
                            }>
                            Transactions
                        </NavLink>
                        <Link
                            to="/connect-wallet"
                            className="btn-gradient flex items-center space-x-2 text-center text-xs py-3 px-3 sm:text-base font-semibold">
                            <span>Connect Wallet</span>
                            <BsPlusCircle />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
