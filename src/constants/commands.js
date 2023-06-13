export const COMMANDS = Object.freeze({
    1: {
        SHORTCUT: '/prompt',
        EXPANSION: 'Hey AI assistant, could you kindly provide me with a comprehensive step-by-step guide on how to [insert your task!]?',
        TEXTAREA_STYLES: ['h-48', '2xs:h-24', 'sm:h-expanded-fst']
    },
    2: {
        SHORTCUT: '/quick',
        EXPANSION: "Hello 👋! Thank you for reaching out to us. Here's a quick response to your inquiry about the prices of specific products: \n\n - [Product 1]: $[Price 1] \n - [Product 2]: $[Price 2] \n - [Product 3]: $[Price 3] \n\n 🙏 If you have any further questions, feel free to let us know. We're here to assist you! Happy shopping! 🛍️",
        TEXTAREA_STYLES: ['xs:h-expanded-snd_1', '3xs:h-expanded-snd_2', '4xs:h-72', '5xs:h-expanded-snd_3', '6xs:h-expanded-snd_3', '7xs:h-expanded-snd_4']
    },
    3: {
        SHORTCUT:'/mail',
        EXPANSION: "Hello Team, \nI hope this email finds you well. I wanted to share some important information with everyone. \n\n[insert mail body here]\n\nThank you for your attention and cooperation. \nBest regards,\n\n[Your Name]",
        TEXTAREA_STYLES: ['']
    }
})
