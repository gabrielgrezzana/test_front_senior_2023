import { Box, Text } from "@chakra-ui/react";
import Header from "./header";

function Page({ children }: { children: React.ReactNode }) {
    return (
        <Box width={'100vw'} height={'100vh'} bg={'#f5f7fA'}> 
            <Header />
            {children}
        </Box>
    )
}

export default Page;