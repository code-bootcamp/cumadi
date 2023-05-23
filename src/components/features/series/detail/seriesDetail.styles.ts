import { Colors } from "@/common/styles/colors";
import { breakPoints } from "@/common/styles/media";
import { ElevatedCard } from "@/components/common/customComponent.styles";
import styled from "@emotion/styled";
import { Button, Tag } from "antd";

export const Container = styled.section`
  width: 74rem;
  padding: 1rem;
  /* background-color: yellowgreen; */

  @media ${breakPoints.tablet} {
    width: 44rem;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const PostTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const PostSubTitle = styled.div`
  font-size: 1.2rem;
`;

export const PostTagWapper = styled.div`
  padding: 1rem 0;
  margin-top: 1rem;
`;

export const PostTag = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-main);
  margin-right: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Avatar = styled.img``;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.6rem;
`;
export const Writer = styled.div``;
export const CreatedAt = styled.div`
  color: #bdbdbd;
  font-size: 0.8rem;
`;

export const PostUpdateBtnWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  color: var(--color-gray-2);
`;

export const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

export const Like = styled(ElevatedCard)`
  font-weight: bold;
  cursor: pointer;
`;
export const Category = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${Colors.primary};
  padding-right: 0.5rem;
`;

export const PriceWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Sell = styled.div`
  margin-bottom: 1rem;
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const PostWrapper = styled.div`
  display: flex;
  margin-top: 0.6rem;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 20rem;
  height: 15rem;
  margin-top: 1rem;
  border-radius: 1rem 0 0 1rem;
`;

export const DescriptionWrapper = styled.div`
  padding: 1.8rem 0 0 1.5rem;
  width: 100%;
`;

export const PostsSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PostCategory = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
  color: ${Colors.primary};
  padding-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const PostName = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const PostName2 = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const PostIntro = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 1.3rem;
`;

export const PackTag = styled(Tag)`
  padding: 0.5rem 1rem;
  color: ${Colors.black};
  border-radius: 1.5rem;
  border-color: ${Colors.black};
  background-color: ${Colors.white};
  cursor: pointer;
`;

export const TopTag = styled(Tag)`
  padding: 0.02rem 0.5rem;
  color: ${Colors.black};
  border-radius: 1.5rem;
  border-color: ${Colors.primary};
  background-color: ${Colors.muted};
  cursor: pointer;
`;

export const Update = styled.span`
  color: ${Colors.gray1};
`;

export const Date = styled.div`
  font-size: 0.75rem;
  color: gray;
  margin-bottom: 1.3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PostCount = styled.div`
  margin-top: 2.5rem;
`;

export const NewPostsButton = styled(Button)`
  margin-top: 2.5rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  width: 9rem;
  height: 1.8rem;
`;

export const SeriesButton = styled.button`
  font-size: 0.8rem;
`;

export const CartButton = styled(Button)`
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
`;
