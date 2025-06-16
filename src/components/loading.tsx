import { Box, Spinner } from "@chakra-ui/react";


function Loading() {
    return (
        <Box position={'absolute'} top={0} left={0} width={'100%'} height={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Spinner color={'#000'} size={'xl'} />
        </Box>
        
    )
}

export default Loading;