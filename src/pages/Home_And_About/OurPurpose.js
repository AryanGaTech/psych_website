import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';

export class OurPurpose extends Component {
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
                        <HStack spacing={5}>
                            <Box bg='blue.200' height='40vh' width='160vh' borderRadius='lg'></Box>

                            <VStack>
                                <Heading
                                    fontSize='5xl'
                                    letterSpacing='tight'
                                    lineHeight='shorter'
                                    textAlign='center'>
                                    Our Purpose:
                                </Heading>

                                <text>
                                    The field of mental health care continues to pose an issue in our world today, where the stigma behind seeking mental help has improved but there is a large disparity between the number of available psychologists and the number of patients. This website aims to solve that problem using advanced machine learning techniques to provide diagnosis for patients. As a result, psychologists can free up time to consult patients with more severe cases
                                </text>
                            </VStack>
                        </HStack>
                </Box>
            </Center>
        )
    }
}