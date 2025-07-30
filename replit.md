# Portfolio Website Application

## Overview

This is a modern cybersecurity-themed portfolio website built with React, TypeScript, and Express.js. The application features a futuristic "matrix" design with interactive elements, animations, and a dark theme optimized for showcasing cybersecurity research, development projects, and technical documentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Router**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: Radix UI primitives with custom theming
- **Animations**: Framer Motion for smooth transitions and interactive effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: tsx for development server with hot reload
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Driver**: Neon Database serverless driver (@neondatabase/serverless)
- **Schema**: Centralized in `shared/schema.ts` with Zod validation
- **Migrations**: Managed through drizzle-kit

## Key Components

### Frontend Components
1. **Portfolio Sections**:
   - HeroSection: Landing area with typewriter effect and animated branding
   - TechStack: Technology showcase with interactive icons
   - BlogSection: Technical blog posts display
   - WriteupSection: CTF and security writeups
   - DocsSection: Technical documentation categories
   - ContactSection: Social media links and contact information

2. **Interactive Elements**:
   - MatrixRain: Animated background with falling characters
   - CursorTrail: Custom cursor tracking effect
   - ParticleSystem: Floating particle animations
   - LoadingScreen: Animated startup sequence

3. **UI Framework**:
   - Complete shadcn/ui component set
   - Custom neon color scheme with CSS variables
   - Responsive design with mobile-first approach

### Backend Structure
1. **Server Setup**: Express.js with TypeScript, middleware for JSON parsing and request logging
2. **Route Registration**: Modular route system in `server/routes.ts`
3. **Storage Interface**: Abstracted storage layer with in-memory implementation for development
4. **Development Tools**: Vite integration for hot reload in development mode

### Data Models
- **User Schema**: Basic user model with username/password fields
- **Validation**: Zod schemas for type-safe data validation
- **Type Generation**: Drizzle generates TypeScript types from schema

## Data Flow

1. **Client-Side Navigation**: Wouter handles routing without page refreshes
2. **API Communication**: TanStack Query manages server state with custom fetch wrapper
3. **Form Handling**: React Hook Form with Zod resolvers for validation
4. **Real-time Updates**: Query invalidation for data synchronization

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Backend and Database
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL platform
- **Express.js**: Web application framework

### Development Tools
- **Vite**: Fast build tool with hot reload
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code quality and formatting

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `drizzle-kit push`

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves static files from Express with built React app
- **Database**: Configured via `DATABASE_URL` environment variable

### Key Scripts
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build both frontend and backend for production
- `npm run start`: Start production server
- `npm run db:push`: Apply database schema changes

The application follows a monorepo structure with shared types and schemas, enabling type safety across the entire stack while maintaining clear separation between client and server code.