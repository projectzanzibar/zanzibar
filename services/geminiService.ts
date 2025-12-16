export const getTravelAssistance = async (userMessage: string): Promise<string> => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });
    if (!res.ok) {
      return "I'm sorry, I couldn't process that request right now.";
    }
    const data = await res.json();
    return (data.text as string) ?? "I couldn't process that request right now.";
  } catch (error) {
    console.error('Chat API Error:', error);
    return "I'm having trouble connecting to the island network right now. Please try again later!";
  }
};
