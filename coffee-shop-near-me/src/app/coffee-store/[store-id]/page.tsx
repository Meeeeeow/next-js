"use client";
// import { useParams } from "next/navigation";
import Link from "next/link";
interface StoreDetailsProps {
  params: {
    "store-id": string;
  };
}
const StoreDetails: React.FC<StoreDetailsProps> = ({ params }) => {
  //   const router = useParams();
  console.log(params["store-id"]);
  //   console.log("router", router["store-id"]);
  return (
    <div>
      <h1>Store Details: {params["store-id"]}</h1>
      <Link href="/coffee-store">Back to Store</Link>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
};
export default StoreDetails;
