import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { OpenAI } from "openai"
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface RequestBody {
  messages: Message[]
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: GatsbyFunctionRequest<RequestBody>,
  res: GatsbyFunctionResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { messages } = req.body

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      max_tokens: 150,
    });

    return res.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({
      message: 'Internal server error',
    })
  }
} 