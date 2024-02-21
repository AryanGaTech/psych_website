import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';

export class Features extends Component {
    render() {
        return (
            <Center
                w = "100vw"
                h = "100vh"
                bg='white'>
                <Box
                    w = '80vw'
                    h = '90vh'
                    bg= 'white'
                    display='flex'
                    padding={10}
                    color='black'
                    justifyContent='center'>
                    <VStack>
                        <Heading
                            fontSize='5xl'
                            letterSpacing='tight'
                            lineHeight='shorter'
                            textAlign='center'>
                            Fast, Light, Simple
                        </Heading>

                        <Heading
                            fontWeight="normal"
                            color="gray.600"
                            fontSize="xl"
                            as="h2"
                            mb={4} >
                            No more guesswork—embrace AI precision to enhance care and streamline practice.
                        </Heading>
                        <SimpleGrid columns={2} spacing={10}>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'>
                                <p></p>
                            </Box>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Center>
        )
    }
}