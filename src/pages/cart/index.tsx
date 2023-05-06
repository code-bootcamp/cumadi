import { postItem } from "@/common/dummyData/post";
import Cart from "@/components/features/cart/Cart.container";

export default function CartListPage() {
  return <Cart postItem={postItem} />;
}
