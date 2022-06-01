import { Group, Box, TextInput, PasswordInput, Checkbox, Container, Text } from '@mantine/core'
import React, { useState } from 'react'
import Buttons from '../components/Buttons'
import {Link} from 'react-router-dom'






const RegisterPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')





    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(`email is : ${email}`);
    }


    return (
        
        <div>

            <div className='main'>
                    <div className="container">
                        <div className="main-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-inputs">
                                    <Container>
                                        <Box mx="auto" sx={{ width: '450px', }}>
                                            <Box m={"50px"} p={"50px"} style={{ border: "none", boxShadow: "0 3px 10px rgb(0 0 0/ 0.8)", borderRadius: "8px" }}>
                                                <Group position="center">
                                                    <div style={{ fontSize: "25px" }}>Register Page</div>
                                                </Group>
                                                
                                                <Box>
                                                <TextInput
                                                    label='Name'
                                                    placeholder="Enter your Name"
                                                    mt="sm"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.currentTarget.value)}
                                                />
                                                <TextInput
                                                    label='Email'
                                                    placeholder="example@mail.com"
                                                    // mt="sm"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                                />
                                                <PasswordInput
                                                    placeholder="Enter Password"
                                                    label="Password"
                                                    description=""
                                                    required
                                                    value={password}
                                                    // mt="md"
                                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                                />
                                                <PasswordInput
                                                    placeholder="Enter Password"
                                                    label="Confirm Password"
                                                    description=""
                                                    required
                                                    value={confirmPassword}
                                                    // mt="md"
                                                    onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                                                />
                                                <Checkbox size='sm' mt={'sm'}
                                                    label="I agree to terms & Conditions."
                                                />


                                                <Group position="right" mt="20px" >
                                                    <Buttons name='Register' />

                                                </Group>
                                                <Text size='sm' mt={8}>
                                                    Already a User?
                                                    <Link to={'/login'} style={{marginLeft:"3px", textDecoration:"none", color:"green"}} >Login</Link>

                                                </Text>
                                            </Box>
                                               
                                              
                                            </Box>


                                        </Box>
                                    </Container>
                                </div>

                            </form>
                        </div>
                    </div>



                </div>

        </div>
    )
}

export default RegisterPage