# Next.js Movie Search App

This is a Next.js application that allows users to search for movies using the
[The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api).
This project was done for a front end React interview with Circle Medical.

## Features

- Search for movies by title.
- Infinite scrolling to load more movies.
- Responsive design using Tailwind CSS.

## Live Demo

Check out the live application at
[https://circle-react-ten.vercel.app/](https://circle-react-ten.vercel.app/).

## Getting Started

### Prerequisites

- Node.js and pnpm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TamirShklaz/circle-react.git
   cd circle-react
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

### Running the Development Server

Start the development server on [http://localhost:3001](http://localhost:3001):

```bash
pnpm dev
```

### Building for Production

To create an optimized production build:

```bash
pnpm build
```

### Starting the Production Server

After building, you can start the production server:

```bash
pnpm start
```

### Linting

To run ESLint:

```bash
npm run lint
```

## Dependencies

- **Next.js**:
  [Framework for server-rendered React applications](https://nextjs.org/).
- **React**:
  [JavaScript library for building user interfaces](https://reactjs.org/).
- **Tailwind CSS**: [Utility-first CSS framework](https://tailwindcss.com/).
- **SWR**: [React Hooks library for data fetching](https://swr.vercel.app/).
- **Zustand**:
  [Small, fast, and scalable state management solution](https://zustand-demo.pmnd.rs/).
- **ShadCN**:
  [Component library for building accessible web applications](https://shadcn.dev/).

## Dev Dependencies

- **TypeScript**: Typed superset of JavaScript.
- **ESLint**: Pluggable linting utility for JavaScript and JSX.
- **Prettier**: Code formatter.
- **Tailwind CSS**: Utility-first CSS framework.

## Folder Structure

Here's a quick overview of the folder structure for the relevant parts of the
project:

```
src/
├── app/
│   ├── movies/
│   │   ├── _components/
│   │   │   ├── movie-list.tsx
│   │   │   ├── movie-list-item.tsx
│   │   │   └── search-bar.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── lib/
│   ├── hooks/
│   │   └── filter-store.ts
│   ├── types/
│   │   └── movie-response.types.ts
│   └── utils/
│       └── fetcher.ts
```

### Description

- **app/movies/**: Contains components and pages related to the movie search
  functionality.

  - **\_components/**: Houses reusable components for the movie search feature.
    - `movie-list.tsx`: Component for displaying a list of movies with infinite
      scrolling.
    - `movie-list-item.tsx`: Component for displaying individual movie details.
    - `search-bar.tsx`: Component for the search input field.
  - `page.tsx`: Main page component for the movie search feature.

- **lib/hooks/**: Contains custom hooks used throughout the application.

  - `filter-store.ts`: Zustand store for managing search filter state.

- **lib/types/**: Contains TypeScript type definitions.

  - `movie-response.types.ts`: Type definitions for movie API responses.

- **lib/utils/**: Contains utility functions.
  - `fetcher.ts`: Utility function for data fetching using `fetch`.
