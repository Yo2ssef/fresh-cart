"use client";

import AppBtn from "@/components/shared/AppBtn/AppBtn";
import {
  Field,
  //   FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoaderIcon, UserPlus2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useRegister } from "./register.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./register.schema";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function FormRegister() {
  const { getRegister, isLoading } = useRegister();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });
  return (
    <>
      <form
        onSubmit={handleSubmit(getRegister)}
        className="flex flex-col gap-4 items-center"
      >
        {/* Name Input */}

        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-lg text-gray-700"
                htmlFor={field.name}
              >
                Name*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Ali"
                autoComplete="off"
                type="text"
                className="focus-visible:ring-green-600/40  rounded-md h-11 bg-white"
              />
              {/* <FieldDescription>
                Provide a concise title for your bug report.
              </FieldDescription> */}
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

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
                Email*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="ali@example.com"
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
                Password*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="create a strong password"
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

        {/* rePassword Input */}

        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-lg text-gray-700"
                htmlFor={field.name}
              >
                Confirm Password*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Confirm Your Password"
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

        {/* Phone Input */}

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="text-lg text-gray-700"
                htmlFor={field.name}
              >
                Phone Number*
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="+1 234 567 8900"
                autoComplete="off"
                type="tel"
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
          className=" cursor-pointer h-12 rounded-md bg-green-600 text-lg font-bold hover:bg-green-700 w-full"
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
            <span>
              <UserPlus2 />
            </span>
          )}
          Create My Account
        </AppBtn>
        <Separator className="my-4" />
        <p className="text-md text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 text-lg font-medium">
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
