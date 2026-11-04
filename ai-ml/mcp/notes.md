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
- Prompts - 
- Tools