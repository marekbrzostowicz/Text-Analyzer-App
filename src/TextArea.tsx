import { useState } from "react";

interface TextAreaProps {
  text: (newValue: string) => void;
  spaces: (value: boolean) => void;
  readingTime: number;
}

const TextArea = ({ text, spaces, readingTime }: TextAreaProps) => {
  const [limitChecked, setIsLimitChecked] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(0);
  const [countLetters, setCountLetters] = useState(0);

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    text(newValue);
    setCountLetters(newValue.length);
  };

  const handleSpaceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const state = e.target.checked;
    spaces(state);
  };

  const handleLimitInputChange = () => {
    setIsLimitChecked(!limitChecked);
  };

  const handleLimitValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value) || 0;
    setCharacterLimit(number);
  };
  return (
    <>
      <div className="mt-16 px-6 md:px-32 relative">
        <div
          className={`text-gray-400 text-xl -top-8 right-12 md:right-36 absolute ${
            !limitChecked ? "hidden" : ""
          }`}
        >
          {countLetters}/{characterLimit}
        </div>

        <textarea
          onChange={handleTextArea}
          name="text"
          id="myText"
          placeholder="Start typing here... (or paste your text)"
          className={`w-full h-52 rounded-xl p-4 bg-zinc-800 text-gray-300 text-xl border border-gray-600 resize-none
          focus:outline-none focus:ring focus:ring-zinc-600 ${
            countLetters >= characterLimit ? "opacity-75" : ""
          }`}
          disabled={countLetters >= characterLimit && limitChecked}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-xl mt-2 px-6 md:px-32">
        <div className="flex flex-col md:flex-row md:gap-6 gap-2 md:items-center">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="opcja-1"
              className="appearance-none h-5 w-5 border border-gray-400 rounded-md hover:cursor-pointer checked:bg-violet-500 checked:border-2 checked:border-white"
              onChange={handleSpaceInputChange}
            ></input>
            <label
              htmlFor="opcja-1"
              className="hover:cursor-pointer hover:text-slate-500"
            >
              Exclude Spaces
            </label>
          </div>
          <div className="flex gap-2 items-center ">
            <input
              type="checkbox"
              id="opcja-2"
              className="appearance-none h-5 w-5 border border-gray-400 rounded-md hover:cursor-pointer checked:bg-violet-500 checked:border-2 checked:border-white "
              onChange={handleLimitInputChange}
            ></input>
            <label
              htmlFor="opcja-2"
              className="hover:cursor-pointer hover:text-slate-500"
            >
              Set Character Limit
            </label>

            <input
              className={`bg-slate-800 text-white ml-4 ${
                !limitChecked ? "hidden" : ""
              }`}
              type="number"
              onChange={handleLimitValue}
            ></input>
          </div>
        </div>
        <p>Approx. reading time: {readingTime} minute</p>
      </div>
    </>
  );
};

export default TextArea;
