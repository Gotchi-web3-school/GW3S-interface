import { useContext, useState } from "react"
import { useWeb3React } from "@web3-react/core";
import {Button, Box, Center, Stack, Spinner } from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';
import { injected } from '../../../connectors/connectors';
import { AddLiquidityContext } from "../../../Provider/AddLiquidityProvider";
import { ContractContext } from "../../../Provider/ContractsProvider";
import { Token } from "quickswap-sdk";
import { GlobalConst } from "../../../constants";
import InputToken0 from "./InputToken0";
import InputToken1 from "./InputToken1";
import PoolShare from "./PoolShare";
import MintButton from "./MintButton";

const AddLiquidity: React.FC = () => {
  const {active, activate} = useWeb3React();
  const { pair, isApproved, token0, token1, token0Amount, token1Amount } = useContext(AddLiquidityContext);
  const { ERC20 } = useContext(ContractContext);
  const [loading0, setLoading0] = useState<boolean>(false)
  const [loading1, setLoading1] = useState<boolean>(false)

  const handleClickButton = async (token: Token, tokenAmount: string, idx: number) => {
      const contract = ERC20?.attach(token.address)
      const tx = await contract?.approve(GlobalConst.addresses.ROUTER_ADDRESS, GlobalConst.utils.MAX_INT)
      idx === 0 ? setLoading0(true) : setLoading1(true)
      const receipt = await tx.wait()
      console.log(receipt)
      idx === 0 ? setLoading0(false) : setLoading1(false)
      idx === 0 ? isApproved.token0 = true : isApproved.token1 = true
  }

  return (
    <Box >
      <InputToken0 />
      <Center>
        <AddIcon my="4"/>
      </Center>
      <InputToken1 />

      {pair && <PoolShare />}
      <Stack mt="3"  direction="row">
        {!isApproved.token0 && token0 && token0Amount ? <Button disabled={loading0} key={0} onClick={e => handleClickButton(token0, token0Amount, 0)} bg="yellow.600" _hover={{bg: "yellow.700"}} w="100%">{loading0 ? <Spinner /> : `Approve ${token0?.symbol}`}</Button> : ""}
        {!isApproved.token1 && token1 && token1Amount? <Button disabled={loading1} key={1} onClick={e => handleClickButton(token1, token1Amount, 1)} bg="yellow.600" _hover={{bg: "yellow.700"}} w="100%">{loading1 ? <Spinner /> : `Approve ${token1?.symbol}`}</Button> : ""}
      </Stack>

      {!active ? 
        <Button mt="3" w="100%" h="4rem" onClick={() =>  activate(injected)}>Connect</Button>
        : 
        <MintButton />
      }
    </Box>
  )
}

export default AddLiquidity