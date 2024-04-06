---
title: "Learning Python3"
description: Learning Objectives, Roadmap and Dev Environment for Python3.
---

Python currently ranks #1 on the [TIOBE Index](https://www.tiobe.com/tiobe-index/) and powers many of the core tools and SDKs driving data analysis, machine learning and generative AI solutions today. It is also one of just three languages supported for competitive programming in the [USA Computing Olympiad Guide](https://usaco.guide/general/choosing-lang) - making it a must-learn language for both beginners and professional developers alike.

## The Objectives

I believe in learning _by doing_, and creating content that is _reusable_ by default. Python is particularly suited for this approach, allowing us to capture "recipes" in interactive notebooks that can contain both the code snippets and the explainer documentation for hands-on labs. My learning objectives in this project are:
 - Capture **reusable recipes** in interactive notebooks
 - Create a **learning roadmap** for Python3 that is beginner-friendly
 - Get **curated cookbooks** for data analysis, machine learning & generative AI
 - Just **have fun** experimenting with new tools, ideas and projects

:::note THIS IS A PERSONAL PROJECT

My goal is to learn in public and cite all resources I use in my learning journey. The content here is _not_ meant for production or commercial use of any kind. You are welcome to fork the repository and use it for your own personal learning journey, but please respect the licenses of any resources I've used and cite them appropriately.
:::

## The Mindset

One thing I've observed with my [#30DaysOf](https://github.com/30DaysOf) projects is that learning something new requires a **goal-oriented learning mindset**. It's easy to want to learn everything - but in reality, we cannot expect to gain years of expertise in 30 days. Instead, we should try to learn _what we need_ to get the task done. Then build on that.

I look for three things to keep me goal-focused and moving forward:
 - **Be Frictionless**: Let's simplify development environment setup.
 - **Be Focused**: Let's reduce the possibility of getting distracted.
 - **Be Friendly**: Let's make it easy to share & collaborate on projects.

## The Environment

The key to this is having the right developer tools and workflow in place. Here's the current setup in this project:
 - **GitHub Codespaces**: Pre-configured dev environment in the cloud.
 - **Visual Studio Code**: Default IDE in Codespaces with rich extensions.
 - **GitHub Copilot**: AI-powered assistance inline, for focused learning.
 - **Jupyter Notebooks**: Interactive notebooks to reproduce & share recipes.

The repository is instrumented with an `.env.sample` file where any required environment variables are captured with placeholder values. Simply copy this file to `.env` and replace the placeholders with the actual values to get started. The `.env` file is "gitignored" so it sensitive data is not inadvertently checked into the repository. All Python code will be written to load environment variables using the `os.getenv()` method automatically.

_Note: You can also store variables as GitHub Codespaces secrets, and associate them with repositories to make them available in a launched Codespaces environment by default. This option is more secure, but won't work in other dev container environments like Docker Desktop._

## The Roadmap

For now, the goal is to simply curate notebooks in 4 large buckets:
 - **Python Basics**: Syntax, Data Types, Control Structures - The Fundamentals
 - **Data Analysis**: Pandas, Numpy, Matplotlib - Data Wrangling & Visualization
 - **Machine Learning**: Scikit-Learn, TensorFlow, PyTorch - MLOps Pipeline
 - **Generative AI**: Transformers, Prompt Engineering - LLMOps Pipeline

Check the **Table Of Contents** page for a roadmap specific to that bucket, along with relevant resources used for creating learning exercises. The ideal #30Days journey will allow someone to spend 1 week on each bucket, to get a broad idea of the domains, then dive deeper into each bucket at their own pace to suit a **goal-oriented learning** approach.

:::note Work In Progress

While my end goal is to get a curated cookbook of reusable recipes for myself, I will not follow any specific order in creating them. Instead, I am following a **goal oriented approach** where I pick some topic I want to learn and then create a collection of recipes (notebooks) to capture my insights and study notes. This means the content will be updated and expanded over time.

:::

## The Resources

I am broadly looking to explore the following roadmaps, and will likely expand this over time. Each of these roadmaps cites relevant resources that I will likely use as a starting point for that topic. The _table of contents_ for each level will contain a more comprehensive list of resources used.

1. 100 / [Python Developer Roadmap](https://roadmap.sh/python) - suggested roadmap for learning core Python
1. 200 / [AI Data Scientist Roadmap](https://roadmap.sh/ai-data-scientist) - exploratory data analysis to deep learning and ML Ops
1. 300 / [ML Ops Roadmap](https://roadmap.sh/mlops) - from Cloud Computing to Infrastructure-as-Code
1. 400 / [Prompt Engineering Roadmap](https://roadmap.sh/prompt-engineering) - from LLM concepts to Prompt Hacking and Security