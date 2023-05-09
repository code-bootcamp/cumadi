export interface ICartUIProps {
  postItem: {
    id: string;
    name: string;
    title: string;
    contents: string;
    image: string;
    price: number;
    createDate: string;
  }[];
  productList: {
    id: string;
    name: string;
    title: string;
    contents: string;
    image: string;
    price: number;
    createDate: string;
  }[];
  checkList: any[];
  onClickCheckAll: () => void;
  onClickCheckList: (list: IList) => void;
  totalPrice: number;
  onClickRemoveList: (id: string) => void;
  onClickPayment: () => void;
}

export interface IList {
  id: string;
  name: string;
  title: string;
  contents: string;
  image: string;
  price: number;
  createDate: string;
}
