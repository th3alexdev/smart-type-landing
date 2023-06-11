export const renderCommandLetters = (command, matchingPart, isComplete) => {
  let matchedCount = 0;
  let isPreviousMatched = false;

  return command.split('').map((letter, index) => {

    if(isComplete) {
      return (
        <pre key={index} className="inline px-2 py-0.5 font-mono rounded-sm bg-secondary-hov text-white font-bold">
          { letter }
        </pre>
      );
    }

    if (matchingPart[index] === letter) {
      if (isPreviousMatched) {
        matchedCount++;
      } else {
        matchedCount = 1;
        isPreviousMatched = true;
      }

      return (
        <pre
          key={index}
          className={`inline px-2 py-0.5 rounded-sm ${
            matchedCount <= matchingPart.length ? 'font-bold font-mono text-white bg-secondary-hov' : 'bg-command'
          }`}
        >
          {letter}
        </pre>
      );
    }

    isPreviousMatched = false;

    return (
      <pre key={index} className="inline font-mono px-2 py-0.5 rounded-sm bg-command">
        {letter}
      </pre>
    );
  });
};
