import styled from "styled-components";

interface Props {
  title: string;
  feature: string;
  location: string;
  imgSrc: string;
  link: string;
}

const Store = ({ title, feature, location, imgSrc, link }: Props) => {
  return (
    <>
      <StyledArticle>
        <a href={link}>
          <StyledH2>{title}</StyledH2>
        </a>
        <p>{location}</p>
        <StyledImgWrapper>
          <StyledImg src={imgSrc} alt={title} />
        </StyledImgWrapper>
        <P>{feature}</P>
      </StyledArticle>
    </>
  );
};

export default Store;

const StyledArticle = styled.article`
  width: 500px;
  height: 600px;
  margin: 30px;
  padding: 10px 20px;
  background-color: #121212;
  color: white;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  width: 200px;
  text-decoration: none;
  // 하이퍼링크 색 제거가 안됌
`;

const P = styled.p`
  font-weight: bold;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const StyledImgWrapper = styled.div`
    border: 10px solid orange;
`;

const StyledImg = styled.img`
  width: 270px;
  height: 270px;
`;