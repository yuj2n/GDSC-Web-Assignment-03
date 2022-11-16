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
  width: 400px;
  height: 600px;
  margin: 30px;
  padding: 10px 20px;
  background-color: #121212;
  color: white;

  border-radius: 30px;

  display: flex;
  flex-direction: column;
  &:hover {
    transition: all 0.5s;
    background-color: #570412;
  }
`;

const StyledH2 = styled.h2`
  color: yellow;
  cursor: copy;
  margin-right: 10px;
  text-align: center;
  text-shadow: 2px 2px 2px darkcyan;
  &:hover {
    transition: all 0.5s;
    color: orange;
  }
`;

const P = styled.p`
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  transition: font-size 0.1s;
  &:hover {
    font-size: 120%;
    color: coral;
  }
`;

const StyledImgWrapper = styled.div`
    border: 10px solid orange;
`;

const StyledImg = styled.img`
  width: 270px;
  height: 270px;
  cursor: zoom-in;
`;

