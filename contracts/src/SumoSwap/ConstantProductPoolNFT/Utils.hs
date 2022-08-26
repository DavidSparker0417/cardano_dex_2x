{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE NoImplicitPrelude #-}

module SumoSwap.ConstantProductPoolNFT.Utils
  ( poolNFTOf,
  )
where

import Ledger (AssetClass, Value)
import SumoSwap.Types.Coin
import Plutus.V1.Ledger.Api (Value (Value))
import Plutus.V1.Ledger.Value (CurrencySymbol)
import qualified PlutusTx.AssocMap as Map
import PlutusTx.Prelude

-- Inserted By Alexandra   20220821

{-# INLINEABLE poolNFTOf #-}
poolNFTOf :: Value -> CurrencySymbol -> AssetClass
poolNFTOf (Value v) nftSymbol = case Map.lookup nftSymbol v of
  Nothing -> traceError ""
  Just i -> case [o | o@(_, am) <- Map.toList i, am == 1] of
    [(tn, _)] -> assetClass nftSymbol tn
    _ -> traceError ""
