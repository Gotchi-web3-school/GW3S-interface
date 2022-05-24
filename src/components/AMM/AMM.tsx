import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue } from "@chakra-ui/react"
import Swap from "./Swap/Swap"
import Analytics from "./Swap/Analytics"

const AMM: React.FC = () => {
    return (
        <Flex flexDirection="column">
            <Tabs 
            isFitted variant="enclosed"
            maxW="7xl"
            mx={"auto"}
            pt={5}
            px={{ base: 2, sm: 5, md: 17 }}
            py={4}
            mt="8rem"
            rounded="xl"
            shadow="lg"
            bg={useColorModeValue("white", "gray.800")}
            zIndex={1}
            >
                <TabList mb='2rem'>
                    <Tab>Swap</Tab>
                    <Tab>Add liquidity</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel p={0}>
                        <Swap />
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Analytics />

        </Flex>
    )
}

export default AMM