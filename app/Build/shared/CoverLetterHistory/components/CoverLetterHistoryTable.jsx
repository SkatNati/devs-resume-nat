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
import { columns } from "./CoverLetterHistoryColumn";
import { useGetAllCoverLetterHistory } from "../hooks/useGetAllCoverLetterHistory";

const CoverLetterHistoryTable = () => {
  const { cvData, isLoading } = useGetAllCoverLetterHistory();
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>Cover Letters</CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <DataTable columns={columns} data={cvData} loading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default CoverLetterHistoryTable;
