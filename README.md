# @celluloid/peertube-api

A TypeScript client library for the [PeerTube](https://joinpeertube.org) REST API, generated from the official OpenAPI specification. This package provides a fully type-safe fetch client for interacting with PeerTube instances.

## Features

- ✅ **Fully Type-Safe**: Complete TypeScript types generated from the PeerTube OpenAPI specification
- ✅ **Fetch API**: Uses the native Fetch API for HTTP requests
- ✅ **Modern**: Built with modern TypeScript and ES modules
- ✅ **Comprehensive**: Supports all PeerTube API endpoints

## Installation

```bash
pnpm add @celluloid/peertube-api
```

Or with npm:

```bash
npm install @celluloid/peertube-api
```

## Usage

### Basic Example

```typescript
import { createClient } from '@celluloid/peertube-api/client';
import { getVideos } from '@celluloid/peertube-api';

const client = createClient({
  baseUrl: 'https://peertube.example.com',
});

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
import { createClient } from '@celluloid/peertube-api/client';
import { getUserInfo } from '@celluloid/peertube-api';

const client = createClient({
  baseUrl: 'https://peertube.example.com',
  headers: {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN',
  },
});

const userInfo = await getUserInfo({ client });
console.log(userInfo.data);
```

### Custom Configuration

```typescript
import { createClient } from '@celluloid/peertube-api/client';

const client = createClient({
  baseUrl: 'https://peertube.example.com',
  headers: {
    'User-Agent': 'MyApp/1.0',
  },
  fetch: customFetch,
});

client.setConfig({
  baseUrl: 'https://another-instance.com',
});
```

## API Reference

The client is generated from the PeerTube OpenAPI specification (v8.0.0). All API endpoints are available through the SDK functions exported from `@celluloid/peertube-api/client/sdk`.

For detailed API documentation, see the [PeerTube REST API Reference](https://docs.joinpeertube.org/api-rest-reference.html).

## Development

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v9 or higher)

### Setup

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

### Generate Client

```bash
pnpm run generate
```

### Build

```bash
pnpm run build
```

### Type Checking

```bash
pnpm run typecheck
```

## Releasing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and releases.

### Adding a Changeset

```bash
pnpm run changeset
```

### Versioning and Publishing

Releases are automated via GitHub Actions. Set up `NPM_TOKEN` secret in repository settings.

```bash
pnpm run version
pnpm run release
```

## License

MIT
