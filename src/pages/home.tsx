import { Box, Text } from "@chakra-ui/react"
import Page from "../components/page"
import Title_Sort from "../components/title_sort"
import Card from "../components/card"
import fetchMovies from "../service/querys/fetchmovies";
import { useState, useEffect } from "react";
import type { MovieProps } from "../types/movie";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/loading";
import useDebouce from "../hooks/useDebouce";

export default function Home() {  

  const[currentData, setCurrentData] = useState<MovieProps[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebouce(searchTerm, 500);

  useEffect(() => {
    if(debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm);
    }else{
      setCurrentData(data);
    }
  },[debouncedSearchTerm])

  const { data, isLoading, error } = useQuery<MovieProps[]>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    retry: true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchInterval: 1000 * 60 * 5,
    refetchIntervalInBackground: true,    
    throwOnError: true,    
  });

  useEffect(() => {
    setCurrentData(data);    
  },[data])


  if (error) {
    return (
      <Page>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Text color="red.500">Erro ao carregar filmes</Text>
        </Box>
      </Page>
    );
  }

  
 
  const handleSearch = (search: string) => {
    const filteredData = data?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setCurrentData(filteredData);
  }

  const handleSort = (sort: string) => {
    const sortedData = [...(currentData || [])].sort((a, b) => {
      if (sort === "budget") {
        return a.budgetInMillions - b.budgetInMillions;
      } else if (sort === "runtime") {
        return a.runtimeInMinutes - b.runtimeInMinutes;
      } else if (sort === "title") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });
    setCurrentData(sortedData);
  }

  return (
    <Page>
    {isLoading && <Loading />}
    <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Title_Sort 
        goSearch={(e) => setSearchTerm(e)} 
        goSort={handleSort} 
        movies={data || []}
      />
      <Box 
        width="90%" 
        display="grid" 
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" // Responsivo
        gap={8}
        p={4}
      >
        
        {currentData && currentData?.map((item) => {
            return (
              <Card key={item.id} item={item} />
            )
          })}      
      </Box>      
    </Box>
  </Page>
  )
}