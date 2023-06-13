export const renderCommandLetters = (command, matchingPart, isComplete) => {
  let matchedCount = 0;
  let isPreviousMatched = false;

  // Split the command string into an array of letters and map over each letter
  return command.split('').map((letter, index) => {

    // If the command is complete, render a pre element with the letter, using a specific class for styling
    if(isComplete) {
      return (
        <pre key={index} className="inline h-7 px-2 py-1 font-mono rounded-sm bg-secondary-hov text-white font-bold">
          { letter }
        </pre>
      );
    }

    if (matchingPart[index] === letter) {
      // If the current letter matches the corresponding letter in the matchingPart
      if (isPreviousMatched) {
        matchedCount++;
      } else {
        matchedCount = 1;
        isPreviousMatched = true;
      }

      return (
        // Render a pre element with the letter, applying different styles based on the match status
        <pre
          key={index}
          className={`inline h-7 px-2 py-1 rounded-sm ${
            matchedCount <= matchingPart.length ? 'font-bold font-mono text-white bg-secondary-hov' : 'bg-command'
          }`}
        >
          {letter}
        </pre>
      );
    }

    isPreviousMatched = false;

    // Render a pre element with the letter, using a specific class for styling
    return (
      <pre key={index} className="inline h-7 font-mono px-2 py-1 rounded-sm bg-command">
        {letter}
      </pre>
    );
  });
};
