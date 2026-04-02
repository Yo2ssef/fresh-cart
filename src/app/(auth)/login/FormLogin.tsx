"use client";

import AppBtn from "@/components/shared/AppBtn/AppBtn";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { schemaLogin } from "./Login.schema";
import { userDataTypeLogin } from "./Login.interface";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";

export default function FormLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(schemaLogin),
  });

  async function loginHandle(data: userDataTypeLogin) {
    setIsLoading(true);
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (response?.ok) {
        toast.success("Login Successfully");
        router.push("/");
      } else {
        toast.error("Incorrect Email or Password");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(loginHandle)}
        className="flex flex-col gap-4 items-center"
      >
        {/* Email Input */}

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-lg text-gray-700"
                htmlFor={field.name}
              >
                Email Address
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
                type="email"
                className="focus-visible:ring-green-600/40  rounded-md h-11 bg-white"
              />
              {/* <FieldDescription>
                Provide a concise title for your bug report.
              </FieldDescription> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* Password Input */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-lg text-gray-700"
                htmlFor={field.name}
              >
                Password
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your password"
                autoComplete="off"
                type="password"
                className="focus-visible:ring-green-600/40  rounded-md h-11 bg-white"
              />
              {/* <FieldDescription>
                Provide a concise title for your bug report.
              </FieldDescription> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <AppBtn
          className="cursor-pointer h-12 rounded-md bg-green-600 text-lg font-bold hover:bg-green-700 w-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoaderIcon
              role="status"
              aria-label="Loading"
              className="size-6 animate-spin"
            />
          ) : (
            "Login"
          )}
        </AppBtn>
        <Separator className="my-4" />
        <p className="text-md text-gray-700">
          New to FreshCart?{" "}
          <Link href="/register" className="text-green-600 text-lg font-medium">
            Create an account
          </Link>
        </p>
      </form>
    </>
  );
}
