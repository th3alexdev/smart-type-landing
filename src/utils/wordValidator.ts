export const checkWord = ({ text, command }: {
    text: string | undefined;
    command: string;
}): { progress: string; matchingPart: string } | undefined => {


    let progress = '', matchingPart = '';
    if(!text || Array.isArray(text)) return { progress: '', matchingPart: '' };

    const textInArray = text.split(''); 

    for (let i = 0; i < command.length; i++) {
      if(textInArray[i] === command[i]) {
        matchingPart += textInArray[i]
      }
    }

    for (const word of textInArray) {
      progress += word ;
    }

    return { progress, matchingPart };
}