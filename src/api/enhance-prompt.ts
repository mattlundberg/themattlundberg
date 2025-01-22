import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import OpenAI from "openai"

interface RequestBody {
  prompt: string
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemPrompt = `You are an expert at crafting and improving prompts for AI models. Your task is to:
1. Analyze the given prompt
2. Create an enhanced version that is more specific, detailed, and effective
3. Generate 2 alternative variations that approach the goal from different angles
4. Return all versions in a clear, structured format

Focus on making prompts:
- Clear and specific
- Well-structured
- Rich in relevant context
- Focused on desired outcome
- Free of ambiguity`

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { prompt } = req.body as RequestBody
    console.log('Original prompt:', prompt)
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Original prompt: "${prompt}"
        Please format your response exactly like this:
        ENHANCED: [enhanced version]
        VARIATION1: [first variation]
        VARIATION2: [second variation]` }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const response = completion.choices[0].message.content
    console.log('API response:', response)

    // More robust parsing
    const lines = response.split('\n').map(line => line.trim()).filter(Boolean)
    
    let enhanced = ''
    const variations: string[] = []

    for (const line of lines) {
      if (line.startsWith('ENHANCED:')) {
        enhanced = line.replace('ENHANCED:', '').trim()
      } else if (line.startsWith('VARIATION')) {
        const variation = line.replace(/VARIATION\d+:/, '').trim()
        variations.push(variation)
      }
    }

    console.log('Parsed result:', { enhanced, variations })

    return res.status(200).json({
      original: prompt,
      enhanced: enhanced || prompt,  // Fallback to original if parsing fails
      variations: variations.length ? variations : []
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Failed to enhance prompt' })
  }
} 