import React from 'react'
import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { FiEye } from "react-icons/fi";
import { IoEyeOffSharp } from "react-icons/io5";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [show, setshow] = useState();
    const [loading, setloading] = useState(false);
    const handleClick = () => setshow(!show);
    const toast = useToast();
    const navigate = useNavigate();
    const submitHandler = async () => {
        setloading(true);
        if (!email || !password) {
            toast({
                title: 'Fill All the states!',
                description: "Fill form",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setloading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:4000/user/login', { email, password });
            localStorage.setItem('userInfo', JSON.stringify(data));
            const { result } = data;
            if (!result) {
                toast({
                    title: 'Check Email & Password!',
                    description: "Error!",
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                });
                setloading(false)
            }
            else if (result) {
                toast({
                    title: 'Login Successful!',
                    description: "Success!",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                setloading(false)
                navigate('/chatpage')
            }
        } catch (error) {
            setloading(false);
            toast({
                title: 'Network Error',
                description: "Try after some time ",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }
    }
    return (
        <VStack specing='5px'>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Email'
                    type='email'
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter Password'
                        type={show ? 'text' : "password"}
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button
                            h='1.75rem'
                            size='sm'
                            onClick={handleClick}>
                            {
                                show ? <IoEyeOffSharp /> : <FiEye />
                            }
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl  >
                <Button
                    isLoading={loading}
                    w='100%'
                    colorScheme='blue'
                    style={{ marginTop: 15 }}
                    onClick={submitHandler}
                    variant='solid'
                >
                    Login
                </Button>
                <Button

                    width='100%'
                    variant='solid'
                    colorScheme='red'
                    style={{ marginTop: 10 }}
                    onClick={() => {
                        setemail('guest@gmail.com')
                        setpassword('123456')
                    }}
                >
                    Get guest user Credentials
                </Button>
            </FormControl>
        </VStack>
    )
}

export default Login
