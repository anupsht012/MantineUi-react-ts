import { Box, Container, Group, Paper, PasswordInput, Text, TextInput } from "@mantine/core"
import Buttons from "../components/Buttons"



const CreateNewPassword = () => {
    const description =["asfkja"]
    return (
        <div>
            <div className="main">
                <div className="container">
                    <div className="main-wrapper">
                        <form >
                            <Container>
                                <Box mx="auto" sx={{ width: '500px', }}>
                                    <Box m={"50px"} p={"50px"} style={{ border: "none", boxShadow: "0 3px 10px rgb(0 0 0/ 0.8)", borderRadius: "8px" }}>
                                        <Group position="center">
                                            <Text style={{ fontSize: "22px", fontWeight: "500" }}>Create New Password</Text>

                                        </Group>
                                        <Paper  shadow="xs" radius="md" p="xs" >
                                            <Text  size="sm" >Your new password must be different from previous used passwords</Text>

                                        </Paper>
                                        <PasswordInput
                                            placeholder="Enter Password"
                                            label="Password"
                                            description=""
                                            required
                                            descriptionProps={description}
                                            mt="md"

                                        />
                                        <PasswordInput
                                            placeholder="Enter Password"
                                            label="Confirm Password"
                                            description=""
                                            required
                                            mt='md'
                                        />
                                        <Group position="right" mt="40px"  >
                                            <Buttons name='Reset Password' />

                                        </Group>
                                    </Box>
                                </Box>
                            </Container>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewPassword