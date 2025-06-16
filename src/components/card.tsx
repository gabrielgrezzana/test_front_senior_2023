import { Box, Text, Image } from "@chakra-ui/react";
import type { MovieProps } from "../types/movie";

interface CardProps {
    item: MovieProps;
}

function Card({item}: CardProps) {
    return (
        <Box width={'240px'} height={'360px'} bg={'#fff'} borderRadius={10} boxShadow={'0 0 30px 0 rgba(0, 0, 0, 0.19)'}>
            <Image src={""} alt={'no img found'} width={'100%'} height={'160px'} bg={'#c1c1c1'} borderTopRadius={10}/>
            <Box height={'200px'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'start-flex'} justifyContent={'flex-start'} gap={2}>
                <Text color={'#000'} fontSize={'16px'} fontWeight={'bold'}>{item.name}</Text>
                <Text color={'#ccc'} fontSize={'16px'} fontWeight={'bold'}>$ {item.budgetInMillions}</Text>
                <Text color={'#000'} fontSize={'14px'} fontWeight={'bold'}>{item.academyAwardWins} win & {item.academyAwardNominations} Nominations</Text>
                <Box width={'100%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} marginTop={10} padding={4} marginBottom={2}> 
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'#000'} fontSize={'14px'} fontWeight={'bold'}>Budget: </Text>                    
                        <Text color={'#000'} fontSize={'14px'} fontWeight={'bold'}>{item.budgetInMillions}</Text>                    
                    </Box>                    
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                        <Text color={'#000'} fontSize={'14px'} fontWeight={'bold'}>Revenue: </Text>                    
                        <Text color={'#000'} fontSize={'14px'} fontWeight={'bold'}>{item.budgetInMillions}</Text>                    
                    </Box>                                        
                </Box>            
            </Box>         
        </Box>
    )
}

export default Card;