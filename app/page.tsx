import Link from 'next/link'
import { CartItems } from "./components/CartItems";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-base-300">
      <CartItems />
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10 w-full sm:w-[400px] lg:w-fit min-w-[300px]">
        <figure><img src="./privew.png" alt="Album" className="lg:w-[20rem] w-full" /></figure>
        <div className="card-body">
          <h2 className="card-title">Try Out Notrix Payments For Yourself!</h2>
          <p>Click the button to visit Notrix.io</p>
          <div className="card-actions justify-center items-center mt-3">
            <Link href="https://notrix.io" className="btn lg:btn-lg btn-accent">Visit Notrix.io</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
