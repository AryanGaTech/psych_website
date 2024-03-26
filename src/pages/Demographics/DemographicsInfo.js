import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';
import { Input } from '@chakra-ui/react'
import {
    Menu, MenuButton, MenuList, MenuItem,
  } from '@chakra-ui/react'
  import {ChevronDownIcon } from '@chakra-ui/icons'

export class DemographicsInfo extends Component {
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
                            Enter Demographic Information
                        </Heading>


                        <HStack>
                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    First Name
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />

                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    M
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />


                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Last Name
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />
                            </VStack>

                        </HStack>

                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>

                        <HStack>
                            <VStack>
                            <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Age
                                </Heading>

                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                        <MenuItem>4</MenuItem>
                                        <MenuItem>5</MenuItem>
                                        <MenuItem>6</MenuItem>
                                        <MenuItem>7</MenuItem>
                                    </MenuList>
                                </Menu>

                            </VStack>
                        </HStack>


                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>


                        <HStack>
                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Ethnicity
                                </Heading>

                                <HStack>

                                    <Menu>
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>Hispanic or Latino</MenuItem>
                                            <MenuItem>Not Hispanic or Latino</MenuItem>
                                        </MenuList>
                                    </Menu>

                                    <Menu>
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>American Indian or Alaska Native</MenuItem>
                                            <MenuItem>Asian</MenuItem>
                                            <MenuItem>Black or African American</MenuItem>
                                            <MenuItem>Hispanic or Latino</MenuItem>
                                            <MenuItem>Native Hawaiian or Other Pacific Islander</MenuItem>
                                            <MenuItem>White</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </HStack>
                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Education
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />
                            </VStack>

                        </HStack>


                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>


                        <HStack>
                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Veteran Status
                                </Heading>

                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Veteran</MenuItem>
                                        <MenuItem>Not Veteran</MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </HStack>


                        <VStack></VStack>
                        <VStack></VStack>
                        <VStack></VStack>

                        <HStack>
                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Address
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />
                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    City
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />
                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    State
                                </Heading>

                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>

                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>GA</MenuItem>
                                        <MenuItem>NY</MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>

                            <VStack>
                                <Heading
                                    fontWeight="normal"
                                    color="gray.600"
                                    fontSize="small"
                                    as="h2"
                                    mb={4} >
                                    Zip Code
                                </Heading>

                                <Input
                                    variant='filled'
                                    size="sm" />
                            </VStack>

                        </HStack>
                    </VStack>
                </Box>
            </Center>
        )
    }
}