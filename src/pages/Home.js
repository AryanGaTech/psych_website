import { Box, Center, VStack, Heading, HStack, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React, {Component} from 'react';

export class Home extends Component {
    render() {
        return (
            <Center
                w = "100vw"
                h = "100vh"
                bg='white'>
                <Box
                    w = '60vw'
                    h = '70vh'
                    bg= 'white'
                    display='flex'
                    padding={10}
                    color='black'
                    justifyContent='center'>
                    <VStack
                    >
                        <VStack spacing={0}>
                            <Heading
                                fontSize='7xl'
                                letterSpacing='tighter'
                                lineHeight='shorter'
                                textAlign='center'>
                                Elevate your practice
                            </Heading>
                            <Heading
                                fontSize='7xl'
                                letterSpacing='tighter'
                                lineHeight='shorter'
                                textAlign='center'
                                mt={-3}>
                                Empower your decisions
                            </Heading>
                        </VStack>
                        <Heading
                            fontWeight="normal"
                            color="gray.600"
                            fontSize="2xl"
                            as="h2"
                            mb={4} >
                            Transform mental health care with precision and empathy. 
                        </Heading>
                        <HStack spacing={10}>
                            <Button
                                colorScheme='blue'
                                size='lg'
                                variant='outline'>
                                Get Started
                            </Button>
                            <HStack spacing={2}>
                            <Button
                                colorScheme='blue'
                                size='lg'>
                                Learn More
                                <ArrowForwardIcon />
                            </Button>
                                
                                
                            </HStack>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        )
    }
}