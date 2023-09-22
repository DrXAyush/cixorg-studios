import { Container, VStack, Button } from '@chakra-ui/react'
import Form from 'react-bootstrap/Form';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import React from 'react'

function Upload() {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
                <AiOutlineCloudUpload size={'10vmax'} />
                <Form>
                    {/* <HStack>
                <Input required type='file' css={{
                    '&::file-selector-button': {
                        border: 'none',
                        width: 'calc(100% + 36px)',
                        height: '100%',
                        marginLeft: '-18px',
                        color: 'purple',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                    }
                }} />
                <Button colorScheme='purple' type='submit'>
                    Upload
                </Button>

            </HStack> */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Describe Your Project</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Submit
                    </Button>

                </Form>

            </VStack>
        </Container>
    )
}

export default Upload