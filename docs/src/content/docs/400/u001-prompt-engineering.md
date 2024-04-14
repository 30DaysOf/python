---
title: "01 | Prompt Engineering"
description: What is Prompt Engineering? · Why does it matter? · How do you get started? · What are the best practices?
---


:::tip[LEARNING RESOURCES]
1. [ChatGPT Prompt Engineering For Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - _DeepLearning.AI_, 2024
1. [Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering/prompt-engineering) - _Open AI_, 2024
1. [Introduction to prompt engineering](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering) - _Azure AI_, 2024
1. [Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions) - _Azure AI_, 2024
1. [Prompt engineering with GPT-4 Turbo with Vision](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/gpt-4-v-prompt-engineering) - _Azure AI_, 2024
1. [LLM Prompting Guide](https://huggingface.co/docs/transformers/main/en/tasks/prompting) - _Hugging Face_, 2024
1. [Intro to Prompt Design](https://ai.google.dev/docs/prompt_intro) - _Google Gemini_, 2024
1. [Prompt Engineerting for Generative AI](https://developers.google.com/machine-learning/resources/prompt-eng) - _Google ML_, 2024
1. [What is Prompt Engineering?](https://www.deeplearning.ai/short-courses/prompt-engineering/) - _AWS Generative AI_, 2024
:::

---

## 1. Introduction

Prompt Engineering is the process of **designing and refining prompts** to get a relevant response with a desired quality from a generative AI model. It is a trial-and-error process, with iteration and evaluation to get an acceptable response. 

Prompt engineering can feel more like art than science, requiring us to understand the model's capabilities (& quirks), the application domain (task context), and the user's intent - to get responses right. For clarity, we'll qualify the term further:
- **User Prompt** - refers to the original natural language request from the user.
- **Model Prompt** - refers to the refined version fed to the model for response.

In the simplest case, both refer to the same thing with the **user prompt** simply being fed directly to the model. In real-world apps, we will typically _refine_ the prompt post-input to improve the quality of the response. For example: we might use a technique like _retrieval augmented generation_ to ground the prompt in our knowledge base before feeding it to the model. In this case, the **model prompt** will be an enhanced version of the original user prompt. If no qualifier is used, assumed we are talking about the _model_ prompt.

Prompt engineering now has two facets for us to consider:

1. **Educating Users** so that the initial user prompt is itself as effective as possible. This can involve providing users with guidelines, templates, and tools to streamline their prompt generation.
 - **Engineering Workflows** so that the user prompt is or _refined_ to be more effective given context like model capabilities, application requirements, or operationalization constraints. This can involve mechanisms like prompt chaining and evaluation to refine the prompt iteratively.
 
In this specific lesson, we'll focus more on design patterns and best practices for the former. We'll cover the latter in more detail when exploring end-to-end development workflows and LLM Ops.


## 2. Motivation

_Why is prompt engineering critical for generative AI?_


## 3. Core Concepts

## 4. Best Practices

## 5. Lab Exercises