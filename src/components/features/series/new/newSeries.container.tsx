import { ChangeEvent, useRef, useState } from 'react'
import NewSeriesUI from './newSeries.presenter'
import { useRouter } from 'next/router'
import { Input, Tag } from 'antd'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_SERIES, FETCH_POSTS_OF_MINE, FETCH_SERIES_CATEGORIES } from './newSeries.query'

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
  const router = useRouter()
  const imgRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState<string>("")
  const [introduction, setIntroduction] = useState("")
  const [cateState, setCateState] = useState("")
  const [postState, setPostState] = useState([]);
  const [isClickPrice, setIsClickPrice] = useState(false)
  // false일 경우 0원 true일 경우 3000
  const { TextArea } = Input
  
  const { data: post } = useQuery(FETCH_POSTS_OF_MINE)
  const { data: category } = useQuery(FETCH_SERIES_CATEGORIES);
  const [createSeries] = useMutation(CREATE_SERIES);

  const postOptions = post?.fetchPostsOfMine.map(el => {
    return { label: el.title, value: el.postId }
  })
  const categoryOptions = category?.fetchSeriesCategories.map(el => {
    return { label: el.name, value: el.categoryId }
  })

  const onClickUploadThumbnail = () => {
    imgRef.current?.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return;
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = event => {
        if (typeof event.target?.result === 'string') {
          setThumbnail(event.target?.result)
        }
      }
  }

  const onSubmitForm = async (values: any) => {
    try {
      const result = await createSeries({
        variables: {
          createSeriesInput: {
            title: values.title,
            introduction: values.intro,
            image: values.thumbnail,
            paid: false,
            price: 3000,
            categoryId: "5964b7ae-ce1c-4428-a2fc-8224467fd3ce",
            posts: [
              "132602ed-0b1a-4b4b-abbb-d9bcde4d1388",
              "28e37608-f28d-4651-aefd-5446330d1489"
            ]
          }
        }
      })
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
    alert("시리즈 작성이 완료되었습니다.")
    router.push("/");
  }

  const onCheckPost = (value) => {
    // console.log(postOptions.filter(el => el.value == value));
    console.log(value);
  }

  return (
    <NewSeriesUI
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
    />
  )
}