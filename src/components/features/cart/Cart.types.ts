export interface ICartProps {
  postItem: {
    id: string;
    name: string;
    title: string;
    contents: string;
    image: string;
    price: number;
    createDate: string;
  }[];
}

export interface ICartUIProps {
  checkList: any[];
  onClickCheckAll: () => void;
  onClickCheckList: (list: IList) => void;
  totalPrice: number;
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
