import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';

export class WhatMakesUsDifferent extends Component {
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
                        <HStack>
                            <VStack>
                                <Heading
                                    fontSize='5xl'
                                    letterSpacing='tight'
                                    lineHeight='shorter'
                                    textAlign='center'>
                                    What Makes This DIfferent?:
                                </Heading>

                                <text>
                                Previous applications related to mental health have always been geared to the client. With this application, we focus on assisting the psychologist instead, so that they can more easily diagnose a patient.
                                </text>
                            </VStack>

                            <Box bg='blue.200' height='40vh' width='100vh' borderRadius='lg'></Box>

                        </HStack>



                </Box>
            </Center>
        )
    }
}