import { Box, Button, Container, Group, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import Buttons from "../components/Buttons"
import { Link } from 'react-router-dom'


const RecoverPassword = () => {
    const [email, setEmail] = useState("")


    return (
        <div>
            <div className="main">
                <div className="container">
                    <div className="main-wrapper">
                        <form>
                            <div className="form-inputs">
                                <Container>
                                    <Box mx="auto" sx={{ width: '450px', }}>
                                        <Box m={"50px"} p={"50px"} style={{ border: "none", boxShadow: "0 3px 10px rgb(0 0 0/ 0.8)", borderRadius: "8px" }}>
                                            <Group position="center">
                                                <Text style={{ fontSize: "25px", fontWeight: "500" }}>Forgot Password</Text>

                                            </Group>
                                            <Box>
                                                <TextInput
                                                    label='Enter your Email Address'
                                                    placeholder="Enter your Email"
                                                    mt="sm"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                                />
                                                <Group mt={20} >
                                                    <Button variant="filled"
                                                        type='submit'
                                                        radius="md"
                                                        color='green'
                                                        size="sm"
                                                        fullWidth
                                                        
                                                    >
                                                        <Group  style={{ color:"white"}}>
                                                            <Link to={'/create_password'} style={{textDecoration:"none" , color:"white", width:"100px", height:"39px", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >Continue</Link>

                                                        </Group>

                                                    </Button>
                                                </Group>
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

export default RecoverPassword