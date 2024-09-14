"use client"
import React, { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Dashboard from "@/components/Dashboard/page";
import Login from "./login/page";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Home() {
    const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = getCookie('ac%t'); // Adjust 'access_token' based on the cookie name you use
    if (token) {
      setHasToken(true);
    } else {
      setHasToken(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>OptixPay | Dashboard</title>
        <meta name="description" content="This is 'OptixPay' which is an open payment gateway" />
      </Head>
        {
            hasToken ?
                <DefaultLayout>
                    <Dashboard />
                </DefaultLayout>
                : <Login/>
        }
    </>
  );
}
