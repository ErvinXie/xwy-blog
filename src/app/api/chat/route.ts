import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { agentSystemPrompt } from "@/data/agent-system-prompt";
import { checkRateLimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";

  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return new Response("请求太频繁，请稍后再试", { status: 429 });
  }

  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-20250514"),
    system: agentSystemPrompt,
    messages,
    maxOutputTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
