"use server";
import { cookies } from "next/headers";
import Client from "notrix";
import { Product } from "./types";
import { redirect } from "next/navigation";

let client = new Client(process.env.NOTRIX_API_KEY!);

export const notrixProcess = async (items: Product[]) => {
  let checkoutSession = await client.createCheckoutSession(
    items,
    "http://demo.notrix.io/post-payment",
    "http://demo.notrix.io",
  );

  cookies().set("checkoutSession", JSON.stringify(checkoutSession), {
    expires: new Date(checkoutSession.expires_at),
  });

  return redirect(checkoutSession.url);
};

export const confirmedPayment = async (checkoutSession: any) => {
  let paymentConfirmed = await client.isPaid(
    checkoutSession.checkout_page_token
  );
  return paymentConfirmed;
};
