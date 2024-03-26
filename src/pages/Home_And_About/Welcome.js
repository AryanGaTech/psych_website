import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';

export class Welcome extends Component {
    render() {
        return (
            <Center w="100vw" h="100vh" bg="white">
                <Box w="60vw" h="70vh" bg="white" display="flex" padding={10} color="black" justifyContent="center">
                    <VStack>
                    <VStack spacing={0}>
                        <Heading fontSize="7xl" letterSpacing="tighter" lineHeight="shorter" textAlign="center">
                            Welcome to our app:
                        </Heading>
                    </VStack>
                        <HStack spacing={10}>
                            <Box bg='blue.200' height='60vh' width='90vh' borderRadius='lg'></Box>
                        </HStack>
                    </VStack>
                </Box>

            </Center>
        )
    }
}