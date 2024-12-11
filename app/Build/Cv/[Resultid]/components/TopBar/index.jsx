// import React, { useEffect, useState } from "react";
// import SheetComp from "@/shared/component/sheet";
// import { Button } from "@/components/ui/button";
// import { DownloadIcon } from "@radix-ui/react-icons";
// import EditForm from "../../components/EditForm";
// import { useDownloadDocument } from "@/app/Build/shared/hooks/useDownloadDocument";
// import { DownloadSpin } from "@/shared/component/icons/downloadSpin";
// import { useGetUserSubscription } from "@/shared/hook/useGetUserSubscription";
// import { useRouter } from "next/navigation";

// const TopBar = ({ cvData, setCvData }) => {
//   const { downloadPdfDocument, isLoading } = useDownloadDocument();
//   const { getUserSubscription, subscription, loadingSubscription } =
//     useGetUserSubscription();
//   const router = useRouter();
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     const initializeSubscription = async () => {
//       await getUserSubscription();
//       setIsInitialized(true);
//     };
//     initializeSubscription();
//   }, []);

//   const handleDownload = async () => {
//     // console.log(subscription);
//     if (!isInitialized || loadingSubscription) return;
    
//     downloadPdfDocument(cvData?._id);

//     // if (!subscription || !subscription.isActive) {
//     //   router.push("/pricing");
//     // } else {
//     //   downloadPdfDocument(cvData?._id);
//     // }
//   };

//   return (
//     <div className="flex justify-end gap-x-3 my-4">
//       <Button
//         onClick={handleDownload}
//         disabled={isLoading || loadingSubscription}
//         className={`${
//           isLoading || loadingSubscription
//             ? "bg-gray-300"
//             : "bg-[#f9e547] hover:bg-gray-50"
//         } text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50`}
//       >
//         {isLoading ? <DownloadSpin /> : <DownloadIcon className="font-bold" />}
//         Download
//       </Button>

//       <SheetComp
//         trigger={
//           <Button
//             className="bg-[#0f172a] text-white font-semibold py-2 px-4 rounded-lg shadow-md mr-4"
//             disabled={isLoading}
//           >
//             Quick Edit
//           </Button>
//         }
//       >
//         <EditForm cvData={cvData} setCvData={setCvData} />
//       </SheetComp>
//     </div>
//   );
// };

// export default TopBar;


import React, { useEffect, useState } from "react";
import SheetComp from "@/shared/component/sheet";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import EditForm from "../../components/EditForm";
import { useDownloadDocument } from "@/app/Build/shared/hooks/useDownloadDocument";
import { DownloadSpin } from "@/shared/component/icons/downloadSpin";
import { useGetUserSubscription } from "@/shared/hook/useGetUserSubscription";
import { useRouter } from "next/navigation";

const TopBar = ({ cvData, setCvData }) => {
  const { downloadPdfDocument,downloadDocument, isLoading } = useDownloadDocument();
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

    downloadPdfDocument('resume'); // to Download without Subscription //

    /* if (!subscription || !subscription.isActive) {
      router.push("/pricing");
    } else {
      downloadPdfDocument(cvData?._id);
    } */
  };

  return (
    <div className="flex justify-between items-center my-4">   
      {/* Left-aligned "Return to Home" Button */}
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


      <div className="flex justify-end gap-x-3 my-4">
        <Button
          onClick={handleDownload}
          disabled={isLoading || loadingSubscription}
          className={`${
            isLoading || loadingSubscription
              ? "bg-gray-300"
              : "bg-[#f9e547] hover:bg-gray-50"
          } text-gray-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50`}
        >
          {isLoading ? <DownloadSpin /> : <DownloadIcon className="font-bold" />}
          Download
        </Button>

        <SheetComp
          trigger={
            <Button
              className="bg-[#0f172a] text-white font-semibold py-2 px-4 rounded-lg shadow-md mr-4"
              disabled={isLoading}
            >
              Quick Edit
            </Button>
          }
        >
          <EditForm cvData={cvData} setCvData={setCvData} />
        </SheetComp>
      </div>
    </div>
  );
};

export default TopBar;