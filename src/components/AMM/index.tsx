import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from "@chakra-ui/react"
import Swap from "./Swap"
import { AddLiquidityContextProvider } from "../../Provider/AddLiquidityProvider"
import { SwapContextProvider } from "../../Provider/SwapProvider"
import { PoolContextProvider } from "../../Provider/PoolsProvider";

import Pools from "./Pools"

const AMM: React.FC = () => {
    return (
        <Flex  flexDirection="column" >
            <Tabs 
            isFitted variant="enclosed"
            mx={"auto"}
            overflow={"scroll"}
            width="md !important"
            pt={5}
            px={{ base: 2, sm: 5, md: 17 }}
            py={4}
            borderRadius={"3xl"}
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
            zIndex={1}
            >
                <TabList mb='2rem'>
                    <Tab>Swap</Tab>
                    <Tab>Pools</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <SwapContextProvider>
                            <Swap />
                        </SwapContextProvider>
                    </TabPanel>
                    <TabPanel p="0">
                        <PoolContextProvider>
                            <AddLiquidityContextProvider>
                                <Pools />
                            </AddLiquidityContextProvider>
                        </PoolContextProvider>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            {/* <Analytics /> */}

        </Flex>
    )
}

export default AMM