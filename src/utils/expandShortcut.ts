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

    let text = e.target?.value;

    if(!(text)) return 
    
    textInArray = text.match(/(\w+|[^\w\s]*\/\w+[^\w\s]*|[^\w\s]+|\s+)/gi);

    if(!textInArray) return 
        
    coincidence = textInArray.some(word => word.includes(command));

    if(coincidence) {
        let index = textInArray.indexOf( command );
        for (const key in COMMANDS) {
            if (COMMANDS.hasOwnProperty(key)) {
                const objKey = COMMANDS[key];
                
                if(objKey.SHORTCUT === command) {
                    expansion = objKey.EXPANSION;
                    textareaStyles = objKey.TEXTAREA_STYLES
                    // console.log(expansion)
                    break;
                }
            }
        }

        setTimeout(() => {
            if(textInArray) textInArray[index] = expansion;
            setInputValue(textInArray)
    
            const textarea = textareaRef.current;
            const browser = parentRef.current;
            if (textarea) {
                if(textareaStyles) textareaStyles.map((style: string) => textarea.classList.add(style));
                textarea.style.overflow = 'hidden';
                if(browser) browser.classList.add('')
            }
        }, 50);
    }
}

