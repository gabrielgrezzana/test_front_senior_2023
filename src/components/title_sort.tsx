import { useState, useEffect } from "react";
import { Box, Text, Input } from "@chakra-ui/react"
import type { MovieProps } from "../types/movie";

interface Title_Sort_Props {   
    movies: MovieProps[];
    goSearch: (search: string) => void;
    goSort: (sort: string) => void;    
}

function Title_Sort({goSearch, goSort, movies}: Title_Sort_Props) {
    const [averageRuntime, setAverageRuntime] = useState(0);
    const [averageBudget, setAverageBudget] = useState(0);

    useEffect(() => {
        handleCalculateAverage();
    }, [movies]);

    const handleCalculateAverage = () => {
        const totalRuntime = movies?.reduce((acc, movie) => acc + movie.runtimeInMinutes, 0);
        const totalBudget = movies?.reduce((acc, movie) => acc + movie.budgetInMillions, 0);
        const averageRuntime = totalRuntime / movies?.length;
        const averageBudget = totalBudget / movies?.length;
        setAverageRuntime(averageRuntime);
        setAverageBudget(averageBudget);
    }

    return (
        <Box width={'80%'} height={'100px'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} borderBottomWidth={2}>
        <Box width={'50%'} height={'100%'}  display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'center'} padding={2} >
            <Text color={'#000'}>Lord of the Rings Movies</Text>
            <Text color={'#000'}>Ave. movie runtime: {averageRuntime ?? "0"}</Text>
            <Text color={'#000'}>Ave. movie budget: {averageBudget ?? "0"}</Text>
        </Box>
        <Box width={'50%'} height={'100%'} display={'flex'} flexDirection={'row'} alignItems={'flex-end'} justifyContent={'center'} padding={2}  gap={2}>
            <Input color={'#000'} onChange={(e) => goSearch(e.target.value)} placeholder='filter  movies by name'  width={'198px'} height={'38px'} />
            <select style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '0.5px solid #000',
                borderRadius: '5px',
                padding: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                width: '198px',
                height: '38px',
            }}
            onChange={(e) => goSort(e.target.value)}
            >
                <option value="budget">Sort by budget</option>
                <option value="runtime">Sort by runtime</option>
                <option value="title">Sort by title</option>
            </select>
        </Box>
    </Box>
    )
}

export default Title_Sort;