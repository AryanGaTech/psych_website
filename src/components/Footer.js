import React, { Component, useState } from 'react';
import { Text, List, ListItem, ListIcon, Box } from '@chakra-ui/react';
import {
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
import { MdCheckCircle } from 'react-icons/md';

export const Footer = () => {
    const [isWhoDidThisModalOpen, setWhoDidThisModalOpen] = useState(false);

    const openWhoDidThisModal = () => setWhoDidThisModalOpen(true);
    const closeWhoDidThisModal = () => setWhoDidThisModalOpen(false);

    return (
    <>
        <HStack
        bg="white"
        height='9vh'
        width='100vw'
        align='center'
        justify='space-between'
        px='20px'>
            <p>Cognicare © 2024</p>
            <HStack>
                <Button colorScheme="blue" size="md" variant="outline" onClick={openWhoDidThisModal}>
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
        <Modal isOpen={isWhoDidThisModalOpen} onClose={closeWhoDidThisModal}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Who did this?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Box mb={4}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
                A collaborative creation by the GT Big Data team:
            </Text>
            <List spacing={2}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Aryan Shah
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Tony Ngari
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Sarvesh Sathish
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Arshiya Rahman
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Sarayu
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Emily Yang
                </ListItem>

            </List>
  </Box>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" onClick={closeWhoDidThisModal}>
                Close
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>

    </>
    )
}