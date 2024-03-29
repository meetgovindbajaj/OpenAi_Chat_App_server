export const COOKIE_NAME = "auth_token";
export const COOKIE_OPTIONS = {
    path: "/",
    // domain: ".vercel.app",
    // domain: "localhost",
    httpOnly: true,
    signed: true,
    // sameSite: "none",
    // secure: true,
};
export const ERROR_401 = "Unauthorized access";
export const ERROR_403 = "Invalid credentials";
export const ERROR_404 = "User not found or token expired";
export const ERROR_500 = "Internal server error";
export const GPT_RESPONSES = [
    "That's interesting!",
    "I'm not sure about that.",
    "Tell me more!",
    "I didn't expect that.",
    "Let's change the topic.",
    "What do you think about it?",
    "I'm here to help!",
    "That's a unique perspective.",
    "I see what you mean.",
    "Fascinating!",
    "I'm learning from our conversation.",
    "Have you considered another angle?",
    "I appreciate your input.",
    "Let's explore that idea further.",
    "Interesting point of view.",
    "I'm here to chat with you.",
    "What's on your mind?",
    "Can you elaborate on that?",
    "That's a thought-provoking question.",
    "I'm glad you shared that with me.",
    "I'm always ready for a good conversation.",
    "What else is on your plate?",
    "I'm curious about your thoughts.",
    "Let's dive deeper into this.",
    "That's a great observation!",
    "I'm here 24/7, feel free to chat anytime.",
    "Let's keep the conversation flowing.",
    "Have you ever thought about it that way?",
    "I'm processing your input.",
    "Interesting choice of words.",
    "I'm ready for any topic you throw at me.",
    "Tell me a bit more about yourself.",
    "I'm here to assist and chat with you.",
    "That's an unexpected twist.",
    "How do you feel about that?",
    "Let's explore the possibilities.",
    "I'm all ears (figuratively speaking).",
    "Your perspective is valuable to me.",
    "I'm a virtual companion here to chat.",
    "That's a unique way to look at it.",
    "I'm here to make your day better.",
    "What else can we discuss?",
    "I'm open to any topic.",
    "Let's keep the conversation lively!",
    "How can I assist you today?",
    "I'm always ready for a new conversation.",
    "Your thoughts matter to me.",
    "Let's chat about something you enjoy.",
    "I'm here to engage with you.",
    "That's a topic worth exploring.",
    "I'm here to chat, so fire away!",
    "I'm here to help and chat with you.",
    "Tell me more about your day.",
    "I'm intrigued by your perspective.",
    "Let's make this conversation memorable.",
    "Your insights are valuable to me.",
    "I'm ready for any topic you have in mind.",
    "I'm at your disposal for a chat.",
    "That's a valid point.",
    "I'm here to assist and converse with you.",
    "What's the most exciting thing on your mind right now?",
    "Let's make this conversation interesting.",
    "I'm here to engage in meaningful dialogue.",
    "That's a perspective I hadn't considered.",
    "I'm here to learn from our interaction.",
    "Tell me a bit about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
    "That's an intriguing thought.",
    "I'm here to accompany you in conversation.",
    "Let's keep the conversation dynamic!",
    "Your opinions are important to me.",
    "I'm here to chat and assist you.",
    "What's your favorite topic to discuss?",
    "I'm here to chat about anything you like.",
    "That's a unique take on the matter.",
    "I'm here to make our conversation enjoyable.",
    "How can I make your day better?",
    "I'm here to listen and chat with you.",
    "What else is on your mind?",
    "I'm ready for a chat on any subject.",
    "Let's keep the conversation interesting.",
    "I'm here to engage with you in conversation.",
    "That's a fascinating point of view.",
    "I'm here to provide information and insights.",
    "What's the most exciting thing happening in your life?",
    "I'm interested in hearing more.",
    "Let's make this conversation memorable!",
    "I'm here to assist and chat with you.",
    "That's a perspective I hadn't considered before.",
    "I'm ready for any topic you want to discuss.",
    "I'm here to engage in meaningful dialogue.",
    "Tell me more about your interests.",
    "I'm ready for a thought-provoking discussion.",
    "What else can we explore together?",
    "I'm here to provide information and chat.",
];
//# sourceMappingURL=constants.js.map