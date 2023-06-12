// Function to check a word against a command

export const checkWord = ({ text, command }: {
    text: string | undefined;
    command: string;
}): { progress: string; matchingPart: string } | undefined => {
    let progress = '', matchingPart = '';
    
    // If the text is undefined or an array, return empty progress and matchingPart objects
    if(!text || Array.isArray(text)) return { progress: '', matchingPart: '' };

    // Convert the text into an array of characters
    const textInArray = text.split(''); 

    // Iterate over the characters of the command and compare them with the corresponding characters in the textInArray
    for (let i = 0; i < command.length; i++) {
      if(textInArray[i] === command[i]) {
        matchingPart += textInArray[i]
      }
    }

    // Concatenate all the characters in the textInArray to form the progress string
    for (const word of textInArray) {
      progress += word ;
    }

    // Return an object containing the progress and matchingPart strings
    return { progress, matchingPart };
}