# @celluloid/peertube-api

A TypeScript client library for the [PeerTube](https://joinpeertube.org) REST API, generated from the official OpenAPI specification. This package provides a fully type-safe fetch client for interacting with PeerTube instances.

## Features

- ✅ **Fully Type-Safe**: Complete TypeScript types generated from the PeerTube OpenAPI specification
- ✅ **Fetch API**: Uses the native Fetch API for HTTP requests
- ✅ **Modern**: Built with modern TypeScript and ES modules
- ✅ **Comprehensive**: Supports all PeerTube API endpoints including:
  - Video management (upload, import, transcoding)
  - User and account management
  - Comments and playlists
  - Search and feeds
  - Moderation tools
  - Instance configuration
  - And much more!

## Installation

```bash
npm install @celluloid/peertube-api
```

## Usage

### Basic Example

```typescript
import { createClient } from '@celluloid/peertube-api';
import { getVideos } from '@celluloid/peertube-api/client/sdk';

// Create a client instance
const client = createClient({
  baseUrl: 'https://peertube.example.com',
});

// Fetch videos
const response = await getVideos({
  client,
  query: {
    start: 0,
    count: 10,
  },
});

console.log(response.data);
```

### With Authentication

```typescript
import { createClient } from '@celluloid/peertube-api';
import { getUserInfo } from '@celluloid/peertube-api/client/sdk';

const client = createClient({
  baseUrl: 'https://peertube.example.com',
  headers: {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  },
});

// Get authenticated user info
const userInfo = await getUserInfo({ client });
console.log(userInfo.data);
```

### Custom Configuration

```typescript
import { createClient } from '@celluloid/peertube-api';

const client = createClient({
  baseUrl: 'https://peertube.example.com',
  headers: {
    'User-Agent': 'MyApp/1.0',
  },
  // Custom fetch implementation if needed
  fetch: customFetch,
});

// Update configuration at runtime
client.setConfig({
  baseUrl: 'https://another-instance.com',
});
```

## API Reference

The client is generated from the PeerTube OpenAPI specification (v8.0.0). All API endpoints are available through the SDK functions exported from `@celluloid/peertube-api/client/sdk`.

### Available Endpoints

The client supports all PeerTube API endpoints organized by category:

- **Videos**: Upload, import, manage videos, captions, chapters, comments
- **Users & Accounts**: User management, authentication, subscriptions
- **Playlists**: Create and manage video playlists
- **Search**: Search videos, channels, and playlists
- **Moderation**: Abuses, blocks, watched words
- **Instance**: Configuration, stats, logs, plugins
- **Feeds**: RSS and Atom feeds
- And more...

For detailed API documentation, see the [PeerTube REST API Reference](https://docs.joinpeertube.org/api-rest-reference.html).

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or bun

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Generate Client

The client is generated from the `openapi.json` specification file:

```bash
npm run generate
```

This will regenerate the TypeScript client code in the `client/` directory.

### Build

Build the package for distribution:

```bash
npm run build
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Project Structure

```
peertube-api/
├── client/              # Generated client code (do not edit manually)
│   ├── client/         # Client implementation
│   ├── core/           # Core utilities
│   └── sdk.gen.ts      # SDK functions
├── dist/               # Compiled output (generated)
├── openapi.json        # PeerTube OpenAPI specification
├── openapi-ts.config.ts # OpenAPI generator configuration
├── index.ts            # Main entry point
└── package.json
```

## License

MIT

## Related Links

- [PeerTube Documentation](https://docs.joinpeertube.org)
- [PeerTube REST API Reference](https://docs.joinpeertube.org/api-rest-reference.html)
- [PeerTube GitHub](https://github.com/Chocobozzz/PeerTube)
