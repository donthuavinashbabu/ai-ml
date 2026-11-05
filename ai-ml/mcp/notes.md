## What is MCP?
- MCP stands for Model Context Protocol
- MCP is a protocol for building AI agents\
![picture](img/what-is-mcp.jpeg)

---
## MCP Security issues
- Prompts injection - malacious user embeds hidden instructions in the prompt to manipulate the model's behavior
- Tool poisoning - attackers tamper tool metadata (like description or parameters) to mislead model to do unsafe actions\
![picture](img/tool-poisoning.jpeg)
- Dynamic tool change - Tool modified after approval, potentially introducing harmful behavior without our knowledge

---
## How to handle MCP security issues?
- Follow `Leave Privilege` Principle
- Use RBAC (Role Based Access Control) to manage access to MCPs and Audit roles

## Microsoft prompt shield
- Detects direct and indirect prompt injection
- Separate user input from system instructions
- Marks trusted vs untrusted data
- Receives continuous updates from Microsoft
- Works with Azure content safety

## Security best
- Follow OWASP guidelines for AI
- Harden servers like patching, firewall, MFA etc
- Log and monitor actions
- Apply Zero Trust principles

---
## What MCP server has?
- Resources - Data sources like files, APIs, databases
- Prompts - Reused templates that guide how model responds like setting tone, structure, task instructions, etc
- Tools - Make the model to take actions. Executable functions that the model can use to perform tasks like generating code, searching the web, etc

---
## Inspecting MCP server live
- Use `MCP Inspector` to inspect MCP server live

---
![picture](img/mcp-community.jpeg)

---
## MCP Development and best practices
- Single Responsibility Principle - Design each tool to do one thing well
- Design Flexibility - Prioritize dependency injection via constructors. Build tools like Lego bricks: small, swappable and chainable
- Write clear, validated schemas. Use descriptive parameter names and include type hints. Define constraints (ex: min, max, regex, enums). This helps model understand how to use the tool and avoid errors.
- Handle failures gracefully. Return clear error messages and status codes. This helps model understand what went wrong and how to fix it.
- Performance Optimization - Cache results, batch requests, and use parallel processing. Adopt async/await patterns.
- Secure every tool
- Testing at all levels - Do following tests:
    - Unit tests - Test individual tools
    - Schema validation - Test tool parameters and responses
    - Integration tests - Test tool interactions
    - End to end simulation - Test tool interactions with real model
    - Performance tests - Test tool performance under heavy usage
    - Load and stress tests - Test tool performance under heavy usage
    - Test edge cases - Error scenarios, rate limits, timeouts, etc

---
## Real work case studies
- Azure AI Travel Agent
- Real Time Docs in Terminal
- Study Planner - Personalized study plan for students

