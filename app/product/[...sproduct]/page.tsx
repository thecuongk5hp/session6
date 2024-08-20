import React from 'react'
interface Params{
  product: string[]
}
type Props={
  params:Params
}
export default function ProductDetail(props:Props) {
  console.log("props", props);
  const {params} = props;
  return (
    <div>trang chi tiet san pham co id la :{params.product[0]} !</div>
  )
}
