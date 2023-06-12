import { COMMANDS } from "../constants/commands";

export const expandShortcut = ({ e, command, setInputValue, textareaRef, parentRef }: {
    e: React.ChangeEvent<HTMLInputElement>, 
    command: string
    setInputValue: Function
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    parentRef: React.RefObject<HTMLDivElement>;
} 
): void => {

    let textInArray: RegExpMatchArray | null;
    let coincidence: boolean = false;
    let expansion: string;
    let textareaStyles: string;

    let text = e.target?.value; // Get the value of the input element

    // If the input value is empty or undefined, return
    if(!(text)) return;

    // Match the input value against a regular expression to split it into an array of words and symbols
    textInArray = text.match(/(\w+|[^\w\s]*\/\w+[^\w\s]*|[^\w\s]+|\s+)/gi);

    // If the textInArray is empty or undefined, return
    if(!textInArray) return;
    
    // Check if the command is found in any word of the textInArray
    coincidence = textInArray.some(word => word.includes(command));

    // If the command is found in the textInArray
    if(!coincidence) return

    let index = textInArray.indexOf( command );

    // Iterate over the COMMANDS object to find the matching command and retrieve its expansion and textarea styles
    for (const key in COMMANDS) {
        if (COMMANDS.hasOwnProperty(key)) {
            const objKey = COMMANDS[key];
            
            if(objKey.SHORTCUT === command) {
                expansion = objKey.EXPANSION;
                textareaStyles = objKey.TEXTAREA_STYLES;
                // console.log(expansion)
                break;
            }
        }
    }

    // Delay the following actions to allow the input value to update first
    setTimeout(() => {
        // If textInArray is defined, replace the command at the found index with the expansion
        if(textInArray) textInArray[index] = expansion;
        
        // Set the updated input value using the setInputValue function
        setInputValue(textInArray)

        // Get the textarea element from the textareaRef
        const textarea = textareaRef.current;
        const browser = parentRef.current;

        // Modify the textarea element's styles and attributes
        if (textarea) {
            // Add each style from textareaStyles to the textarea's class list
            if(textareaStyles) textareaStyles.map((style: string) => textarea.classList.add(style));
            
            // Set the textarea's overflow property to 'hidden'
            textarea.style.overflow = 'hidden';

            // Add a class to the browser element
            if(browser) browser.classList.add('')
        }
    }, 50);
}

