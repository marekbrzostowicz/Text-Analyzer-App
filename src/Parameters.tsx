import { useEffect, useState } from "react";

interface Parameters {
  text: string;
  isSpaceChecked: boolean;
  onWordCountChange: (count: number) => void;
}

const Parameters = ({
  text,
  isSpaceChecked,
  onWordCountChange,
}: Parameters) => {
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [sentenceCount, setSentence] = useState(0);

  useEffect(() => {
    // console.log(text.split(" "));
    let totalTextCharacter;

    if (isSpaceChecked) {
      const textWithoutSpaces = text.replace(/\s/g, "");
      totalTextCharacter = textWithoutSpaces.length;
    } else {
      totalTextCharacter = text.length;
    }
    setTotalCharacters(totalTextCharacter);
  }, [text, isSpaceChecked]);

  useEffect(() => {
    const wordsCount = text.split(/\s+/).filter((word) => word.length > 0);
    setWords(wordsCount.length);
    onWordCountChange(wordsCount.length);
  }, [text, onWordCountChange]);

  useEffect(() => {
    const trimmedText = text.trim();
    if (trimmedText.length === 0) {
      setSentence(0);
    }
    const sentences = trimmedText.split(/[.!?]/);
    const filtered = sentences.filter((e) => e.trim().length > 0);

    if (filtered.length === 0 && trimmedText.length > 0) {
      setSentence(1);
      return;
    }
    setSentence(filtered.length);
  }, [text]);
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between gap-6 h-44 mt-16 px-6 md:px-32">
        {/* Total characters */}
        <div className="bg-violet-500 flex-1 rounded-xl flex items-center p-6">
          <div className="flex flex-col gap-2 pl-6">
            {totalCharacters ? (
              <p className="text-7xl font-bold">
                {totalCharacters > 9 ? "" : "0"}
                {totalCharacters}
              </p>
            ) : (
              <p className="text-7xl font-bold">00</p>
            )}

            <span className="font-semibold text-xl">Total Characters</span>
          </div>
        </div>
        {/* Word Count */}
        <div className="bg-orange-400 flex-1 rounded-xl flex items-center p-6">
          <div className="flex flex-col gap-2 pl-6">
            {words ? (
              <p className="text-7xl font-bold">
                {words > 9 ? "" : "0"}
                {words}
              </p>
            ) : (
              <p className="text-7xl font-bold">00</p>
            )}

            <span className="font-semibold text-xl">Word Count</span>
          </div>
        </div>
        {/* Sentence count */}
        <div className="bg-red-400 flex-1 rounded-xl flex items-center p-6">
          <div className="flex flex-col gap-2 pl-6">
            {sentenceCount ? (
              <p className="text-7xl font-bold">
                {sentenceCount > 9 ? "" : "0"}
                {sentenceCount}
              </p>
            ) : (
              <p className="text-7xl font-bold">00</p>
            )}

            <span className="font-semibold text-xl">Sentence Count</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parameters;
