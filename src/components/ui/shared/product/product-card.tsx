import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Product {
  slug: string;
  name: string;
  image: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const imageUrl = product.image?.[0] || "/placeholder.jpg";

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={imageUrl}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className='text-sm font-medium'>{product.name}</h2>
        </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} Stars</p>
          {product.stock > 0 ? (
            <p className="font-bold">{ product.price }</p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          ) }
        </div>
        </CardContent>
        </Card>
  );
};

export default ProductCard;

