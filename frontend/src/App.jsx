import { Routes, Route } from 'react-router-dom'
import { SwapAndConnectWallet } from './container/Swap&ConnectWallet'
import { ConnectWallet } from './container/Swap&ConnectWallet/connectWallet'
import { ConnectAccount } from './container/Swap&ConnectWallet/connectAccount'
import { Liquidity } from './container/Liquidity'
import { CreatePool } from './container/Liquidity/createPool'
import { TokenLocker } from './container/TokenLocker'
import { Transactions } from './container/transactions'

function App() {
    return (
        <Routes>
            <Route path="/" element={<SwapAndConnectWallet />} />
            <Route path="/connect-wallet" element={<ConnectWallet />} />
            <Route path="/connect-account/:id" element={<ConnectAccount />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/create-pool" element={<CreatePool />} />
            <Route path="/token-Locker" element={<TokenLocker />} />
            <Route path="/transactions" element={<Transactions />} />
        </Routes>
    )
}

export default App
