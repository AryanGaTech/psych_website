import React, {Component} from "react";
import { Box, Flex, HStack, Button } from "@chakra-ui/react";


export class LogCard extends Component {
    render() {
        return (
            <HStack>
                    <Button
                        size='md'
                        height='44px'
                        width='120px'
                        border='2px'
                        borderColor='transparent'
                        bg='white'
                        >
                        Log In
                    </Button>
       
                    <Button
                        size='md'
                        height='44px'
                        width='120px'
                        border='2px'
                        borderColor='green.500'
                        bg='green.500'
                        >
                        Join Us
                    </Button> 
            </HStack>
            
        )
    }
}