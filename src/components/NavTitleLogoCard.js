import React, {Component} from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";


export class NavTitleLogoCard extends Component {
    render() {
        return (
            <HStack>  
                <Box> 
                    <img src="src/images/logo.png" alt="logo"/>
                </Box>
                <Box> 
                    <p>Cognicare</p>
                </Box>
            </HStack>
            
        )
    }
}