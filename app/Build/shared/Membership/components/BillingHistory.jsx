"use client";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "./BillingColumn";
import { useGetBillingHistory } from "../hooks/useGetBillingHistory";
const BillingHistory = () => {
  const { billingHistory, loadingHistory } = useGetBillingHistory();
  return (
    <Card className="">
      <CardHeader className="bg-gray-100">
        <CardTitle>Billing History</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <DataTable
          columns={columns}
          data={billingHistory}
          loading={loadingHistory}
        />
      </CardContent>
    </Card>
  );
};

export default BillingHistory;
