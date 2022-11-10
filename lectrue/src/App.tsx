import Movie from "./components/Movie";
import "./index.css";

function App() {
  return (
    <div>
      <Movie title="노인을 위한 나라는 없다" summary="저쩌구어쩌구" imgSrc="./movie1.jpg" />
      <Movie title="저수지의 개들" summary="어쩌구저쩌구" imgSrc="./movie2.jpg" />
    </div>
  );
}

export default App;
