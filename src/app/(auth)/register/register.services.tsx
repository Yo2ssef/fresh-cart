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
    const toastRender = toast.loading("Registering your account...");
    try {
      const response = await handleUserRegister(userData);

      if (response === true) {
        toast.update(toastRender, {
          render: "Register Success...",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        router.push("/login");
      } else if (response === false) {
        toast.update(toastRender, {
          render: "Register Failed. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastRender, {
          render: response || "Something went wrong",
          type: "warning",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(toastRender, {
        render: "Server Error, please try later",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.error("Registration Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return { getRegister, isLoading };
}
