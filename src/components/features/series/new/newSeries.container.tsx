import { ChangeEvent, useRef, useState } from "react";
import NewSeriesUI from "./newSeries.presenter";
import { useRouter } from "next/router";
import { Input, Modal, Tag } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_SERIES,
  FETCH_POSTS_OF_MINE,
  FETCH_SERIES,
  FETCH_SERIES_CATEGORIES,
  UPDATE_SERIES,
  UPLOAD_IMAGE,
} from "./newSeries.query";
import { useRecoilState } from "recoil";
import { editSeriesId } from "@/common/store";

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

  const [editId] = useRecoilState(editSeriesId);
  const [thumbnail, setThumbnail] = useState("");
  const [cateState, setCateState] = useState("");
  const [postState, setPostState] = useState([]);
  const [isClickPrice, setIsClickPrice] = useState(false);
  const { TextArea } = Input;

  const { data: post } = useQuery(FETCH_POSTS_OF_MINE);
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const { data: previousData } = useQuery(FETCH_SERIES, {
    variables: { seriesId: editId },
  });

  const [createSeries] = useMutation(CREATE_SERIES);
  const [updateSeries] = useMutation(UPDATE_SERIES);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

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

  const onChangeFile = async (event) => {
    const file = event.target.files?.[0];
    try {
      const image = await uploadImage({ variables: { file } });
      setThumbnail(image.data?.uploadImage);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onSubmitForm = async (values: any) => {
    try {
      const result = await createSeries({
        variables: {
          createSeriesInput: {
            title: values.title,
            introduction: values.intro,
            image: thumbnail,
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

  const onSubmitUpdate = async (values: any) => {
    if (values.title === "" && values.introduction === "") {
      alert("수정한 내용이 없습니다.");
      return;
    }

    const updateSeriesInput = {};
    if (values.title !== "") updateSeriesInput.title = values.title;
    if (values.contents !== "")
      updateSeriesInput.introduction = values.introduction;

    try {
      const result = await updateSeries({
        variables: {
          seriesId: editId,
          updateSeriesInput: updateSeriesInput,
        },
      });

      if (result.data?.updateSeries.seriesId === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }

      void router.push(`/series/${result.data?.updateSeries.seriesId}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      return;
    }
  };

  return (
    <NewSeriesUI
      previousData={previousData}
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
      onSubmitUpdate={onSubmitUpdate}
      onChangeFile={onChangeFile}
      onClickUploadThumbnail={onClickUploadThumbnail}
      tagRender={tagRender}
      onCheckPost={onCheckPost}
      onCheckCategory={onCheckCategory}
    />
  );
}
