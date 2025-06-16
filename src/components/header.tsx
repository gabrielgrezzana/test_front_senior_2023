import { Box, Text } from "@chakra-ui/react";

function Header() {
    return (
        <Box width={'100%'} height={'56px'} bg={'#4c16c9'} alignItems={'center'} display={'flex'} justifyContent={'space-between'} >
            <Text marginLeft={4}>Icon</Text>
            <Text maxLines={2} marginRight={4}>{`Senior Frontend Test 
            -`}</Text>
        </Box>
    )
}

export default Header;