import styled from "styled-components";

interface Props {
  title: string;
  summary: string;
  imgSrc: string;
}

const Movie = ({ title, summary, imgSrc }: Props) => {
  return (
    <StyledArticle>
      <StyledH2>{title}</StyledH2>
      <p>{summary}</p>

      <StyledImageWrapper>
        <StyledImg src={imgSrc} alt={title} />
      </StyledImageWrapper>
    </StyledArticle>
  );
};

export default Movie;

const StyledArticle = styled.article`
  width: 300px;
  height: 400px;
  margin: 30px;
  padding: 10px 20px;
  background-color: #121212;
  color: white;

  border-radius: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
