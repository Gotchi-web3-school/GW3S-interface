import { Box, Image, useToast, useDisclosure } from "@chakra-ui/react"
import { useContext, useState } from "react"
import useSound from 'use-sound';
import { opens } from "../../Lib/Smart-contracts/Levels"
import ModalChestOpen from "../Modal/ModalChestOpen"
import { useWeb3React } from "@web3-react/core"
import { Reward } from "../../Lib/Smart-contracts/Rewards"
const lockedChest = require("../../Assets/chests/lockedChest.png")
const closeChest = require("../../Assets/chests/closedChest.png")
const opennedChest = require("../../Assets/chests/opennedChest.png")
const openLockedChestSound = require("../../Assets/sounds/openning locked chest.mp3")
const openChestSound = require("../../Assets/sounds/openning chest.mp3")

const Chest: React.FC = () => {
    const toast = useToast()
    const signer = useWeb3React()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isLocked, setIsLocked] = useState(false)
    const [play] = useSound(openLockedChestSound, {volume: 0.6})
    const [play1] = useSound(openChestSound, {volume: 0.6})
    const [chest, setChest] = useState<Array<Reward | undefined>>([])

    const openChest = async() => {
        try {
            play()

        } catch (error) {
            //Something went wrong
        }
    }

    return (
        <Box as="button" onClick={openChest}>
            <ModalChestOpen chest={chest} isOpen={isOpen} onClose={onClose} />
            <Image boxSize={100} mt="-8" src={isOpen ? opennedChest : closeChest}/>
        </Box>
    )
}

export default Chest