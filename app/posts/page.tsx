"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState({
    name: "",
    category: "",
  });
  const router = useRouter();
  const searchParams: any = useSearchParams();
  const searchValue = searchParams.get("search");

  const handleChangeSearch = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSearchProduct = () => {
    router.push(
      `/products?name=${encodeURIComponent(product.name)}&category=${
        product.category
      }`
    );
  };

  return (
    <>
      <div>
        <p>search value: {searchValue}</p>
        <input
          type="text"
          placeholder="nhập"
          onChange={handleChangeSearch}
          value={inputValue}
        />
        <button onClick={handleSearch}>tìm kiếm</button>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="tìm kiếm theo tên"
          onChange={handleChange}
          value={product.name}
        />
        <input
          type="text"
          name="category"
          placeholder="tìm kiếm theo danh mục"
          onChange={handleChange}
          value={product.category}
        />
        <button onClick={handleSearchProduct}>tìm kiếm</button>
      </div>
    </>
  );
}