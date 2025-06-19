import Header from "./Header";
import TextArea from "./TextArea";
import Parameters from "./Parameters";
import { useState } from "react";
import LetterDensity from "./LetterDensity";

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [isSpaceChecked, setIsSpaceChecked] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleTextAreaInput = (value: string) => {
    setTextValue(value);
  };

  const handleSpaceInputChange = (value: boolean) => {
    setIsSpaceChecked(value);
  };

  return (
    <>
      <Header />
      <TextArea
        text={handleTextAreaInput}
        spaces={handleSpaceInputChange}
        readingTime={Math.round((wordCount / 200) * 10) / 10}
      />
      <Parameters
        text={textValue}
        isSpaceChecked={isSpaceChecked}
        onWordCountChange={setWordCount}
      />
      <LetterDensity text={textValue} />
    </>
  );
};

export default App;
