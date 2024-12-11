"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IdCardIcon } from "@radix-ui/react-icons";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("_id", {
    header: "ID",
  }),
  columnHelper.accessor("stripeSubscriptionId", {
    header: "Stripe Subscription ID",
  }),
  columnHelper.accessor("planName", {
    header: "Subscription Plan",
  }),
  columnHelper.accessor("cardBrand", {
    header: "Card Brand",
  }),
  columnHelper.accessor("cardLast4", {
    header: "Card Last 4",
    cell: ({ row }) => {
      return (
        <p className=" truncate capitalize  flex items-center">
          <IdCardIcon className=" truncate mr-2" />
          xxxx{row?.original?.cardLast4}
        </p>
      );
    },
  }),
  columnHelper.accessor("createdAt", {
    header: "Date Created",
    cell: ({ row }) => {
      return <p>{format(new Date(row?.original.createdAt), "PPP")}</p>;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row?.original.status;
      return (
        <Badge
          variant="default"
          className={cn(
            "py-1 px-2 rounded-sm",

            status === "paid" && "bg-[#ffffea] text-[#595e16]",
            status == "active" && "bg-[#EDFFEA] text-[#165E3D]"
          )}
        >
          {status}
        </Badge>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: ({ row }) => {
      return <p>${row?.original.amount}</p>;
    },
  }),
];
