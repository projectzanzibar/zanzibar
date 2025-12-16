export const getTravelAssistance = async (userMessage: string): Promise<string> => {
  // Mocked response to avoid external API usage for easy deployment
  const cannedReplies = [
    "Jambo! We offer airport transfers, tours, and taxis across Zanzibar. Tell me your pickup and drop-off to get a quote.",
    "We recommend June–Oct or Jan–Feb for the best weather. How can I help plan your trip?",
    "Sample prices: Airport→Stone Town ($15), Airport→North ($45), Airport→East ($40).",
  ];
  const reply = cannedReplies[(Math.abs(hashCode(userMessage)) % cannedReplies.length)];
  await new Promise(r => setTimeout(r, 400));
  return reply;
};

function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h) + str.charCodeAt(i) | 0;
  return h;
}
