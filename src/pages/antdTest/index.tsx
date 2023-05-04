import { Avatar, Card, Checkbox, Input, Rate, Select } from 'antd'
import { BodyText, BodyTextLg, BodyTextSm } from '@/common/styles/globalStyles'
import { Colors } from '@/common/styles/colors'
import {
  FlexColumnContainer,
  HorizontalCardLg,
  HorizontalCardSm,
  InfoSectionContainer,
  MyButton,
  MyTag,
  PriceContainer,
  ProfileContainer,
  ProfileTextDataContainer,
  ReactionContainer,
  ReactionsContainer,
} from '@/components/common/customComponent.styles'
import { TruncatedText } from '@/common/styles/UI/util.styles'
const { TextArea } = Input
export default function AntdTestPage() {
  return (
    <div style={{ backgroundColor: '#D9D9D9', padding: '4rem' }}>
      버튼
      <MyButton type="primary">button-primary-md</MyButton>
      <MyButton>button-secondary-md</MyButton>
      <MyButton disabled>button-disabled-md</MyButton>
      <br />
      <MyButton size="large" type="primary">
        button-primary-lg
      </MyButton>
      <MyButton size="large">button-secondary-lg</MyButton>
      <MyButton size="large" disabled>
        button-disabled-lg
      </MyButton>
      <br />
      <br />
      태그 (전체 포스트 리스트 등 카테고리류에 사용)
      <MyTag isChecked={true}>Tag checked</MyTag>
      <MyTag isChecked={false}>Tag unchecked</MyTag>
      <br />
      <br />
      카드 (포스트)
      <Card
        style={{ width: 400, border: 'unset' }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      >
        <FlexColumnContainer gap={'0.5rem'}>
          <BodyTextSm color={Colors.primary} weight={600}>
            카테고리명
          </BodyTextSm>
          <BodyTextLg>제목</BodyTextLg>
          <BodyText color={Colors.gray1}>
            <TruncatedText lines={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minimLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris
            </TruncatedText>
          </BodyText>
          <InfoSectionContainer>
            <ProfileContainer>
              <Avatar>E</Avatar>
              <ProfileTextDataContainer>
                <BodyTextSm weight={600}>이름</BodyTextSm>
                <BodyTextSm color={Colors.gray1}>날짜</BodyTextSm>
              </ProfileTextDataContainer>
            </ProfileContainer>
            <ReactionsContainer>
              <ReactionContainer>
                <img src="images/heart-outlined.svg" alt="관심 수" />
                <span>3</span>
              </ReactionContainer>
              <ReactionContainer>
                <img src="images/comment-outlined.svg" alt="덧글 수" />
                <span>3</span>
              </ReactionContainer>
            </ReactionsContainer>
          </InfoSectionContainer>
        </FlexColumnContainer>
      </Card>
      <br />
      <br />
      카드 (시리즈)
      <Card
        style={{ width: 400, border: 'unset' }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      >
        <FlexColumnContainer gap={'0.5rem'}>
          <BodyTextSm color={Colors.primary} weight={600}>
            카테고리명
          </BodyTextSm>
          <BodyTextLg>제목</BodyTextLg>
          <InfoSectionContainer>
            <BodyText>n 개의 포스트</BodyText>
            <Rate />
          </InfoSectionContainer>
        </FlexColumnContainer>
      </Card>
      <br />
      <br />
      카드 (상세페이지)
      <HorizontalCardLg>
        <img
          className="horizontal-card-cover"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <FlexColumnContainer className="horizontal-card-body" gap={'0.5rem'}>
          <BodyTextSm color={Colors.primary} weight={600}>
            카테고리명
          </BodyTextSm>
          <BodyTextLg>제목</BodyTextLg>
          <BodyText color={Colors.gray1}>
            <TruncatedText lines={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisdolore magna
              aliqua. Ut enim ad minim veniam, dolore magna aliqua. Ut enim ad minim veniam,
            </TruncatedText>
          </BodyText>
          <InfoSectionContainer>
            <BodyTextSm color={Colors.gray1}>날짜</BodyTextSm>
            <ReactionsContainer>
              <ReactionContainer>
                <img src="images/heart-outlined.svg" alt="관심 수" />
                <span>3</span>
              </ReactionContainer>
              <ReactionContainer>
                <img src="images/comment-outlined.svg" alt="덧글 수" />
                <span>3</span>
              </ReactionContainer>
            </ReactionsContainer>
          </InfoSectionContainer>
        </FlexColumnContainer>
      </HorizontalCardLg>
      <br />
      <br />
      카드 (장바구니)
      <HorizontalCardSm>
        <img
          className="horizontal-card-cover"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <div className="horizontal-card-body" style={{ display: 'flex', alignItems: 'center' }}>
          <FlexColumnContainer gap={'0.5rem'}>
            <BodyTextLg>제목</BodyTextLg>
            <InfoSectionContainer>
              <BodyTextSm color={Colors.gray1}>날짜</BodyTextSm>
            </InfoSectionContainer>
          </FlexColumnContainer>
          <PriceContainer>
            <BodyTextLg>3,000원</BodyTextLg>
          </PriceContainer>
        </div>
      </HorizontalCardSm>
      <br />
      <br />
      인풋 (1줄)
      <Input type="primary" placeholder="hi" />
      <br />
      <br />
      텍스트에리어 (여러줄)
      <TextArea />
      <br />
      <br />
      선택 드롭다운
      <Select
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
      <br />
      <br />
      체크박스
      <Checkbox>Checkbox</Checkbox>
    </div>
  )
}
