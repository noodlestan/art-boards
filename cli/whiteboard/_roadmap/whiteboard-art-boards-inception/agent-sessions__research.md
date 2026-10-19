# Research: Agent Session Management

**Purpose:** Define the user-facing use cases and runner integration boundary for an application that associates agent sessions with artefacts (initially, a shared whiteboard).

**Description:** Defines application use cases, Runner integration research, boundaries.

## Proposal: Add "Project: Art Agents"

**Responsibilities:** Provide a connection service and a session management service. The application instantiates the service with an instantiated connection and uses it to execute all boundary operations.

## Use cases

| User use case                                               | Art ↔ Agent Sessions boundary                                                                        |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Start a session for an artefact                             | Art → Adapter → Runner: create a session with artefact-specific instructions                         |
| Register an existing session against an artefact            | Agent → Art: invoke the registration endpoint with the artefact and session identity                 |
| List sessions associated with an artefact                   | Art: retrieve registered sessions and their current state through the appropriate adapters           |
| Join a manually started session in the application          | Art → Adapter → Runner: connect to an existing session without creating another                      |
| Start or resume a session from the application              | Art → Adapter → Runner: create a session or resume a persisted one                                   |
| Send a prompt to a session                                  | Art → Adapter → Runner: deliver input to the selected session                                        |
| Observe session activity                                    | Runner → Adapter → Art: stream messages, events and state changes                                    |
| Read session history                                        | Art → Adapter → Runner: retrieve existing messages and conversation history                          |
| Interrupt a running session                                 | Art → Adapter → Runner: abort the current execution                                                  |
| Detect session termination                                  | Runner → Adapter → Art: report completion, failure, interruption or disconnection                    |
| Reconnect after the application restarts                    | Art → Adapter → Runner: re-establish access to registered sessions                                   |
| Join a session from the terminal                            | Art → User: display a runner-specific command that the user can copy and execute in a terminal       |
| Identify unregistered sessions interacting with an artefact | Runner → Adapter → Art: report observable session activity so Art can identify missing registrations |

## Runner integration research

### OpenCode

**Integration surface:** TypeScript SDK and HTTP server API.

Official documentation:

- [SDK](https://docs.opencode.ai/docs/sdk/)
- [CLI](https://dev.opencode.ai/docs/cli/)
- [Server API](https://docs.opencode.ai/docs/server/)

The SDK package is `@opencode-ai/sdk`.

Relevant capabilities include:

- Creating a server and client together with `createOpencode()`.
- Connecting to an existing server using `createOpencodeClient()`.
- Listing, creating, retrieving and updating sessions.
- Reading message history and sending prompts.
- Aborting sessions and responding to permission requests.
- Receiving activity events through the server's event stream.

OpenCode also provides `opencode serve` for starting a headless HTTP server.

#### Terminal handoff

OpenCode supports resuming a specific session:

```sh
opencode -s <session-id>
```

It also supports attaching a terminal to a running server:

```sh
opencode attach <server-url> -s <session-id>
```

The second form is important when the session belongs to a particular server instance. The application may need to retain the server URL alongside the session ID to generate a reliable command.

**Assessment:** Strong initial adapter candidate. The main verification target is whether sessions started independently can be controlled through the same server instance, and how the application obtains that instance's address.

### Codex CLI

**Integration surface:** Codex app-server protocol, with an official SDK available for application integrations.

Official documentation:

- [Codex as a platform](https://developers.openai.com/blog/codex-as-a-platform)
- [Codex app-server](https://developers.openai.com/siwc/token-sharing-open-source/codex-app-server)
- [CLI reference](https://learn.chatgpt.com/docs/cli/reference)

Codex app-server exposes a JSON-RPC protocol. Depending on the configured transport, the application communicates with a Codex process over stdio or a WebSocket connection.

Relevant capabilities include:

- Starting threads and turns.
- Resuming persisted threads using their IDs.
- Receiving streaming notifications.
- Interrupting execution.
- Handling approval requests and exposing application-provided tools.

The app-server is designed for external applications, but it is not equivalent to an HTTP session API. The adapter would need to manage its process and protocol lifecycle.

#### Terminal handoff

Codex CLI supports resuming a persisted session by ID:

```sh
codex resume <session-id>
```

However, resuming a persisted thread does not establish that the application can attach to an independently running Codex CLI process and share its live execution.

**Assessment:** Worth implementing as a separate adapter. The critical research question is whether live attachment to an independently started CLI session is supported, or whether the practical contract is persistence and resumption.

### Other runners

Ollama provides model-serving APIs, but it is not by itself an equivalent agent-session manager. Supporting it would require an agent execution layer that provides session persistence, tool execution, message handling and lifecycle management.

It should therefore be treated as a different integration category, rather than assumed to be interchangeable with OpenCode or Codex.

## Adapter boundary

The application should depend on an application-level session contract rather than directly on either runner's SDK or protocol.

Each adapter is responsible for translating that contract into runner-specific operations and normalising the session metadata and state exposed to Art.

The adapter boundary should account for differences in:

- Session identity and persistence.
- Process and server lifecycle.
- Message history and event streaming.
- Prompt delivery and interruption.
- Permission and approval handling.
- Terminal handoff commands.
- Capabilities that are unavailable or behave differently across runners.

Avoid requiring every runner to implement capabilities that it cannot provide. The application should know which operations are supported by each adapter.

## Key architectural distinction

There are three separate relationships:

1. **Artefact association** — Art records which sessions belong to a whiteboard.
2. **Session control** — an adapter connects to the runner that owns the session and performs supported operations.
3. **Terminal handoff** — Art provides the user with a command to open or resume the session in the runner's terminal interface.

Registration establishes the first relationship; it does not guarantee the second or third.

## Questions requiring verification

1. Can the OpenCode adapter control a session started manually, without creating a replacement session?
2. Can the application reliably identify and retain the correct OpenCode server endpoint for each session?
3. Can Codex app-server interact with a live session started through the ordinary Codex CLI, or only resume persisted threads?
4. What terminal command can each adapter generate to open the correct session, preserving the required working directory and server context?
5. Which capabilities can be shared in the adapter contract, and which must remain runner-specific?

## Preliminary direction

Start with separate OpenCode and Codex adapters, using their supported integration surfaces rather than shelling out for every operation.

Treat **continuity between the application and independently started sessions** as the primary acceptance criterion. Runner portability is useful, but it should not require weakening that criterion.

Do not assume live attachment, persisted-session resumption and terminal handoff are equivalent; verify each independently.
