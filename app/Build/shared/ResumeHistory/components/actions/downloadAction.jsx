import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useDownloadDocument } from "../../../hooks/useDownloadDocument";
import { useGetUserSubscription } from "@/shared/hook/useGetUserSubscription";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const DownloadAction = ({ id }) => {
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

  return (
    <div id="resumePreview">
      <Button variant="ghost" size="icon">
        <Download />
      </Button>
    </div>
  );
};
