"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();

  const createNewChat = async () => {
    // all logic her
    router.push(`/chat/abc`);
  };
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon className="text-black dark:text-white" />
    </Button>
  );
}

export default CreateChatButton;
