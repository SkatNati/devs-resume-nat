"use client";
import React, { useEffect, useState } from "react";
import { ResumeSkeleton } from "@/shared/SkeletonsComponents";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useInterviewPrep } from "./hook/useInterviewPrep";
import { useDownloadDocument } from "../../shared/hooks/useDownloadDocument";
import { useGetUserSubscription } from "@/shared/hook/useGetUserSubscription";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Results = () => {
  const {
    company,
    summary,
    skills,
    behavioralQuestions,
    technicalQuestions,
    projectDescription,
    additionalProject,
    questionsForInterviewers,
    isSaving,
    loading,
    error,
    setCompany,
    setSummary,
    setSkills,
    setBehavioralQuestions,
    setTechnicalQuestions,
    setProjectDescription,
    setadditionalProject,
    setQuestionsForInterviewers,
    handleUpdate,
  } = useInterviewPrep();

  // const downloadPDF = () => {
  //   const input = document.getElementById("pdf-content");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //     pdf.save("interview_preparation.pdf");
  //   });
  // };
  const { downloadPdfDocument, isLoading } = useDownloadDocument();
  const { getUserSubscription, subscription, loadingSubscription } =
    useGetUserSubscription();
  const router = useRouter();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeSubscription = async () => {
      await getUserSubscription();
      setIsInitialized(true);
    };
    initializeSubscription();
  }, []);

  const handleDownload = async () => {
    // console.log(subscription);
    if (!isInitialized || loadingSubscription) return;
      downloadPdfDocument('interviewPrep');

    // if (!subscription || !subscription.isActive) {
    //   router.push("/pricing");
    // } else {
    //   downloadPdfDocument();
    // }
  };
  if (loading)
    return (
      <div className="loading-indicator">
        <ResumeSkeleton />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className="bg-gray-50 px-14 py-4">
      <Button
        onClick={() => router.push('/dashboard')}
        className="flex items-center bg-[#0f172a] text-white font-semibold py-2 px-4 rounded-lg shadow-md ml-8"
      >
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Dashboard
      </Button> 
      <div className="p-8 bg- md:max-w-[70%] w-full mx-auto bg-white">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 bg-[#F3ECBC] py-2 px-2">
          Interview Preparation
        </h1>

        <div id="resumePreview">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1">
              About the company
            </h2>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1">
              About me
            </h2>
            <div className="mb-4">
              <h3 className="font-medium mb-1 text-gray-700">
                <b>Summary</b>
              </h3>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows="3"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-1 text-gray-700">
                <b>Skills</b>
              </h3>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                rows="3"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="py-2 bg-[#EEEEEE] px-2 my-1 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1">
              <b>Questions</b>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                <b>Technical</b>
              </h2>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
                value={technicalQuestions}
                onChange={(e) => setTechnicalQuestions(e.target.value)}
                rows="5"
              />
            </div>

            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <b>Behavioral</b>
            </h2>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
              value={behavioralQuestions}
              onChange={(e) => setBehavioralQuestions(e.target.value)}
              rows="5"
            />
          </div>

          <div className="py-2 bg-[#EEEEEE] px-2 my-1">
            <b>Project</b>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1">
              Project 1: Custom Webpart
            </h2>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows="5"
            />

            <textarea
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
              value={additionalProject}
              onChange={(e) => setadditionalProject(e.target.value)}
              rows="5"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 bg-[#EEEEEE] border-[#C4C4C4] px-1 py-1">
              Questions for Interviewers
            </h2>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm no-scrollbar"
              value={questionsForInterviewers}
              onChange={(e) => setQuestionsForInterviewers(e.target.value)}
              rows="5"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleUpdate}
            className="mt-4 px-4 py-2 bg-black text-white rounded-md"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
          <button
            disabled={isLoading || loadingSubscription}
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-[#F9E547] text-black rounded-md"
          >
            {isLoading || loadingSubscription ? "loading.." : "Download as PDF"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
