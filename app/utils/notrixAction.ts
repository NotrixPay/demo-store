"use server";
import { cookies } from "next/headers";
import Client from "notrix";
import { Product } from "./types";
import { redirect } from "next/navigation";

let client = new Client(process.env.NOTRIX_API_KEY!, process.env.NOTRIX_PROJECT_ID!);

export const notrixProcess = async (items: Product[]) => {
  items = items.map((i) => { i.uuid = ""; return i })
  let checkoutSession = await client.createCheckoutSession(
    items,
    "http://demo.notrix.io/post-payment",
    "http://demo.notrix.io",
  );

  return redirect("https://notrix.io/pay/" + checkoutSession.paymentRequestToken);
};

export const confirmedPayment = async (paymentRequestToken: string) => {
  let paymentConfirmed = await client.isPaid(paymentRequestToken);
  return paymentConfirmed;
};
