/* ==========================================================================
   FDE 90-Day Learning Tracker
   Vanilla JS. No build step, no dependencies.
   ========================================================================== */

'use strict';

/* ---------- Static curriculum data (single source of truth) ---------- */

const PHASES = [
  { id: 1, name: 'Python and Backend Engineering', short: 'Python & Backend', from: 1, to: 12,
    milestone: 'Build a tested FastAPI application with PostgreSQL and authentication.' },
  { id: 2, name: 'LLM Engineering', short: 'LLM Engineering', from: 13, to: 25,
    milestone: 'Build an AI customer support assistant with validated structured responses.' },
  { id: 3, name: 'RAG and Enterprise Knowledge Systems', short: 'RAG & Knowledge Systems', from: 26, to: 42,
    milestone: 'Build an enterprise knowledge assistant with source citations and retrieval evaluation.' },
  { id: 4, name: 'Agentic AI', short: 'Agentic AI', from: 43, to: 58,
    milestone: 'Build an AI operations agent with human approval for suggested remediation.' },
  { id: 5, name: 'Production AI Engineering', short: 'Production AI', from: 59, to: 75,
    milestone: 'Harden and deploy an AI service with security, evaluation and observability.' },
  { id: 6, name: 'FDE Skills and Capstone', short: 'FDE Skills & Capstone', from: 76, to: 90,
    milestone: 'Validate and present an end-to-end capstone with architecture and business impact.' }
];

const CURRICULUM = [
  {
    day: 1, phase: 1, topic: 'Python data structures',
    subtopics: ['Lists, tuples, sets and dictionaries', 'Mutable vs immutable objects', 'Comprehensions'],
    objective: 'Choose the right built-in container for a problem and explain how mutability affects correctness.',
    practical: 'Build a contact book using lists, sets and dictionaries. Rewrite one loop as a comprehension and document why each container was chosen.',
    time: '3-4 hours'
  },
  {
    day: 2, phase: 1, topic: 'Python iteration',
    subtopics: ['Iterators and generators', 'Generator expressions', 'Lazy evaluation'],
    objective: 'Write memory-efficient iteration pipelines and explain when lazy evaluation changes behavior.',
    practical: 'Process a large log file with a generator pipeline, then compare memory usage against an eager list implementation.',
    time: '3-4 hours'
  },
  {
    day: 3, phase: 1, topic: 'Advanced Python',
    subtopics: ['Decorators', 'Closures', 'Context managers'],
    objective: 'Use closures, decorators and context managers to write reusable cross-cutting Python code.',
    practical: 'Implement a timing decorator, a retry decorator and a context manager that measures resource usage.',
    time: '3-4 hours'
  },
  {
    day: 4, phase: 1, topic: 'Python error handling',
    subtopics: ['Exception hierarchy', 'Custom exceptions', 'Exception propagation'],
    objective: 'Design clear failure modes with domain-specific exceptions and predictable propagation.',
    practical: 'Refactor a validation script to raise custom exceptions, add error context and log failures at the correct layer.',
    time: '3-4 hours'
  },
  {
    day: 5, phase: 1, topic: 'Async programming',
    subtopics: ['asyncio', 'async and await', 'Event loop'],
    objective: 'Explain the event loop and write concurrent async code without blocking the main thread.',
    practical: 'Build an async script that fetches multiple URLs concurrently and measure the speedup over sequential calls.',
    time: '3-4 hours'
  },
  {
    day: 6, phase: 1, topic: 'Concurrency',
    subtopics: ['Threading vs multiprocessing', 'Concurrent futures', 'Async vs synchronous execution'],
    objective: 'Select an appropriate concurrency model for CPU-bound and I/O-bound workloads.',
    practical: 'Benchmark the same workload with threads, processes, asyncio and sequential code; record results and trade-offs.',
    time: '3-4 hours'
  },
  {
    day: 7, phase: 1, topic: 'Python architecture',
    subtopics: ['OOP', 'SOLID principles', 'Composition vs inheritance'],
    objective: 'Structure Python code into cohesive modules that are easy to extend and test.',
    practical: 'Refactor a monolithic script into classes following SOLID principles, replacing deep inheritance with composition.',
    time: '3-4 hours'
  },
  {
    day: 8, phase: 1, topic: 'Type safety',
    subtopics: ['Type hints', 'Pydantic', 'Python package structure'],
    objective: 'Use static hints and runtime validation to make interfaces explicit and reliable.',
    practical: 'Add type hints to an existing module, define Pydantic models for its inputs and organise it as an installable package.',
    time: '3-4 hours'
  },
  {
    day: 9, phase: 1, topic: 'FastAPI fundamentals',
    subtopics: ['Routing', 'Dependency injection', 'Request and response validation'],
    objective: 'Build a validated HTTP API with FastAPI using dependencies for shared behavior.',
    practical: 'Create a small CRUD API with Pydantic request and response models plus a reusable dependency for database access.',
    time: '3-4 hours'
  },
  {
    day: 10, phase: 1, topic: 'FastAPI advanced',
    subtopics: ['Middleware', 'Authentication', 'Exception handlers'],
    objective: 'Add cross-cutting HTTP behavior and consistent error responses to a FastAPI service.',
    practical: 'Add request logging middleware, token authentication on protected routes and a global exception handler with a standard error shape.',
    time: '3-4 hours'
  },
  {
    day: 11, phase: 1, topic: 'Database engineering',
    subtopics: ['SQLAlchemy', 'PostgreSQL', 'Transactions and migrations'],
    objective: 'Model relational data and manage schema changes safely with transactions and migrations.',
    practical: 'Define SQLAlchemy models, connect a FastAPI app to PostgreSQL and create a migration that adds a new table without data loss.',
    time: '4 hours'
  },
  {
    day: 12, phase: 1, topic: 'Testing',
    subtopics: ['Pytest', 'Fixtures and mocking', 'Integration testing'],
    objective: 'Verify backend behavior with unit and integration tests that are fast and deterministic.',
    practical: 'Write pytest tests for the FastAPI app using fixtures, mocks for external calls and integration tests against a test database.',
    time: '4 hours'
  },
  {
    day: 13, phase: 2, topic: 'LLM fundamentals',
    subtopics: ['Tokens', 'Context windows', 'Model inference'],
    objective: 'Reason about how text is tokenized, how context limits apply and what inference actually produces.',
    practical: 'Use a tokenizer to count tokens in sample prompts, visualize truncation and compare output from two model sizes.',
    time: '3-4 hours'
  },
  {
    day: 14, phase: 2, topic: 'LLM parameters',
    subtopics: ['Temperature', 'Top-p', 'Sampling and output limits'],
    objective: 'Tune generation parameters for deterministic or creative outputs and control cost.',
    practical: 'Run the same prompt across a grid of temperature and top-p values, then document which settings suit factual versus creative tasks.',
    time: '3-4 hours'
  },
  {
    day: 15, phase: 2, topic: 'Prompt engineering',
    subtopics: ['System prompts', 'User prompts', 'Few-shot prompting'],
    objective: 'Write prompts with clear roles, instructions and examples that produce consistent results.',
    practical: 'Create a prompt that classifies support tickets, compare zero-shot and few-shot accuracy on 20 examples and refine the instructions.',
    time: '3-4 hours'
  },
  {
    day: 16, phase: 2, topic: 'Prompt design',
    subtopics: ['Prompt templates', 'Prompt chaining', 'Context management'],
    objective: 'Compose maintainable prompt templates and break complex tasks into reliable chains.',
    practical: 'Convert a long prompt into a parameterized template and split it into two chained steps with explicit intermediate output.',
    time: '3-4 hours'
  },
  {
    day: 17, phase: 2, topic: 'LLM APIs',
    subtopics: ['API integration', 'Authentication and secrets', 'Request and response handling'],
    objective: 'Call an LLM API safely from Python without exposing keys or leaking provider errors.',
    practical: 'Build a small client module that loads secrets from the environment, sends requests and normalizes responses and errors.',
    time: '3-4 hours'
  },
  {
    day: 18, phase: 2, topic: 'Streaming and reliability',
    subtopics: ['Streaming responses', 'Timeouts and retries', 'Rate limiting'],
    objective: 'Make LLM calls resilient to latency, failure and throttling.',
    practical: 'Implement streamed responses with exponential backoff retries, timeouts and a client-side rate limiter.',
    time: '3-4 hours'
  },
  {
    day: 19, phase: 2, topic: 'Structured outputs',
    subtopics: ['JSON schema', 'Pydantic validation', 'Schema-constrained responses'],
    objective: 'Force model output into a validated machine-readable contract.',
    practical: 'Define a Pydantic schema for ticket triage, request a schema-constrained response and validate every result at the boundary.',
    time: '3-4 hours'
  },
  {
    day: 20, phase: 2, topic: 'Function calling',
    subtopics: ['Tool definitions', 'Tool execution', 'Tool result handling'],
    objective: 'Describe tools to a model and safely execute the tool calls it returns.',
    practical: 'Expose a lookup-order tool with a JSON schema, execute the returned call and feed the result back into the conversation.',
    time: '3-4 hours'
  },
  {
    day: 21, phase: 2, topic: 'Advanced tool calling',
    subtopics: ['Multiple tools', 'Tool selection', 'Tool error handling'],
    objective: 'Manage multiple tools and recover gracefully when a tool is wrong or fails.',
    practical: 'Add three tools with overlapping purposes, test selection accuracy and design error results that let the model recover.',
    time: '3-4 hours'
  },
  {
    day: 22, phase: 2, topic: 'Model selection',
    subtopics: ['Model capabilities', 'Latency', 'Cost and quality trade-offs'],
    objective: 'Choose a model based on task requirements, latency budgets and unit economics.',
    practical: 'Benchmark three models on the same 20 tasks; record accuracy, latency and estimated cost in a comparison table.',
    time: '3-4 hours'
  },
  {
    day: 23, phase: 2, topic: 'LLM application architecture',
    subtopics: ['Stateless vs stateful interactions', 'Conversation management', 'Context persistence'],
    objective: 'Design an application that manages conversation state without unbounded context growth.',
    practical: 'Implement a chat service that stores message history per session, trims old context and supports stateless request handling.',
    time: '3-4 hours'
  },
  {
    day: 24, phase: 2, topic: 'LLM testing',
    subtopics: ['Golden datasets', 'Response validation', 'Hallucination detection'],
    objective: 'Evaluate nondeterministic output with repeatable datasets and automated checks.',
    practical: 'Build a golden dataset of 30 prompt and expected-output pairs and write a test harness that scores schema validity and unsupported claims.',
    time: '4 hours'
  },
  {
    day: 25, phase: 2, topic: 'Mini project',
    subtopics: ['Build AI customer support assistant', 'Integrate authorized backend functions', 'Return validated structured responses'],
    objective: 'Ship an end-to-end support assistant that can act through backend functions and return typed results.',
    practical: 'Combine tools, structured output and conversation state into a working assistant; document the API contract and evaluation results.',
    time: '4 hours'
  },
  {
    day: 26, phase: 3, topic: 'Embeddings',
    subtopics: ['Embedding models', 'Vector representation', 'Semantic similarity'],
    objective: 'Explain how text becomes vectors and why nearby vectors represent related meaning.',
    practical: 'Embed a set of sentences with two models and inspect similarity scores for related and unrelated pairs.',
    time: '3-4 hours'
  },
  {
    day: 27, phase: 3, topic: 'Vector mathematics',
    subtopics: ['Cosine similarity', 'Dot product', 'Distance metrics'],
    objective: 'Interpret similarity metrics and choose the right one for normalized and unnormalized vectors.',
    practical: 'Implement cosine similarity, dot product and Euclidean distance from scratch and verify results against a library.',
    time: '3-4 hours'
  },
  {
    day: 28, phase: 3, topic: 'Document ingestion',
    subtopics: ['PDF extraction', 'Text cleaning', 'Metadata extraction'],
    objective: 'Turn messy documents into clean text with reliable source metadata.',
    practical: 'Extract text from three PDFs, remove headers, footers and broken whitespace, and capture title and page metadata for each chunk.',
    time: '3-4 hours'
  },
  {
    day: 29, phase: 3, topic: 'Document processing',
    subtopics: ['Document loaders', 'File processing pipelines', 'Ingestion error handling'],
    objective: 'Build an ingestion pipeline that handles multiple file types and fails predictably.',
    practical: 'Create a loader pipeline for PDF, Markdown and HTML files with validation, retries and a dead-letter record for failures.',
    time: '3-4 hours'
  },
  {
    day: 30, phase: 3, topic: 'Chunking',
    subtopics: ['Fixed-size chunking', 'Recursive chunking', 'Chunk overlap'],
    objective: 'Split documents into retrievable chunks while preserving context across boundaries.',
    practical: 'Chunk one document three ways, tune chunk size and overlap, and compare retrieval quality for ten test queries.',
    time: '3-4 hours'
  },
  {
    day: 31, phase: 3, topic: 'Advanced chunking',
    subtopics: ['Semantic chunking', 'Document structure', 'Chunk metadata'],
    objective: 'Use document structure and semantics to produce chunks that stay coherent.',
    practical: 'Build a structure-aware chunker that keeps headings with sections and attaches page and section metadata to every chunk.',
    time: '3-4 hours'
  },
  {
    day: 32, phase: 3, topic: 'Vector databases',
    subtopics: ['pgvector', 'Vector indexing', 'Similarity search'],
    objective: 'Store embeddings and run efficient similarity queries in PostgreSQL.',
    practical: 'Add a pgvector column to PostgreSQL, insert embeddings for your chunks and query the top five nearest neighbors.',
    time: '4 hours'
  },
  {
    day: 33, phase: 3, topic: 'Vector database optimization',
    subtopics: ['HNSW', 'IVFFlat', 'Index trade-offs'],
    objective: 'Balance recall, latency and memory when indexing vectors at scale.',
    practical: 'Benchmark exact search, HNSW and IVFFlat on the same dataset; record recall and query latency for each configuration.',
    time: '3-4 hours'
  },
  {
    day: 34, phase: 3, topic: 'Retrieval',
    subtopics: ['Top-K retrieval', 'Similarity thresholds', 'Metadata filtering'],
    objective: 'Return only relevant chunks by combining ranking with explicit filters and thresholds.',
    practical: 'Implement a search endpoint with configurable top-K, a minimum score threshold and filters by tenant and document type.',
    time: '3-4 hours'
  },
  {
    day: 35, phase: 3, topic: 'Advanced retrieval',
    subtopics: ['Hybrid search', 'BM25', 'Semantic and keyword search'],
    objective: 'Combine lexical and semantic ranking to handle both exact terms and paraphrases.',
    practical: 'Add BM25 keyword search alongside vector search and merge results with reciprocal rank fusion; test on mixed queries.',
    time: '4 hours'
  },
  {
    day: 36, phase: 3, topic: 'Reranking',
    subtopics: ['Cross-encoders', 'Reranking models', 'Retrieval optimization'],
    objective: 'Improve precision by rescoring a small candidate set with a stronger model.',
    practical: 'Rerank the top 20 retrieved chunks with a cross-encoder and compare precision before and after reranking.',
    time: '3-4 hours'
  },
  {
    day: 37, phase: 3, topic: 'RAG architecture',
    subtopics: ['Retrieval pipelines', 'Context assembly', 'Answer generation'],
    objective: 'Assemble a complete RAG flow from query to grounded answer with traceable context.',
    practical: 'Implement a RAG endpoint that retrieves chunks, builds a bounded prompt and returns an answer with the chunk IDs used.',
    time: '4 hours'
  },
  {
    day: 38, phase: 3, topic: 'Advanced RAG',
    subtopics: ['Query transformation', 'Query expansion', 'Multi-query retrieval'],
    objective: 'Improve recall for ambiguous questions by reformulating and expanding queries.',
    practical: 'Generate three query variants for each user question, retrieve for all variants and deduplicate the combined context.',
    time: '3-4 hours'
  },
  {
    day: 39, phase: 3, topic: 'RAG evaluation',
    subtopics: ['Precision', 'Recall@K', 'Context relevance'],
    objective: 'Measure retrieval quality independently of answer quality.',
    practical: 'Label relevant chunks for 25 queries and compute precision, recall@K and context relevance for two retrieval configurations.',
    time: '4 hours'
  },
  {
    day: 40, phase: 3, topic: 'Answer evaluation',
    subtopics: ['Faithfulness', 'Groundedness', 'Answer relevance'],
    objective: 'Detect answers that are irrelevant or unsupported by the retrieved context.',
    practical: 'Score 25 answers for faithfulness and relevance, then build an automated checker that flags unsupported statements.',
    time: '3-4 hours'
  },
  {
    day: 41, phase: 3, topic: 'Enterprise RAG',
    subtopics: ['Tenant isolation', 'Access-controlled retrieval', 'Document permissions'],
    objective: 'Ensure retrieval never exposes documents a user is not allowed to see.',
    practical: 'Add tenant and ACL checks at the database query layer and write tests proving filtered retrieval blocks unauthorized access.',
    time: '4 hours'
  },
  {
    day: 42, phase: 3, topic: 'RAG project',
    subtopics: ['Build an enterprise knowledge assistant', 'Provide source citations', 'Evaluate retrieval quality'],
    objective: 'Deliver a working knowledge assistant with citations and measured retrieval quality.',
    practical: 'Complete the assistant with ingestion, hybrid retrieval, citations, access control and a documented evaluation report.',
    time: '4 hours'
  },
  {
    day: 43, phase: 4, topic: 'Agent fundamentals',
    subtopics: ['Agent architecture', 'Agent loop', 'Reasoning and execution'],
    objective: 'Describe how an agent observes, reasons and acts in a loop.',
    practical: 'Sketch an agent architecture diagram and implement a minimal loop that accepts a goal, chooses an action and observes a result.',
    time: '3-4 hours'
  },
  {
    day: 44, phase: 4, topic: 'Agent execution',
    subtopics: ['State management', 'Planning', 'Task execution'],
    objective: 'Keep agent state explicit and update it deterministically after each step.',
    practical: 'Implement a typed state object and a simple planner that breaks a goal into steps and tracks each step result.',
    time: '3-4 hours'
  },
  {
    day: 45, phase: 4, topic: 'Tool calling',
    subtopics: ['Tool schemas', 'Tool invocation', 'Result handling'],
    objective: 'Connect model tool calls to real functions with validated arguments.',
    practical: 'Define three tool schemas with Pydantic, dispatch calls to implementations and normalize success and failure results.',
    time: '3-4 hours'
  },
  {
    day: 46, phase: 4, topic: 'Tool integration',
    subtopics: ['REST API tools', 'Database tools', 'Error handling'],
    objective: 'Expose external systems to an agent through safe, idempotent tools.',
    practical: 'Build one read-only REST tool and one database query tool, including timeouts, error mapping and input validation.',
    time: '3-4 hours'
  },
  {
    day: 47, phase: 4, topic: 'LangGraph fundamentals',
    subtopics: ['Nodes', 'Edges', 'State graphs'],
    objective: 'Model an agent as a state graph with explicit nodes and transitions.',
    practical: 'Build a two-node LangGraph that calls a model and a tool, then inspect the state after each transition.',
    time: '3-4 hours'
  },
  {
    day: 48, phase: 4, topic: 'LangGraph workflows',
    subtopics: ['Conditional routing', 'State transitions', 'Graph execution'],
    objective: 'Route execution dynamically based on the current state.',
    practical: 'Add conditional edges that loop back for another tool call or end when the answer is ready; trace several execution paths.',
    time: '4 hours'
  },
  {
    day: 49, phase: 4, topic: 'Agent memory',
    subtopics: ['Short-term memory', 'Conversation state', 'Checkpointing'],
    objective: 'Preserve relevant context across turns without bloating prompts.',
    practical: 'Add conversation memory and periodic checkpoints to your graph, then resume a paused conversation from a checkpoint.',
    time: '3-4 hours'
  },
  {
    day: 50, phase: 4, topic: 'Persistent workflows',
    subtopics: ['State persistence', 'Resumable execution', 'Thread management'],
    objective: 'Run long-lived workflows that survive process restarts.',
    practical: 'Persist graph state to PostgreSQL, create separate threads for two sessions and resume both after a simulated restart.',
    time: '4 hours'
  },
  {
    day: 51, phase: 4, topic: 'Multi-agent architecture',
    subtopics: ['Agent collaboration', 'Delegation', 'Specialized agents'],
    objective: 'Divide work across focused agents with clear responsibilities.',
    practical: 'Design three specialized agents with explicit inputs and outputs, then implement delegation from a coordinator agent.',
    time: '3-4 hours'
  },
  {
    day: 52, phase: 4, topic: 'Multi-agent orchestration',
    subtopics: ['Supervisor patterns', 'Agent communication', 'Coordination failures'],
    objective: 'Coordinate multiple agents and detect loops, deadlocks and conflicting results.',
    practical: 'Implement a supervisor graph, inject a coordination failure and verify that the system detects and reports it.',
    time: '4 hours'
  },
  {
    day: 53, phase: 4, topic: 'MCP fundamentals',
    subtopics: ['MCP architecture', 'Clients and servers', 'Resources and tools'],
    objective: 'Explain how MCP clients and servers expose tools and resources to models.',
    practical: 'Set up a local MCP server that exposes one resource and one tool, then connect a client and list its capabilities.',
    time: '3-4 hours'
  },
  {
    day: 54, phase: 4, topic: 'MCP implementation',
    subtopics: ['MCP tool integration', 'Transport mechanisms', 'Authentication considerations'],
    objective: 'Integrate MCP tools into an agent and understand transport and auth constraints.',
    practical: 'Wrap an existing internal API as an MCP tool, connect over a local transport and document how authentication would work in production.',
    time: '4 hours'
  },
  {
    day: 55, phase: 4, topic: 'Human-in-the-loop',
    subtopics: ['Approval workflows', 'Human intervention', 'Resumable execution'],
    objective: 'Pause an agent before risky actions and resume after a human decision.',
    practical: 'Add an approval node to your graph that interrupts execution and resumes with an approve or reject decision.',
    time: '3-4 hours'
  },
  {
    day: 56, phase: 4, topic: 'Controlled execution',
    subtopics: ['Authorization', 'Approval gates', 'Audit logging'],
    objective: 'Constrain what an agent may do and produce a trustworthy audit trail.',
    practical: 'Add permission checks to every tool, require approval for writes and log actor, action, decision and timestamp.',
    time: '4 hours'
  },
  {
    day: 57, phase: 4, topic: 'Agent reliability',
    subtopics: ['Infinite loops', 'Timeouts', 'Retry and fallback strategies'],
    objective: 'Keep agent execution bounded and observable under failure.',
    practical: 'Add step limits, per-tool timeouts and a fallback path; run fault-injection tests and inspect the resulting traces.',
    time: '3-4 hours'
  },
  {
    day: 58, phase: 4, topic: 'Agent project',
    subtopics: ['Build an AI operations agent', 'Investigate application errors', 'Retrieve documentation', 'Suggest remediation with human approval'],
    objective: 'Deliver an operations agent that investigates incidents and proposes reviewed fixes.',
    practical: 'Combine tools, graph routing, documentation retrieval and approval gates into a working agent with an incident walkthrough.',
    time: '4 hours'
  },
  {
    day: 59, phase: 5, topic: 'AI security',
    subtopics: ['Prompt injection', 'Jailbreaks', 'Untrusted inputs'],
    objective: 'Recognize manipulation of model instructions and design defenses around untrusted content.',
    practical: 'Write five injection test cases against your assistant, then apply input isolation and output checks and retest.',
    time: '3-4 hours'
  },
  {
    day: 60, phase: 5, topic: 'Data security',
    subtopics: ['Sensitive information', 'Data leakage', 'Secrets management'],
    objective: 'Prevent sensitive data from entering prompts, logs or model outputs.',
    practical: 'Add secret scanning and PII redaction to prompts and logs, load all credentials from a secrets manager or environment and verify with tests.',
    time: '3-4 hours'
  },
  {
    day: 61, phase: 5, topic: 'API security',
    subtopics: ['Authentication', 'Authorization', 'RBAC'],
    objective: 'Enforce identity and role-based permissions on every AI endpoint.',
    practical: 'Add JWT authentication and role checks to your API, then test that denied roles cannot call agent or retrieval endpoints.',
    time: '4 hours'
  },
  {
    day: 62, phase: 5, topic: 'Multi-tenant security',
    subtopics: ['Tenant isolation', 'Data access policies', 'Secure retrieval'],
    objective: 'Guarantee that tenant context is applied at every data access layer.',
    practical: 'Implement tenant-scoped database queries and vector filters, then add tests that attempt cross-tenant retrieval and tool calls.',
    time: '4 hours'
  },
  {
    day: 63, phase: 5, topic: 'Evaluation architecture',
    subtopics: ['Evaluation datasets', 'Test cases', 'LLM-as-a-judge'],
    objective: 'Design an evaluation suite that is repeatable, versioned and auditable.',
    practical: 'Create a versioned evaluation dataset with rubrics and add an automated judge with human spot-checks on a sample of results.',
    time: '3-4 hours'
  },
  {
    day: 64, phase: 5, topic: 'Evaluation pipelines',
    subtopics: ['Regression tests', 'Quality thresholds', 'Automated evaluation'],
    objective: 'Catch quality regressions before release with measurable gates.',
    practical: 'Wire evaluations into a script that fails when accuracy or groundedness drops below defined thresholds.',
    time: '4 hours'
  },
  {
    day: 65, phase: 5, topic: 'Observability',
    subtopics: ['Structured logs', 'Distributed tracing', 'Request correlation'],
    objective: 'Follow a single request across services using consistent metadata.',
    practical: 'Add structured JSON logs and correlation IDs to your API and agent, then trace one request end to end in a dashboard or log viewer.',
    time: '3-4 hours'
  },
  {
    day: 66, phase: 5, topic: 'AI observability',
    subtopics: ['Token consumption', 'Latency', 'Model performance'],
    objective: 'Measure AI-specific signals such as tokens, latency breakdowns and quality trends.',
    practical: 'Emit metrics for tokens per request, model latency and evaluation score; build a simple dashboard with alerts on anomalies.',
    time: '4 hours'
  },
  {
    day: 67, phase: 5, topic: 'Reliability engineering',
    subtopics: ['Retries', 'Circuit breakers', 'Fallbacks'],
    objective: 'Keep a service useful when model or tool providers degrade.',
    practical: 'Implement retries with jitter, a circuit breaker and a fallback response path; verify behavior with simulated provider failures.',
    time: '3-4 hours'
  },
  {
    day: 68, phase: 5, topic: 'Failure handling',
    subtopics: ['Rate limits', 'Timeout handling', 'Graceful degradation'],
    objective: 'Manage throttling and timeouts without confusing end users.',
    practical: 'Add rate-limit aware backoff, request deadlines and user-facing degraded responses; document each failure mode.',
    time: '3-4 hours'
  },
  {
    day: 69, phase: 5, topic: 'AI cost optimization',
    subtopics: ['Token budgets', 'Model selection', 'Cost estimation'],
    objective: 'Predict and control the cost of AI features.',
    practical: 'Measure token usage per workflow, set prompt and context budgets and build a cost estimator for expected monthly traffic.',
    time: '3-4 hours'
  },
  {
    day: 70, phase: 5, topic: 'Optimization',
    subtopics: ['Caching', 'Batching', 'Model routing'],
    objective: 'Reduce latency and spend with caching, batching and tiered model routing.',
    practical: 'Add a semantic cache for repeated queries, batch embedding requests and route simple tasks to a cheaper model; measure savings.',
    time: '4 hours'
  },
  {
    day: 71, phase: 5, topic: 'Docker',
    subtopics: ['Container fundamentals', 'Dockerfiles', 'Docker Compose'],
    objective: 'Package the application and its dependencies into reproducible containers.',
    practical: 'Write a production-style Dockerfile for the API, add Compose services for PostgreSQL and the app, and run the test suite in a container.',
    time: '4 hours'
  },
  {
    day: 72, phase: 5, topic: 'AWS deployment',
    subtopics: ['Compute and storage', 'IAM', 'Environment configuration'],
    objective: 'Deploy the containerized service with least-privilege access and safe configuration.',
    practical: 'Deploy to a managed container service, configure secrets and environment variables, and verify IAM policies follow least privilege.',
    time: '4 hours'
  },
  {
    day: 73, phase: 5, topic: 'Asynchronous architecture',
    subtopics: ['Message queues', 'Background workers', 'Event-driven processing'],
    objective: 'Move slow AI work off the request path using queues and workers.',
    practical: 'Add a job queue for document ingestion and evaluations, with a worker that reports status and handles failed jobs.',
    time: '4 hours'
  },
  {
    day: 74, phase: 5, topic: 'Scalability',
    subtopics: ['Concurrency', 'Load testing', 'Backpressure'],
    objective: 'Understand capacity limits and protect the system under load.',
    practical: 'Run a load test against your API, identify the bottleneck, add concurrency limits and backpressure, then retest.',
    time: '4 hours'
  },
  {
    day: 75, phase: 5, topic: 'Production readiness',
    subtopics: ['Disaster recovery', 'Incident response', 'Architecture review'],
    objective: 'Prepare the service for real incidents with documented recovery procedures.',
    practical: 'Write a runbook covering backups, restore steps and incident roles; complete an architecture review with risks and mitigations.',
    time: '4 hours'
  },
  {
    day: 76, phase: 6, topic: 'Client discovery',
    subtopics: ['Stakeholder interviews', 'Requirement gathering', 'Identifying business pain points'],
    objective: 'Extract real problems and constraints from client conversations.',
    practical: 'Run a mock discovery interview, produce a structured notes template and summarize the top three pain points with evidence.',
    time: '3-4 hours'
  },
  {
    day: 77, phase: 6, topic: 'Problem framing',
    subtopics: ['Functional requirements', 'Non-functional requirements', 'Success metrics'],
    objective: 'Turn discovery notes into a precise, measurable problem statement.',
    practical: 'Write a one-page brief with functional and non-functional requirements plus measurable success metrics and explicit assumptions.',
    time: '3-4 hours'
  },
  {
    day: 78, phase: 6, topic: 'Solution architecture',
    subtopics: ['Architecture diagrams', 'Component selection', 'Data flow design'],
    objective: 'Communicate a proposed system clearly through diagrams and data flows.',
    practical: 'Create component and sequence diagrams for the capstone, documenting each boundary, data store and external integration.',
    time: '4 hours'
  },
  {
    day: 79, phase: 6, topic: 'Technical trade-offs',
    subtopics: ['Build vs buy', 'Model selection', 'Cost and scalability trade-offs'],
    objective: 'Defend engineering decisions with explicit alternatives and criteria.',
    practical: 'Write a decision record comparing build versus buy options, model choices and scaling strategies with cost estimates.',
    time: '3-4 hours'
  },
  {
    day: 80, phase: 6, topic: 'Enterprise integrations',
    subtopics: ['Legacy system integration', 'REST APIs', 'Webhooks'],
    objective: 'Connect modern AI services to constrained enterprise systems.',
    practical: 'Build an adapter around a simulated legacy API and add an inbound webhook handler with signature verification and retries.',
    time: '4 hours'
  },
  {
    day: 81, phase: 6, topic: 'Enterprise authentication',
    subtopics: ['OAuth2', 'Service-to-service authentication', 'Identity and access management'],
    objective: 'Integrate with enterprise identity providers and secure service calls.',
    practical: 'Configure OAuth2 authorization code flow for a client app and add a service credential flow between two services.',
    time: '4 hours'
  },
  {
    day: 82, phase: 6, topic: 'Rapid prototyping',
    subtopics: ['MVP design', 'Iterative development', 'Fast feedback loops'],
    objective: 'Deliver a thin working slice quickly and learn from real usage.',
    practical: 'Define the smallest useful capstone MVP, implement it in one focused session and collect structured feedback from a reviewer.',
    time: '4 hours'
  },
  {
    day: 83, phase: 6, topic: 'Customer feedback',
    subtopics: ['Product demonstrations', 'Requirement changes', 'Iterative refinement'],
    objective: 'Run a demo that surfaces useful feedback and manages changing requirements.',
    practical: 'Present the MVP, capture feedback in a decision log and implement the highest-impact refinement with a short rationale.',
    time: '3-4 hours'
  },
  {
    day: 84, phase: 6, topic: 'Deployment and adoption',
    subtopics: ['Deployment strategies', 'Customer onboarding', 'User training'],
    objective: 'Release changes safely and help users adopt the product.',
    practical: 'Plan a staged rollout, write onboarding steps and create a short user guide with screenshots or recorded walkthrough notes.',
    time: '3-4 hours'
  },
  {
    day: 85, phase: 6, topic: 'Technical documentation',
    subtopics: ['Architecture documentation', 'API documentation', 'Operational runbooks'],
    objective: 'Document the system so another engineer can operate and extend it.',
    practical: 'Write architecture notes, generate API documentation and complete runbooks for deployment, rollback and common incidents.',
    time: '3-4 hours'
  },
  {
    day: 86, phase: 6, topic: 'Communication',
    subtopics: ['Architecture presentations', 'Explaining technical trade-offs', 'Stakeholder communication'],
    objective: 'Explain complex technical choices to mixed technical and business audiences.',
    practical: 'Prepare a ten-slide architecture talk with one diagram per key decision and practice two versions: technical and executive.',
    time: '3-4 hours'
  },
  {
    day: 87, phase: 6, topic: 'Client-facing engineering',
    subtopics: ['Handling objections', 'Managing expectations', 'Incident communication'],
    objective: 'Stay credible and clear when clients push back or incidents occur.',
    practical: 'Role-play three objection scenarios and draft an incident update template covering impact, current action and next update time.',
    time: '3-4 hours'
  },
  {
    day: 88, phase: 6, topic: 'Capstone validation',
    subtopics: ['End-to-end tests', 'Security testing', 'Performance testing'],
    objective: 'Verify the capstone against functional, security and performance criteria.',
    practical: 'Run full end-to-end tests, injection and authorization checks, and a load test; record results and fix critical findings.',
    time: '4 hours'
  },
  {
    day: 89, phase: 6, topic: 'Capstone presentation',
    subtopics: ['Live demonstration', 'Architecture walkthrough', 'Business impact explanation'],
    objective: 'Present a confident demo that connects technical decisions to business value.',
    practical: 'Deliver a recorded live demo with architecture walkthrough, metrics, trade-offs and a clear statement of business impact.',
    time: '4 hours'
  },
  {
    day: 90, phase: 6, topic: 'Interview preparation',
    subtopics: ['FDE scenario questions', 'AI system design', 'Technical project discussion'],
    objective: 'Tell a coherent story about your projects and solve FDE scenarios under time pressure.',
    practical: 'Practice five scenario questions and one AI system design prompt, then prepare a two-minute and a ten-minute version of your capstone story.',
    time: '4 hours'
  }
];

const PROJECTS = [
  {
    id: 'p1',
    name: 'AI Support Assistant',
    overview: 'An assistant that classifies and answers support requests, performs authorized backend actions and returns validated structured results.',
    goals: ['Reduce repetitive triage work', 'Act safely through backend functions', 'Return predictable, typed responses'],
    stack: ['Python', 'FastAPI', 'Pydantic', 'LLM API', 'Tool calling', 'Pytest'],
    milestones: [
      { id: 'p1-m1', title: 'API skeleton and validation', detail: 'FastAPI endpoints with Pydantic request and response models.' },
      { id: 'p1-m2', title: 'LLM integration', detail: 'Prompt templates, secrets handling, timeouts and retries.' },
      { id: 'p1-m3', title: 'Structured output', detail: 'Schema-constrained responses validated at the boundary.' },
      { id: 'p1-m4', title: 'Function calling', detail: 'Authorized backend tools with argument validation and error handling.' },
      { id: 'p1-m5', title: 'Tests and evaluation', detail: 'Golden dataset, automated checks and documented results.' }
    ]
  },
  {
    id: 'p2',
    name: 'Enterprise Knowledge Assistant',
    overview: 'A RAG application that answers questions from private documents with source citations, tenant isolation and measured retrieval quality.',
    goals: ['Ground answers in private documents', 'Cite traceable sources', 'Enforce per-tenant access control'],
    stack: ['PostgreSQL', 'pgvector', 'Embeddings', 'Hybrid search', 'Reranking', 'RAG evaluation'],
    milestones: [
      { id: 'p2-m1', title: 'Ingestion pipeline', detail: 'PDF, Markdown and HTML loaders with cleaning and metadata.' },
      { id: 'p2-m2', title: 'Embeddings and vector store', detail: 'Chunking strategies, embeddings and pgvector similarity search.' },
      { id: 'p2-m3', title: 'Hybrid retrieval and reranking', detail: 'Keyword plus semantic search with a cross-encoder reranker.' },
      { id: 'p2-m4', title: 'Citations and access control', detail: 'Source references, tenant filters and ACL enforcement.' },
      { id: 'p2-m5', title: 'Evaluation report', detail: 'Recall@K, faithfulness and groundedness results documented.' }
    ]
  },
  {
    id: 'p3',
    name: 'Enterprise AI Operations Agent',
    overview: 'A production-style agent that investigates application errors, retrieves documentation and proposes remediation with human approval.',
    goals: ['Automate incident investigation', 'Keep risky actions behind approval', 'Operate with observability and guardrails'],
    stack: ['LangGraph', 'MCP', 'PostgreSQL', 'Observability', 'Docker', 'AWS'],
    milestones: [
      { id: 'p3-m1', title: 'Graph architecture', detail: 'Nodes, edges, typed state and conditional routing.' },
      { id: 'p3-m2', title: 'Tools and MCP', detail: 'Multiple internal tools exposed through MCP with validation.' },
      { id: 'p3-m3', title: 'Memory and persistence', detail: 'Checkpointing, resumable execution and thread management.' },
      { id: 'p3-m4', title: 'Approval and guardrails', detail: 'Human-in-the-loop gates, authorization and audit logging.' },
      { id: 'p3-m5', title: 'Production deployment', detail: 'Security review, evaluation gates, Docker and cloud deployment.' }
    ]
  }
];

const RESOURCES = [
  { category: 'Python', title: 'Python 3 documentation', url: 'https://docs.python.org/3/', description: 'Language reference, tutorial and standard library.' },
  { category: 'Python', title: 'Pytest documentation', url: 'https://docs.pytest.org/', description: 'Fixtures, mocking patterns and test organization.' },
  { category: 'Backend', title: 'FastAPI documentation', url: 'https://fastapi.tiangolo.com/', description: 'Routing, dependencies, security and deployment.' },
  { category: 'Backend', title: 'Pydantic documentation', url: 'https://docs.pydantic.dev/', description: 'Data validation, models and JSON schemas.' },
  { category: 'Backend', title: 'SQLAlchemy documentation', url: 'https://docs.sqlalchemy.org/', description: 'ORM, sessions and transaction management.' },
  { category: 'Backend', title: 'PostgreSQL documentation', url: 'https://www.postgresql.org/docs/', description: 'SQL reference, transactions and database administration.' },
  { category: 'LLM', title: 'OpenAI API documentation', url: 'https://platform.openai.com/docs', description: 'API reference, models and generation parameters.' },
  { category: 'LLM', title: 'Prompt engineering guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', description: 'Strategies for clearer and more reliable prompts.' },
  { category: 'LLM', title: 'Structured outputs guide', url: 'https://platform.openai.com/docs/guides/structured-outputs', description: 'Schema-constrained model responses.' },
  { category: 'LLM', title: 'Function calling guide', url: 'https://platform.openai.com/docs/guides/function-calling', description: 'Tool definitions and tool call handling.' },
  { category: 'RAG', title: 'pgvector', url: 'https://github.com/pgvector/pgvector', description: 'Vector storage and similarity search in PostgreSQL.' },
  { category: 'RAG', title: 'LangChain documentation', url: 'https://python.langchain.com/docs/', description: 'Document loaders, retrievers and evaluation utilities.' },
  { category: 'Agents', title: 'LangGraph documentation', url: 'https://langchain-ai.github.io/langgraph/', description: 'State graphs, persistence and human-in-the-loop workflows.' },
  { category: 'Agents', title: 'Model Context Protocol', url: 'https://modelcontextprotocol.io/', description: 'Specification and guides for MCP clients and servers.' },
  { category: 'Production', title: 'Docker documentation', url: 'https://docs.docker.com/', description: 'Images, Dockerfiles and Compose.' },
  { category: 'Production', title: 'AWS documentation', url: 'https://docs.aws.amazon.com/', description: 'Cloud compute, storage and IAM reference.' },
  { category: 'Production', title: 'OpenTelemetry documentation', url: 'https://opentelemetry.io/docs/', description: 'Logs, metrics and distributed tracing.' },
  { category: 'Security', title: 'OAuth 2.0 specification', url: 'https://datatracker.ietf.org/doc/html/rfc6749', description: 'Authorization framework used by enterprise identity providers.' }
];

/* ---------- Constants and helpers ---------- */

const PROFILES = [
  { id: 'naga', name: 'Naga', key: 'fde_tracker_naga' },
  { id: 'karthick', name: 'Karthick', key: 'fde_tracker_karthick' }
];
const LEGACY_KEY = 'fdeTracker.v1';
const ACTIVE_PROFILE_KEY = 'fde_tracker_active_profile';
const THEME_KEY = 'fde_tracker_theme';
const TOTAL_DAYS = 90;
const NOTES_FIELDS = ['daily', 'concepts', 'challenges', 'questions'];
const NOTE_INPUTS = {
  daily: 'noteDaily', concepts: 'noteConcepts',
  challenges: 'noteChallenges', questions: 'noteQuestions'
};

const DAY_BY_NUMBER = new Map(CURRICULUM.map(day => [day.day, day]));
const PHASE_BY_ID = new Map(PHASES.map(phase => [phase.id, phase]));
const PROFILE_BY_ID = new Map(PROFILES.map(profile => [profile.id, profile]));

const $ = id => document.getElementById(id);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

function parseDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;
  return date;
}

function clampDay(number) {
  const value = Number(number);
  return Number.isFinite(value) ? Math.min(TOTAL_DAYS, Math.max(1, Math.round(value))) : 1;
}

function phaseFor(dayNumber) {
  return PHASES.find(phase => dayNumber >= phase.from && dayNumber <= phase.to) || PHASES[0];
}

function profileById(profileId) {
  return PROFILE_BY_ID.get(profileId) || PROFILES[0];
}

function storageKeyFor(profileId) {
  return profileById(profileId).key;
}

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Saved progress could not be read.', error);
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn('Progress could not be saved.', error);
    showToast('Could not save progress in this browser.');
    return false;
  }
}

/* ---------- State and persistence ---------- */

function defaultState() {
  return {
    version: 1,
    startDate: todayString(),
    selectedDay: 1,
    notesDay: 1,
    completed: {},
    dayStatus: {},
    notes: {},
    projects: { completed: {}, notes: {} },
    expandedPhases: [1]
  };
}

function normalizeState(raw) {
  const state = defaultState();
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return state;

  const startDate = parseDate(raw.startDate);
  if (startDate) state.startDate = raw.startDate;
  if (raw.selectedDay !== undefined && Number.isFinite(Number(raw.selectedDay))) state.selectedDay = clampDay(raw.selectedDay);
  if (raw.notesDay !== undefined && Number.isFinite(Number(raw.notesDay))) state.notesDay = clampDay(raw.notesDay);
  state.expandedPhases = Array.isArray(raw.expandedPhases)
    ? raw.expandedPhases.map(Number).filter(id => PHASE_BY_ID.has(id))
    : [1];

  const rawCompleted = raw.completed && typeof raw.completed === 'object' ? raw.completed : {};
  Object.keys(rawCompleted).forEach(key => {
    const day = Number(key);
    const record = DAY_BY_NUMBER.get(day);
    if (!record || !Array.isArray(rawCompleted[key])) return;
    const valid = [...new Set(rawCompleted[key]
      .map(index => Number(index))
      .filter(index => Number.isInteger(index) && index >= 0 && index < record.subtopics.length))];
    if (valid.length) state.completed[day] = valid.sort((a, b) => a - b);
  });

  const rawStatus = raw.dayStatus && typeof raw.dayStatus === 'object' ? raw.dayStatus : {};
  Object.keys(rawStatus).forEach(key => {
    const day = Number(key);
    if (DAY_BY_NUMBER.has(day) && ['skipped', 'postponed'].includes(rawStatus[key])) {
      state.dayStatus[day] = rawStatus[key];
    }
  });

  const rawNotes = raw.notes && typeof raw.notes === 'object' ? raw.notes : {};
  Object.keys(rawNotes).forEach(key => {
    const day = Number(key);
    if (!DAY_BY_NUMBER.has(day) || !rawNotes[key] || typeof rawNotes[key] !== 'object') return;
    const note = {};
    NOTES_FIELDS.forEach(field => {
      note[field] = typeof rawNotes[key][field] === 'string' ? rawNotes[key][field] : '';
    });
    state.notes[day] = note;
  });

  const rawProjects = raw.projects && typeof raw.projects === 'object' ? raw.projects : {};
  const rawProjectCompleted = rawProjects.completed && typeof rawProjects.completed === 'object' ? rawProjects.completed : {};
  const rawProjectNotes = rawProjects.notes && typeof rawProjects.notes === 'object' ? rawProjects.notes : {};
  PROJECTS.forEach(project => {
    project.milestones.forEach(milestone => {
      if (rawProjectCompleted[milestone.id] === true) state.projects.completed[milestone.id] = true;
    });
    if (typeof rawProjectNotes[project.id] === 'string') state.projects.notes[project.id] = rawProjectNotes[project.id];
  });

  return state;
}

function loadProfile(profileId) {
  const stored = safeGet(storageKeyFor(profileId));
  if (!stored) return defaultState();
  try {
    return normalizeState(JSON.parse(stored));
  } catch (error) {
    console.warn('Saved progress could not be read. Starting with a fresh tracker.', error);
    return defaultState();
  }
}

function migrateLegacyNaga() {
  const nagaKey = storageKeyFor(PROFILES[0].id);
  if (safeGet(nagaKey) !== null) return;
  const legacy = safeGet(LEGACY_KEY);
  if (!legacy) return;
  try {
    safeSet(nagaKey, JSON.stringify(normalizeState(JSON.parse(legacy))));
  } catch (error) {
    console.warn('Legacy progress could not be migrated. Starting Naga with a fresh tracker.', error);
  }
}

function loadActiveProfileId() {
  const stored = safeGet(ACTIVE_PROFILE_KEY);
  return PROFILE_BY_ID.has(stored) ? stored : PROFILES[0].id;
}

migrateLegacyNaga();

let activeProfileId = loadActiveProfileId();
let theme = safeGet(THEME_KEY) === 'light' ? 'light' : 'dark';
let state = loadProfile(activeProfileId);

function saveState() {
  return safeSet(storageKeyFor(activeProfileId), JSON.stringify(state));
}

function saveTheme() {
  safeSet(THEME_KEY, theme);
}

/* ---------- Progress calculations ---------- */

function checkedIndices(dayNumber, profileState = state) {
  return profileState.completed[dayNumber] || [];
}

function dayProgress(dayNumber, profileState = state) {
  const record = DAY_BY_NUMBER.get(dayNumber);
  if (!record) return { done: 0, total: 0, percent: 0 };
  const done = checkedIndices(dayNumber, profileState).length;
  return { done, total: record.subtopics.length, percent: Math.round((done / record.subtopics.length) * 100) };
}

function isDayComplete(dayNumber, profileState = state) {
  const progress = dayProgress(dayNumber, profileState);
  return progress.total > 0 && progress.done === progress.total;
}

function phaseProgress(phaseId, profileState = state) {
  const phase = PHASE_BY_ID.get(phaseId);
  if (!phase) return { done: 0, total: 0, percent: 0, completeDays: 0 };
  let done = 0;
  let total = 0;
  let completeDays = 0;
  for (let day = phase.from; day <= phase.to; day += 1) {
    const progress = dayProgress(day, profileState);
    done += progress.done;
    total += progress.total;
    if (isDayComplete(day, profileState)) completeDays += 1;
  }
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0, completeDays };
}

function overallProgress(profileState = state) {
  let done = 0;
  let total = 0;
  let completeDays = 0;
  CURRICULUM.forEach(day => {
    const progress = dayProgress(day.day, profileState);
    done += progress.done;
    total += progress.total;
    if (isDayComplete(day.day, profileState)) completeDays += 1;
  });
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0, completeDays };
}

function projectProgress(profileState = state) {
  let done = 0;
  let total = 0;
  PROJECTS.forEach(project => {
    project.milestones.forEach(milestone => {
      total += 1;
      if (profileState.projects.completed[milestone.id]) done += 1;
    });
  });
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

function currentLearningDay(profileState = state) {
  const start = parseDate(profileState.startDate) || new Date();
  const today = parseDate(todayString()) || new Date();
  const elapsed = Math.floor((today - start) / 86400000);
  return clampDay(elapsed + 1);
}

/* ---------- Shared UI helpers ---------- */

let toastTimer = null;

function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3200);
}

function progressBar(percent, extraClass) {
  return `<div class="progress-track ${extraClass || ''}"><div class="progress-fill" style="width:${percent}%"></div></div>`;
}

function switchSection(name) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.toggle('active', view.id === `view-${name}`);
  });
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === name);
  });
  $('sidebar').classList.remove('open');
  $('menuToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function openDay(dayNumber, section) {
  state.selectedDay = clampDay(dayNumber);
  state.notesDay = state.selectedDay;
  saveState();
  $('daySelect').value = String(state.selectedDay);
  $('notesDay').value = String(state.selectedDay);
  renderDayDetail();
  renderNotes();
  switchSection(section || 'daily');
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  if (!query) return safe;
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<mark>$1</mark>');
}

/* ---------- Rendering: dashboard ---------- */

function renderDashboard() {
  const activeProfile = profileById(activeProfileId);
  const overall = overallProgress();
  const projects = projectProgress();
  const learningDay = currentLearningDay();
  const phase = phaseFor(learningDay);
  const currentDay = DAY_BY_NUMBER.get(learningDay);
  const dayProgressValue = dayProgress(learningDay);

  $('activeLearnerLabel').textContent = activeProfile.name;
  $('heroLearner').textContent = activeProfile.name;
  $('overallPercent').textContent = overall.percent;
  $('overallSubtasks').textContent = overall.done;
  $('totalSubtasks').textContent = overall.total;
  $('overallProgressFill').style.width = `${overall.percent}%`;
  $('sideProgress').textContent = `${overall.percent}%`;
  $('sideProgressFill').style.width = `${overall.percent}%`;
  $('sideCompletedDays').textContent = overall.completeDays;

  $('statDays').textContent = overall.completeDays;
  $('statSubtasks').textContent = overall.done;
  $('statSubtotal').textContent = overall.total;
  $('statPhase').textContent = phase.name;
  $('statDay').textContent = learningDay;
  $('statRemaining').textContent = Math.max(0, TOTAL_DAYS - overall.completeDays);
  $('statProjects').textContent = projects.done;
  $('statProjectTotal').textContent = projects.total;
  $('currentDayLabel').textContent = `Day ${learningDay}`;
  $('currentPhaseLabel').textContent = `Phase ${phase.id}: ${phase.short}`;
  $('startDate').value = state.startDate;

  $('currentFocus').innerHTML = `
    <div class="eyebrow">Day ${learningDay} &middot; ${escapeHtml(phase.short)}</div>
    <h3 style="margin:6px 0">${escapeHtml(currentDay.topic)}</h3>
    <p class="subtle small">${escapeHtml(currentDay.objective)}</p>
    <div style="margin-top:14px">${progressBar(dayProgressValue.percent)}</div>
    <p class="subtle small">${dayProgressValue.done} of ${dayProgressValue.total} subtasks done</p>
    <button class="text-btn" type="button" data-open-day="${learningDay}" style="margin-top:8px;padding-left:0">Continue learning &rarr;</button>
  `;

  renderWeeklySummary(learningDay);
  renderDashboardMilestones();
  renderComparison();
}

function renderProfileChrome() {
  document.querySelectorAll('[data-profile]').forEach(button => {
    const isActive = button.dataset.profile === activeProfileId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderComparison() {
  $('profileComparison').innerHTML = `
    <div class="comparison-grid">
      ${PROFILES.map(profile => {
        const snapshot = loadProfile(profile.id);
        const overall = overallProgress(snapshot);
        const projects = projectProgress(snapshot);
        return `
          <div class="comparison-profile">
            <h3>${escapeHtml(profile.name)}${profile.id === activeProfileId ? '<span>Active</span>' : ''}</h3>
            <div class="info-row"><span>Completion</span><strong>${overall.percent}%</strong></div>
            ${progressBar(overall.percent)}
            <div class="info-row"><span>Completed days</span><strong>${overall.completeDays} / ${TOTAL_DAYS}</strong></div>
            <div class="info-row"><span>Project milestones</span><strong>${projects.done} / ${projects.total}</strong></div>
          </div>
        `;
      }).join('')}
    </div>
    <p class="comparison-note">Read-only overview. Switch profiles to make changes.</p>
  `;
}

function renderWeeklySummary(learningDay) {
  const week = Math.ceil(learningDay / 7);
  const from = (week - 1) * 7 + 1;
  const to = Math.min(TOTAL_DAYS, week * 7);
  let done = 0;
  let total = 0;
  let completeDays = 0;
  for (let day = from; day <= to; day += 1) {
    const progress = dayProgress(day);
    done += progress.done;
    total += progress.total;
    if (isDayComplete(day)) completeDays += 1;
  }
  const percent = total ? Math.round((done / total) * 100) : 0;
  $('weekLabel').textContent = `Week ${week}`;
  $('weeklySummary').innerHTML = `
    <div class="info-row"><span>Days ${from}-${to}</span><strong>${completeDays} / ${to - from + 1} complete</strong></div>
    <div class="info-row"><span>Subtasks</span><strong>${done} / ${total}</strong></div>
    <div style="margin-top:14px">${progressBar(percent)}</div>
    <p class="subtle small" style="margin-top:8px">${percent}% of this week finished</p>
  `;
}

function renderDashboardMilestones() {
  const upcoming = PHASES
    .map(phase => ({ phase, progress: phaseProgress(phase.id) }))
    .filter(item => item.progress.completeDays < (item.phase.to - item.phase.from + 1))
    .slice(0, 3);

  $('dashboardMilestones').innerHTML = upcoming.length
    ? upcoming.map(({ phase, progress }) => `
        <div class="milestone-item">
          <div class="info-row" style="border:0;padding:0 0 6px">
            <span>Phase ${phase.id}: ${escapeHtml(phase.short)}</span><strong>${progress.percent}%</strong>
          </div>
          ${progressBar(progress.percent)}
          <p class="subtle small" style="margin-top:7px">${escapeHtml(phase.milestone)}</p>
        </div>
      `).join('')
    : '<p class="subtle small">All phase milestones are complete. Outstanding work.</p>';
}

/* ---------- Rendering: daily tasks ---------- */

function dayStatusBadge(dayNumber) {
  if (isDayComplete(dayNumber)) return '<span class="status-badge complete">Complete</span>';
  const status = state.dayStatus[dayNumber];
  if (status === 'skipped') return '<span class="status-badge skipped">Skipped</span>';
  if (status === 'postponed') return '<span class="status-badge postponed">Postponed</span>';
  return '<span class="status-badge">In progress</span>';
}

function renderDayDetail() {
  const query = $('globalSearch').value.trim();
  if (query) {
    renderSearchResults(query);
    return;
  }

  const dayNumber = state.selectedDay;
  const record = DAY_BY_NUMBER.get(dayNumber);
  const phase = phaseFor(dayNumber);
  const progress = dayProgress(dayNumber);
  const status = state.dayStatus[dayNumber];
  const phasePosition = dayNumber - phase.from + 1;

  $('dailyMeta').textContent = `Day ${dayNumber} of ${TOTAL_DAYS} - ${phase.name}`;
  $('prevDay').disabled = dayNumber === 1;
  $('nextDay').disabled = dayNumber === TOTAL_DAYS;
  $('daySelect').value = String(dayNumber);

  $('dayDetail').innerHTML = `
    <div class="card" style="margin-bottom:18px">
      <div class="day-head">
        <div>
          <p class="eyebrow">Phase ${phase.id} &middot; Day ${phasePosition} of ${phase.to - phase.from + 1}</p>
          <h2>${dayNumber}. ${escapeHtml(record.topic)}</h2>
          <span id="dayStatusSlot">${dayStatusBadge(dayNumber)}</span>
        </div>
        <div class="action-row">
          <button class="link-btn ${status === 'skipped' ? 'active' : ''}" type="button" data-day-status="skipped">${status === 'skipped' ? 'Undo skipped' : 'Mark skipped'}</button>
          <button class="link-btn ${status === 'postponed' ? 'active' : ''}" type="button" data-day-status="postponed">${status === 'postponed' ? 'Undo postponed' : 'Postpone'}</button>
        </div>
      </div>
      <div class="day-progress-wrap">
        <div class="day-progress-top"><span>Day progress</span><strong id="dayProgressText">${progress.done} / ${progress.total} subtasks (${progress.percent}%)</strong></div>
        <div class="progress-track"><div class="progress-fill" id="dayProgressFill" style="width:${progress.percent}%"></div></div>
      </div>
      <p class="subtle" id="dayCompletionNote">${isDayComplete(dayNumber)
        ? 'All required subtasks are complete. This day counts toward your journey.'
        : 'A day is marked complete automatically when all required subtasks are checked.'}</p>
    </div>

    <div class="day-grid">
      <div class="card">
        <div class="block">
          <h3>Learning objective</h3>
          <div class="objective-box">${escapeHtml(record.objective)}</div>
        </div>
        <div class="block">
          <h3>Completion checklist</h3>
          <div class="check-list">
            ${record.subtopics.map((subtopic, index) => `
              <div class="check-item ${checkedIndices(dayNumber).includes(index) ? 'done' : ''}">
                <input type="checkbox" id="subtask-${dayNumber}-${index}" data-subtask="${index}" ${checkedIndices(dayNumber).includes(index) ? 'checked' : ''}>
                <label class="check-label" for="subtask-${dayNumber}-${index}">${escapeHtml(subtopic)}</label>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="block">
          <h3>Definition of done</h3>
          <ul class="done-list">
            <li>You can explain and apply: ${record.subtopics.map(escapeHtml).join(', ')}.</li>
            <li>The practical assignment below is implemented and reviewed.</li>
            <li>All required subtasks in the checklist are checked.</li>
          </ul>
        </div>
        <div class="block">
          <h3>Practical assignment</h3>
          <p>${escapeHtml(record.practical)}</p>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom:18px">
          <div class="block">
            <h3>Study plan</h3>
            <div class="info-row"><span>Estimated time</span><strong>${escapeHtml(record.time)}</strong></div>
            <div class="info-row"><span>Daily target</span><strong>3-4 hours</strong></div>
            <div class="info-row"><span>Phase</span><strong>${escapeHtml(phase.name)}</strong></div>
          </div>
          <div class="block">
            <h3>Personal notes</h3>
            <p class="subtle small">Keep reflections next to this day in the Learning Notes section.</p>
            <button class="text-btn" type="button" data-goto-section="notes" style="padding-left:0;margin-top:8px">Open notes for day ${dayNumber} &rarr;</button>
          </div>
        </div>
        <div class="card">
          <h3 style="margin-bottom:12px">Nearby days</h3>
          ${[dayNumber - 1, dayNumber + 1].filter(value => value >= 1 && value <= TOTAL_DAYS).map(value => `
            <div class="info-row">
              <span>Day ${value}: ${escapeHtml(DAY_BY_NUMBER.get(value).topic)}</span>
              <button class="text-btn" type="button" data-open-day="${value}">Open</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSearchResults(query) {
  const lower = query.toLowerCase();
  const matches = CURRICULUM.filter(day =>
    day.topic.toLowerCase().includes(lower) ||
    day.subtopics.some(subtopic => subtopic.toLowerCase().includes(lower))
  );

  $('dailyMeta').textContent = `${matches.length} result${matches.length === 1 ? '' : 's'} for "${query}"`;
  $('dayDetail').innerHTML = matches.length
    ? matches.map(day => `
        <div class="card search-result">
          <p class="result-meta">Day ${day.day} &middot; Phase ${day.phase} &middot; ${dayProgress(day.day).done}/${dayProgress(day.day).total} done</p>
          <h3 style="margin:6px 0">${highlight(day.topic, query)}</h3>
          <p class="subtle small">${day.subtopics.map(subtopic => highlight(subtopic, query)).join(' &middot; ')}</p>
          <button class="text-btn" type="button" data-open-day="${day.day}" style="padding-left:0;margin-top:8px">Open day ${day.day} &rarr;</button>
        </div>
      `).join('')
    : '<div class="search-empty">No topics or subtopics match your search. Try a different term.</div>';
}

/* ---------- Rendering: roadmap ---------- */

function renderRoadmap() {
  $('roadmap').innerHTML = PHASES.map(phase => {
    const progress = phaseProgress(phase.id);
    const open = state.expandedPhases.includes(phase.id);
    const phaseTotalDays = phase.to - phase.from + 1;
    return `
      <article class="card phase ${open ? 'open' : ''}" data-phase="${phase.id}">
        <button class="phase-summary" type="button" data-toggle-phase="${phase.id}" aria-expanded="${open}">
          <span class="phase-chevron" aria-hidden="true">&#9654;</span>
          <div class="phase-title">
            <h2>Phase ${phase.id}: ${escapeHtml(phase.name)}</h2>
            <p>Days ${phase.from}-${phase.to} &middot; ${progress.completeDays} of ${phaseTotalDays} days complete</p>
          </div>
          <div class="phase-bar">${progressBar(progress.percent)}</div>
          <span class="phase-percent">${progress.percent}%</span>
        </button>
        <div class="phase-body">
          <div class="phase-milestone"><strong>Milestone:</strong> ${escapeHtml(phase.milestone)}</div>
          <div class="day-grid-cards">
            ${CURRICULUM.filter(day => day.phase === phase.id).map(day => {
              const dayProgressValue = dayProgress(day.day);
              const status = state.dayStatus[day.day];
              const stateClass = isDayComplete(day.day) ? 'complete' : (status || '');
              const dotClass = isDayComplete(day.day) ? 'complete' : (status || '');
              return `
                <button class="day-card ${stateClass}" type="button" data-open-day="${day.day}">
                  <span class="dc-top"><span>Day ${day.day}</span><span class="dot ${dotClass}" aria-hidden="true"></span></span>
                  <span class="dc-title">${escapeHtml(day.topic)}</span>
                  <span class="dc-count">${dayProgressValue.done}/${dayProgressValue.total} subtasks</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- Rendering: projects ---------- */

function renderProjects() {
  $('projects').innerHTML = PROJECTS.map(project => {
    const done = project.milestones.filter(milestone => state.projects.completed[milestone.id]).length;
    const percent = Math.round((done / project.milestones.length) * 100);
    return `
      <article class="card project-card">
        <div class="project-head">
          <div>
            <p class="eyebrow">Project ${project.id.slice(1)}</p>
            <h2>${escapeHtml(project.name)}</h2>
            <p>${escapeHtml(project.overview)}</p>
          </div>
          <div class="hero-badge">${done} / ${project.milestones.length} milestones</div>
        </div>
        <div style="margin-top:16px">${progressBar(percent)}</div>
        <div class="project-grid">
          <div>
            <div class="block">
              <h3>Goals</h3>
              <ul class="done-list">${project.goals.map(goal => `<li>${escapeHtml(goal)}</li>`).join('')}</ul>
            </div>
            <div class="block">
              <h3>Technical stack</h3>
              <div class="stack-list">${project.stack.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div>
            </div>
            <div class="block project-notes">
              <h3>Notes and learnings</h3>
              <textarea data-project-note="${project.id}" rows="6" placeholder="What did you learn while building this project?">${escapeHtml(state.projects.notes[project.id] || '')}</textarea>
            </div>
          </div>
          <div class="block">
            <h3>Milestones and checklist</h3>
            <div>
              ${project.milestones.map(milestone => {
                const checked = !!state.projects.completed[milestone.id];
                return `
                  <div class="milestone-item">
                    <div class="milestone-row ${checked ? 'done' : ''}">
                      <input type="checkbox" id="${milestone.id}" data-milestone="${milestone.id}" ${checked ? 'checked' : ''}>
                      <label class="milestone-label" for="${milestone.id}">${escapeHtml(milestone.title)}</label>
                    </div>
                    <small>${escapeHtml(milestone.detail)}</small>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ---------- Rendering: notes ---------- */

function renderNotes() {
  const dayNumber = state.notesDay;
  $('notesDay').value = String(dayNumber);
  const note = state.notes[dayNumber] || {};
  NOTES_FIELDS.forEach(field => {
    $(NOTE_INPUTS[field]).value = note[field] || '';
  });
  $('notesStatus').textContent = 'All changes saved.';
}

/* ---------- Rendering: resources and theme ---------- */

function renderResources() {
  $('resources').innerHTML = RESOURCES.map(resource => `
    <a class="card resource-link" href="${resource.url}" target="_blank" rel="noopener noreferrer">
      <span class="resource-cat">${escapeHtml(resource.category)}</span>
      <h3 style="margin-top:5px">${escapeHtml(resource.title)}</h3>
      <p>${escapeHtml(resource.description)}</p>
    </a>
  `).join('');
}

function applyTheme() {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === 'light';
  $('themeIcon').textContent = isLight ? '\u263E' : '\u2600';
  $('themeToggle').setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}

function updateSelects() {
  const options = CURRICULUM.map(day => `<option value="${day.day}">Day ${day.day} - ${escapeHtml(day.topic)}</option>`).join('');
  $('daySelect').innerHTML = options;
  $('notesDay').innerHTML = options;
  $('daySelect').value = String(state.selectedDay);
  $('notesDay').value = String(state.notesDay);
}

function renderAll() {
  applyTheme();
  renderProfileChrome();
  updateSelects();
  renderDashboard();
  renderDayDetail();
  renderRoadmap();
  renderProjects();
  renderNotes();
  renderResources();
}

/* ---------- Actions ---------- */

function updateDayDetailProgress() {
  const dayNumber = state.selectedDay;
  const progress = dayProgress(dayNumber);
  $('dayProgressText').textContent = `${progress.done} / ${progress.total} subtasks (${progress.percent}%)`;
  $('dayProgressFill').style.width = `${progress.percent}%`;
  $('dayCompletionNote').textContent = isDayComplete(dayNumber)
    ? 'All required subtasks are complete. This day counts toward your journey.'
    : 'A day is marked complete automatically when all required subtasks are checked.';
  $('dayStatusSlot').innerHTML = dayStatusBadge(dayNumber);
  document.querySelectorAll('#dayDetail [data-subtask]').forEach(checkbox => {
    checkbox.closest('.check-item').classList.toggle('done', checkbox.checked);
  });
}

function toggleSubtask(index) {
  const dayNumber = state.selectedDay;
  const current = checkedIndices(dayNumber).slice();
  const position = current.indexOf(index);
  if (position === -1) current.push(index);
  else current.splice(position, 1);

  if (current.length) state.completed[dayNumber] = current.sort((a, b) => a - b);
  else delete state.completed[dayNumber];

  if (isDayComplete(dayNumber)) delete state.dayStatus[dayNumber];
  saveState();
  updateDayDetailProgress();
  renderDashboard();
  renderRoadmap();
}

function setDayStatus(status) {
  const dayNumber = state.selectedDay;
  if (state.dayStatus[dayNumber] === status) delete state.dayStatus[dayNumber];
  else state.dayStatus[dayNumber] = status;
  saveState();
  renderDayDetail();
  renderDashboard();
  renderRoadmap();
  const button = document.querySelector(`[data-day-status="${status}"]`);
  if (button) button.focus();
}

function togglePhase(phaseId) {
  const position = state.expandedPhases.indexOf(phaseId);
  if (position === -1) state.expandedPhases.push(phaseId);
  else state.expandedPhases.splice(position, 1);
  saveState();
  renderRoadmap();
}

function switchProfile(profileId) {
  if (!PROFILE_BY_ID.has(profileId) || profileId === activeProfileId) return;
  saveState();
  activeProfileId = profileId;
  safeSet(ACTIVE_PROFILE_KEY, profileId);
  state = loadProfile(profileId);
  $('globalSearch').value = '';
  renderAll();
  showToast(`Switched to ${profileById(profileId).name}.`);
}

function exportProgress() {
  const profile = profileById(activeProfileId);
  const payload = {
    app: 'FDE 90-Day Learning Tracker', version: 1,
    profileId: profile.id, profileName: profile.name,
    exportedAt: new Date().toISOString(), state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `fde-progress-${profile.id}-${todayString()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`${profile.name}'s progress exported as JSON.`);
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const candidate = parsed && typeof parsed === 'object' && parsed.state ? parsed.state : parsed;
      if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) throw new Error('Invalid file');
      const profile = profileById(activeProfileId);
      if (!window.confirm(`Import this file into ${profile.name}'s profile and replace that progress? The other profile is not affected.`)) return;
      state = normalizeState(candidate);
      saveState();
      $('globalSearch').value = '';
      renderAll();
      showToast(`Progress imported into ${profile.name}.`);
    } catch (error) {
      console.warn('Import failed.', error);
      showToast('Import failed. Please choose a valid tracker JSON file.');
    }
  };
  reader.onerror = () => showToast('The file could not be read.');
  reader.readAsText(file);
}

function resetProgress() {
  const profile = profileById(activeProfileId);
  const other = PROFILES.find(item => item.id !== activeProfileId);
  const confirmed = window.confirm(
    `Reset ${profile.name}'s progress only? This clears completed subtasks, notes, milestones and the start date for ${profile.name}. ${other.name}'s data is not affected. Export a backup first if you want to keep it.`
  );
  if (!confirmed) return;
  state = defaultState();
  saveState();
  $('globalSearch').value = '';
  renderAll();
  showToast(`${profile.name}'s tracker reset. Starting from day 1 with zero progress.`);
}

/* ---------- Event wiring ---------- */

function bindEvents() {
  $('navList').addEventListener('click', event => {
    const button = event.target.closest('[data-section]');
    if (button) switchSection(button.dataset.section);
  });

  document.addEventListener('click', event => {
    const profileButton = event.target.closest('[data-profile]');
    if (profileButton) {
      switchProfile(profileButton.dataset.profile);
      return;
    }

    const sectionButton = event.target.closest('[data-goto-section]');
    if (sectionButton) {
      switchSection(sectionButton.dataset.gotoSection);
      return;
    }

    const dayButton = event.target.closest('[data-open-day]');
    if (dayButton) {
      $('globalSearch').value = '';
      openDay(dayButton.dataset.openDay, 'daily');
      return;
    }

    const phaseButton = event.target.closest('[data-toggle-phase]');
    if (phaseButton) {
      togglePhase(Number(phaseButton.dataset.togglePhase));
      return;
    }

    const statusButton = event.target.closest('[data-day-status]');
    if (statusButton) {
      setDayStatus(statusButton.dataset.dayStatus);
      return;
    }

    if (event.target.closest('#prevDay')) openDay(state.selectedDay - 1, 'daily');
    if (event.target.closest('#nextDay')) openDay(state.selectedDay + 1, 'daily');
    if (event.target.closest('#themeToggle')) {
      theme = theme === 'dark' ? 'light' : 'dark';
      saveTheme();
      applyTheme();
    }
    if (event.target.closest('#menuToggle')) {
      const open = $('sidebar').classList.toggle('open');
      $('menuToggle').setAttribute('aria-expanded', String(open));
    }
    if (event.target.closest('#exportBtn')) exportProgress();
    if (event.target.closest('#importBtn')) $('importFile').click();
    if (event.target.closest('#resetBtn')) resetProgress();
    if (event.target.closest('#expandAll')) {
      state.expandedPhases = PHASES.map(phase => phase.id);
      saveState();
      renderRoadmap();
    }
    if (event.target.closest('#collapseAll')) {
      state.expandedPhases = [];
      saveState();
      renderRoadmap();
    }
  });

  $('dayDetail').addEventListener('change', event => {
    const checkbox = event.target.closest('[data-subtask]');
    if (checkbox) toggleSubtask(Number(checkbox.dataset.subtask));
  });

  $('projects').addEventListener('change', event => {
    const checkbox = event.target.closest('[data-milestone]');
    if (!checkbox) return;
    const id = checkbox.dataset.milestone;
    if (checkbox.checked) state.projects.completed[id] = true;
    else delete state.projects.completed[id];
    saveState();
    renderProjects();
    renderDashboard();
  });

  $('view-notes').addEventListener('input', event => {
    const field = Object.keys(NOTE_INPUTS).find(key => NOTE_INPUTS[key] === event.target.id);
    if (!field) return;
    const dayNumber = state.notesDay;
    if (!state.notes[dayNumber]) state.notes[dayNumber] = { daily: '', concepts: '', challenges: '', questions: '' };
    state.notes[dayNumber][field] = event.target.value;
    saveState();
    $('notesStatus').textContent = 'All changes saved.';
  });

  $('projects').addEventListener('input', event => {
    const textarea = event.target.closest('[data-project-note]');
    if (!textarea) return;
    state.projects.notes[textarea.dataset.projectNote] = textarea.value;
    saveState();
  });

  $('daySelect').addEventListener('change', event => openDay(event.target.value, 'daily'));

  $('notesDay').addEventListener('change', event => {
    state.notesDay = clampDay(event.target.value);
    saveState();
    renderNotes();
  });

  $('startDate').addEventListener('change', event => {
    const parsed = parseDate(event.target.value);
    if (!parsed) {
      event.target.value = state.startDate;
      showToast('Please choose a valid start date.');
      return;
    }
    state.startDate = event.target.value;
    saveState();
    renderDashboard();
    showToast('Start date updated.');
  });

  $('globalSearch').addEventListener('input', () => {
    const query = $('globalSearch').value.trim();
    if (!document.querySelector('#view-daily').classList.contains('active')) switchSection('daily');
    renderDayDetail();
    if (!query) $('dailyMeta').textContent = `Work through one focused day at a time.`;
  });

  $('importFile').addEventListener('change', event => {
    importProgress(event.target.files[0]);
    event.target.value = '';
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    $('sidebar').classList.remove('open');
    $('menuToggle').setAttribute('aria-expanded', 'false');
    if ($('globalSearch').value) {
      $('globalSearch').value = '';
      renderDayDetail();
    }
  });
}

/* ---------- Init ---------- */

bindEvents();
renderAll();
