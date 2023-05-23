import { ChangeEvent, useRef, useState } from "react";
import NewSeriesUI from "./newSeries.presenter";
import { useRouter } from "next/router";
import { Input, Tag } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_SERIES,
  FETCH_POSTS_OF_MINE,
  FETCH_SERIES_CATEGORIES,
} from "./newSeries.query";

const tagRender = (props: any) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
      }}
    >
      {label}
    </Tag>
  );
};

export default function NewSeries(props) {
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement>(null);
  const seriesData = router.query;

  const [thumbnail, setThumbnail] = useState<string>("");
  const [cateState, setCateState] = useState("");
  const [postState, setPostState] = useState([]);
  const [isClickPrice, setIsClickPrice] = useState(false);
  const { TextArea } = Input;

  const { data: post } = useQuery(FETCH_POSTS_OF_MINE);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const [createSeries] = useMutation(CREATE_SERIES);

  const postOptions = post?.fetchPostsOfMine.map((el) => {
    return { label: el.title, value: el.postId };
  });
  const categoryOptions = category?.fetchSeriesCategories.map((el) => {
    return { label: el.name, value: el.categoryId };
  });
  const seriesPrice = isClickPrice ? 3000 : 0;
  const paid = isClickPrice ? true : false;

  const onCheckCategory = (value) => {
    setCateState(value);
  };

  const onCheckPost = (value) => {
    setPostState(value);
  };

  const onClickUploadThumbnail = () => {
    imgRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setThumbnail(event.target?.result);
      }
    };
  };

  const onSubmitForm = async (values: any) => {
    try {
      const result = await createSeries({
        variables: {
          createSeriesInput: {
            title: values.title,
            introduction: values.intro,
            image: "123",
            paid,
            price: seriesPrice,
            categoryId: cateState,
            posts: postState,
          },
        },
      });
      console.log(result.data?.createSeries.seriesId);
      if (result.data?.createSeries.seriesId === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      console.log(values);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      return;
    }
    console.log(values);
    alert("시리즈 작성이 완료되었습니다.");
    router.push("/");
  };

  const onSubmitUpdate = async () => {};

  return (
    <NewSeriesUI
      seriesData={seriesData}
      isEdit={props.isEdit}
      post={post}
      imgRef={imgRef}
      thumbnail={thumbnail}
      TextArea={TextArea}
      postOptions={postOptions}
      categoryOptions={categoryOptions}
      isClickPrice={isClickPrice}
      setIsClickPrice={setIsClickPrice}
      onSubmitForm={onSubmitForm}
      onChangeFile={onChangeFile}
      onClickUploadThumbnail={onClickUploadThumbnail}
      tagRender={tagRender}
      onCheckPost={onCheckPost}
      onCheckCategory={onCheckCategory}
    />
  );
}
