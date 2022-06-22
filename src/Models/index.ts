import { Token, TokenAmount, Pair, Fraction, Percent, JSBI } from "gotchiw3s-sdk";
import { ethers } from "ethers";

export type SelectToken = {
    name: string | undefined;
    address: string;
    symbol: string | undefined;
    decimals: number;
    chainId: number;
    logoURI?: string | undefined;
    isSearched?: boolean;
}

export type Contract = {
    factory: ethers.Contract | undefined,
    router2: ethers.Contract | undefined, 
    pair: ethers.Contract | undefined, 
    ERC20: ethers.Contract | undefined,
}

export type TokenPool = {
    id: number,
    token: Token,
    isApproved: boolean, 
    pooled: TokenAmount, 
    inputAdd: TokenAmount | undefined, 
    inputRemove: TokenAmount | undefined, 
    balance: TokenAmount | undefined,
    logo?: string,
    loading: boolean,
}

export type LPTokenPool = {
    token: Token | undefined, 
    isApproved: boolean | undefined, 
    balance: TokenAmount | undefined,
    lpRemoveInput: TokenAmount | undefined,
    share: Percent,
    loading: boolean,
}

export interface IPool {
    id: number
    name: string;
    pair: Pair;
    lpToken: LPTokenPool;
    logoURI?: {tokenA?: string, tokenB?: string};
    isApproved?: boolean
    totalReserves: {tokenA: TokenAmount, tokenB: TokenAmount}
    isPool?: boolean | undefined
    tokenA: TokenPool
    tokenB: TokenPool
}

export class Pool implements IPool {
    id: number
    name: string;
    pair: Pair;
    isPool = undefined
    lpToken: LPTokenPool
    totalReserves:  {tokenA: TokenAmount, tokenB: TokenAmount}
    tokenA: TokenPool 
    tokenB: TokenPool

    constructor(id: number, name: string, tokenA: Token, tokenB: Token, factoryAddress: string, initCodeHash: string,  logoURI?: {tokenA?: string, tokenB?: string}) {
        this.id = id;
        this.name = name;
        this.pair = new Pair(
            new TokenAmount(tokenA, JSBI.BigInt("0")), 
            new TokenAmount(tokenB, JSBI.BigInt("0")),
            factoryAddress,
            initCodeHash,
            );
        this.totalReserves = {
            tokenA: new TokenAmount(tokenA, JSBI.BigInt("0")), 
            tokenB: new TokenAmount(tokenB, "0")
        }
        this.lpToken = {
            token: undefined, 
            isApproved: undefined, 
            balance: undefined,
            lpRemoveInput: undefined,
            share: new Percent("0", "100"),
            loading: false,
        }
        this.tokenA = {
            id: 0,
            token: tokenA,
            isApproved: false, 
            pooled: new TokenAmount(tokenA, JSBI.BigInt("0")), 
            inputAdd: undefined, 
            inputRemove: undefined, 
            balance: undefined,
            logo: logoURI?.tokenA,
            loading: false,
        }
        this.tokenB = {
            id: 1,
            token: tokenB,
            isApproved: false, 
            pooled: new TokenAmount(tokenB, JSBI.BigInt("0")), 
            inputAdd: undefined, 
            inputRemove: undefined, 
            balance: undefined,
            logo: logoURI?.tokenB,
            loading: false,
        }
        
    }
}

export type PoolProvider = {
    tokenA: Token | undefined,
    tokenALogo: string | undefined,
    tokenB: Token | undefined,
    tokenBLogo: string | undefined,
    pools: Pool[],
    pool?: IPool,
    dispatch: (action: any, state?: Object,) => void,
}

export type AddLiquidity = {
    token0: Token | undefined,
    token0Logo: string | undefined,
    token0Balance: TokenAmount| undefined,
    token0Amount: TokenAmount | undefined,
    token1: Token | undefined, 
    token1Logo: string | undefined,
    token1Balance: TokenAmount| undefined,
    token1Amount: TokenAmount| undefined,
    pair: Pair | undefined,
    isPool: Boolean,
    isApproved: {token0: boolean, token1: boolean} | undefined,
    reserves: {tokenA: TokenAmount, tokenB: TokenAmount} | undefined,
    dispatch: (action: any, state?: Object,) => void,
}

export type AddLiquidityTx = {
    router2: ethers.Contract,
    pair: Pair,
    amount0: TokenAmount,
    amount1: TokenAmount,
    userAddress: string,
}

export type RemoveLiquidityProvider = {
    token0: Token | undefined,
    token0Logo: string | undefined,
    token0Balance: TokenAmount| undefined,
    token0Amount: TokenAmount | undefined,
    token1: Token | undefined, 
    token1Logo: string | undefined,
    token1Balance: TokenAmount| undefined,
    token1Amount: TokenAmount| undefined,
    pair: Pair | undefined,
    isPool: Boolean,
    isApproved: {token0: boolean, token1: boolean} | undefined,
    reserves: Fraction,
    dispatch: (action: any, state?: Object,) => void,
}