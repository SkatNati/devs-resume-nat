import InterviewPrepHistoryTable from "@/app/Build/interviewPreps/TemplateSelectStarter/interviewPrepHistory/components/InterviewPrepHistoryTable";

import CoverLetterHistoryTable from "@/app/Build/shared/CoverLetterHistory/components/CoverLetterHistoryTable";

import Membership from "@/app/Build/shared/Membership";

import ResumeHistoryTable from "@/app/Build/shared/ResumeHistory/components/ResumeHistoryTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeOptionsTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="files" className="w-full">
        {" "}
        <TabsList className="flex justify-center items-center">
          <TabsTrigger value="files">Files</TabsTrigger>

          <TabsTrigger value="membership">Membership</TabsTrigger>
        </TabsList>
        <TabsContent value="files" className="w-full">
          <div className="mt-10 w-full h-full max-w-[90%] mx-auto">
            <ResumeHistoryTable />
          </div>
          <div className="mt-10 w-full h-full max-w-[90%] mx-auto">
            <CoverLetterHistoryTable />
          </div>{" "}
          <div className="mt-10 w-full h-full max-w-[90%] mx-auto">
            <InterviewPrepHistoryTable />
          </div>{" "}
        </TabsContent>
        <TabsContent value="membership">
          <div className="mt-10 w-full h-full max-w-[90%] mx-auto">
            <Membership />
          </div>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeOptionsTabs;
