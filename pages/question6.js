// 6. Jewelery store (3p)
// Visa en lista av smycken från apiet:
// https://fakestoreapi.com/products/category/jewelery
// I listan visas title och en liten bild för varje smycke.
// Bilden ska vara högst 300px bred.

// Om man klickar på ett smycke visas dess detaljsida.
// Där kan man se title, description och image (i orginal-storlek).

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Question6() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );

    const data = await response.json();

    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={"/products/" + product.id}>
              <h2 className="text-2xl"> {product.title}</h2>

              <p> {product.description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
