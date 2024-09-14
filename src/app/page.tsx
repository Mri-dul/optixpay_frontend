import Dashboard from "@/components/Dashboard/page";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "OptixPay | Dashboard",
  description: "This is 'OptixPay' which is an open payment gateway",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
