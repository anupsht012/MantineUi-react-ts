import { Box, ColorPicker, Group, PasswordInput, TextInput, Text, MultiSelect, NativeSelect, RadioGroup, Radio, Alert } from '@mantine/core'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Buttons from '../components/Buttons'


const   Random = () => {
    const [inputs, setInputs] = useState({});
    // const { register, handleSubmit } = useForm();
    const onSubmit = (data: any, e: any) => console.log(data, e);
    const onError = (errors: any, e: any) => console.log(errors, e);
    const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        console.log(`email value: ${email} password value: ${password}`)
       

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [data, setData] = useState(['React', 'Angular', 'Svelte', 'Vue']);

    return (
        <div>
            <div className='main'>
                <Group  p={"20px"} position="center">
                    <h2>Register Form </h2>
                </Group>
                <div className="container">
                    <div className="main-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <Box sx={{ maxWidth: 400 }} mx="auto">
                                    <Box className='sdd' p={"50px"}>
                                        <TextInput
                                            label='Email'
                                            placeholder="example@mail.com"
                                            mt="sm"
                                            required
    value={email}
                                            onChange={(e) => setEmail(e.currentTarget.value)}
                                        />
                                        <PasswordInput
                                            placeholder="Password"
                                            label="Password"
                                            description=""
                                            required
                                            value={password}
                                            mt="xl"
                                            onChange={(e) => setPassword(e.currentTarget.value)}
                                            

                                        />
                                        <Group position="center" mt="90px">
                                            <Buttons name='sfd'/>

                                        </Group>
                                    </Box>



                                    {/* <Group position="center" direction="column">
                                        <ColorPicker format="rgba" value={value} onChange={onChange} />
                                        <Text>{value}</Text>
                                    </Group>
                                    <Group>
                                        <MultiSelect
                                            data={data}
                                            label="Your favorite frameworks/libraries"
                                            placeholder="Pick all that you like"
                                            mt='xl'
                                            // searchable
                                            defaultValue={['react', 'next']}
                                            clearButtonLabel="Clear selection"
                                            clearable
                                            // creatable
                                            getCreateLabel={(query: string) => `+ Create ${query}`}
                                            onCreate={(query: string) => setData((current) => [...current, query])}
                                            nothingFound='Nothing Found'
                                            required
                                        />
                                        <NativeSelect error="Pick at least one item" data={data} />
                                        <RadioGroup
                                            label="Select your favorite framework/library"
                                            description="This is anonymous"
                                            mt='xl'
                                        >
                                            <Radio value="react" label="React" />
                                            <Radio value="svelte" label="Svelte" />
                                            <Radio value="ng" label="Angular" />
                                            <Radio value="vue" label="Vue" />
                                        </RadioGroup>
                                    </Group> */}
                                </Box>
                            </div>

                        </form>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Random