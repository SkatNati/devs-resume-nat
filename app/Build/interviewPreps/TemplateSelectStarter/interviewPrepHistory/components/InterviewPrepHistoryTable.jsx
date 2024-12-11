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
import { columns } from "./InterviewPrepHistoryColumn";

import { useGetAllInterviewPreps } from "../hook/useGetAllInterviewPreps";

const InterviewPrepHistoryTable = () => {
  const { data, isLoading } = useGetAllInterviewPreps();

  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>Interview Template</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <DataTable columns={columns} data={data ?? []} loading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default InterviewPrepHistoryTable;
