"use client";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputEnum } from "@/shared/api/enums";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateInterviewPrep } from "./useUpdateInterviewPrep";
import axios from "axios";
import { getSearchParams } from "@/shared/lib/getSearchParams";

export function useJobDesc() {
  const [isLoading, setisLoading] = useState(false);
  useState(false);
  const [isAiGenerating, setisAiGenerating] = useState(false);
  const { currentCv, isLoading: loading } =
    useGetCurrentUserResume("interviewPreps");
  const id = getSearchParams("id");
  const { toast } = useToast();
  const { updateinterviewPrep } = useUpdateInterviewPrep();

  const router = useRouter();

  const savedData = currentCv?.message;
  const formSchema = z.object({
    companyName: z.string().optional().nullable(),
    jobDescription: z.string().nullable().optional(),
  });

  const jobDescriptionFields = [
    {
      label: "Company",
      name: "companyName",
      placeholder: "Enter your company",
      type: InputEnum.TEXT,
    },

    {
      label: "Job Description",
      name: "jobDescription",
      placeholder: "Enter a brief description of the job area",
      required: true,
      type: InputEnum.TEXTAREA,
    },
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getFormDefaultValues(savedData),
  });

  const onSubmit = async (data) => {
    setisLoading(true);

    try {
      const dataToSend = { jobInfo: data };
      await updateinterviewPrep(dataToSend);

      setisAiGenerating(true);

      const dataAiToEnhance = { data: dataToSend, id };
      await axios.post("/api/ai/interview-prep", dataAiToEnhance);
      setisAiGenerating(false);

      router.push(`/Build/interviewPreps/${savedData?._id}`);
    } catch (error) {
      console.log(error);
      // const errorJson = JSON.parse(error.message);
      toast({
        title: "Error",
        description: "Something went wrong, please try again.",
        variant: "destructive",
        className: "rounded-xl",
      });
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && savedData) {
      form.reset(getFormDefaultValues(savedData));
    }
  }, [loading, savedData]);

  return {
    jobDescriptionFields,
    form,
    isLoading,
    onSubmit,
    isAiGenerating,
  };
}
function getFormDefaultValues(savedData) {
  return {
    companyName: savedData?.jobInfo?.companyName || "",
    jobDescription: savedData?.jobInfo?.jobDescription || "",
  };
}
