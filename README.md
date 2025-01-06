## Overview

TymeX Interview Marketplace

## Getting Started

##### System Requirements:
```bash
Node.js 18.17 or later.
macOS, Windows (including WSL), and Linux are supported.
```

##### Run the Development:
```bash
Create a .env file with keys like those in the .env.template file.

Run npm run dev to start the development server.
Visit http://localhost:3000 to view your application.
```
##### Running your tests
```bash
npm run test
```

## Folder Structure
```bash
src/app
  components/  # split and write common component
    filterBar/ 
      index.tsx
      Button.tsx
  types/ 
    products.ts
  constants/
    Filters.ts
  utils/
    apiClient.ts
  hooks/
    useFetchProducts.ts
  page.tsx #root
  globals.css

```

