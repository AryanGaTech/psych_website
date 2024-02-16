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
                        borderColor='blue.500'
                        bg='blue.500'
                        color='white'
                        _hover={{
                            bg: 'white', // Keep the background white or change as needed
                            color: 'black', // Change text color to black when clicked
                        }}
                        >
                        Join Us
                    </Button> 
            </HStack>
            
        )
    }
}