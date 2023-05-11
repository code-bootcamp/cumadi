export interface IPurchaseUIProps {
  checkList: {
    id: string;
    name: string;
    title: string;
    contents: string;
    image: string;
    price: number;
    createDate: string;
  }[];
  onClickPayment: () => void;
}
