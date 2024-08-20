"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Products() {
  const searchParams: any = useSearchParams();
  const name = searchParams.get("name");
  const category = searchParams.get("category");

  return (
    <div>
      <p>tên sản phẩm: {name}</p>
      <p>danh mục: {category}</p>
    </div>
  );
}