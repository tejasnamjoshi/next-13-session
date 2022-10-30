import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

const BackButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter();
  return <button type="button" onClick={() => router.back()} {...props}>Back</button>;
};

export default BackButton;
