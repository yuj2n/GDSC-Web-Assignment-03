import styled from "styled-components";

interface Props {
  title: string;
  feature1: string;
  feature2: string;
  feature3: string;
  location: string;
  imgSrc: string;
  link: string;
}

const Store = ({ link, title, location, imgSrc, feature1, feature2, feature3}: Props) => {
  return (
    <>
      <StyledArticle>
        <StyledH2>{title}</StyledH2>
        <p>{location}</p>
        <StyledImgWrapper>
          <a href={link}>
          <StyledImg src={imgSrc} alt={title}/>
          </a>
        </StyledImgWrapper>
        <P>- {feature1}</P>
        <P>- {feature2}</P>
        <P>- {feature3}</P>
      </StyledArticle>
    </>
  );
};

export default Store;

const StyledArticle = styled.article`
  width: 500px;
  height: 600;
  margin: 30px;
  padding: 10px 20px;
  background-color: #121212;
  color: white;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  color: yellow;
  margin-right: 10px;
  text-align: center;
  text-shadow: 2px 2px 2px darkcyan;
  &:hover {
    transition: all 0.5s;
    color: orange;
  }
`;

const P = styled.p`
  font-weight: bold;
  font-size: large;
  transition: font-size 0.1s;
  &:hover {
    font-size: 120%;
  }
`;

const StyledImgWrapper = styled.div`
    border: 10px solid orange;
`;

const StyledImg = styled.img`
  width: 270px;
  height: 270px;
`;

