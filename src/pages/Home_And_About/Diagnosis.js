import React, { useState, useEffect } from 'react';
import { Box, Center, VStack, Heading, Flex } from '@chakra-ui/react';

export const Diagnosis = () => {
    const [diagnosisResult, setDiagnosisResult] = useState('');
    const [userInfo, setUserInfo] = useState({});
    

    // const handleSubmit = async () => {
    //     try {
    //         // Send POST request to Flask server
    //         const response = await fetch('http://localhost:8000/submit', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 firstName: '',
    //                 middleInitial: '',
    //                 lastName: '',
    //                 age: '',
    //                 education: '',
    //                 ethnicity: '',
    //                 vetStatus: '',
    //                 history: '',
    //                 substanceUseDescription: ''
    //                 // Add other form data fields as needed
    //             })
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to fetch');
    //         }

    //         const { diagnosis, userInfo } = await response.json();

    //         // Update diagnosisResult state with the received diagnosis
    //         setDiagnosisResult(diagnosis);
    //         // Update userInfo state with the received userInfo
    //         setUserInfo(userInfo);
    //         setButtonClicked(true); //button clicked state
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //     }
    // };
    
    const getResults = async () => {
        try {
            const response = await fetch('http://localhost:8000/results');

            if (!response.ok) {
                throw new Error('Failed to fetch results');
            }

            const { diagnosis, userInfo } = await response.json();

            setDiagnosisResult(diagnosis);
            setUserInfo(userInfo);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    useEffect(() => {
        // Call getResults when component mounts to fetch initial results
        getResults();
    }, []);

    return (
        <Center
            w="100vw"
            h="100vh"
            bg="white"
        >
            <VStack>
                <Heading
                    fontSize="5xl"
                    letterSpacing="tight"
                    lineHeight="shorter"
                    textAlign="center"
                    mt={-100}
                >
                    A Preliminary Psychologist Assistant Overview
                </Heading>
                
                {/* Button to trigger form submission */}
                {/* {!buttonClicked && <button onClick={handleSubmit}>View Results</button>}
    Display diagnosis result */}

                
                <Flex justify="space-between" w="100%">
                    {/* User Info Box */}
                    <Box bg="gray.100" p={100} flex="1">
                        <Heading fontSize="xl">Patient Info</Heading>
                        {/* Display user info */}
                            <VStack align="flex-start" spacing={2}>
                                    <p>Name: {userInfo[0]}</p>
                                    <p>Age: {userInfo[1]}</p>
                                    <p>Education: {userInfo[2]}</p>
                                    <p>Ethnicity: {userInfo[3]}</p>
                                    <p>Veteran: {userInfo[4]}</p>
                                    <p>Substance Use History: {userInfo[5]}</p>
                                    <p>Substance Use Description: {userInfo[6]}</p>
                            </VStack>
                    </Box>

                    {/* Diagnosis Box */}
                    <Box bg="gray.100" p={100} flex="1">
                        <Heading fontSize="xl">Diagnosis : Probability</Heading>
                        {diagnosisResult && diagnosisResult.length > 0 && (
                        <VStack align="flex-start" spacing={2}>
                            {diagnosisResult.map(([disease, probability], index) => (
                                <p key={index}>{disease}: {probability}</p>
                            ))}
                        </VStack>)}
                    </Box>
                </Flex>
            </VStack>
        </Center>
    );
};
