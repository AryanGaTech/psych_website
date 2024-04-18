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

//routes

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Diagnosis } from './Diagnosis';
import { Link } from 'react-router-dom';



export class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize state with two flags for two different modals
    this.state = {
      isGetStartedModalOpen: false,
      isLearnMoreModalOpen: false,
      firstName: "",
      middleInitial: "",
      lastName: "",
      age: "",
      education: "",
      ethnicity: "",
      vetStatus: "",
      history: "",
      substanceUseDescription: "",
      selectedSymptoms: [],
      symptomDescription: "",
      isGetStartedModalOpen: false,
      isLearnMoreModalOpen: false,
      isSubmitButtonClicked: false,
    };
  }

  // Methods to handle opening and closing the Get Started modal
  openGetStartedModal = () => this.setState({ isGetStartedModalOpen: true });
  closeGetStartedModal = () => this.setState({ isGetStartedModalOpen: false });

  // Methods to handle opening and closing the Learn More modal
  openLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: true });
  closeLearnMoreModal = () => this.setState({ isLearnMoreModalOpen: false });
  
  //method to handle submit button logic

  handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    // e.preventDefault();

    // Extract the form data from the state
    const formData = {
        firstName: this.state.firstName,
        middleInitial: this.state.middleInitial,
        lastName: this.state.lastName,
        age: this.state.age,
        education: this.state.education,
        ethnicity: this.state.ethnicity,
        vetStatus: this.state.vetStatus,
        history: this.state.history,
        substanceUseDescription: this.state.substanceUseDescription,
        selectedSymptoms: this.state.selectedSymptoms,
        symptomDescription: this.state.symptomDescription
    };

    // Send a POST request to the server
    try {
        const response = await fetch('http://localhost:8000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Check if the request was successful
        if (response.ok) {
            // Handle success
            console.log('Form submitted successfully!');
            // Reset the form fields if needed
            this.setState({
                firstName: "",
                middleInitial: "",
                lastName: "",
                age: "",
                education: "",
                ethnicity: "",
                vetStatus: "",
                history: "",
                substanceUseDescription: "",
                selectedSymptoms: [],
                symptomDescription: ""
            });

            window.location.href = '/Diagnosis';
        } else {
            // Handle error
            console.error('Error submitting form.');
        }
    } catch (error) {
        // Handle unexpected error
        console.error('An unexpected error occurred:', error);
    }
};

  
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
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <Input
                placeholder="M"
                size="lg"
                width="20%"
                value={this.state.middleInitial}
                onChange={(e) => this.setState({ middleInitial: e.target.value })}
            />
            <Input
                placeholder="Last Name"
                size="lg"
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
            />
        </HStack>

        <HStack
            //align={'left'}
            width='full' // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Text textSize={'lg'} align={'left'}>Age</Text>
            <NumberInput width={'30%'} min={0}
            value={this.state.age}
            onChange={(valueAsString, valueAsNumber) => this.setState({ age: valueAsString })}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <Select placeholder='Select Education' size={'lg'} 
                value={this.state.education}
                onChange={(e) => this.setState({ education: e.target.value })}>

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
            <CheckboxGroup colorScheme='green' defaultValue={['']} onChange={(values) => this.setState({ ethnicity: values })}>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='American Indian or Alaskan Native'>American Indian or Alaskan Native</Checkbox>
                    <Checkbox value='Asian'>Asian</Checkbox>
                    <Checkbox value='Black or African Descent'>Black or African Descent</Checkbox>
                    <Checkbox value='Hispanic'>Hispanic</Checkbox>
                    <Checkbox value='White'>White</Checkbox>
                    <Checkbox value='Other'>Other</Checkbox>
                </Stack>
            </CheckboxGroup>
        </VStack>

        <HStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Select placeholder='Veteran Status' size={'lg'} onChange={(e) => this.setState({ vetStatus: e.target.value })}>
                <option value='Veteran'>Veteran</option>
                <option value='Non-veteran'>Non-veteran</option>
                <option value='Prefer not to say'>Prefer not to say</option>
            </Select>
        </HStack>
        <VStack
            width="full" // Use "full" to match the parent's width or define a specific max-width
            justifyContent="space-between"
            >
            <Select placeholder='History of Substance Use' size={'lg'} onChange={(e) => this.setState({ history: e.target.value })}>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
            </Select>
            <Text>
                If the patient has a history of substance use, please describe it below.
            </Text>
            <Input
                placeholder=" "
                size="lg"
                onChange={(e) => this.setState({ substanceUseDescription: e.target.value })}
            />
        </VStack>
        <Heading fontSize="xl">Select Symptoms</Heading>
        <VStack
            align="start"
            width="full" // Use "full" to match the parent's width or define a specific max-width
            >

            {/* Checkboxes for symptoms */}
            <CheckboxGroup colorScheme='green' defaultValue={['']} onChange={(values) => this.setState({ selectedSymptoms: values })}>
            <HStack spacing={210}>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='delusions'>delusions</Checkbox>
                    <Checkbox value='psychosis'>psychosis</Checkbox>
                    <Checkbox value='disorganized speech'>disorganized speech</Checkbox>
                    <Checkbox value='social withdrawal'>social withdrawal</Checkbox>
                    <Checkbox value='catatonia'>catatonia</Checkbox>
                    <Checkbox value='impulsive'>impulsive</Checkbox>
                    <Checkbox value='instability'>instability</Checkbox>
                    <Checkbox value='mood swings'>mood swings</Checkbox>
                    <Checkbox value='disassociation'>disassociation</Checkbox>
                    <Checkbox value='manic and hypomanic episodes'>manic and hypomanic episodes</Checkbox>
                    <Checkbox value='excessive sadness'>excessive sadness</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='hopelessness'>hopelessness</Checkbox>
                    <Checkbox value='insomnia'>insomnia</Checkbox>
                    <Checkbox value='suicidal'>suicidal</Checkbox>
                    <Checkbox value='loneliness'>loneliness</Checkbox>
                    <Checkbox value='excessive stress'>excessive stress</Checkbox>
                    <Checkbox value='fear'>fear</Checkbox>
                    <Checkbox value='restlessness'>restlessness</Checkbox>
                    <Checkbox value='fatigue'>fatigue</Checkbox>
                    <Checkbox value='restlessness'>restlessness</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='fatigue'>fatigue</Checkbox>
                    <Checkbox value='panic'>panic</Checkbox>
                    <Checkbox value='obsession'>obsession</Checkbox>
                    <Checkbox value='repeated behaviors'>repeated behaviors</Checkbox>
                    <Checkbox value='tics'>tics</Checkbox>
                    <Checkbox value='intrusive thoughts'>intrusive thoughts</Checkbox>
                    <Checkbox value='avoidance behavior'>avoidance behavior</Checkbox>
                    <Checkbox value='repeated flashbacks'>repeated flashbacks</Checkbox>
                    <Checkbox value='irritable'>irritable</Checkbox>
                    <Checkbox value='social disruption'>social disruption</Checkbox>
                    <Checkbox value='amnesia'>amnesia</Checkbox>
                </Stack>
                <Stack spacing={[1, 5]} direction={['row', 'column']}>
                    <Checkbox value='derealization'>derealization</Checkbox>
                    <Checkbox value='gender confusion'>gender confusion</Checkbox>
                    <Checkbox value='identity confusion'>identity confusion</Checkbox>
                    <Checkbox value='sexual confusion'>sexual confusion</Checkbox>
                    <Checkbox value='drug abuse'>drug abuse</Checkbox>
                    <Checkbox value='reward-seeking'>reward-seeking</Checkbox>
                    <Checkbox value='addiction'>addiction</Checkbox>
                    <Checkbox value='cravings'>cravings</Checkbox>
                    <Checkbox value='paranoia'>paranoia</Checkbox>
                    <Checkbox value='unpredictable behavior'>unpredictable behavior</Checkbox>
                </Stack>
            </HStack>
            </CheckboxGroup>

            <Input
                placeholder="Describe symptoms further here: "
                size="lg"
                onChange={(e) => this.setState({ symptomDescription: e.target.value })}
            />

        </VStack>
      </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={this.closeGetStartedModal}>
                Close
              </Button>
              <Button variant="ghost" onClick={async () => {
                  // Check if form is already submitting
                  if (!this.state.isSubmitting) {
                    // Set flag to indicate form submission in progress
                    this.setState({ isSubmitting: true });
                    // Call handleSubmit function
                    await this.handleSubmit();
                    // Close modal after submission
                    this.closeGetStartedModal();
                    // Reset flag after submission is complete
                    this.setState({ isSubmitting: false });
                  }
              }}>
                  Submit
              </Button>
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

