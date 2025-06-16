import { Box, Text, Input } from "@chakra-ui/react"
import Page from "../components/page"

export default function Home() {
  return (
    <Page>
        <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'} >
            <Box width={'100%'} height={'100px'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Box width={'50%'} height={'100%'} bg={'red'} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} padding={2} >
                    <Text color={'#00'}>Lord of the Rings Movies</Text>
                    <Text color={'#00'}>Ave. movie runtime: xxx min</Text>
                    <Text>Ave. movie budget: $$xxmm</Text>
                </Box>
                <Box width={'50%'} height={'100%'} bg={'blue'} display={'flex'} flexDirection={'row'} alignItems={'flex-end'} justifyContent={'center'} padding={2} >
                    <Input placeholder="Search for a movie" />
                    <select>
                        <option value="1">Sort by budget</option>
                        <option value="2">Sort by runtime</option>
                        <option value="3">Sort by title</option>
                    </select>
                </Box>
            </Box>
            
        </Box>
    </Page>
  )
}