# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Remix development server with Vite
- **Build**: `npm run build` - Creates production build via Remix
- **Type checking**: `npm run typecheck` - Runs TypeScript compiler for type validation
- **Linting**: `npm run lint` - Runs ESLint with cache for JavaScript/TypeScript files
- **Code formatting**: `npm run fmt` - Formats code using dprint
- **Format check**: `npm run fmt:check` - Checks code formatting without making changes
- **Preview**: `npm run preview` - Serves the production build locally

## Architecture

This is a **Remix SPA (Single Page Application)** built with:

- **Remix** as the React framework with SSR disabled (`ssr: false` in vite config)
- **Vite** as the build tool and development server
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling
- **React Markdown** with GitHub Flavored Markdown support

### Key Configuration

- **Path mapping**: `~/*` maps to `./app/*` for convenient imports
- **Formatting**: Uses dprint with tabs, 80 character line width, and specific TypeScript/JSX formatting rules
- **Remix features**: Configured with v3 future flags for newer Remix features

### Project Structure

- `app/` - Main application code with Remix file-based routing
- `app/root.tsx` - Root layout with Inter font loading and basic HTML structure
- `app/routes/_index.tsx` - Homepage displaying GitHub profile with README content
- Styling uses Tailwind with extensive prose classes for markdown rendering

### Notable Implementation Details

- The homepage dynamically imports and renders the repository's README.md content
- Uses GitHub profile picture as favicon via dynamic user URL
- Configured for both light and dark mode styling
- No test framework is currently configured
