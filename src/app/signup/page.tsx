"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import { signupApiCall } from '@/api/login_api';
import SignupForm from "@/app/signup/signupForm";
import { message } from 'antd';
import { useRouter } from 'next/router'; // Correct import for Next.js router

interface SignupProps {
  // Define any props here if needed
}

const Signup: React.FC<SignupProps> = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    function validatePassword(password: string): boolean {
        const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})/;
        return pattern.test(password);
    }

    const handleSubmit = async (): Promise<void> => {
        console.log("Email:", email);
        console.log("Password:", password);
        setButtonLoading(true);
        if (validatePassword(password)) {
            console.log("Form Submitted with Email:", email, "Password:", password);
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);

            const result = await signupApiCall(formData);
            if (result.statusCode >= 200 && result.statusCode < 300) {
                message.success(result.data.message);
                if (result.data.message.includes("OTP sent")) {
                    await router.push('/verify');
                }
            } else {
                message.error(result.data.error);
            }
            setButtonLoading(false);
        } else {
            console.log("Password validation failed");
            message.error('Invalid password format');
            setButtonLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Signup Page</title>
            </Head>
            <div
                className="h-screen w-screen flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/login_bg.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
            >
                <SignupForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    buttonLoading={buttonLoading}
                />
            </div>
        </>
    );
};

export default Signup;
