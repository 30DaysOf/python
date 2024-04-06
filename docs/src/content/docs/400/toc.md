---
title: 1. Introduction
description: Explore Python SDKs and tools for building generative AI applications
---

:::tip About Lessons

Each Lesson has a Lab and an HTML link. 
- The first is an executable Jupyter notebook for interactive learning. You must open this in Visual Studio Code with a suitable runtime (e.g., GitHub Codespaces). It cannot be viewed in a browser.
- The second is a static HTML version of the notebook suitable for viewing in a browser. To view it within Visual Studio Code use `<kbd>Ctrl</kbd>+<kbd>K</kbd>, <kbd>V</kbd>`.

For LLM providers, I will focus on three deployment options: OpenAI, Azure OpenAI, and Hugging Face. 
Check the `.env.sample` for updated LLM providers and relevant environment variables needed in context.

:::

<!-- 
Use this command to convert a notebook in a folder to HTML and save it in the public folder.
jupyter nbconvert --output-dir ./../../../../public/notebooks --to html <notebook-name.ipynb> 
-->

## Roadmap

For this bucket, I'll be using two key resources:

1. The [Prompt Engineering Roadmap](https://roadmap.sh/prompt-engineering) shown below (captured Apr 2024). Please refer to the linekd source for updates. Each box has a list of relevant resources. 

    ![](./../../../assets/prompt-engineering-roadmap.png)

2. The [Deep Learning Short Courses](https://www.deeplearning.ai/short-courses/) series created in conjunction with key industry partners. The table lists courses in chronological order (older courses may have deprecated concepts or APIs). Levels are 100 (beginner) to 300 (advanced) - and most should have a Python SDK or sample. **All courses are 1 hour in length unless specified otherwise.** Most require basic Python knowledge. Some require familiarity with advanced frameworks like PyTorch or TensorFlow.

    | Course | Collaborator | Level | Description | Notebook |
    |---|---|---|---|---|
    | 1. [ChatGPT Prompt Engineering For Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | Isa Fulford, Open AI| 100-300 | Go beyond the chat box. Use API access to leverage LLMs into your own applications, and learn to build a custom chatbot.|  |
    | 2. [Building Systems with the ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) | Isa Fulford, Open AI| 100-300 |Level up your use of LLMs. Learn to break down complex tasks, automate workflows, chain LLM calls, and get better outputs.|
    | 3. [LangChain for LLM Application Development](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/) | Harrison Chase, LangChain| 100 | The framework to take LLMs out of the box. Learn to use LangChain to call LLMs into new environments, and use memories, chains, and agents to take on new and complex tasks.|
    | 4. [How Diffusion Models Work](https://www.deeplearning.ai/short-courses/how-diffusion-models-work/) | Sharon Zhou, Lamini | 200 | Learn and build diffusion models from the ground up. Start with an image of pure noise, and arrive at a final image, learning and building intuition at each step along the way.|
    | 5. [LangChain: Chat with Your Data](https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/) | Harrison Chase, LangChain | 100 | Create a chatbot to interface with your private data and documents using LangChain.| |
    | 6. [Building Generative AI Applications with Gradio](https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/) |Apolinário Passos, Hugging Face | 100 | Create and demo machine learning applications quickly. Share your app with the world on Hugging Face Spaces.| |
    | 7. [Learn MLOps tools for managing, versioning, debugging and experimenting in your ML workflow.](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) | Carey Phelps, Weights & Biases | 200 |Learn MLOps tools for managing, versioning, debugging and experimenting in your ML workflow. | |
    | 8. [Large Language Models with Semantic Search](https://www.deeplearning.ai/short-courses/large-language-models-semantic-search/) | Jay Alammar, Luis Serrano, Cohere | 100  | Learn to use LLMs to enhance search and summarize results.| |
    | 9. [Finetuning Large Language Models](https://www.deeplearning.ai/short-courses/finetuning-large-language-models/) | Sharon Zhou, Lamini | 200 |Learn to finetune an LLM in minutes and specialize it to use your own data | |
    | 10. [How Business Thinkers Can Start Building AI Plugins With Semantic Kernel](https://www.deeplearning.ai/short-courses/microsoft-semantic-kernel/) | John Maeda, Microsoft | 100 |Learn Microsoft’s open source orchestrator, Semantic Kernel, and develop business applications using LLMs. | |
    | 11. [Understanding and Applying Text Embeddings](https://www.deeplearning.ai/short-courses/google-cloud-vertex-ai/) | Nikita Namjoshi, Google Cloud | 100 | Learn how to accelerate the application development process with text embeddings| |
    | 12. [Pair Programming with a Large Language Model]() | Laurence Moroney, Google | 100  | Learn how to effectively prompt an LLM to help you improve, debug, understand, and document your code | |
    | 13. [Functions, Tools and Agents with LangChain](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) | Harrison Chase, LangChain  | 200 | Learn and apply the new capabilities of LLMs as a developer tool.| |
    | 14. [Vector Databases: from Embeddings to Applications](https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/) | Sebastian Witalec, Weaviate | 200 | Design and execute real-world applications of vector databases. | |
    | 15. [Quality and Safety for LLM Applications](https://www.deeplearning.ai/short-courses/quality-safety-llm-applications/) |Bernease Herman, WhyLabs | 100 | Learn how to evaluate the safety and security of your LLM applications and protect against potential risks.| |
    | 16. [Building and Evaluating Advanced RAG Applications](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/) | Jerry Liu, Anupam Datta, truera | 100  | Learn how to efficiently bring Retrieval Augmented Generation (RAG) into production by enhancing retrieval techniques and mastering evaluation metrics.| |
    | 17. [Reinforcement Learning from Human Feedback](https://www.deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/) | Nikita Namjoshi, Google Cloud | 200 | A conceptual and hands-on introduction to tuning and evaluating large language models (LLMs) using Reinforcement Learning from Human Feedback.| |
    | 18. [Advanced Retrieval for AI with Chroma](https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/) |Anton Troynikov, Chroma| 200 |Learn advanced retrieval techniques to improve the relevancy of retrieved results. | |
    | 19. [Build LLM Apps with LangChain.js](https://www.deeplearning.ai/short-courses/build-llm-apps-with-langchain-js/) |Jacob Lee, LangChain | 200 | Expand your toolkits with LangChain.js, a popular JavaScript framework for building with LLMs, and get useful concepts for creating powerful, context-aware applications.| |
    | 20. [LLMOps](https://www.deeplearning.ai/short-courses/llmops/) |Erwin Huizenga, Google Cloud | 100  |  Learn LLMOps best practices as you design and automate the steps to tune an LLM for a specific task and deploy it as a callable API. In the course, you'll tune an LLM to act as a question-answering coding expert. You can apply the methods learned here to tune your own LLM for other use cases.| |
    | 21. [Automated Testing for LLMOps](https://www.deeplearning.ai/short-courses/automated-testing-llmops/) | Rob Zuber, CircleCI | 200 |Learn how to create an automated continuous integration (CI) pipeline to evaluate your LLM applications on every change, for faster, safer, and more efficient application development. | |
    | 22. [Building Applications with Vector Databases](https://www.deeplearning.ai/short-courses/building-applications-vector-databases/) | Tim Tully, Pinecone | 100 | Learn to build six applications powered by vector databases: semantic search, retrieval augmented generation (RAG), anomaly detection, hybrid search, image similarity search, and recommender systems, each using a different dataset.| |
    | 23. [Serverless LLM apps with Amazon Bedrock](https://www.deeplearning.ai/short-courses/serverless-llm-apps-amazon-bedrock/) | Mike Chambers, AWS |200  | Learn how to deploy a large language model-based application into production using serverless technology.| |
    | 24. [Prompt Engineering with Llama 2](https://www.deeplearning.ai/short-courses/prompt-engineering-with-llama-2/) |  Amit Sangani, Meta | 100 | Learn best practices for prompting and selecting among Meta Llama 2 models.| |
    | 25. [Open Source Models with Hugging Face](https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/) | Maria K, Marc S, Younes B, HuggingFace | 100 | Learn how to easily build AI applications using open source models and Hugging Face tools.| |
    | 26. [Knowledge Graphs for RAG](https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/) | Anreas Kollegger, neo4j | 200 |Learn how to build and use knowledge graph systems to improve your retrieval augmented generation applications. | |
    | 27. [Efficiently Serving LLMs](https://www.deeplearning.ai/short-courses/efficiently-serving-llms/) | Travis Addair, Predibase | 200 | Gain a ground-up understanding of how to serve LLM applications in production.| |
    | 28. [JavaScript RAG Web Apps with LlamaIndex](https://www.deeplearning.ai/short-courses/javascript-rag-web-apps-with-llamaindex/) |Laurie Voss, LlamaIndex |  100 | JavaScript RAG Web Apps with LlamaIndex| |
    | 29. [Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/) |Matteo Dora, Luca Martial, Giskard | 100 |Learn how to make safer LLM apps through red teaming | |
    | | | | |


---

## Resources 