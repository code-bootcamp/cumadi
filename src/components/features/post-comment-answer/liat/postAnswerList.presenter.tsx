import { CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Avatar } from 'antd'

import * as S from './postAnswerList.styles'
import { getCreateDate } from '@/common/libraries/utils'
import { IPostAnswerListUIProps } from './postAnswerList.types'
import PostAnswerWrite from '../write/postAnswerWrite.container'

export default function PostAnswerListUI({ PostCommentAnswerData, onClickDeleteAnswer }: IPostAnswerListUIProps) {
  const CommentAnswer = PostCommentAnswerData?.fetchPostCommentAnswer

  // **** 상태
  const [isEditCommentAnswer, setIsEditCommentAnswer] = useState(false)

  const onClickEditAnswer = () => setIsEditCommentAnswer(prev => !prev)

  return (
    <>
      {CommentAnswer && !isEditCommentAnswer && (
        <S.CommentList key={CommentAnswer?.answerId}>
          <S.CommentTop>
            <S.AvatarWrapper>
              <Avatar src={CommentAnswer?.answerAuthor.image ?? ''} style={{ width: '2.5rem', height: '2.5rem' }}>
                {CommentAnswer?.answerAuthor.nickname[0]}
              </Avatar>
              <S.AvatarIntro>
                <div>{CommentAnswer?.answerAuthor.nickname}</div>
                <S.Date>{getCreateDate(CommentAnswer?.updatedAt)}</S.Date>
              </S.AvatarIntro>
            </S.AvatarWrapper>
            <S.ButtonWrapper>
              <button onClick={onClickEditAnswer}>수정</button>
              <button onClick={onClickDeleteAnswer} id={CommentAnswer?.answerId}>
                <CloseOutlined />
              </button>
            </S.ButtonWrapper>
          </S.CommentTop>
          <S.Contents>{CommentAnswer?.content}</S.Contents>
        </S.CommentList>
      )}
      {isEditCommentAnswer && (
        <PostAnswerWrite
          isEditCommentAnswer={isEditCommentAnswer}
          onClickEditAnswer={onClickEditAnswer}
          CommentAnswer={CommentAnswer}
        />
      )}
    </>
  )
}
