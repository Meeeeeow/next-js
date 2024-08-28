import { Metadata } from "next";
import React from "react";

interface DynamicRouteProps {
  params: {
    "route-id": string;
  };
}
export async function generateMetadata({
  params,
}: DynamicRouteProps): Promise<Metadata> {
  return {
    title: params["route-id"],
  };
}
const DynamicRoute: React.FC<DynamicRouteProps> = ({ params }) => {
  console.log(params);
  return <div>Page: {params["route-id"]}</div>;
};
export default DynamicRoute;
