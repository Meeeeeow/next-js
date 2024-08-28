import Link from "next/link";
import Banner from "./components/banner";

export default function Home() {
  const storeId = 100;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner buttonText="Coffee shops near you" />
      <Link href="/coffee-store/3">Go to Coffee Store</Link>
      <Link href={`/coffee-store/${storeId}`}>Go to coffee place!</Link>
    </main>
  );
}
