import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
};

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <div className="space-y-8">
      <ProductList data={latestProducts} title="Latest Products" />
    </div>
  );
}
