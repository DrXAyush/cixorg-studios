import { Box, Stack, VStack, Heading, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineFacebook} from 'react-icons/ai'
import {SiFiverr} from 'react-icons/si';

function Footer() {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'20'} p={['20', '8']} color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Our EMail Address
                    </Heading>

                    <HStack
                        py={'2'}>
                        {/* <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                        <Button
                            variant={'ghost'}
                            colorScheme='purple'
                            p={'0'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend size={'20'} />
                        </Button> */}
                        <Text>cixorgstudios@gmail.com</Text>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                    <Heading>CIXORG Studios</Heading>
                    <Text>All rights reserved</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                    {/* <Button colorScheme='white' variant={'link'} >
                        <a target={'blank'} href="https://github.com/DrXAyush">GitHub</a>
                    </Button> */}
                    <HStack>
                        <Button
                            variant={'ghost'}
                            colorScheme='purple'
                            p={'0'}
                        // borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineInstagram size={'30'} />
                        </Button>
                        <Button
                            variant={'ghost'}
                            colorScheme='purple'
                            p={'0'}
                        // borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineLinkedin size={'30'} />
                        </Button>
                        <Button
                            variant={'ghost'}
                            colorScheme='purple'
                            p={'0'}
                        // borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineFacebook size={'30'} />
                        </Button>
                        <Button
                            variant={'ghost'}
                            colorScheme='purple'
                            p={'0'}
                        // borderRadius={'0 20px 20px 0'}
                        >
                            <SiFiverr size={'30'} />
                        </Button>
                    </HStack>
                </VStack>
            </Stack>

        </Box>
    )
}

export default Footer