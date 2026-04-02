"use client";
import { AllProductsData } from "@/app/mainPage.interface";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Link from "next/link";

export function BreCrumProductDetil({ prop }: { prop: AllProductsData }) {
  const {
    title,
    category: { name: nameCategory, _id: idCategory },
    subcategory,
  } = prop;

  const subc = subcategory[0].name;

  return (
    <Breadcrumb className="mb-3 mt-1.5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="#" className="flex gap-1 ">
            <span>
              <Home size={15} />
            </span>
            <span className="font-semibold">Home</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href={`/categories/${idCategory}`} className="font-semibold">
            {nameCategory}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href="#" className="font-semibold">
            {subc}
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="font-semibold">{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
