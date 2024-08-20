import React from "react";

export default function page(props: any) {
  console.log(props);

  const { params } = props;
  return <div>{params.slug.join("/")}</div>;
}