"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Link from "next/link";

export function BreCrumCard() {
  return (
    <Breadcrumb className="mb-3 mt-1.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/" className="flex gap-1 ">
            <span>
              <Home size={15} />
            </span>
            <span className="font-semibold">Home</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">
            Shopping Cart
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
