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
import { columns } from "./ResumeHistoryColumn";
import { useGetAllCvHistory } from "../hooks/useGetAllCvHistory";

const ResumeHistoryTable = () => {
  const { cvData, isLoading } = useGetAllCvHistory();
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Resumes</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <DataTable columns={columns} data={cvData} loading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default ResumeHistoryTable;
