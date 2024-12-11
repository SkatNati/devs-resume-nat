"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHandleStepChangeFunc } from "../../Cv/hooks/usehandleStepChangeFunc";
import useGetCurrentUserResume from "@/shared/hook/useGetCurrentUserResume";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export const useSubmitCv = (cvId, { type }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setisloading] = useState(false);
  const { incrementSteps } = useHandleStepChangeFunc(type);
  const { currentCv: CoverLetterData } = useGetCurrentUserResume(type);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { fileName, parsedText } =
    CoverLetterData?.message.extractedCvText ?? {};

  useEffect(() => {
    if (parsedText && fileName) {
      setSelectedFile(true);
    }
  }, [CoverLetterData]);

  const handleUpload = async (file) => {
    const interval = setInterval(() => {
      setUploadProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 200);

    setSelectedFile(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    handleUpload(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    handleUpload(file);
  };

  const handleSubmitCvToExtract = async () => {
    setisloading(true);
    try {
      const formData = new FormData();
      formData.append("resumePDF", selectedFile);
      formData.append("id", cvId);

      if (type == "CoverLetter") {
        await axios.patch(`/api/User/CoverLetter/uploadCv`, formData);
      } else if (type == "interviewPreps") {
        await axios.patch(`/api/User/interview-preps/uploadCv`, formData);
      }
      queryClient.invalidateQueries(["useGetCurrentUserResume", cvId]);
      incrementSteps();
    } catch (error) {
      toast({
        title: "Error",
        description: error?.response?.data?.message,
        variant: "destructive",
        className: "rounded-xl",
      });
      console.error("Error uploading file:", error);
    } finally {
      setisloading(false);
    }
  };

  return {
    handleUpload,
    uploadProgress,
    selectedFile,
    setSelectedFile,
    handleSubmitCvToExtract,
    isLoading,
    fileName,
    parsedText,
    handleFileChange,
    handleDrop,
  };
};
