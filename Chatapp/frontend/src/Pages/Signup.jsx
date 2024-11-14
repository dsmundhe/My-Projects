import React from 'react'
import { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Toast, VStack } from '@chakra-ui/react'
import { IoEyeOffSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [name, setname] = useState(false);
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirmpass, setconfirmpass] = useState();
    const [show, setshow] = useState();
    const [pic, setpic] = useState();
    const handleClick = () => setshow(!show);
    const [loading, setloading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const postDetails = async (pics) => {
        // cloudinary://916852652637658:PoukYbwTkUHEu2-Yna71vbfC3d0@dmchat-app
        setloading(true)
        if (pics === undefined) {
            setloading(false)
            toast({
                title: 'Please upload Image',
                description: "upload image ",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })

        }
        try {
            const data = new FormData();
            data.append('file', pics);
            data.append('upload_preset', 'chat-app');
            data.append('cloud_name', 'dmchat-app');
            await fetch('https://api.cloudinary.com/v1_1/dmchat-app/image/upload', { method: 'post', body: data })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Cloudinary Response Data:", data);
                    setpic(data.url.toString());
                    console.log("Image URL set in state:", data.url.toString()); // Log the URL being set
                    setloading(false);
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                    setloading(false);
                    toast({
                        title: 'Image upload failed',
                        description: "Please try again.",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                });
            console.log(pic);

        } catch (error) {
            setloading(false);
            toast({
                title: 'Network Error!',
                description: "Please try again.",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }


    }
    const submitHandler = async () => {
        setloading(true)
        if (!name || !password || !email || !confirmpass ) {
            toast({
                title: 'Fill All the states!',
                description: "Fill form",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setloading(false)
            return
        }
        else if (password !== confirmpass) {
            toast({
                title: 'Password $ Confirm Password must same!',
                description: "Enter same",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            setloading(false);
            return
        }
        try {
            setloading(true)
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:4000/user/signup', {
                name: name,
                email: email,
                password: password,
                confirmpass: confirmpass,
                // pic: pic,
            }, config);

            localStorage.setItem('userInfo', JSON.stringify(data));
            toast({
                title: 'Signup Successful!',
                description: "Success!",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setloading(false)
            navigate('/chatpage')

        } catch (error) {
            setloading(false)
            toast({
                title: error.message,
                description: "Error",
                status: 'error',
                duration: 5000,
                isClosable: true,
            });

        }
        setloading(false)

    }
    return (
        <VStack specing='5px'>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter name'
                    type='text'
                    onChange={(e) => setname(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Email'
                    type='email'
                    onChange={(e) => setemail(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter Password'
                        type={show ? 'text' : "password"}
                        onChange={(e) => setpassword(e.target.value)}

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
            <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        placeholder='Enter Confirm Password'
                        type={show ? 'text' : "password"}
                        onChange={(e) => setconfirmpass(e.target.value)}

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
            <FormControl isRequired>
                <FormLabel>Upload Pic</FormLabel>
                <Input
                    p={1.5}
                    type='file'
                    accept='image/*'
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <FormControl  >
                <Button isLoading={loading}
                    w='100%'
                    colorScheme='blue'
                    style={{ marginTop: 15 }}
                    onClick={submitHandler}

                >
                    Sign up
                </Button>
            </FormControl>
        </VStack>
    )
}

export default Signup
