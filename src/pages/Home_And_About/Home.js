import React, { Component } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import {Welcome} from './Welcome'
import {OurPurpose} from './OurPurpose'
import {HowItWorks} from './HowItWorks'
import {WhatMakesUsDifferent} from './WhatMakesUsDifferent'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
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
    Input, Select, Text
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';




export class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize state with two flags for two different modals
    this.state = {
      isGetStartedModalOpen: false,
      isLearnMoreModalOpen: false,
    };
  }

  // Methods to handle opening and closing the Get Started modal
  openGetStartedModal = () => this.setState({ isGetStartedModalOpen: true });
  closeGetStartedModal = () => this.setState({ isGetStartedModalOpen: false });

  // Methods to handle opening and closing the Learn More modal
  openLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: true });
  closeLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: false });

  render() {
    const { isGetStartedModalOpen, isLearnMoreModalOpen } = this.state;
    return (
      <VStack>


      <Center w="100vw" h="100vh" bg="white">
        <Box w="60vw" h="70vh" bg="white" display="flex" padding={10} color="black" justifyContent="center">
          <VStack>
            <VStack spacing={0}>
              <Heading fontSize="7xl" letterSpacing="tighter" lineHeight="shorter" textAlign="center">
                Elevate your practice
              </Heading>
              <Heading fontSize="7xl" letterSpacing="tighter" lineHeight="shorter" textAlign="center" mt={-3}>
                Empower your decisions
              </Heading>
            </VStack>
            <Heading fontWeight="normal" color="gray.600" fontSize="2xl" as="h2" mb={4}>
              Transform mental health care with precision and empathy.
            </Heading>
            <HStack spacing={10}>
              <Button colorScheme="blue" size="lg" variant="outline" onClick={this.openGetStartedModal}>
                Get Started
              </Button>

              <Button colorScheme="blue" size="lg" onClick={this.openLearnMoreModal}>
                Learn More
                <ArrowForwardIcon />
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Get Started Modal */}
        <Modal isOpen={isGetStartedModalOpen} size={"full"} onClose={this.closeGetStartedModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Demographic Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <VStack spacing={4}>
        <p>Thank you for your interest! Let's explore how you can elevate and empower your practice.</p>
        {/* Ensure HStack fits within ModalBody by controlling its size or the VStack it's contained in */}
        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Input
                placeholder="First Name"
                size="lg"
            />
            <Input
                placeholder="M"
                size="lg"
                width="20%"
            />
            <Input
                placeholder="Last Name"
                size="lg"
            />
        </HStack>

        <HStack
            //align={'left'}
            width='full' // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Text textSize={'lg'} align={'left'}>Age</Text>
            <NumberInput width={'30%'} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Select placeholder='Select Education' size={'lg'}>
                <option value='option1'>No Schooling</option>
                <option value='option2'>Some High School or Less</option>
                <option value='option3'>High School Graduate/GED</option>
                <option value='option4'>Some College</option>
                <option value='option5'>Associate's Degree</option>
                <option value='option6'>Bachelor's Degree</option>
                <option value='option7'>Some Graduate School</option>
                <option value='option8'>Master's Degree</option>
                <option value='option9'>Doctoral Degree</option>
            </Select>
        </HStack>


        <VStack
            align={'left'}
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <CheckboxGroup colorScheme='green' defaultValue={['']}>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='opt1'>American Indian or Alaskan Native</Checkbox>
                    <Checkbox value='opt2'>Asian</Checkbox>
                    <Checkbox value='opt3'>Black or African Descent</Checkbox>
                    <Checkbox value='opt4'>Hispanic</Checkbox>
                    <Checkbox value='opt5'>White</Checkbox>
                    <Checkbox value='opt6'>Other</Checkbox>
                </Stack>
            </CheckboxGroup>
        </VStack>

        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Select placeholder='Veteran Status' size={'lg'}>
                <option value='option1'>Veteran</option>
                <option value='option2'>Non-veteran</option>
                <option value='option3'>Prefer not to say</option>
            </Select>
        </HStack>
        <VStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Select placeholder='History of Substance Use' size={'lg'}>
                <option value='option1'>Yes</option>
                <option value='option2'>No</option>
            </Select>
            <Text>
                If the patient has a history of substance use, please describe it below.
            </Text>
            <Input
                placeholder=" "
                size="lg"
            />
        </VStack>
        <Heading fontSize="xl">Select Symptoms</Heading>
        <VStack
            align="start"
            width="full" // Use "full" to match the parent's width or define a specific max-width
            >

            {/* Checkboxes for symptoms */}
            <CheckboxGroup colorScheme='green' defaultValue={['']}>
            <HStack spacing={210}>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='opt1'>delusions</Checkbox>
                    <Checkbox value='opt2'>psychosis</Checkbox>
                    <Checkbox value='opt3'>disorganized speech</Checkbox>
                    <Checkbox value='opt4'>social withdrawal</Checkbox>
                    <Checkbox value='opt5'>catatonia</Checkbox>
                    <Checkbox value='opt7'>impulsive</Checkbox>
                    <Checkbox value='opt8'>instability</Checkbox>
                    <Checkbox value='opt9'>mood swings</Checkbox>
                    <Checkbox value='opt10'>disassociation</Checkbox>
                    <Checkbox value='opt11'>manic and hypomanic episodes</Checkbox>
                    <Checkbox value='opt12'>excessive sadness</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='opt13'>hopelessness</Checkbox>
                    <Checkbox value='opt15'>insomnia</Checkbox>
                    <Checkbox value='opt16'>suicidal</Checkbox>
                    <Checkbox value='opt18'>loneliness</Checkbox>
                    <Checkbox value='opt19'>excessive stress</Checkbox>
                    <Checkbox value='opt20'>fear</Checkbox>
                    <Checkbox value='opt21'>restlessness</Checkbox>
                    <Checkbox value='opt22'>fatigue</Checkbox>
                    <Checkbox value='opt21'>restlessness</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='opt22'>fatigue</Checkbox>
                    <Checkbox value='opt21'>panic</Checkbox>
                    <Checkbox value='opt22'>obsession</Checkbox>
                    <Checkbox value='opt23'>repeated behaviors</Checkbox>
                    <Checkbox value='opt24'>tics</Checkbox>
                    <Checkbox value='opt25'>intrusive thoughts</Checkbox>
                    <Checkbox value='opt26'>avoidance behavior</Checkbox>
                    <Checkbox value='opt27'>repeated flashbacks</Checkbox>
                    <Checkbox value='opt28'>irritable</Checkbox>
                    <Checkbox value='opt29'>social disruption</Checkbox>
                    <Checkbox value='opt30'>amnesia</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='opt31'>derealization</Checkbox>
                    <Checkbox value='opt32'>gender confusion</Checkbox>
                    <Checkbox value='opt33'>identity confusion</Checkbox>
                    <Checkbox value='opt34'>sexual confusion</Checkbox>
                    <Checkbox value='opt35'>drug abuse</Checkbox>
                    <Checkbox value='opt36'>reward-seeking</Checkbox>
                    <Checkbox value='opt37'>addiction</Checkbox>
                    <Checkbox value='opt38'>cravings</Checkbox>
                    <Checkbox value='opt39'>paranoia</Checkbox>
                    <Checkbox value='opt40'>unpredictable behavior</Checkbox>
                </Stack>
            </HStack>
            </CheckboxGroup>

            <Input
                placeholder="Describe symptoms further here: "
                size="lg"
            />

        </VStack>
      </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={this.closeGetStartedModal}>
                Close
              </Button>
              <Button variant="ghost">Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Learn More Modal */}
        <Modal isOpen={isLearnMoreModalOpen} onClose={this.closeLearnMoreModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Learn More</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Discover more about how our approach can transform mental health care through technology and innovation.</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={this.closeLearnMoreModal}>
                Close
              </Button>
              <Button variant="ghost">Explore Features</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>

      <vstack>
            <Welcome />
            <OurPurpose />
            <WhatMakesUsDifferent />
            <HowItWorks />
        </vstack>

      </VStack>


    );
  }
}
