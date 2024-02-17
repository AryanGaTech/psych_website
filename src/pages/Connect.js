import React, { Component } from 'react';
import { Box, Center, VStack, Heading, HStack, Button, Input } from '@chakra-ui/react';

export class Connect extends Component {
    render() {
        return (
            <Center
                w = "100vw"
                h = "100vh"
                bg='white'>
                <Box
                    w = '60vw'
                    h = '50vh'
                    bg= 'white'
                    display='flex'
                    padding={10}
                    color='black'
                    justifyContent='center'>
                        <VStack>
                        <Heading
                            fontSize='4xl'
                            letterSpacing='tighter'
                            lineHeight='shorter'
                            textAlign='center'
                            mt={-3}>
                            What seems to be the problem?
                        </Heading>
                        <Input
                            placeholder="Type here..."
                            size="lg"
                            width="100vh"
                            mt={5} />
                        </VStack>
                </Box>
            </Center>
        )
    }
}