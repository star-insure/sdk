# Star Insure - SDK

The SDK for Star Insure client apps with shared helper functions and TypeScript definitions.

## Installation
```
npm install @star-insure/sdk
```

## Development
```bash
npm start
```
### Testing
```
npm run test
```

## Publishing to NPM
Suggest that you use [np](https://github.com/sindresorhus/np) for publishing.

From the command line just run (you'll need Node version 18+ running):
```
npm run publish
```

## Usage
This library provides the following functions:

### Date and Time
1. formatDate - Returns a string in format dd/mm/yyyy
```typescript
import { formatDate } from '@star-insure/sdk';

formatDate(new Date());
formatDate('2024-03-23T20:00:00.000Z');
formatDate('Sat, 23 Mar 2024 20:00:00 GMT');
```

2. formatDateTime - Returns a string in format dd/mm/yyyy hh:mm (24-hour clock)
```typescript
import { formatDateTime } from '@star-insure/sdk';

formatDateTime(new Date());
formatDateTime('2024-03-23T20:00:00.000Z');
formatDateTime('Sat, 23 Mar 2024 20:00:00 GMT');
```

### Money
1. formatMoney - Returns a string in format $x,xxx.xx
```typescript
import { formatMoney } from '@star-insure/sdk';

formatMoney(1234567.89);
formatMoney('1234567.89');
```