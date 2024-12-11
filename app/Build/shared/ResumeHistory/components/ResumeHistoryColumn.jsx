"use client";

import coverLetterTemplates from "@/app/Build/CoverLetter/components/coverLetterTemplates";
import resumeTemplates from "@/app/Build/Cv/[Resultid]/components/resumeTemplates";
import { Button } from "@/components/ui/button";
import { ImgComp } from "@/shared/ImgComp";

import { createColumnHelper } from "@tanstack/react-table";
import { format, formatDistanceToNow } from "date-fns";
import { ArrowUpDown } from "lucide-react";
import { useDeleteResume } from "../hooks/useDeleteResume";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DownloadAction } from "./actions/downloadAction";

const columnHelper = createColumnHelper();
const templateComponents = resumeTemplates.reduce((acc, current) => {
  acc[current.name] = current.thumbnails;
  return acc;
}, {});

export const columns = [
  columnHelper.accessor("templateId", {
    header: "Resume",
    cell: ({ row }) => {
      const TemplateComponent =
        templateComponents[row?.original.templateId || "Dev Resume 1"];
      return (
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12">
            <ImgComp
              src={TemplateComponent}
              alt={row?.original.templateId}
              className="rounded-full"
            />
          </div>
          <p className="text-xs text-gray-400">{row?.original.email}</p>
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
        <Link
          href={`/Build/Cv/${
            row?.original.isComplete
              ? row?.original._id
              : `?id=${row?.original._id}`
          }`}
        >
          <Button variant="ghost" className="text-yellow-500">
            {row?.original.isComplete ? "View" : "Continue"}
          </Button>
        </Link>
      );
    },
  }),
  columnHelper.accessor("delete", {
    header: "Amount",
    cell: ({ row, column }) => {
      const { handleDelete, isDeleting } = useDeleteResume();
      return (
        <Button
          variant="ghost"
          onClick={() => handleDelete(row?.original._id)}
          disabled={isDeleting}
          className="text-red-600 hover:text-red-800"
        >
          {isDeleting ? "Deleting" : "Delete"}
        </Button>
      );
    },
  }),
  // columnHelper.accessor("download", {
  //   header: "Download",
  //   cell: ({ row }) => {
  //     return <DownloadAction id={row.original._id} />;
  //   },
  // }),
];