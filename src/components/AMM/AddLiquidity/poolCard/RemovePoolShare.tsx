import React from "react"
import { Text, Flex, Image, HStack, Box, Input } from "@chakra-ui/react"
import { QuestionOutlineIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { IPool } from "../../../../Models"

const RemovePoolShare: React.FC<{pool: IPool, dispatch: React.Dispatch<any>}> = ({pool, dispatch}) => {
    const { tokenA, tokenB, balance, pair, lpRemoveInput} = pool
    
    return (
        <HStack my="7" mx="4" border="1px solid white" p="5" borderRadius={"3xl"} justifyContent="center" boxShadow="inset 1px 1px 5px white">
            <Flex w="33%">
                {tokenA.logo ? <Image zIndex={1} borderRadius='full' boxSize='20px' src={tokenA.logo} alt={pair.token0.name}/> : <QuestionOutlineIcon />}
                {tokenB.logo  ? <Image position={"relative"} right="10px" borderRadius='full' boxSize='20px' src={tokenB.logo} alt={pair.token1.name}/> : <QuestionOutlineIcon />}
                <Input 
                    h="5" 
                    min={0}
                    max={balance ?? "0"}
                    value={lpRemoveInput}
                    type="number"
                    placeholder="0"
                    border="none" 
                    p="0" 
                    m="0"
                    fontWeight={"bold"}
                    _hover={{textShadow: "1px 1px 5px white"}}
                    _focus={{border: "none"}}
                    onChange={e => dispatch({type: "HANDLE_REMOVE_INPUTS", payload: {type: "LP_INPUT", value: e.target.value}})}
                />
            </Flex>
            <ArrowRightIcon  />
            <Box w="33%">
                <Flex pb="2">
                    <Input 
                        h="5" 
                        min={0}
                        max={tokenA.pooled}
                        textAlign={"right"}
                        fontWeight={"bold"}
                        value={tokenA?.inputRemove?.toExact() ?? ""} 
                        placeholder="0"
                        type="number"
                        border="none" 
                        p="0" 
                        m="0"
                        _hover={{textShadow: "1px 1px 5px white"}}
                        _focus={{border: "none"}}
                        onChange={e => dispatch({type: "HANDLE_REMOVE_INPUTS", payload: {type: "TOKEN_A_INPUT", value: e.target.value}})}
                    />
                    {tokenA.logo ? <Image ml="2" display={"initial"} borderRadius='full' boxSize='20px' src={tokenA.logo} alt={pair.token0.name}/> : <QuestionOutlineIcon />}
                </Flex>
                <Flex justifyContent={"right"}>
                    <Input 
                        h="5" 
                        min={0}
                        max={tokenB.pooled}
                        textAlign={"right"}
                        fontWeight={"bold"}
                        value={tokenB?.inputRemove?.toExact() ?? ""} 
                        placeholder="0"
                        type="number"
                        border="none" 
                        p="0" 
                        m="0"
                        _hover={{textShadow: "1px 1px 5px white"}}
                        _focus={{border: "none"}}
                        onChange={e => dispatch({type: "HANDLE_REMOVE_INPUTS", payload: {type: "TOKEN_B_INPUT", value: e.target.value}})}
                    />
                    {tokenB.logo  ? <Image ml="2" display={"initial"} borderRadius='full' boxSize='20px' src={tokenB.logo} alt={pair.token1.name}/> : <QuestionOutlineIcon />}
                </Flex>
            </Box>
            <Box fontSize={"sm"} justifyContent={"right"} alignContent="center">
                <Text pb="2">{tokenA.token.symbol}</Text>
                <Text>{tokenB.token.symbol}</Text>
            </Box>
        </HStack>
    )
}

export default RemovePoolShare