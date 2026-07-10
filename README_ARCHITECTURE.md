# Memora Architecture & Directory Structure Guide

Welcome to the **Memora** codebase! This project is structured using a production-ready, feature-based, enterprise-grade architecture for React Native + Expo.

This document explains the organization of directories, import rules, and best practices for writing clean, maintainable, and scalable code as a team.

---

## High-Level Project Layout

The repository is organized into two main directory trees at the root:

1. `app/` - **Routing Layer** (Expo Router only). Keeps the entry points thin.
2. `src/` - **Core Logic Layer** (All components, features, business logic, state, and assets).

```text
memora/
├── app/                     # Expo Router routes (routing logic only)
├── src/
│   ├── assets/              # Static files (images, icons, fonts, animations, sounds)
│   ├── components/          # App-wide UI & Common components (no business logic)
│   ├── config/              # App config, Env settings, and API config
│   ├── constants/           # App-wide static constants (regex, routes, storage keys)
│   ├── features/            # Feature modules (modular business logic)
│   ├── hooks/               # App-wide custom React hooks
│   ├── lib/                 # Third-party library initializations (e.g. TanStack Query)
│   ├── services/            # Core wrapper services (api, storage, notifications)
│   ├── store/               # App-wide Zustand stores
│   ├── theme/               # Design system tokens (colors, spacing, typography)
│   ├── types/               # App-wide TypeScript interfaces/types
│   └── utils/               # App-wide helper functions (date, phone, validation)
├── package.json
└── tsconfig.json
```

---

## Detailed Directory Guide

### 1. `app/` (Routing Layer)

We use **Expo Router**'s file-system based routing. To prevent spaghetti routing and layout bloating, the `app/` folder must remain **as minimal as possible**.

- **Rule**: Route files inside `app/` should **only** import and export screens from `src/features/`.
- **Never** write actual screen UI or fetch API data inside files under `app/`.

_Example (`app/(tabs)/index.tsx`):_

```tsx
import HomeScreen from '@/features/dashboard/screens/HomeScreen';
export default HomeScreen;
```

---

### 2. `src/features/` (Feature Modules)

This is the heart of the application. Business logic is organized by feature rather than type. Each feature is self-contained and modular.

Available features include:

- `auth/` — Login, OTP verification, onboarding.
- `dashboard/` — Main activity feeds, stats, recent activities.
- `contacts/` — CRM, list of customers, detailed profile pages.
- `callLogs/` — Call records, call lists, call durations.
- `notes/` — AI call summaries, logs, custom voice/text notes.
- `search/` — Global index searches for call notes/contacts.
- `profile/` — User account details.
- `settings/` — Global configurations, permissions toggle.
- `notifications/` — History of push and local triggers.

#### Feature Directory Structure

Every feature should follow this structure (only create folders as needed):

```text
features/<feature-name>/
├── api/          # Feature-specific TanStack queries or direct API calls
├── components/   # UI components used only inside this feature
├── constants/    # Constants specific only to this feature
├── hooks/        # React hooks specific only to this feature
├── screens/      # Screen component implementations (e.g., HomeScreen.tsx)
├── services/     # Feature-specific services
├── types/        # Feature-specific TypeScript models/interfaces
├── utils/        # Feature-specific helper functions
└── index.ts      # Feature entry point (export screens and api)
```

---

### 3. `src/components/` (App-Wide UI Components)

For shared, presentation-only components that do not contain feature-specific business logic.

- **`components/ui/`**: Core reusable atomic UI elements (e.g., `Button`, `Input`, `Card`, `Modal`, `Avatar`, `Badge`, `Chip`, `SearchBar`).
- **`components/common/`**: App-wide utility components (e.g., `ParallaxScrollView`, `HelloWave`, `ExternalLink`, `HapticTab`).
- **`components/layouts/`**: Wrappers that structure views (e.g., standard layout shells, safe area containers).

---

### 4. `src/services/` (Infrastructure Wrappers)

Core wrapper services interfacing with third-party libraries or device APIs:

- `api/` — Axios instance (`apiClient`) with interceptors for token injection and error handling.
- `storage/` — MMKV wrapper (`StorageService`) for fast, synchronous key-value storage.
- `permissions/` — Centralized permissions checker and requester.
- `notifications/` — Push notifications handler (Expo Notifications).
- `contacts/` & `callLogs/` — Platform-specific integrations for syncing phone contacts and call events.

---

### 5. `src/store/` (Global State Management)

App-wide **Zustand** stores. Make sure to define TypeScript interfaces for state and actions, keeping stores focused and small:

- `auth.store.ts` — Authentication state, user details, login status.
- `settings.store.ts` — Device/UI configurations, onboarding status.
- `theme.store.ts` — User selected theme mode (`light` | `dark` | `system`).
- `contact.store.ts` — UI state for contacts search and filtering.

---

### 6. `src/theme/` (Design System)

All style tokens and design guidelines are defined here:

- `colors.ts` — Core hex colors and semantic light/dark mode color tokens.
- `typography.ts` — Typography system (Fonts, FontSizes, FontWeights, LineHeights).
- `spacing.ts` — Consistent layout spacing (based on a 4px base unit) and border radii.
- `light.ts` & `dark.ts` — React Navigation theme objects.

---

### 7. `src/constants/`, `src/types/`, `src/utils/` (Global Helpers)

- **`constants/`**: Global constants to prevent hardcoding (e.g., `routes.ts` for path navigation, `regex.ts` for validation patterns, `storage.ts` for storage keys).
- **`types/`**: Domain types split by domain (e.g., `auth.ts`, `contact.ts`, `call.ts`, `api.ts`).
- **`utils/`**: Helper utilities like `date.ts` (formatting dates/relative time), `phone.ts` (parsing and cleaning phone numbers), and `logger.ts` (custom dev log output).

---

## Code Styling & Quality

To ensure code consistency across all developers, we enforce linting and formatting standards:

- **Linting**: Run `npm run lint` or `npm run lint:fix` to run ESLint with React Native rules.
- **Formatting**: Run `npm run format` to auto-format all code with Prettier.
- **Pre-commit Hooks**: We use **Husky** and **lint-staged** to automatically run checks on modified files before they are committed. Commits will be blocked if linting or formatting checks fail.

---

## Import Rules

We use **TypeScript Path Aliases**. **Never** use relative directory paths:

```tsx
// ❌ BAD: Avoid long relative paths
import Button from '../../../../components/ui/Button';
import useAuth from '../../../features/auth/hooks/useAuth';

//  GOOD: Always use the @/* alias
import { Button } from '@/components/ui';
import { useAuthStore } from '@/store';
import { formatDate } from '@/utils/date';
```

---

## Quick Reference: Where Should I Put My Code?

| Scenario                                                            | Where to Put It                                                                                                    |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Creating a new screen (e.g. Activity feed)                          | `src/features/dashboard/screens/ActivityScreen.tsx` (and register the export in `src/features/dashboard/index.ts`) |
| Registering that screen's route in Expo Router                      | Create `app/activity.tsx` (export default re-exporting `ActivityScreen` via alias)                                 |
| Creating a custom button styled for the entire app                  | `src/components/ui/Button.tsx`                                                                                     |
| Calling a specific API route to fetch contacts                      | `src/features/contacts/api/getContacts.ts` (or standard `src/features/contacts/services/`)                         |
| Adding a regular expression to validate PAN card or tax ID          | `src/constants/regex.ts`                                                                                           |
| Storing a small user preference boolean like `hasSeenCallLogPrompt` | Add to `useSettingsStore` in `src/store/settings.store.ts`                                                         |
