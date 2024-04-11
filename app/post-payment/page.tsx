"use server";

import { confirmedPayment } from "../utils/notrixAction";
import SuccessAlert from "../components/SuccessAlert";
import FailedAlert from "../components/FailedAlert";

interface PostPaymentPageProps {
  paymentRequestToken: string;
}

export async function generateStaticParams() {
  return [
    { paymentRequestToken: 'example-token' },
  ];
}

export async function generateMetadata({ searchParams }: { searchParams: PostPaymentPageProps }) {
  return {
    title: 'Post Payment',
  };
}

export default async function PostPayment({ searchParams }: { searchParams: PostPaymentPageProps }) {
  const confirmedPaymentBool = await confirmedPayment(searchParams.paymentRequestToken);

  return (
    <div className="flex h-full flex-col items-center justify-center p-2">
      {confirmedPaymentBool ? <SuccessAlert /> : <FailedAlert />}
    </div>
  );
}