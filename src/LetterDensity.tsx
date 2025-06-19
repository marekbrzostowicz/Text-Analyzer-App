import { useEffect, useState } from "react";

interface LetterDensityProps {
  text: string;
}

const LetterDensity = ({ text }: LetterDensityProps) => {
  const [letters, setLetter] = useState<[string, number, number][]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const obj: { [key: string]: number } = {};
    const textUpper = text.toUpperCase();
    for (let i = 0; i < textUpper.length; i++) {
      const char = textUpper[i];
      if (char >= "A" && char <= "Z") {
        obj[char] = (obj[char] || 0) + 1;
      }
    }
    const entries = Object.entries(obj);
    const sortedEntries = entries.sort((a, b) => {
      return b[1] - a[1];
    });

    const sum = entries.reduce((a, el) => {
      const value = el[1];
      return a + value;
    }, 0);

    const sortedEntiresPercentage = sortedEntries.map(
      ([key, value]): [string, number, number] => {
        const percentage = (value / sum) * 100;
        return [key, value, percentage];
      }
    );
    setLetter(sortedEntiresPercentage);
  }, [text]);

  return (
    <section>
      <div className="text-gray-400 px-6 mt-12 md:px-32 mb-32">
        <h1 className="font-semibold text-3xl mb-4">Letter density</h1>

        {letters.length > 0 ? (
          (isOpen ? letters : letters.slice(0, 5)).map(
            ([key, value, percentage]) => (
              <div
                className="text-gray-400 mt-2 flex gap-8 items-center "
                key={key}
              >
                <div className="w-6 text-right">
                  {" "}
                  <span className="text-gray-400 font-bold text-xl">{key}</span>
                </div>

                <div className="h-4 flex-grow bg-slate-800 rounded-2xl relative overflow-hidden">
                  <div
                    className="h-full rounded-2xl bg-violet-500 transition-[width] duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <div className="w-32 text-right tabular-nums">
                  {" "}
                  <span className="text-xl">
                    {value}&nbsp;&nbsp;&nbsp;&nbsp;({percentage.toFixed(2)}%){" "}
                  </span>
                </div>
              </div>
            )
          )
        ) : (
          <p className="mt-8">
            No letters found. Start typing to see letter density.
          </p>
        )}

        {letters.length > 5 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-6 text-violet-400 hover:text-violet-300 focus:outline-none font-medium"
          >
            {isOpen ? "Show Less" : "Show More"}{" "}
          </button>
        )}
      </div>
    </section>
  );
};

export default LetterDensity;
