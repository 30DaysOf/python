# Open AI (Python SDK)

This section contains recipes for using the Open AI Python SDK to work with models and agentic capabilities. Key resources include:

1. [OpenAI documentation](https://platform.openai.com/docs/concepts) - learn code concepts and best practices
1. [OpenAI cookbook](https://cookbook.openai.com/) - get hands-on recipes with notebooks
1. [Prompt examples](https://platform.openai.com/docs/examples) - learn prompt design for practical use cases
1. [Developer platform](https://platform.openai.com/docs/overview) - learn key challenges and techniques
    - [Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering)
    - [Safety Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)
    - [Optimizing LLM Accuracy](https://platform.openai.com/docs/guides/optimizing-llm-accuracy)
    - [Production Best Practices](https://platform.openai.com/docs/guides/production-best-practices)
    - [Latency Optimization](https://platform.openai.com/docs/guides/latency-optimization)
1. [Explore Models](https://platform.openai.com/docs/models) - select the right model for the task
    - [GPT-4o](https://platform.openai.com/docs/models/gpt-4o) - High-intelligence flagship model for complex, multi-step tasks
    - [GPT-4o mini](https://platform.openai.com/docs/models/gpt-4o-mini) - 	Affordable intelligent small model for fast, lightweight tasks
    - [o1-preview and o1-mini](https://platform.openai.com/docs/models/o1) - Reinforcement learning to perform complex reasoning.
    - [GPT-4 Turbo and GPT-4](https://platform.openai.com/docs/models/gpt-4-turbo-and-gpt-4) - Previous set of high-intelligence models
    - [GPT-3.5 Turbo](https://platform.openai.com/docs/models/gpt-3-5-turbo)	- A fast, inexpensive model for simple tasks
    - [DALL·E](https://platform.openai.com/docs/models/dall-e) - Generate and edit images given a natural language prompt
    - [TTS](https://platform.openai.com/docs/models/tts) - Convert text into natural sounding spoken audio
    - [Whisper](https://platform.openai.com/docs/models/whisper) - Convert audio into text
    - [Embeddings](https://platform.openai.com/docs/models/embeddings) - Convert text into a numerical form
    - [Moderation](https://platform.openai.com/docs/models/moderation) - Fined-tuned to detect if text may be sensitive or unsafe
    - [GPT base](https://platform.openai.com/docs/models/gpt-base) - *no instruction following*, understand & generate NL or code
    - [Deprecated](https://platform.openai.com/docs/deprecations) - Models that are deprecated, with suggested replacements
1. [Start Building](https://platform.openai.com/docs/overview#start-building) - get started with development
    - [Distillation](https://platform.openai.com/docs/guides/distillation) - evaluate & fine-tune models
    - [Real Time](https://platform.openai.com/docs/guides/realtime) - Build low-latency multimodal experiences
    - [Assistants](https://platform.openai.com/docs/assistants) - Build conversational experiences with tools & file search
    - [Async](https://platform.openai.com/docs/guides/batch) - Batch requests for large-scale async processing
    - [Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) - Adapt model to your data

---

## Getting Started

Followed the [quickstart guidance](https://platform.openai.com/docs/quickstart/developer-quickstart) which requires an `OPENAI_API_KEY` environment variable setup for use in development environment.

1. Create the key from [this dashboard](https://platform.openai.com/api-keys) (requires project)
1. Copy the `.env.sample` file in repo to `.env`
1. Fill in the `OPENAI_API_KEY` variable value from 1.

_Note:_ You can also store this as a [Github Codespaces secret](https://github.com/settings/codespaces) and associate it with relevant repos to have the value automatically injected into the runtime environment at launch.


## Recipes

TBD