"use client";
import { InputEnum } from "@/shared/api/enums";
import { getSearchParams } from "@/shared/lib/getSearchParams";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useGetSingleInterviewPreps } from "./useGetSingleInterviewPreps";

const personalInfo = [
  {
    type: "header",
    title: "About the company",
  },
  {
    name: "company",
    required: true,
    type: InputEnum.TEXTAREA,
    category: "company",
  },
  {
    type: "header",
    title: "About me",
  },
  {
    label: "Summary",
    name: "summary",
    required: true,
    type: InputEnum.TEXTAREA,
    category: "aboutMe",
  },
  {
    label: "Skills",
    name: "skills",
    required: true,
    type: InputEnum.TEXTAREA,
    category: "aboutMe",
  },
  // {
  //   type: "header",
  //   title: "Questions",
  // },
  // {
  //   label: "Behavioral",
  //   name: "behavioralQuestions",
  //   required: true,
  //   type: InputEnum.TEXTAREA,
  //   category: "questions",
  // },
  // {
  //   label: "Technical",
  //   name: "technicalQuestions",
  //   required: true,
  //   type: InputEnum.TEXTAREA,
  //   category: "questions",
  // },
  // {
  //   type: "header",
  //   title: "Projects",
  // },
  // {
  //   label: "Project 1: Project title",
  //   name: "projectDescription",
  //   required: true,
  //   type: InputEnum.TEXTAREA,
  //   category: "projects",
  // },
  // {
  //   type: "header",
  //   title: "Questions for Interviewers",
  // },
  // {
  //   name: "questionsForInterviewers",
  //   required: true,
  //   type: InputEnum.TEXTAREA,
  //   category: "interviewers",
  // },
];

export const useInterViewPrep = () => {
  const { data } = useGetSingleInterviewPreps();
  const id = getSearchParams("id");
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const formSchema = z.object({
    company: z.string().nonempty({ message: "Company name is required" }),
    summary: z.string().nonempty({ message: "Summary is required" }),
    skills: z.string().nonempty({ message: "Skills are required" }),
    //   behavioralQuestions: z
    //     .string()
    //     .nonempty({ message: "Behavioral questions are required" }),
    //   technicalQuestions: z
    //     .string()
    //     .nonempty({ message: "Technical questions are required" }),
    //   projectDescription: z
    //     .string()
    //     .nonempty({ message: "Project description is required" }),
    //   questionsForInterviewers: z
    //     .string()
    //     .nonempty({ message: "Questions for interviewers are required" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),

    defaultValues: getFormDefaultValues(data),
  });

  useEffect(() => {
    if (data) form.reset(getFormDefaultValues(data));
  }, [data, form]);

  const onSubmit = async (data) => {
    setisLoading(true);
    const dataToSend = {
      id,
      ...data,
    };
    try {
      const res = await axios.post("/api/ai/interview-prep", dataToSend);

      router.push(`/Build/interviewPreps/?id=${id}`);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  function getFormDefaultValues(data) {
    const defaultValues = {
      company: data?.company,
      summary: data?.summary,
      skills: data?.skills,
      //   behavioralQuestions: data?.behavioralQuestions,
      //   technicalQuestions: data?.technicalQuestions,
      //   projectDescription: data?.projectDescription,
      //   questionsForInterviewers: data?.questionsForInterviewers,
    };
    return defaultValues;
  }

  return {
    personalInfo,
    form,
    isLoading,
    onSubmit,
  };
};
