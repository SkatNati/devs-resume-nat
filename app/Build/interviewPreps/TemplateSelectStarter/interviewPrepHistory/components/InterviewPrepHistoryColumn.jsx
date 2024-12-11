"use client";

import { Button } from "@/components/ui/button";
import { ImgComp } from "@/shared/ImgComp";

import { createColumnHelper } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";
import { ArrowUpDown } from "lucide-react";

import Link from "next/link";
import { useDeleteInterviewPrep } from "../hook/useDeleteInterviewPrep";
// import { useDeleteCL } from "../hooks/useDeleteCL";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("_id", {
    header: "Template",
    cell: ({ row }) => {
      return (
        <div className="w-12 h-12">
          <ImgComp
            src="/interviewprep.png"
            alt={row?.original._id}
            className="rounded-full"
          />
        </div>
      );
    },
  }),
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" truncate text-[#A3AED0]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Created
          <ArrowUpDown className=" truncate ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-gray-800">
          {formatDistanceToNow(new Date(row?.original.createdAt))} ago
        </p>
      );
    },
  }),
  columnHelper.accessor("updatedAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" truncate text-[#A3AED0]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Updated
          <ArrowUpDown className=" truncate ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-gray-800">
          {formatDistanceToNow(new Date(row?.original.updatedAt))} ago
        </p>
      );
    },
  }),
  columnHelper.accessor("view", {
    header: "View",
    cell: ({ row }) => {
      return (
        <Link href={`/Build/interviewPreps/${`${row?.original._id}`}`}>
          <Button variant="ghost" className="text-yellow-500">
            View
          </Button>
        </Link>
      );
    },
  }),
  columnHelper.accessor("delete", {
    header: "Delete",
    cell: ({ row, column }) => {
      const { handleDelete, isDeleting } = useDeleteInterviewPrep();
      return (
        <Button
          variant="ghost"
          onClick={() => handleDelete(row?.original._id).then(() => {})}
          disabled={isDeleting}
          className="text-red-600 hover:text-red-800"
        >
          {isDeleting ? "Deleting" : "Delete"}
        </Button>
      );
    },
  }),
];
