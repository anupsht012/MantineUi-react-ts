import { ActionIcon, Box, Container, Group, Text } from "@mantine/core";
import { Trash } from 'tabler-icons-react';
import { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Buttons from "../components/Buttons";
import {Link} from 'react-router-dom'
 
const SplashScreen = () => {
    const [value, setValue] = useState("");
    const [isAppear, setIsAppear] = useState(true);

    const [status, setStatus] = useState(true)


    const data = [
        { label: 'Login', value: 'Login' },
        { label: 'Register', value: 'Register' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(`email is : ${email}`);
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsAppear(!isAppear)
    }



    return (
        <div>
            {status && status ? (
                <LoginPage/>
            ) : (
               <RegisterPage/>
            )
            }
        </div>
    )
}

export default SplashScreen

