import React, {Component} from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import logo from './images/logo.png';

export class NavTitleLogoCard extends Component {
    render() {
        return (
            <HStack>  
                <Box> 
                    <img width = {30} height = {30} src={logo} alt="logo"/>
                </Box>
                <Box> 
                    <p>Cognicare</p>
                </Box>
            </HStack>
            
        )
    }
}