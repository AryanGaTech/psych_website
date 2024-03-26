import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';
import { Input } from '@chakra-ui/react'
import {
    Menu, MenuButton, MenuList, MenuItem,
  } from '@chakra-ui/react'
  import {ChevronDownIcon } from '@chakra-ui/icons'
  import{DemographicsInfo} from "./DemographicsInfo"
  import{Symptoms} from "./Symptoms"

export class Demographics extends Component {
    render() {
        return (
            <VStack>
                <DemographicsInfo />
                <Symptoms />
            </VStack>

        )
    }
}