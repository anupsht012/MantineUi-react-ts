import { Box, Group, PasswordInput, TextInput, Text, Container, SegmentedControl, Checkbox } from '@mantine/core'
import { useState } from 'react';
import Buttons from '../components/Buttons'
import { zodResolver, useForm } from "@mantine/form";
import { z } from 'zod';
import { Link } from 'react-router-dom';


const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [value, setValue] = useState('');

    const schema = z.object({
        email: z.string().email({ message: 'Invalid email' }),

    });

    const form = useForm({
        schema: zodResolver(schema),
        initialValues: {
            email: '',

        },
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(`email is : ${email}`);
    }

    const [status, setStatus] = useState(true)


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
                                            <Group position="center"  >
                                                <div style={{ fontSize: "25px" }}>Login Page</div>
                                            </Group>
                                            <Box >
                                                <TextInput
                                                    label='Email'
                                                    placeholder="example@mail.com"
                                                    mt="sm"
                                                    required
                                                    {...form.getInputProps('email')}
                                                    value={email}
                                                    onChange={(e) => setEmail(e.currentTarget.value)}

                                                />
                                                <PasswordInput
                                                    placeholder="Enter Password"
                                                    label="Password"
                                                    description=""
                                                    required
                                                    value={password}
                                                    mt="md"
                                                    onChange={(e) => setPassword(e.currentTarget.value)}
                                                />

                                                <Text size='sm' mt={8}>
                                                    Forgot your password?
                                                    <Link to={'/recover'} style={{ marginLeft: "3px", textDecoration: "none", color: "red" }} >Click Here</Link>
                                                </Text>

                                                <Checkbox
                                                    size='sm'

                                                    mt={'xl'}
                                                    label="Remember Password"
                                                />
                                                <Group position="right" mt="40px"  >
                                                    <Buttons name='Login' />

                                                </Group>
                                            </Box>
                                            <Text size='sm' mt={8}>
                                                Need an Account?
                                                <Link to={'/register'} style={{ marginLeft: "3px", textDecoration: "none", color: "green" }} >Register</Link>

                                            </Text>

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

export default LoginPage