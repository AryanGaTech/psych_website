import React, { Component } from 'react';
import { Box, Flex, Container, HStack } from '@chakra-ui/react';
import { TabCard } from './TabCard';
import { LogCard } from './LogCard';
import { NavTitleLogoCard } from './NavTitleLogoCard';

export class Navbar extends Component {
    render() {
        return (
            <HStack
                bg="white" 
                top={0}
                position='sticky'
                zIndex={10}
                height='9vh'
                width='100vw'
                align='center'
                justify='space-between'
                px='20px'>
                    <TabCard />
                    <NavTitleLogoCard />
                    <LogCard />
            </HStack>
        )
    }
}
