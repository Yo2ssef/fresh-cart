"use client";

import { toast } from "react-toastify";
import { handleUserRegister } from "./Register.action";
import { userDataType } from "./register.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useRegister() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const getRegister = async (userData: userDataType) => {
    setIsLoading(true);
        const toastId = toast.loading("Registering your account...");
    try {
      const response = await handleUserRegister(userData);
      toast.dismiss(toastId);
      if (response === true) {
        toast.success("Register Success...");
        router.push("/login");
      } else if (response === false) {
        toast.error("Register Failed. Please try again.");
      } else {
        toast.warning(response || "Something went wrong");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Server Error, please try later");
      console.error("Registration Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { getRegister, isLoading };
}