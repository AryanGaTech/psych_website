import { Box, Center } from '@chakra-ui/react';
import React, {Component} from 'react';

export class Home extends Component {
    render() {
        return (
            <Center
                w = "100vw"
                h = "100vh"
                bg='blue'>
                <Box
                    w = '70vw'
                    h = '55vh'
                    bg= 'black'
                    display='flex'
                    alignItems='center'
                    just>
                    <p>Sarvesh</p>
                </Box>
            </Center>
        )
    }
}