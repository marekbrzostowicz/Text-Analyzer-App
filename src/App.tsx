import Header from "./Header";
import TextArea from "./TextArea";
import Parameters from "./Parameters";
import { useState } from "react";
import LetterDensity from "./LetterDensity";

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [isSpaceChecked, setIsSpaceChecked] = useState(false);

  const handleTextAreaInput = (value: string) => {
    setTextValue(value);
  };

  const handleSpaceInputChange = (value: boolean) => {
    setIsSpaceChecked(value);
  };

  return (
    <>
      <Header />
      <TextArea text={handleTextAreaInput} spaces={handleSpaceInputChange} />
      <Parameters text={textValue} isSpaceChecked={isSpaceChecked} />
      <LetterDensity text={textValue} />
    </>
  );
};

export default App;
