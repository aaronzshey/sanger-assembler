import "../App.css";
import {
    Text, HStack, Flex, Box, Center, For
} from "@chakra-ui/react";

import { ServiceDropdown } from "./ServiceDropdown";


export default function Header() {
    return (
        <>
            <Flex justify="space-between" align="center" className="w-auto h-auto leading-[1.5] text-[100%] text-[15px] p-0 bg-[#1b325e] font-semibold">
                <HStack>
                    <Text
                        className="text-[100%] text-[13px] h-[50px] p-[15px] leading-[20px] text-white font-semibold hover:text-[#fdb515]"
                    >
                        UC Berkeley
                    </Text><Text
                        className="text-[100%] text-[13px] h-[50px] p-[15px] leading-[20px] text-white font-semibold hover:text-[#fdb515]"
                    >
                        Molecular and Cell Biology
                    </Text>
                </HStack>

                <HStack>
                    <Text
                        className="text-[100%] text-[13px] h-[50px] p-[15px] leading-[20px] text-white font-semibold hover:text-[#fdb515]"
                    >
                        310 Barker Hall
                    </Text>
                    <Text
                        className="text-[100%] text-[13px] h-[50px] p-[15px] leading-[20px] text-white font-semibold hover:text-[#fdb515]"
                    >
                        me@example.com
                    </Text>
                    <Text
                        className="text-[100%] text-[13px] h-[50px] p-[15px] leading-[20px] text-white font-semibold hover:text-[#fdb515]"
                    >
                        (510) 000-0000
                    </Text>
                </HStack>
            </Flex>

            {/* title */}
            <Text className="p-[10px] text-[44px] text-[#003262] leading-[1.1em] font-['UCBerkeley']">
                DNA Sequencing Facility
            </Text>

            {/* select */}
            <Box>
                <HStack w="100%" justify="center" justifyContent="space-between" className="bg-gray-100">
                    <ServiceDropdown />

                    <For each={["DNA Storeroom", "Order Forms", "Pricing", "Team", "Contact"]}>
                        {(item, index) => <Center className="text-black w-auto bg-green p-[15px]" key={index}>{item}</Center>}
                    </For>
                </HStack>
            </Box>
        </>
    )
}