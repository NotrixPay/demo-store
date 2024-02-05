"use server";
import { cookies } from "next/headers";

import { confirmedPayment } from "../utils/notrixAction";
import SuccessAlert from "../components/SuccessAlert";
import FailedAlert from "../components/FailedAlert";

export default async function Success() {
  let confirmedPaymentBool = false;

  const checkoutSessionCookie = cookies().get("checkoutSession");
  if (checkoutSessionCookie !== undefined) {
    const checkoutSession = JSON.parse(checkoutSessionCookie!.value);
    confirmedPaymentBool = await confirmedPayment(checkoutSession);
  }

  return (
    <div className="flex h-full flex-col items-center justify-center p-2">
      {confirmedPaymentBool ? <SuccessAlert /> : <FailedAlert />}
    </div>
  );
}
