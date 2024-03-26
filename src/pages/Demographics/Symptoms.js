import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';
import { Input } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export class Symptoms extends Component {
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
                            Enter Symptoms
                        </Heading>

                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>

                        <Heading
                            fontWeight="normal"
                            color="gray.600"
                            fontSize="small"
                            as="h2"
                            mb={4} >
                            Please select the boxes of the symptoms experienced
                        </Heading>

                        <VStack>
                            <Checkbox isInvalid>Symptom 1</Checkbox>
                            <Checkbox isInvalid>Symptom 2</Checkbox>
                            <Checkbox isInvalid>Symptom 3</Checkbox>
                            <Checkbox isInvalid>Symptom 4</Checkbox>
                            <Checkbox isInvalid>Symptom 5</Checkbox>
                            <Checkbox isInvalid>Symptom 6</Checkbox>
                        </VStack>

                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>

                        <Heading
                            fontWeight="normal"
                            color="gray.600"
                            fontSize="small"
                            as="h2"
                            mb={4} >
                            Please describe the overall symptoms the patient is experiencing below
                        </Heading>

                        <Box bg='gray' height='40vh' width='160vh' borderRadius='lg'></Box>

                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>

                        <Button colorScheme='blue' size='lg'>Submit</Button>
                    </VStack>
                </Box>
            </Center>
        )
    }
}