export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  weekNumber: number;
  title: string;
  subtitle: string;
  content: string[]; // paragraphs of content
  keyTerms?: { term: string; definition: string }[];
  tasks?: string[];
  quiz: QuizQuestion[];
}

export interface Week {
  number: number;
  phase: number;
  phaseTitle: string;
  title: string;
  tagline: string;
  lessons: Lesson[];
}

export const curriculum: Week[] = [
  // ============================================================
  // PHASE 1: FOUNDATIONS (Weeks 1-3)
  // ============================================================
  {
    number: 1,
    phase: 1,
    phaseTitle: "FOUNDATIONS",
    title: "Get Your Hands Dirty",
    tagline: "Stop reading about AI. Start using it. Today.",
    lessons: [
      {
        id: "w1-l1",
        weekNumber: 1,
        title: "What the Hell is AI?",
        subtitle: "The no-BS intro you actually need",
        content: [
          "Alright, let's cut the crap. You've been hearing 'AI this, AI that' for the last two years and you probably still don't know what the hell any of it actually means. That ends today.",
          "AI - Artificial Intelligence - is software that can do things that normally require a human brain. Recognizing patterns, understanding language, making decisions, generating content. That's it. It's not Terminator. It's not magic. It's a really, really good tool.",
          "The specific type of AI that's got everyone losing their minds right now is called an LLM - Large Language Model. An LLM is basically a massive neural network that was trained on a shitload of text from the internet. It learned patterns in language so well that it can now generate new text that sounds like a human wrote it.",
          "Think of it like this: if you read every book ever written, every website, every email, every article - you'd get pretty damn good at writing too. That's essentially what these models did, except they processed it all in a way that lets them generate responses to anything you ask.",
          "The two big dogs you need to know right now are ChatGPT (made by OpenAI) and Claude (made by Anthropic). There are others, and we'll cover them. But these two are your starting lineup.",
          "Here's the thing that's going to blow your mind: these tools are mostly FREE to start using. Right now. Not after some 4-year degree. Not after spending $50K. Right. Damn. Now."
        ],
        keyTerms: [
          { term: "AI (Artificial Intelligence)", definition: "Software that performs tasks requiring human intelligence. Pattern recognition, language understanding, decision making, content generation." },
          { term: "LLM (Large Language Model)", definition: "The brain behind chatbots like ChatGPT and Claude. A massive AI trained on text data that can understand and generate human language." },
          { term: "GPT (Generative Pre-trained Transformer)", definition: "A specific type of LLM made by OpenAI. ChatGPT runs on GPT models. One brand of LLM, not the only one." },
          { term: "Claude", definition: "An LLM built by Anthropic. Known for long documents, reasoning, and complex instructions. Our primary tool." },
          { term: "Prompt", definition: "The instruction you type into an AI. Quality of prompt = quality of output. This is THE skill to master." },
        ],
        tasks: [
          "Sign up for ChatGPT at chat.openai.com (free)",
          "Sign up for Claude at claude.ai (free)",
          "Sign up for Perplexity at perplexity.ai (free)",
          "Ask each one: 'Explain construction financing like I'm 15 years old' - compare the answers",
        ],
        quiz: [
          {
            id: "w1-l1-q1",
            question: "What does LLM stand for?",
            options: ["Large Learning Machine", "Large Language Model", "Linguistic Logic Module", "Layered Learning Model"],
            correctIndex: 1,
            explanation: "LLM stands for Large Language Model. It's the engine behind tools like ChatGPT and Claude. Remember this one - you'll hear it 500 times in the next 90 days."
          },
          {
            id: "w1-l1-q2",
            question: "Which company makes Claude?",
            options: ["OpenAI", "Google", "Anthropic", "Microsoft"],
            correctIndex: 2,
            explanation: "Anthropic makes Claude. OpenAI makes ChatGPT. Google makes Gemini. Microsoft has Copilot. Know who makes what - it's like knowing Ford from Chevy."
          },
          {
            id: "w1-l1-q3",
            question: "What is a 'prompt' in AI?",
            options: ["The AI's response to you", "A type of AI model", "The instruction or question you give the AI", "The training data the AI uses"],
            correctIndex: 2,
            explanation: "A prompt is what YOU type in. It's your instruction to the AI. Better prompts = better results. This is literally the #1 skill you're going to learn."
          },
          {
            id: "w1-l1-q4",
            question: "How much does it cost to start using ChatGPT and Claude?",
            options: ["$20/month each", "$50 one-time fee", "Free to start", "$100/month for both"],
            correctIndex: 2,
            explanation: "Both have free tiers. Zero dollars to get started. No excuses. Go sign up right now if you haven't already."
          },
        ]
      },
      {
        id: "w1-l2",
        weekNumber: 1,
        title: "The AI Lineup",
        subtitle: "Know your tools like you know your subcontractors",
        content: [
          "In construction, you wouldn't use a framing crew to do electrical work. Same thing with AI - different tools for different jobs. Let's break down the roster.",
          "ChatGPT (OpenAI) - The popular kid. Everyone knows this one. Great for general conversation, content creation, brainstorming. Think of it as your all-purpose laborer. Free tier gives you GPT-4o (the good stuff) with some limits.",
          "Claude (Anthropic) - The smart one. Particularly good at reading long documents, nuanced reasoning, and following complex instructions. If you need to upload a 100-page spec doc and ask questions about it, Claude's your guy. This is our primary tool.",
          "Gemini (Google) - Plugs into Google Workspace. If you live in Google Docs, Sheets, and Drive, Gemini works right inside that ecosystem. Good for research too.",
          "Microsoft Copilot - Lives inside Word, Excel, PowerPoint, Outlook. If your company runs on Microsoft, this one's worth exploring. It basically supercharges every Office tool.",
          "Perplexity - This one's different. It's an AI-powered search engine. Instead of giving you a list of links, it reads the sources and gives you an answer with citations. Use this for research and fact-checking.",
          "Here's the key insight that separates amateurs from pros: no single AI is best at everything. The skill is knowing which tool to grab for which job. Just like you wouldn't bring a circular saw to every task on a job site."
        ],
        tasks: [
          "Open ChatGPT and Claude side by side",
          "Ask both: 'Write me a professional email to a subcontractor about a delayed delivery'",
          "Ask both: 'Create a punch list template for a commercial build-out'",
          "Compare the outputs - notice how they differ in style and detail",
        ],
        quiz: [
          {
            id: "w1-l2-q1",
            question: "Which AI tool is best described as an 'AI-powered search engine with citations'?",
            options: ["ChatGPT", "Claude", "Perplexity", "Gemini"],
            correctIndex: 2,
            explanation: "Perplexity is the research engine. It reads sources and gives you answers with citations. Use it when you need to verify facts or do deep research."
          },
          {
            id: "w1-l2-q2",
            question: "Which AI tool integrates directly with Google Workspace (Docs, Sheets, Drive)?",
            options: ["Claude", "Copilot", "ChatGPT", "Gemini"],
            correctIndex: 3,
            explanation: "Gemini is Google's AI and plugs directly into Google Workspace. If you're a Google shop, this is your built-in AI assistant."
          },
          {
            id: "w1-l2-q3",
            question: "What's the key insight about choosing AI tools?",
            options: ["Always use the most expensive one", "ChatGPT is best at everything", "No single AI is best at everything - match the tool to the job", "Only use one AI to avoid confusion"],
            correctIndex: 2,
            explanation: "Different tools for different jobs. That's the pro move. You'll develop this instinct over the next 90 days."
          },
        ]
      },
      {
        id: "w1-l3",
        weekNumber: 1,
        title: "Your First Real AI Workout",
        subtitle: "Stop watching from the sidelines",
        content: [
          "Alright, time to stop learning and start doing. This lesson is all about getting reps in. Think of it like your first week at the gym - it's going to feel awkward, your form's going to suck, and that's perfectly fine.",
          "You're going to complete the Google Generative AI Learning Path this week. It's 5 short courses on Google Cloud Skills Boost (cloudskillsboost.google). Totally free. About 4-5 hours total. You'll earn actual badges for your profile.",
          "The courses cover: What is Generative AI, What are LLMs, Responsible AI, and Prompt Design. Yeah, some of it will overlap with what we just covered, but hearing it explained different ways is how you actually internalize this stuff.",
          "While you're going through those courses, I want you doing something else every single day this week: use AI for one real work task. Not practice. Not hypothetical bullshit. Real work.",
          "Draft an email you need to send. Summarize meeting notes. Create a project schedule outline. Analyze a property listing. Write a scope of work. Whatever you've got on your plate - feed it to ChatGPT or Claude and see what comes out.",
          "Pro tip: when the AI gives you something back, don't just copy-paste it. Read it critically. Edit it. Make it yours. The AI gives you the first draft in 30 seconds. You polish it in 5 minutes. That's still saving you an hour."
        ],
        tasks: [
          "Go to cloudskillsboost.google and start the Generative AI Learning Path",
          "Complete: Introduction to Generative AI (~45 min)",
          "Complete: Introduction to Large Language Models (~45 min)",
          "Complete: Introduction to Responsible AI (~45 min)",
          "Use AI for at least one real work task today (email, document, analysis)",
        ],
        quiz: [
          {
            id: "w1-l3-q1",
            question: "What's the Google Generative AI Learning Path?",
            options: ["A paid bootcamp ($500)", "A 6-month certification program", "5 free short courses on Google Cloud Skills Boost with badges", "A YouTube playlist"],
            correctIndex: 2,
            explanation: "Free courses, real badges, done in a weekend. This is Week 1 homework. No excuses."
          },
          {
            id: "w1-l3-q2",
            question: "When AI generates a document for you, what should you do?",
            options: ["Copy-paste it directly without reading", "Never use it - write everything yourself", "Read it critically, edit it, make it yours", "Send it to a colleague to review"],
            correctIndex: 2,
            explanation: "AI gives you the fast first draft. You bring the judgment and the finishing touches. That's the workflow."
          },
          {
            id: "w1-l3-q3",
            question: "What is a 'hallucination' in AI?",
            options: ["When the AI crashes", "When the AI generates confident but factually wrong information", "When the AI refuses to answer", "When the AI copies text from the internet"],
            correctIndex: 1,
            explanation: "Hallucinations are when AI makes shit up but sounds totally confident about it. This is the #1 thing to watch for. Always verify important facts."
          },
        ]
      },
    ],
  },

  // WEEK 2
  {
    number: 2,
    phase: 1,
    phaseTitle: "FOUNDATIONS",
    title: "Learn to Talk to AI",
    tagline: "The CRAFT of getting AI to actually do what you want.",
    lessons: [
      {
        id: "w2-l1",
        weekNumber: 2,
        title: "Prompt Engineering 101",
        subtitle: "The difference between 'meh' and 'holy shit' outputs",
        content: [
          "Here's where most people get it wrong. They type something vague into ChatGPT like 'write me an email' and then complain that AI sucks because the output is generic. No shit - you gave it nothing to work with.",
          "Prompt engineering is the skill of writing better instructions for AI. And it's literally the most valuable thing you'll learn in this entire plan. Think of it like this: the AI is a world-class employee who will do exactly what you tell them. The problem is, most people give terrible instructions.",
          "Here's the framework. Remember CRAFT:\n\nC - Context: Tell the AI your situation. 'I'm a construction project manager working on a $5M commercial renovation...'\n\nR - Role: Tell the AI who to be. 'Act as an experienced estimator who specializes in commercial build-outs...'\n\nA - Action: Be specific about what you want. 'Create a detailed cost breakdown for...' not just 'help me with costs'\n\nF - Format: Tell it how you want the output. 'Give me a table with columns for item, quantity, unit cost, and total' or 'Write this as a bullet-point summary'\n\nT - Tone: Specify the voice. 'Keep it professional but direct' or 'Write this like you're talking to the owner, not the board'",
          "Bad prompt: 'Write an email about a project delay'\n\nGood prompt: 'You are a construction project manager. Write a professional email to the property owner explaining that the HVAC installation is delayed by 2 weeks due to supply chain issues. Include: the new timeline, what work will continue in parallel, and assurance that the overall completion date is protected. Tone should be confident and solution-focused, not apologetic.'",
          "See the difference? One gives you generic garbage. The other gives you something you can actually send. The AI didn't get smarter between those two prompts - you did."
        ],
        tasks: [
          "Rewrite 3 of last week's prompts using the CRAFT framework",
          "Complete: AI for Everyone by Andrew Ng on Coursera (free to audit, 6 hrs)",
          "Use CRAFT to draft a real project proposal or bid document",
        ],
        quiz: [
          {
            id: "w2-l1-q1",
            question: "In the CRAFT framework, what does the 'R' stand for?",
            options: ["Result", "Role", "Research", "Response"],
            correctIndex: 1,
            explanation: "R = Role. Tell the AI WHO to be. 'Act as a senior estimator' or 'You are a real estate analyst.' This one change dramatically improves output quality."
          },
          {
            id: "w2-l1-q2",
            question: "What's wrong with the prompt 'Write an email about a project delay'?",
            options: ["Nothing, it's fine", "It's too long", "It lacks context, role, specifics, format, and tone", "You shouldn't use AI for emails"],
            correctIndex: 2,
            explanation: "Garbage in, garbage out. No context about who you are, who it's to, what happened, how you want it to sound. Give the AI more to work with and you'll get exponentially better results."
          },
          {
            id: "w2-l1-q3",
            question: "What does the 'F' in CRAFT stand for?",
            options: ["Facts", "Format", "Function", "Feedback"],
            correctIndex: 1,
            explanation: "F = Format. Tell the AI HOW you want the output. Table? Bullet points? Email? One-pager? Executive summary? Being specific about format is half the battle."
          },
        ]
      },
      {
        id: "w2-l2",
        weekNumber: 2,
        title: "Tokens, Context Windows & Other Nerd Shit You Need to Know",
        subtitle: "The technical stuff explained for normal humans",
        content: [
          "Okay, there's some technical vocabulary you need to understand. Not because you're going to be building AI models, but because you'll hear these words constantly and you need to not look like an idiot.",
          "TOKENS: This is how AI measures text. Roughly 1 token = 3/4 of a word. When someone says a model has a '200K context window,' they mean it can handle about 150,000 words at once. Why do you care? Because it determines how much you can feed the AI in one shot. Claude has a massive context window - you can upload entire contracts, spec documents, RFPs.",
          "CONTEXT WINDOW: Think of it as the AI's working memory. Everything in the conversation - your prompts, the AI's responses, any documents you uploaded - all of that takes up space in the context window. When you max it out, the AI starts 'forgetting' the beginning of your conversation.",
          "HALLUCINATION: When the AI confidently states something that's completely wrong. This is the #1 risk. The AI doesn't say 'I'm not sure' - it just makes shit up with the same confidence as when it's right. ALWAYS verify important facts, numbers, and claims.",
          "RAG (Retrieval-Augmented Generation): Don't let the fancy name scare you. It just means giving the AI specific documents to reference before it answers. Instead of relying on its general training, it pulls from YOUR files. This is how you make AI actually useful for your specific business.",
          "FINE-TUNING: Training an existing AI model with your own data to make it better at your specific tasks. Think of it as hiring a general contractor and then training them specifically on your type of projects. You probably won't do this yourself, but you should know what it means.",
          "API (Application Programming Interface): A way for software to talk to other software. When apps connect to AI in the background, they use an API. You'll hear this word a lot when people talk about automation."
        ],
        tasks: [
          "Complete: ChatGPT Prompt Engineering for Developers on deeplearning.ai (free, 1 hour)",
          "Upload a real document (contract, spec, RFP) to Claude and ask it 5 questions about it",
          "Ask Claude: 'What is your context window size and what does that mean for me?'",
        ],
        quiz: [
          {
            id: "w2-l2-q1",
            question: "Roughly how many words equal one 'token' in AI?",
            options: ["1 word = 1 token", "1 token = about 3/4 of a word", "1 token = 10 words", "Tokens aren't related to words"],
            correctIndex: 1,
            explanation: "1 token is roughly 3/4 of a word. So when a model says '200K context window,' that's roughly 150K words. Enough to fit a whole damn novel."
          },
          {
            id: "w2-l2-q2",
            question: "What is a 'hallucination' in AI?",
            options: ["A visual glitch in the interface", "When the AI generates confident but factually wrong information", "When the AI crashes", "A feature that lets AI imagine images"],
            correctIndex: 1,
            explanation: "Hallucinations are AI's biggest weakness. It'll state complete bullshit with the same confidence as verified facts. Always verify the important stuff. Trust but verify."
          },
          {
            id: "w2-l2-q3",
            question: "What does RAG stand for?",
            options: ["Rapid Answer Generation", "Retrieval-Augmented Generation", "Real-time AI Gateway", "Random Access Generator"],
            correctIndex: 1,
            explanation: "RAG = Retrieval-Augmented Generation. Fancy way of saying 'give the AI your specific documents to reference.' This is how you make AI actually useful for YOUR business, not just generic stuff."
          },
          {
            id: "w2-l2-q4",
            question: "What happens when you exceed an AI's context window?",
            options: ["The AI gets faster", "Nothing changes", "The AI starts forgetting the beginning of the conversation", "Your account gets charged more"],
            correctIndex: 2,
            explanation: "When you hit the limit, older parts of your conversation start falling out of the AI's working memory. It's like trying to hold too many things at once - something's gotta drop."
          },
        ]
      },
    ]
  },

  // WEEK 3
  {
    number: 3,
    phase: 1,
    phaseTitle: "FOUNDATIONS",
    title: "Go Deeper",
    tagline: "Time for your first real credential. Let's stack some badges.",
    lessons: [
      {
        id: "w3-l1",
        weekNumber: 3,
        title: "Generative AI: Beyond the Basics",
        subtitle: "Understanding how this stuff actually works (without the PhD)",
        content: [
          "You've been using AI for two weeks now. You can talk to it, you can get decent outputs, you know the vocabulary. Now let's understand the 'how' just enough to make you dangerous.",
          "Generative AI models work on prediction. Seriously, that's the core of it. When Claude writes a response, it's predicting the most likely next word, then the next, then the next. It does this thousands of times per response, and each prediction is informed by patterns it learned from training data.",
          "The training process goes like this: the model reads billions of pages of text. It learns patterns - grammar, facts, reasoning styles, code syntax, conversation flows. Then when you prompt it, it uses those patterns to generate a response that fits the context you gave it.",
          "This is also why hallucinations happen. The model isn't 'looking up' facts in a database. It's generating text based on patterns. Sometimes those patterns produce text that sounds right but is factually wrong.",
          "Here's what matters for you: this means the QUALITY of your prompt directly shapes the AI's prediction path. A specific, detailed prompt narrows the AI's options to high-quality responses. A vague prompt gives it too many possible paths, and it picks whatever pattern is most common - which is usually generic crap.",
          "This week you're going to knock out the Generative AI for Everyone course by Andrew Ng (free on Coursera) and the Career Essentials in Generative AI cert from Microsoft + LinkedIn. That LinkedIn cert is your FIRST real credential. Get it on your profile immediately."
        ],
        tasks: [
          "Complete: Generative AI for Everyone by Andrew Ng on Coursera (free to audit, 5 hrs)",
          "Complete: Career Essentials in Generative AI (Microsoft + LinkedIn, free, 5 hrs)",
          "Add your LinkedIn certification badge to your profile IMMEDIATELY",
          "Explain what an LLM is to someone who has never heard the term - practice this out loud",
        ],
        quiz: [
          {
            id: "w3-l1-q1",
            question: "At its core, how do generative AI models produce text?",
            options: ["They search a database for pre-written answers", "They predict the most likely next word based on patterns from training data", "They copy-paste from the internet", "They use a secret algorithm that nobody understands"],
            correctIndex: 1,
            explanation: "Prediction. That's the whole game. The model predicts the next most likely word, over and over. Understanding this helps you understand why better prompts = better outputs."
          },
          {
            id: "w3-l1-q2",
            question: "Why do AI hallucinations happen?",
            options: ["The AI is broken", "The AI is generating based on patterns, not looking up facts - sometimes patterns produce wrong text", "There's a bug in the software", "The internet has wrong information"],
            correctIndex: 1,
            explanation: "Hallucinations are a feature of how prediction-based generation works. The AI isn't fact-checking itself. It's following patterns that usually lead to correct output... but not always."
          },
          {
            id: "w3-l1-q3",
            question: "Which certification should you add to LinkedIn this week?",
            options: ["Google Cloud Professional", "AWS Solutions Architect", "Career Essentials in Generative AI (Microsoft + LinkedIn)", "Meta AI Engineering"],
            correctIndex: 2,
            explanation: "The Career Essentials in Generative AI cert from Microsoft + LinkedIn is free and gives you a real credential badge on your profile. First of many. Stack 'em up."
          },
        ]
      },
      {
        id: "w3-l2",
        weekNumber: 3,
        title: "Phase 1 Final Assessment",
        subtitle: "Prove you weren't just going through the motions",
        content: [
          "Three weeks in. Let's see what stuck. This is your Phase 1 checkpoint - a comprehensive assessment covering everything from Weeks 1-3.",
          "By now you should:\n- Use ChatGPT and Claude daily without thinking about it\n- Know what LLM, prompt, token, context window, hallucination, and RAG mean\n- Be able to write prompts using the CRAFT framework\n- Have completed the Google Generative AI Learning Path (5 badges)\n- Have your Career Essentials in Generative AI cert on LinkedIn\n- Be using AI for at least one real work task per day",
          "If you're not hitting these benchmarks, go back and fill the gaps before moving to Phase 2. There's no shame in taking an extra week. This isn't a race - it's about actually learning this shit.",
          "Phase 2 is where things get interesting. You're going to start applying AI to real business problems, learning automation, and stacking more certifications. The foundations are in place. Now we build on them."
        ],
        tasks: [
          "Complete the Phase 1 Assessment quiz below",
          "Review any weak areas before moving to Phase 2",
          "Make sure all Phase 1 certifications are on your LinkedIn profile",
        ],
        quiz: [
          {
            id: "w3-l2-q1",
            question: "What does the 'C' in the CRAFT prompt framework stand for?",
            options: ["Clarity", "Context", "Conclusion", "Create"],
            correctIndex: 1,
            explanation: "C = Context. Tell the AI your situation. 'I'm a construction PM on a $5M renovation...' Context is what turns generic output into useful output."
          },
          {
            id: "w3-l2-q2",
            question: "Which AI tool has the largest context window, making it best for analyzing long documents?",
            options: ["ChatGPT", "Claude", "Gemini", "Copilot"],
            correctIndex: 1,
            explanation: "Claude (Anthropic) has the largest context window. Upload entire contracts, spec books, RFPs. This is why it's our primary tool."
          },
          {
            id: "w3-l2-q3",
            question: "What should you ALWAYS do when AI gives you important facts or numbers?",
            options: ["Trust them completely", "Verify them independently", "Ask the AI if it's sure", "Ignore the numbers"],
            correctIndex: 1,
            explanation: "VERIFY. The AI can hallucinate with total confidence. Important facts, numbers, legal references - always double-check. Trust but verify."
          },
          {
            id: "w3-l2-q4",
            question: "An API is:",
            options: ["A type of AI model", "A programming language", "A way for software to talk to other software", "An AI certification"],
            correctIndex: 2,
            explanation: "API = Application Programming Interface. It's how apps talk to each other. When Zapier connects your email to your CRM through AI, it's using APIs."
          },
          {
            id: "w3-l2-q5",
            question: "How many free certifications should you have by the end of Week 3?",
            options: ["None yet", "1 (LinkedIn/Microsoft)", "6+ badges and 1 certification", "10+"],
            correctIndex: 2,
            explanation: "By Week 3: Google Cloud Skills Boost badges (5 from the learning path) plus the Career Essentials in Generative AI cert. That's 6+ credentials in 3 weeks. For free."
          },
        ]
      },
    ]
  },

  // ============================================================
  // PHASE 2: APPLIED SKILLS (Weeks 4-6)
  // ============================================================
  {
    number: 4,
    phase: 2,
    phaseTitle: "APPLIED SKILLS",
    title: "AI for Business",
    tagline: "Time to make this stuff actually make you money.",
    lessons: [
      {
        id: "w4-l1",
        weekNumber: 4,
        title: "AI in Sales & Marketing",
        subtitle: "Because leads don't close themselves... yet",
        content: [
          "Welcome to Phase 2. You've got the fundamentals down. Now we make this stuff earn its keep.",
          "This week you're going after HubSpot certifications. Here's why: HubSpot Academy is completely free, the courses are actually good, and the certifications are recognized across industries. Plus, what you learn directly applies to business development in construction and development.",
          "AI for Marketers (HubSpot): This covers how to use AI for content creation, campaign strategy, and market analysis. Even if you're not a 'marketer' in the traditional sense, everything here applies to business development. You need proposals, email campaigns, market analyses, comp studies? This teaches you how to leverage AI for all of it.",
          "AI-Powered Sales (HubSpot): How to use AI throughout the sales process - lead research, outreach, follow-up, deal analysis. This is directly applicable to landing new contracts and development deals.",
          "Think about it: you can use AI to research a potential client before a meeting, draft a personalized proposal based on their specific needs, create comparison analyses, and follow up with customized messaging. That's not replacing the relationship-building you're good at. It's giving you superpowers to prepare for and follow up on every interaction.",
          "People who figure this out will close more deals with less effort. Period."
        ],
        tasks: [
          "Complete: HubSpot AI for Marketers Certification (free, 2-3 hrs) at academy.hubspot.com",
          "Complete: HubSpot AI-Powered Sales Certification (free, 2 hrs) at academy.hubspot.com",
          "Use AI to research a real prospect/client and draft a personalized outreach email",
          "Use AI to create a market analysis for a real property or opportunity",
        ],
        quiz: [
          {
            id: "w4-l1-q1",
            question: "What makes HubSpot certifications a smart move for your learning plan?",
            options: ["They're the most expensive and therefore the best", "They're free, well-produced, and provide real certificates recognized across industries", "They're required by law for marketing", "They teach you how to code"],
            correctIndex: 1,
            explanation: "Free + good quality + real credential = no brainer. Stack these. HubSpot Academy is one of the best-kept secrets in free education."
          },
          {
            id: "w4-l1-q2",
            question: "How can AI improve your sales process in construction/development?",
            options: ["It can't - construction is too hands-on", "It replaces the need for relationships", "Research prospects, draft proposals, create analyses, personalize follow-ups", "It only helps with marketing, not sales"],
            correctIndex: 2,
            explanation: "AI doesn't replace the handshake. It makes everything around the handshake faster and better. Research, proposals, analyses, follow-ups - all supercharged."
          },
        ]
      },
      {
        id: "w4-l2",
        weekNumber: 4,
        title: "Salesforce Trailhead & Gamified Learning",
        subtitle: "Earn badges like a damn Boy Scout",
        content: [
          "Salesforce Trailhead is another goldmine of free education. And here's the kicker - it's gamified. You earn badges, points, and rankings. It's like a video game but you're actually learning shit that makes you money.",
          "Why Salesforce? Two reasons. First, Salesforce is the world's largest CRM platform. Understanding it - even at a basic level - makes you more valuable in any business context. Second, they've built excellent AI training modules that go beyond just their platform.",
          "Start with the AI Fundamentals trail. It covers the basics of AI in a business context, then gets into Einstein AI (Salesforce's AI layer). Even if you never touch Salesforce itself, the concepts translate everywhere.",
          "The badge system is addicting. Every module you complete earns a badge on your Trailhead profile. These are visible to anyone and carry real weight, especially with companies that use Salesforce (which is a shitload of companies).",
          "Pro tip: set a goal of earning at least 5 badges this week. The modules are short - 15-30 minutes each. You can knock out 2-3 during a lunch break."
        ],
        tasks: [
          "Create a free Salesforce Trailhead account at trailhead.salesforce.com",
          "Complete the AI Fundamentals trail",
          "Earn at least 5 badges this week",
          "Connect your Trailhead profile to LinkedIn",
        ],
        quiz: [
          {
            id: "w4-l2-q1",
            question: "What is Salesforce Trailhead?",
            options: ["A paid bootcamp", "A free, gamified learning platform with badges and rankings", "An AI chatbot", "A project management tool"],
            correctIndex: 1,
            explanation: "Trailhead is free, gamified, and fun as hell. Earn badges, compete on leaderboards, and learn skills that have real business value. No catch."
          },
          {
            id: "w4-l2-q2",
            question: "What is Einstein AI?",
            options: ["A physics textbook", "Salesforce's AI layer built into their CRM platform", "An AI startup", "Albert Einstein's diary"],
            correctIndex: 1,
            explanation: "Einstein is Salesforce's AI. It handles predictions, recommendations, and automations within the Salesforce ecosystem. Knowing about it makes you sound smart in business meetings."
          },
        ]
      },
    ]
  },

  // WEEK 5
  {
    number: 5,
    phase: 2,
    phaseTitle: "APPLIED SKILLS",
    title: "Automation Fundamentals",
    tagline: "Build your first robot. No welding required.",
    lessons: [
      {
        id: "w5-l1",
        weekNumber: 5,
        title: "Automation: The Real Money Move",
        subtitle: "Why work harder when you can work... not at all?",
        content: [
          "Alright, here's where shit gets exciting. Automation is taking repetitive tasks and making them happen without you lifting a finger. And with AI in the mix, even complex tasks can be automated.",
          "Let's talk about the two big no-code automation platforms you need to know:",
          "Zapier - Think of it as the universal translator between apps. Gmail talks to Google Sheets which talks to Slack which talks to your CRM. You create 'Zaps' - automated workflows triggered by events. 'When I get an email with an attachment, save it to Google Drive and notify me in Slack.' Free tier gives you 5 Zaps and 100 tasks/month.",
          "Make.com (formerly Integromat) - Similar to Zapier but more visual and more powerful for complex workflows. You build 'scenarios' by connecting modules on a canvas. It's like drawing a flowchart that actually runs. Free tier gives you 2 scenarios and 1,000 operations/month.",
          "Here's why this matters for you specifically: In construction and development, there's a SHITLOAD of repetitive admin work. RFI tracking, daily reports, submittals, email follow-ups, lead management, document filing. Every one of these can be partially or fully automated.",
          "Imagine: someone submits an RFI through a form. It automatically gets logged in a spreadsheet, the relevant team member gets notified, a response template gets generated by AI, and a follow-up reminder gets scheduled. All without you doing anything. THAT is automation.",
          "This week: complete Make Academy Fundamentals (free, 4 hours, certificate) and Zapier University Getting Started (free). Then build one real automation."
        ],
        tasks: [
          "Complete: Make Academy Fundamentals at academy.make.com (free, 4 hrs, certificate)",
          "Complete: Zapier University Getting Started at zapier.com/university (free)",
          "Sign up for free accounts on both Zapier and Make.com",
          "Build your first real automation (see lesson for examples)",
        ],
        quiz: [
          {
            id: "w5-l1-q1",
            question: "What is a 'Zap' in Zapier?",
            options: ["A type of AI model", "An automated workflow triggered by an event", "A programming language", "A premium feature"],
            correctIndex: 1,
            explanation: "A Zap is an automated workflow. Trigger: 'When X happens' -> Action: 'Do Y.' Simple as that. You can chain multiple actions together."
          },
          {
            id: "w5-l1-q2",
            question: "What is 'no-code' automation?",
            options: ["Automation that doesn't work", "Building automations without writing traditional code - using visual builders instead", "A type of AI that doesn't need prompts", "Automation that costs nothing"],
            correctIndex: 1,
            explanation: "No-code = you build it visually, by dragging and connecting blocks, instead of writing code. This is YOUR lane. You don't need to be a programmer to automate your business."
          },
          {
            id: "w5-l1-q3",
            question: "Which construction task is a good candidate for automation?",
            options: ["Pouring concrete", "Installing drywall", "RFI tracking, email follow-ups, and document filing", "Framing walls"],
            correctIndex: 2,
            explanation: "Hands-on construction work stays human. But all the admin, communication, tracking, and document work? That's automation gold. And there's a LOT of it."
          },
        ]
      },
      {
        id: "w5-l2",
        weekNumber: 5,
        title: "Build Something Real",
        subtitle: "Your first automation that actually does something useful",
        content: [
          "Theory's great. Building something is better. Here are three automation ideas ranked from easiest to most impressive. Pick at least one and build it this week.",
          "EASY: Email Attachment Auto-Saver\nTrigger: When you receive an email with an attachment\nAction: Save the attachment to a specific Google Drive folder, rename it with the date and sender name\nWhy: Never dig through emails looking for a drawing set or spec document again",
          "MEDIUM: Lead Notification & Logger\nTrigger: When a form is submitted on your website (or when you receive an email from a specific address)\nAction: Log the lead info to Google Sheets, send you a Slack or text notification, draft a follow-up email using AI\nWhy: Instant lead capture and response prep without manual entry",
          "ADVANCED: Meeting Notes Processor\nTrigger: You paste meeting notes into a Google Doc (or email them to a specific address)\nAction: AI summarizes the notes, extracts action items, creates tasks in your project management tool, sends a summary email to attendees\nWhy: Your meetings actually lead to action instead of just being forgotten",
          "Start with the easy one if you need to. The point is to get something running. Once you build your first automation and see it work, you'll immediately think of 10 more you want to build. That's the addiction."
        ],
        tasks: [
          "Choose one automation from the list above (or create your own)",
          "Build it in Zapier or Make.com",
          "Test it with real data",
          "Document what you built: what it does, what tools it connects, how it helps",
        ],
        quiz: [
          {
            id: "w5-l2-q1",
            question: "What's the best approach to your first automation?",
            options: ["Build the most complex one possible to impress people", "Start simple, get something working, then add complexity", "Wait until you understand everything before starting", "Pay someone else to build it"],
            correctIndex: 1,
            explanation: "Start simple. Get a win. Build confidence. Then get more ambitious. Your first automation doesn't need to be complicated - it just needs to work."
          },
          {
            id: "w5-l2-q2",
            question: "What is a 'trigger' in automation?",
            options: ["The button you press to start the automation manually every time", "The event that automatically kicks off the workflow", "A type of AI prompt", "The cost of running an automation"],
            correctIndex: 1,
            explanation: "The trigger is the 'when' - 'When an email arrives,' 'When a form is submitted,' 'When a row is added to a spreadsheet.' The trigger starts the chain of actions."
          },
        ]
      },
    ]
  },

  // WEEK 6
  {
    number: 6,
    phase: 2,
    phaseTitle: "APPLIED SKILLS",
    title: "Advanced Prompting & Documents",
    tagline: "Upload contracts. Analyze deals. Replace that finance degree.",
    lessons: [
      {
        id: "w6-l1",
        weekNumber: 6,
        title: "Advanced Prompt Engineering",
        subtitle: "Level up from good prompts to 'how the hell did you get it to do that' prompts",
        content: [
          "You've been using CRAFT for a month. Time to add some power moves to your prompting toolkit.",
          "CHAIN-OF-THOUGHT PROMPTING: Instead of asking for the answer directly, ask the AI to think step by step. 'Walk me through your reasoning step by step before giving the final answer.' This dramatically improves accuracy on complex problems like financial analysis, project planning, and risk assessment.",
          "FEW-SHOT PROMPTING: Give the AI examples of what you want before asking it to produce something. 'Here are three examples of the email style I want: [Example 1] [Example 2] [Example 3]. Now write a new email in this same style about [topic].' The AI learns the pattern from your examples.",
          "SYSTEM PROMPTS / CUSTOM INSTRUCTIONS: Both ChatGPT and Claude let you set persistent instructions. 'I'm a construction project manager in Phoenix, AZ. I work on commercial renovation and ground-up development projects ranging from $2M-$20M. Always assume this context unless I specify otherwise.' Now every conversation starts with that context baked in.",
          "ITERATIVE REFINEMENT: Don't try to get perfection in one prompt. Start broad, then narrow. 'Draft a project timeline' -> 'Now make it more detailed for the HVAC and electrical phases' -> 'Add dependencies between tasks' -> 'Format it as a Gantt chart description I can plug into a project management tool.' Each step builds on the last.",
          "This week: complete the AWS Foundations of Prompt Engineering course (free, 4 hours on AWS Skill Builder) and the Anthropic Prompt Engineering course (free, 2-4 hours on docs.anthropic.com). These go deeper than anything you've done so far."
        ],
        tasks: [
          "Complete: AWS Foundations of Prompt Engineering (free, 4 hrs) on explore.skillbuilder.aws",
          "Complete: Anthropic Prompt Engineering Course (free, 2-4 hrs) on docs.anthropic.com",
          "Practice chain-of-thought prompting on a real financial analysis",
          "Set up custom instructions in both ChatGPT and Claude",
        ],
        quiz: [
          {
            id: "w6-l1-q1",
            question: "What is 'chain-of-thought' prompting?",
            options: ["Sending multiple prompts at once", "Asking the AI to think step by step before giving a final answer", "Creating a sequence of automated prompts", "A type of AI certification"],
            correctIndex: 1,
            explanation: "Chain-of-thought = 'Show your work.' Tell the AI to reason step by step. This dramatically improves accuracy on complex problems. Use it for financial analysis, risk assessment, project planning."
          },
          {
            id: "w6-l1-q2",
            question: "What is 'few-shot' prompting?",
            options: ["Using the AI only a few times", "Giving the AI examples of what you want before asking it to produce something", "A fast way to prompt AI", "Using short prompts"],
            correctIndex: 1,
            explanation: "Give examples first, then ask for what you want. The AI learns the pattern from your examples and replicates it. Works great for matching a specific writing style or format."
          },
          {
            id: "w6-l1-q3",
            question: "What's the benefit of setting custom instructions in ChatGPT or Claude?",
            options: ["It makes the AI faster", "It costs less", "Every conversation starts with your context baked in - no need to re-explain who you are", "It unlocks premium features"],
            correctIndex: 2,
            explanation: "Set it once, benefit every time. Tell the AI your role, industry, typical tasks. Now every conversation starts with context instead of you re-explaining yourself."
          },
        ]
      },
      {
        id: "w6-l2",
        weekNumber: 6,
        title: "Phase 2 Final Assessment",
        subtitle: "Halfway there. Let's see where you stand.",
        content: [
          "Six weeks down, six to go. You're at the halfway point. Let's check the scoreboard.",
          "By now you should have:\n- 6-8 certifications/badges (Google x5, LinkedIn/Microsoft, HubSpot x2, Make Academy, Salesforce badges)\n- At least 1 working automation\n- Daily AI usage for real work tasks\n- Advanced prompting skills (CRAFT, chain-of-thought, few-shot)\n- The ability to upload documents and have meaningful AI-assisted analysis\n- Real AI-generated work product (proposals, emails, analyses)",
          "If you're hitting these marks, you're already ahead of 90% of people in your industry. Not joking. Most people are still at the 'I tried ChatGPT once and it was okay' stage. You're running laps around them.",
          "Phase 3 is where you become dangerous. We're going to build systems, think strategically about AI implementation, and prepare for your paid certification exams. The learning curve flattens out from here - it's more about depth and application than new concepts."
        ],
        tasks: [
          "Complete the Phase 2 Assessment quiz below",
          "Review your automation and optimize it",
          "Make a list of 10 tasks in your work that could be automated or AI-assisted",
        ],
        quiz: [
          {
            id: "w6-l2-q1",
            question: "What's the difference between Zapier and Make.com?",
            options: ["They do completely different things", "Both automate workflows - Zapier is simpler, Make is more visual and powerful for complex scenarios", "Zapier is free, Make is paid", "Zapier is for AI, Make is for automation"],
            correctIndex: 1,
            explanation: "Both connect apps and automate workflows. Zapier is simpler to start with. Make.com gives you more control for complex workflows. Both are useful. Know both."
          },
          {
            id: "w6-l2-q2",
            question: "In automation, what's the difference between a 'trigger' and an 'action'?",
            options: ["They're the same thing", "A trigger is what starts the workflow, an action is what gets done", "A trigger costs money, an action is free", "A trigger is manual, an action is automatic"],
            correctIndex: 1,
            explanation: "Trigger = the 'when' (email received, form submitted). Action = the 'then' (save file, send notification, update spreadsheet). Every automation is trigger -> action(s)."
          },
          {
            id: "w6-l2-q3",
            question: "How many free certifications/badges should you have by Week 6?",
            options: ["2-3", "6-8", "15+", "None - paid ones only"],
            correctIndex: 1,
            explanation: "6-8 credentials by Week 6, all free or nearly free. Google badges (5), LinkedIn/Microsoft cert (1), HubSpot certs (2), Make Academy cert (1), Salesforce badges (several). You're stacking credentials like a boss."
          },
          {
            id: "w6-l2-q4",
            question: "What is 'iterative refinement' in prompting?",
            options: ["Asking the same prompt multiple times and hoping for better results", "Starting broad and progressively narrowing/improving the output across multiple prompts", "Deleting your prompt and starting over", "Using a different AI for each step"],
            correctIndex: 1,
            explanation: "Don't try to nail it in one prompt. Start broad, then refine. Each follow-up prompt builds on the last. It's like sculpting - rough shape first, then details."
          },
        ]
      },
    ]
  },

  // ============================================================
  // PHASE 3: AUTOMATION & BUSINESS (Weeks 7-9)
  // ============================================================
  {
    number: 7,
    phase: 3,
    phaseTitle: "AUTOMATION & BUSINESS",
    title: "Automation at Scale",
    tagline: "One automation was cute. Now build a system.",
    lessons: [
      {
        id: "w7-l1",
        weekNumber: 7,
        title: "Multi-Step Workflows That Actually Run Your Business",
        subtitle: "From single automations to interconnected systems",
        content: [
          "In Week 5, you built your first automation. It was probably simple - one trigger, one or two actions. That's like building a shed. Now we're building the whole damn house.",
          "Multi-step automations chain multiple actions together with conditional logic. 'IF the email contains an attachment AND the sender is in my contacts, THEN save the file, update the spreadsheet, AND send a confirmation. ELSE, forward to my assistant for review.'",
          "This week, complete Make Academy Advanced (free, 6 hours, certificate). This goes deep into error handling, conditional branching, data mapping, and integrating AI into your automation flows.",
          "Here's a real-world example that would save hours in construction:\n\nTrigger: RFI submitted via Google Form\nStep 1: Log to master tracking spreadsheet\nStep 2: AI analyzes the question and categorizes it (structural, MEP, architectural, etc.)\nStep 3: Route to the correct team member based on category\nStep 4: Generate a draft response using AI based on project specs\nStep 5: Set a 48-hour follow-up reminder\nStep 6: If not responded in 48 hours, escalate notification",
          "That entire workflow runs without you touching it. You just review and approve the AI-drafted response. That's the difference between using automation and BEING automated.",
          "Also this week: knock out the AWS Generative AI Essentials course on Skill Builder. Free, about 2 hours. Gives you understanding of how AI works in cloud infrastructure."
        ],
        tasks: [
          "Complete: Make Academy Advanced (free, 6 hrs, certificate) at academy.make.com",
          "Complete: AWS Generative AI Essentials (free, 2 hrs) on explore.skillbuilder.aws",
          "Build a multi-step automation with at least 3 actions and 1 conditional branch",
          "Document your automation: screenshot the flow, describe what each step does",
        ],
        quiz: [
          {
            id: "w7-l1-q1",
            question: "What is 'conditional logic' in automation?",
            options: ["Logic that only works sometimes", "IF/THEN branching - different actions based on different conditions", "A type of AI model", "A premium automation feature"],
            correctIndex: 1,
            explanation: "Conditional logic = 'If this, then that. Otherwise, do something else.' It's what makes automations smart instead of dumb. Real business workflows need this."
          },
          {
            id: "w7-l1-q2",
            question: "What's the advantage of multi-step automations over single-step ones?",
            options: ["They're faster", "They cost less", "They can handle complex, real-world business processes end-to-end", "They look more impressive"],
            correctIndex: 2,
            explanation: "Real business processes have multiple steps, conditions, and branches. Multi-step automations mirror how work actually gets done. That's where the real time savings live."
          },
        ]
      },
    ]
  },

  // WEEK 8
  {
    number: 8,
    phase: 3,
    phaseTitle: "AUTOMATION & BUSINESS",
    title: "AI Strategy & Leadership",
    tagline: "Stop being the student. Start being the one with the answers.",
    lessons: [
      {
        id: "w8-l1",
        weekNumber: 8,
        title: "The AI Implementation Plan",
        subtitle: "Think like a CEO, not a student",
        content: [
          "Here's where you level up from 'person who uses AI' to 'person who implements AI strategy.' Big difference.",
          "This week, you're going to write an AI Implementation Plan for your company (or a hypothetical development firm). This is the kind of document that makes executives pay attention and boards take notice. And yes, you'll use AI to help write it - because that's kind of the whole point.",
          "Your plan should cover:\n\n1. Current State Assessment: What tasks are manual today? Where are the bottlenecks? What's costing you time and money?\n\n2. Opportunity Mapping: For each pain point, what AI/automation solution could address it? Be specific - which tool, what workflow.\n\n3. Priority Matrix: Rank by impact (how much time/money saved) vs. effort (how hard to implement). Start with high-impact, low-effort wins.\n\n4. Implementation Timeline: Phase the rollout. Quick wins first (Weeks 1-2), medium projects (Month 1-2), major systems (Quarter 2-3).\n\n5. Budget: What does this cost? Most of it's free or cheap. Show the ROI.\n\n6. Risk & Mitigation: What could go wrong? How do you prevent it? (Hint: always have a human review AI output for important decisions.)",
          "Continue working through Salesforce Trailhead AI trails and knock out 3-4 more DeepLearning.AI short courses. Recommended: 'Building Systems with the ChatGPT API' and any courses on AI agents.",
          "By the end of this week, you should be able to walk into a meeting, present an AI strategy, and have people genuinely impressed. That's not four years of school. That's eight weeks of focused work."
        ],
        tasks: [
          "Write an AI Implementation Plan for your company (use the structure above)",
          "Complete: 3-4 DeepLearning.AI short courses at deeplearning.ai/short-courses (free, 1 hr each)",
          "Complete: More Salesforce Trailhead AI trails (free, earn more badges)",
          "Identify 10 tasks in your workflow that could be automated and rank them by impact",
        ],
        quiz: [
          {
            id: "w8-l1-q1",
            question: "What's a 'Priority Matrix' in AI implementation?",
            options: ["A type of AI model", "A ranking of opportunities by impact vs. effort to identify quick wins", "A certification exam", "A spreadsheet template"],
            correctIndex: 1,
            explanation: "Impact vs. Effort. High impact + low effort = do it first. This is how you show business value fast and build momentum for bigger projects."
          },
          {
            id: "w8-l1-q2",
            question: "When implementing AI in a business, what should you start with?",
            options: ["The most complex, impressive project", "Quick wins - high impact, low effort tasks", "Complete replacement of all manual processes", "Hiring an AI team"],
            correctIndex: 1,
            explanation: "Quick wins first. Show value fast. Build trust. Then tackle the bigger projects. Nobody's going to greenlight a major AI overhaul if you haven't proven the small stuff works."
          },
          {
            id: "w8-l1-q3",
            question: "What's the most important risk mitigation for AI in business?",
            options: ["Never use AI for anything important", "Always have a human review AI output for critical decisions", "Only use the most expensive AI", "Print everything on paper as backup"],
            correctIndex: 1,
            explanation: "Human in the loop. AI drafts, analyzes, recommends. Humans review, decide, approve. This is non-negotiable for anything that matters."
          },
        ]
      },
    ]
  },

  // WEEK 9
  {
    number: 9,
    phase: 3,
    phaseTitle: "AUTOMATION & BUSINESS",
    title: "Integration & Custom Solutions",
    tagline: "Build AI that knows YOUR business, not everyone's.",
    lessons: [
      {
        id: "w9-l1",
        weekNumber: 9,
        title: "Custom GPTs and Claude Projects",
        subtitle: "Your own personal AI expert that knows your shit",
        content: [
          "This is one of the coolest things you can do right now. Both ChatGPT and Claude let you create custom AI assistants that are trained on YOUR specific data.",
          "ChatGPT lets you create 'Custom GPTs' - basically a ChatGPT that's been configured with specific instructions and knowledge. You upload your company's spec templates, pricing sheets, standard contracts, and the GPT references all of that when you ask it questions.",
          "Claude has 'Projects' - you create a project, upload documents to it, set custom instructions, and Claude references those documents in every conversation within that project. Claude's massive context window makes it especially good at this.",
          "Imagine having an AI assistant that:\n- Knows your company's standard pricing for every trade\n- Has read all your contract templates\n- Understands your project management processes\n- Can draft documents in your company's voice and format\n- Answers questions based on your actual project data",
          "That's not science fiction. You can build that RIGHT NOW with a free Claude or ChatGPT account.",
          "This week, create a custom assistant. Upload your most important documents - specs, contracts, pricing, SOPs. Set instructions that reflect your role and needs. Then use it for real work and watch how much better the output is when the AI has your context.",
          "Also this week: study the Microsoft AI-900 training materials on learn.microsoft.com (free). The exam costs $165 if you want to take it in Weeks 10-12, but the training alone is valuable."
        ],
        tasks: [
          "Create a Custom GPT or Claude Project with your company's documents",
          "Upload at least 5 important documents (specs, contracts, pricing, SOPs)",
          "Set custom instructions that reflect your role and typical needs",
          "Use your custom assistant for 3 real work tasks and compare to generic AI",
          "Study: Microsoft AI-900 training materials on learn.microsoft.com (free)",
        ],
        quiz: [
          {
            id: "w9-l1-q1",
            question: "What's the main benefit of creating a Custom GPT or Claude Project?",
            options: ["It's faster than regular AI", "The AI has YOUR specific context - documents, pricing, processes - built in", "It costs less", "It replaces the need for employees"],
            correctIndex: 1,
            explanation: "Context is king. When the AI knows YOUR specs, YOUR pricing, YOUR contracts, the output goes from generic to genuinely useful. This is where AI becomes a real business tool."
          },
          {
            id: "w9-l1-q2",
            question: "Why is Claude particularly well-suited for document-heavy custom assistants?",
            options: ["It's cheaper", "It has the largest context window - can handle more documents at once", "It's made by Google", "It has better graphics"],
            correctIndex: 1,
            explanation: "Claude's context window is massive. You can upload entire contracts, spec books, and RFPs. More context = better, more accurate responses based on your actual data."
          },
        ]
      },
      {
        id: "w9-l2",
        weekNumber: 9,
        title: "Phase 3 Final Assessment",
        subtitle: "Nine weeks in. You're not the same person who started this thing.",
        content: [
          "Let's take stock. Nine weeks ago, you didn't know what LLM meant. Now look at you.",
          "By now you should have:\n- 8+ certifications/badges\n- 3-5 working automations\n- A custom AI assistant trained on your company's data\n- An AI Implementation Plan you could present to any business\n- The ability to evaluate any AI tool quickly and determine its value\n- Real confidence talking about AI in professional settings",
          "Phase 4 is the home stretch. You're going to take certification exams, build your portfolio, and plan your path forward. The hard learning is done. Now it's about proving what you know and setting yourself up for continued growth.",
          "You've gone from the bottom 10% to approximately the top 20% in AI literacy in your industry. The final three weeks will push you into the top 10%."
        ],
        tasks: [
          "Complete the Phase 3 Assessment quiz below",
          "Review all your automations and optimize them",
          "Make sure your custom AI assistant is fully loaded with relevant documents",
        ],
        quiz: [
          {
            id: "w9-l2-q1",
            question: "What documents should you upload to a custom AI assistant for construction/development?",
            options: ["Random internet articles", "Your company's specs, contracts, pricing sheets, SOPs, and project data", "Only financial documents", "Nothing - custom assistants work best empty"],
            correctIndex: 1,
            explanation: "Your real business documents. Specs, contracts, pricing, SOPs, project data. The more relevant context the AI has, the better it serves you."
          },
          {
            id: "w9-l2-q2",
            question: "In an AI Implementation Plan, what are 'quick wins'?",
            options: ["The most expensive projects", "High-impact, low-effort tasks that demonstrate value quickly", "Tasks that require the most people", "Projects that take 6+ months"],
            correctIndex: 1,
            explanation: "Quick wins = maximum bang for minimum effort. Email automation, document analysis, report generation. Prove value fast, build momentum, then tackle bigger projects."
          },
          {
            id: "w9-l2-q3",
            question: "What's the difference between a Custom GPT and a Claude Project?",
            options: ["Custom GPTs are free, Claude Projects are paid", "They're the same thing from different platforms - both let you create context-specific AI assistants", "Custom GPTs are better", "Claude Projects don't allow document uploads"],
            correctIndex: 1,
            explanation: "Same concept, different platforms. Both let you upload documents and set custom instructions. Claude excels with large documents. ChatGPT has a bigger ecosystem of pre-built GPTs."
          },
        ]
      },
    ]
  },

  // ============================================================
  // PHASE 4: CERTIFICATION & MASTERY (Weeks 10-12)
  // ============================================================
  {
    number: 10,
    phase: 4,
    phaseTitle: "CERTIFICATION & MASTERY",
    title: "Certification Sprint",
    tagline: "Time to put your money where your mouth is. Literally. $150.",
    lessons: [
      {
        id: "w10-l1",
        weekNumber: 10,
        title: "Exam Prep: Salesforce AI Associate",
        subtitle: "Your first paid credential. Make it count.",
        content: [
          "Okay, time to invest some actual money. Two paid exams over the next two weeks: Salesforce AI Associate ($75) and AWS AI Practitioner ($75). Total investment: $150. These are the credentials that carry the most weight on a resume and LinkedIn profile.",
          "Salesforce AI Associate exam covers:\n- AI Fundamentals (big chunk of the exam)\n- AI Capabilities in CRM\n- Ethical Considerations for AI\n- Data for AI\n\nGood news: you've been studying for this since Week 4 with Trailhead. The AI Fundamentals content is stuff you could teach at this point.",
          "Study strategy that actually works:\n1. Review all your Trailhead badge content from Weeks 4 and 8\n2. Use Claude to quiz you: 'Quiz me on Salesforce AI Associate topics'\n3. When Claude quizzes you and you get one wrong, have it explain the concept in depth\n4. Focus on the areas you're weakest in, not the stuff you already know\n5. Take practice exams - search for 'Salesforce AI Associate practice questions'",
          "Using AI to study for AI certifications is the most meta thing you'll do in this program. And it actually works incredibly well. Claude and ChatGPT are both excellent study partners."
        ],
        tasks: [
          "Review all Trailhead AI content from Weeks 4 and 8",
          "Have Claude or ChatGPT quiz you on Salesforce AI Associate topics for 30 minutes",
          "Take at least one practice exam",
          "Schedule your Salesforce AI Associate exam at webassessor.com",
        ],
        quiz: [
          {
            id: "w10-l1-q1",
            question: "What does the Salesforce AI Associate exam cover?",
            options: ["Only Salesforce CRM features", "AI Fundamentals, AI Capabilities in CRM, Ethics, and Data for AI", "Programming in Python", "Only prompt engineering"],
            correctIndex: 1,
            explanation: "It's a mix of general AI knowledge and Salesforce-specific AI (Einstein). You've been preparing for this since Week 4. The fundamentals section is stuff you know cold by now."
          },
          {
            id: "w10-l1-q2",
            question: "What's the most effective way to study for AI certification exams?",
            options: ["Read the study guide once the night before", "Use AI to quiz you on exam topics and explain concepts you miss", "Memorize everything word for word", "Only focus on what you already know"],
            correctIndex: 1,
            explanation: "Using AI to study for AI certs. Meta as hell but it works. Claude and ChatGPT are incredible study partners. They can quiz you, explain concepts, and focus on your weak areas."
          },
        ]
      },
    ]
  },

  // WEEK 11
  {
    number: 11,
    phase: 4,
    phaseTitle: "CERTIFICATION & MASTERY",
    title: "Portfolio & Showcase",
    tagline: "Document your wins. Update your story. Show the receipts.",
    lessons: [
      {
        id: "w11-l1",
        weekNumber: 11,
        title: "Building Your AI Portfolio",
        subtitle: "Proof beats promises every single time",
        content: [
          "Certifications are great. But you know what's even better? PROOF that you can actually do things with AI. This week, you're building a portfolio.",
          "Document every automation you've built:\n- Screenshots of the workflow\n- Description of what it does\n- Before: how long the task took manually\n- After: how long it takes now (probably zero because it's automated)\n- Estimated time saved per week/month",
          "Write a LinkedIn article about your AI learning journey. Use AI to help draft it (of course). Cover:\n- Where you started (zero AI knowledge)\n- What you've learned in 11 weeks\n- Specific tools and certifications\n- Real-world results and time savings\n- Where you're heading next",
          "Update your LinkedIn profile:\n- Add all certifications to the Licenses & Certifications section\n- Update your headline to include AI/automation skills\n- Add relevant skills: 'AI Implementation,' 'Prompt Engineering,' 'Process Automation,' 'AI Strategy'\n- Update your About section to reference your AI capabilities",
          "Create a 1-page 'AI Capabilities' summary:\n- Your certifications\n- Tools you're proficient in\n- Types of automations you've built\n- Industries/applications you've focused on\n- This is something you can share with business partners, clients, and potential employers",
          "This documentation is what separates 'I know about AI' from 'I can prove I know AI.' Nobody cares what you say you can do. They care what you can show."
        ],
        tasks: [
          "Document all your automations with screenshots and descriptions",
          "Write a LinkedIn article about your AI learning journey",
          "Update your LinkedIn profile with all certifications and AI skills",
          "Create a 1-page AI Capabilities summary document",
          "Take the AWS AI Practitioner exam ($75) if you haven't already",
        ],
        quiz: [
          {
            id: "w11-l1-q1",
            question: "Why is documenting your AI automations important?",
            options: ["It's not important", "Proof beats promises - documentation shows what you can actually do", "It's required by law", "Only for social media likes"],
            correctIndex: 1,
            explanation: "Anyone can say they know AI. Documentation SHOWS it. Screenshots, before/after metrics, time saved. This is what makes you credible."
          },
          {
            id: "w11-l1-q2",
            question: "What should your LinkedIn profile communicate about AI by Week 11?",
            options: ["Nothing - keep AI skills private", "Certifications, tools proficiency, automation experience, and strategic capability", "Only that you took some courses", "That AI will replace all jobs"],
            correctIndex: 1,
            explanation: "Stack the evidence: certs, skills, experience, results. Your LinkedIn profile should tell a clear story: this person understands AI and can implement it."
          },
        ]
      },
    ]
  },

  // WEEK 12
  {
    number: 12,
    phase: 4,
    phaseTitle: "CERTIFICATION & MASTERY",
    title: "Level Up & Plan Forward",
    tagline: "The end of the plan. The beginning of the advantage.",
    lessons: [
      {
        id: "w12-l1",
        weekNumber: 12,
        title: "The Final Assessment & What's Next",
        subtitle: "Look back at where you started. Then look forward.",
        content: [
          "Twelve weeks. That's what it took. No four-year degree. No $50,000 tuition. No sitting in a classroom listening to someone read PowerPoint slides.",
          "Let's look at what you've accomplished:\n\n- 8-12 certifications and badges on your LinkedIn profile\n- Multiple working automations saving you real hours every week\n- A custom AI assistant trained on your business data\n- An AI implementation strategy you could present to any board\n- Advanced prompt engineering skills\n- Deep understanding of the AI landscape and how to use it\n- A documented portfolio proving all of the above",
          "Remember Week 1 when you didn't know what LLM stood for? Now you're building multi-step automations with conditional logic, creating custom AI assistants, and holding your own in conversations about AI strategy. That's one hell of a transformation.",
          "But here's the thing - this isn't the end. The AI landscape changes fast. New tools, new capabilities, new opportunities. What you've built in these 12 weeks is not just knowledge - it's a FRAMEWORK for continuous learning.",
          "Your next moves (Months 4-6):\n- Take the Microsoft AI-900 exam ($165) if you want the trifecta of certifications\n- Explore Claude Code and AI-assisted development\n- Build more complex automations connecting multiple business systems\n- Start advising others on AI implementation (you're qualified now)\n- Stay current: follow AI news, try new tools, take new courses as they launch\n- Consider the Anthropic certification series when it drops (watch anthropic.com)",
          "You proved something to yourself in these 90 days. Not just that you can learn AI - but that you can learn ANYTHING when you stop making excuses and start putting in the work. A degree would have taken 4 years and cost tens of thousands. You did this in 12 weeks for about $150.",
          "Now go sit in that big boy chair. You've earned it."
        ],
        tasks: [
          "Complete the Final Assessment quiz below",
          "Review and update your AI Implementation Plan with everything you now know",
          "Set 3 learning goals for the next 3 months",
          "Send your LinkedIn article and portfolio to at least 3 people in your network",
          "Celebrate. Seriously. You just did something most people talk about but never actually do.",
        ],
        quiz: [
          {
            id: "w12-l1-q1",
            question: "What is the total approximate cost of the recommended paid certifications in this plan?",
            options: ["$0", "$150 (Salesforce AI Associate + AWS AI Practitioner)", "$5,000", "$50,000"],
            correctIndex: 1,
            explanation: "$75 + $75 = $150 for two industry-recognized credentials. Compare that to a 4-year finance degree. The ROI on this plan is insane."
          },
          {
            id: "w12-l1-q2",
            question: "What separates someone who 'knows about AI' from someone who 'can implement AI'?",
            options: ["A college degree", "More expensive subscriptions", "Documented results, working automations, and proven capabilities", "Knowing more vocabulary words"],
            correctIndex: 2,
            explanation: "Show, don't tell. Working automations, documented results, real certifications, portfolio of AI-generated work product. That's what separates talkers from doers."
          },
          {
            id: "w12-l1-q3",
            question: "After completing this 90-day plan, what should your primary focus be?",
            options: ["Stop learning - you know enough", "Go get that finance degree anyway", "Continue learning, build more complex systems, advise others, stay current", "Start an AI company immediately"],
            correctIndex: 2,
            explanation: "The 90-day plan built your foundation and framework. AI evolves fast. Keep learning, keep building, keep advising. You've got the tools and the credibility now."
          },
          {
            id: "w12-l1-q4",
            question: "You started this plan not knowing what LLM stood for. Now you can:",
            options: ["Still only use basic ChatGPT", "Build automations, create custom AI assistants, write AI strategy, and hold your own with anyone", "Program AI from scratch", "Replace your entire team with robots"],
            correctIndex: 1,
            explanation: "From zero to certified, automation-building, strategy-writing AI practitioner in 90 days. No degree. No massive investment. Just focused, consistent effort. That's the whole point."
          },
          {
            id: "w12-l1-q5",
            question: "Final question: Why is AI more valuable to learn than a finance degree right now?",
            options: ["Finance is dead", "AI is a fad", "AI is a force multiplier - with it, you can do finance AND everything else faster and better than any single degree could prepare you for", "It's not - the finance degree is still better"],
            correctIndex: 2,
            explanation: "AI doesn't replace one skill - it multiplies ALL your skills. Finance, analysis, writing, research, planning, communication. That's why this plan exists. You didn't need a degree. You needed a force multiplier."
          },
        ]
      },
    ]
  },
];

// Helper to get all lessons flattened
export function getAllLessons(): Lesson[] {
  return curriculum.flatMap(week => week.lessons);
}

// Helper to get a lesson by ID
export function getLessonById(id: string): Lesson | undefined {
  return getAllLessons().find(l => l.id === id);
}

// Helper to get week by number
export function getWeekByNumber(num: number): Week | undefined {
  return curriculum.find(w => w.number === num);
}
