import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState();

  async function getProduct() {
    if (!id) return;
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-green-600">{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} />
    </div>
  );
}
