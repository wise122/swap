import BigNumber from "bignumber.js";
export type AshToken = {
  id: string;
  coingeckoId: string;
  decimals: number;
};
export type SorSwap = {
  poolId: string;
  assetInIndex: number;
  assetOutIndex: number;
  amount: string;
  returnAmount: string;
  assetIn: string;
  assetOut: string;
  functionName: string;
  arguments: string[];
};
export type SorHop = {
  poolId: string;
  tokenInAmount: string;
  tokenOutAmount: string;
  tokenIn: string;
  tokenOut: string;
  pool: {
    allTokens: Array<{ address: string; decimal: number }>;
    type: string;
  };
};
export type SorRoute = {
  hops: SorHop[];
  share: number;
  tokenIn: string;
  tokenInAmount: string;
  tokenOut: string;
  tokenOutAmount: string;
};

export type AggregatorStep = {
  token_in: string;
  token_out: string;
  amount_in: BigNumber;
  pool_address: string;
  function_name: string;
  arguments: Buffer[];
};
