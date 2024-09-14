"use client";
import { useState } from "react";
import { Button, Form, Input } from "antd";
import {FacebookOutlined, GoogleOutlined, MailOutlined} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/vercel.svg";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignupForm = ({ email, setEmail, password, setPassword, handleSubmit, buttonLoading }) => {

    const handleLogin = (values) => {
      console.log("====================================");
      console.log("values", values);
      console.log("====================================");

      localStorage.setItem("signup_email", email);

      handleSubmit(values.email, values.password);
    };

    return (
        <div className="p-8 shadow-md rounded-2xl w-[400px] m-8 bg-cover bg-center bg-no-repeat bg-white">
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <div className="flex items-center justify-center">
                    <Image src={Logo} alt="Logo" className="h-1/2 w-1/2" />
                </div>
                <p className="text-center text-2xl font-semibold">Signup</p>
            </div>
            <Form onFinish={handleLogin} layout="vertical">
            <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input your Email!" }]}
                initialValue={email}
            >
                <Input onChange={(e) => setEmail(e.target.value)} size="large"/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please input your password!" }]}
                initialValue={password}
            >
                <Input.Password onChange={(e) => setPassword(e.target.value)} size="large"/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full" size="large"
                    style={{
                        display: buttonLoading ? "none" : "block",
                    }}
                >
                    Signup
                </Button>
                <Button loading={buttonLoading} className="w-full"
                    style={{
                        display: buttonLoading ? "block" : "none",
                        backgroundColor: '#ffeb3b', // Setting yellow background
                        borderColor: 'goldenrod',  // Optional: setting a border color
                        color: 'black'
                    }}
                >
                    Loading
                </Button>
            </Form.Item>
        </Form>
            <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <p>Or I have an account.</p>
                <p>
                    <Link href={'/login'}>
                        Login?
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignupForm;
