"use server";
import { cookies } from "next/headers";
import Client from "notrix";
import { Product } from "./types";
import { redirect } from "next/navigation";

let client = new Client(process.env.NOTRIX_API_KEY!, process.env.NOTRIX_PROJECT_ID!);

export const notrixProcess = async (items: Product[]) => {
  items = items.map((i) => {i.uuid = ""; return i})
  let checkoutSession = await client.createCheckoutSession(
    items,
    "http://demo.notrix.io/post-payment",
    "http://demo.notrix.io",
  );

  cookies().set("checkoutSession", JSON.stringify(checkoutSession), {
    expires: new Date(checkoutSession.expires_at),
  });

  return redirect("https://notrix.io/pay/" + checkoutSession.paymentRequestToken);
};

export const confirmedPayment = async (checkoutSession: any) => {
  let paymentConfirmed = await client.isPaid(
    checkoutSession.paymentRequestToken
  );
  return paymentConfirmed;
};
