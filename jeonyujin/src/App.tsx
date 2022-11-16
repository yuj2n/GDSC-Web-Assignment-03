import Store from "./components/Store";
import styled from 'styled-components';

function App() {
  return (
    <section>
      <div>
      <Title>파스타 러버 전유진의 맛집 모음</Title>
      </div>
      <StyledArticle>
        <Store
        title="빈체로" 
        feature="로제파스타 美친맛, 피자와 리조또도 수준급, 이곳에서 알바중(안비밀)"
        // feature 요소들 띄어쓰기 적용하고 싶음 => how?
        location="경기 안산시 단원구 당곡로 11"
        imgSrc="빈체로.jpg"
        link="https://map.naver.com/v5/search/%EC%95%88%EC%82%B0%20%EB%B9%88%EC%B2%B4%EB%A1%9C/place/18110619?c=14088893.3693307,4484072.7027105,10,0,0,0,dh&entry=plt&placePath=%3Fentry%253Dbmp"
        />
      <Store
        title="바비레드"
        feature="진짜 밥이 레드. 파스타 JMT, 큐브 스테이크 진리"
        location="서울 강남구 봉은사로6길 39 바비레드"
        imgSrc="바비레드.jpg"
        link="https://map.naver.com/v5/entry/place/21607745?c=14140678.777183939,4509404.992156031,13,0,0,0,dh&placePath=%2Fhome&entry=plt"
      />
      <Store
        title="니뽕내뽕"
        feature="토뽕/크뽕/로뽕 강추, 치즈 늘어남 CG급, 국물 절대 못잃어."
        location="경기 수원시 팔달구 향교로 10-2"
        imgSrc="니뽕내뽕.jpg"
        link="https://map.naver.com/v5/search/%EB%8B%88%EB%BD%95%EB%82%B4%EB%BD%95%20%EC%88%98%EC%9B%90%EC%97%AD%EC%A0%90/place/36988165?c=14137365.8163321,4476490.2321545,15,0,0,0,dh&entry=plt&placePath=%3Fentry%253Dbmp"
       />
      <Store
        title="롤링파스타"
        feature="파스타계 다이소, 가격대비 가성비 bb"
        location="경기 부천시 부천로9번길 24"
        imgSrc="롤링파스타.jpg"
        link="https://map.naver.com/v5/search/%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%80%20%EB%B6%80%EC%B2%9C%EC%97%AD/place/1294908926?c=14098373.4818820,4506996.9928822,11,0,0,0,dh&entry=plt&isCorrectAnswer=true"
       />
    </StyledArticle>
    </section>
  );
}

const StyledArticle = styled.article`
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Title = styled.h1`
  color: #fdac66;
  text-align: center;
  font-size: 30px;
`;

export default App;