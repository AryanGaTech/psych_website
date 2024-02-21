import React, { Component } from 'react';
import {
    Box,
    Center,
    VStack,
    Heading,
    HStack,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input
  } from '@chakra-ui/react';

import { TabCard } from './TabCard';
import { NavTitleLogoCard } from './NavTitleLogoCard';
import { LogCard } from './LogCard';

export const Footer = () => {
    return (
        <HStack
        bg="white" 
        height='9vh'
        width='100vw'
        align='center'
        justify='space-between'
        px='20px'>
            <p>Cognicare © 2024</p>
            <HStack>
                <Button colorScheme="blue" size="md" variant="outline">
                    Who did this?
                </Button>
                <Button colorScheme="blue" size="md" variant="outline">
                    Privacy
                </Button>
                <Button colorScheme="blue" size="md" variant="outline">
                    EULA
                </Button>
            </HStack>
    </HStack>
    )
}