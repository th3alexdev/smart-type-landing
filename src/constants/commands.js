export const COMMANDS = Object.freeze({
    1: {
        SHORTCUT: '/prompt',
        EXPANSION: 'Hey AI assistant, could you kindly provide me with a comprehensive step-by-step guide on how to [insert your task!]?',
        TEXTAREA_STYLES: ['h-48', '2xs:h-24', 'sm:h-[4.5rem]']
    },
    2: {
        SHORTCUT: '/quick',
        EXPANSION: "Hello 👋! Thank you for reaching out to us. Here's a quick response to your inquiry about the prices of specific products: \n\n - [Product 1]: $[Price 1] \n - [Product 2]: $[Price 2] \n - [Product 3]: $[Price 3] \n\n 🙏 If you have any further questions, feel free to let us know. We're here to assist you! Happy shopping! 🛍️",
        TEXTAREA_STYLES: ['xs:h-[22rem]', '3xs:h-[21rem]', '4xs:h-72', '5xs:h-[16.5rem]', '6xs:h-[16.5rem]', '7xs:h-[14.8rem]']
    },
    3: {
        SHORTCUT:'/mail',
        EXPANSION: "Hello Team, \nI hope this email finds you well. I wanted to share some important information with everyone. \n\n[insert mail body here]\n\nThank you for your attention and cooperation. \nBest regards,\n\n[Your Name]",
        TEXTAREA_STYLES: ['']
    }
})