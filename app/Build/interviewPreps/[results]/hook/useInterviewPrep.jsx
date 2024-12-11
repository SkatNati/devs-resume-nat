import { useState, useEffect } from "react";
import { useUpdateInterviewPrep } from "../../hook/useUpdateInterviewPrep";
import { useGetSingleInterviewPreps } from "../../hook/useGetSingleInterviewPreps";

export const useInterviewPrep = () => {
  const { data, loading, error, getSingleInterviewPreps } =
    useGetSingleInterviewPreps();
  const { updateinterviewPrep } = useUpdateInterviewPrep();

  const [company, setCompany] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [behavioralQuestions, setBehavioralQuestions] = useState("");
  const [technicalQuestions, setTechnicalQuestions] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [additionalProject, setadditionalProject] = useState("");
  const [questionsForInterviewers, setQuestionsForInterviewers] = useState("");
  const [isSaving, setisSaving] = useState(false);

  useEffect(() => {
    if (data) {
      setCompany(data.company);
      setSummary(data.summary);
      setSkills(data.skills.join("\n• "));
      setBehavioralQuestions(data.behavioralQuestions.join("\n• "));
      setTechnicalQuestions(data.technicalQuestions.join("\n• "));
      setProjectDescription(data.projectDescription.join("\n• "));
      setadditionalProject(data.additionalProject?.join("\n• "));
      setQuestionsForInterviewers(data.questionsForInterviewers.join("\n• "));
    }
  }, [data]);

  const handleUpdate = async () => {
    const dataToSend = {
      company,
      summary,
      skills: skills.split("\n• "),
      behavioralQuestions: behavioralQuestions.split("\n• "),
      technicalQuestions: technicalQuestions.split("\n• "),
      projectDescription: projectDescription.split("\n• "),
      additionalProject: additionalProject.split("\n• "),
      questionsForInterviewers: questionsForInterviewers.split("\n• "),
    };

    setisSaving(true);

    try {
      await updateinterviewPrep(dataToSend);
      getSingleInterviewPreps();
    } catch (error) {
      console.error("Error updating interview preparation:", error);
      alert("Failed to update interview preparation");
    } finally {
      setisSaving(false);
    }
  };

  return {
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
  };
};
