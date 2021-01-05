import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PostContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 150px;
  margin-bottom: 20px;
  box-shadow: 0.5px 0.5px 3px -1px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.basicColors.white};
  }

  @media only screen and (max-width: 769px) {
    width: 80%;
  }
`;

const PostRightContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
`;

// const Image = styled.div`
//   height: 100%;
//   width: 25%;
//   background: ${(props) => props.theme.secondaryColors.secondary};
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.titles.h3};
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  &:hover {
    color: ${(props) => props.theme.primaryColors.primary};
  }
`;

const ContentLeftContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentRightContainer = styled.div`
  position: relative;
  width: 20%;
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Dates = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
`;

const Location = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
`;

// const HeadSticker = styled.div`
//   width: 60px;
//   height: 60px;
//   border-radius: 60px;
//   background: ${(props) => props.theme.secondaryColors.secondary};
// `;

const Arthur = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
`;

export default function Post({ postData }) {
  const history = useHistory();

  function changeMillisecondsToLocalDate(milliseconds) {
    const day = new Date(milliseconds).getDate();
    const month = new Date(milliseconds).getMonth();
    const year = new Date(milliseconds).getFullYear();
    return `${year}/ ${month + 1}/ ${day}`;
  }

  function handleTitleOnClick(id) {
    history.push(`/explore/${id}`);
  }

  const title = postData.scheduleName;
  const location = postData.location;
  const arthur = postData.User.nickname
    ? postData.User.nickname
    : postData.User.fbName;
  const startDate = changeMillisecondsToLocalDate(postData.dateRange.start);
  const endDate = changeMillisecondsToLocalDate(postData.dateRange.end);
  const id = postData.id;
  const userId = postData.userId;

  return (
    <PostContainer>
      {/* <Image /> */}
      <PostRightContainer>
        <ContentLeftContainer>
          <TitleContainer>
            <Title onClick={() => handleTitleOnClick(id, userId)}>
              {title}
            </Title>
          </TitleContainer>
          <Location>{location}</Location>
          <Dates>
            {startDate} - {endDate}
          </Dates>
        </ContentLeftContainer>
        <ContentRightContainer>
          {/* <HeadSticker /> */}
          <Arthur>{arthur}</Arthur>
        </ContentRightContainer>
      </PostRightContainer>
    </PostContainer>
  );
}
