# Cayenne

An educational prompt writing tool for AI coding agents. Help developers craft better prompts with pre-built templates, inline guidance, and examples.

## Features

- **34+ Prompt Templates** covering debugging, features, refactoring, testing, and more
- **Educational Content** with tips and examples for each template
- **Variable System** with `{{placeholder}}` highlighting and inline input
- **Real-time Preview** of markdown-formatted prompts
- **Auto-save** to localStorage
- **Offline-first** with all templates bundled

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## Tech Stack

- **Vite** - Build tool
- **TypeScript** - Type safety
- **Vanilla TS** - No framework overhead
- **CodeMirror 6** - Enhanced editor (planned)
- **marked.js** - Markdown rendering
- **DOMPurify** - HTML sanitization
- **Biome** - Linting & formatting

## Project Structure

```
src/
├── templates/       # Template definitions
├── state/           # App state management
├── utils/           # Utility functions
├── styles/          # Modular CSS
└── main.ts          # Entry point
```

## Status

🚧 **In Development**

- ✅ Phase 1: Foundation complete
- 🔄 Phase 2: UI Components (next)
- ⏳ Phase 3: Template Features
- ⏳ Phase 4: Template Content
- ⏳ Phase 5: Export & Utilities
- ⏳ Phase 6: Polish & Testing

## License

MIT
