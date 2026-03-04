export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    // Convert Anthropic-style request to OpenAI format
    const { messages, max_tokens } = req.body;

    const openaiMessages = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: openaiMessages,
        max_tokens: max_tokens || 2000
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    // Convert OpenAI response back to Anthropic-style format
    const anthropicResponse = {
      content: [{
        type: 'text',
        text: data.choices[0]?.message?.content || ''
      }]
    };

    return res.status(200).json(anthropicResponse);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
