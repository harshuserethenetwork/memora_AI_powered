# 🌿 Git Branching Strategy

This document defines the Git branching strategy followed by the project. Every contributor must adhere to these conventions to keep the repository organized and maintain a clean commit history.

---

# Branch Overview

| Branch       | Purpose                                                                |
| ------------ | ---------------------------------------------------------------------- |
| `main`       | Production-ready code. Always stable and deployable.                   |
| `develop`    | Integration branch where completed features are merged before release. |
| `feature/*`  | Development of new features.                                           |
| `bugfix/*`   | Fixes for bugs found during development or testing.                    |
| `hotfix/*`   | Critical fixes for production issues.                                  |
| `release/*`  | Release preparation, testing, and version stabilization.               |
| `chore/*`    | Maintenance tasks that don't affect application functionality.         |
| `docs/*`     | Documentation updates only.                                            |
| `refactor/*` | Code restructuring without changing functionality.                     |
| `test/*`     | Adding or updating automated tests.                                    |
| `ci/*`       | CI/CD pipeline and GitHub Actions related changes.                     |

---

# Branch Workflow

```text
feature/*
      │
      ▼
Pull Request
      │
      ▼
develop
      │
      ▼
release/*
      │
      ▼
main
```

For production emergencies:

```text
main
  │
  ▼
hotfix/*
  │
  ▼
main
  │
  ▼
develop
```

---

# Branch Naming Convention

Use lowercase letters and hyphens (`-`) only.

## Feature

```text
feature/user-authentication
feature/contact-sync
feature/ai-reminders
feature/settings-screen
```

---

## Bug Fix

```text
bugfix/login-crash
bugfix/profile-image-upload
bugfix/theme-switch
```

---

## Hotfix

```text
hotfix/payment-failure
hotfix/push-notification
hotfix/api-timeout
```

---

## Release

```text
release/v1.0.0
release/v1.1.0
release/v2.0.0
```

---

## Chore

```text
chore/update-dependencies
chore/configure-eslint
chore/setup-husky
```

---

## Documentation

```text
docs/update-readme
docs/api-documentation
docs/architecture
```

---

## Refactor

```text
refactor/auth-module
refactor/navigation
refactor/api-client
```

---

## Tests

```text
test/auth
test/profile
test/api
```

---

## CI/CD

```text
ci/github-actions
ci/eas-build
ci/codeql
```

---

# Branch Rules

## main

- Protected branch
- No direct commits
- Merge via Pull Request only
- All required status checks must pass
- Requires at least one approval
- Always production-ready

---

## develop

- Protected branch
- No direct commits
- Merge via Pull Request only
- Used for integration and testing
- Must remain stable

---

## Feature Branches

- Created from `develop`
- One feature per branch
- Delete after merge
- Keep branches focused and short-lived

---

## Hotfix Branches

- Created from `main`
- Merge back into both `main` and `develop`
- Reserved for production issues only

---

## Release Branches

- Created from `develop`
- Only bug fixes and release-related changes allowed
- Merge into `main` after QA approval
- Merge back into `develop`

---

# Branch Lifecycle

```text
develop
   │
   ├── feature/login
   ├── feature/profile
   ├── feature/settings
   │
   ▼
Pull Request
   │
   ▼
develop
   │
   ▼
release/v1.0.0
   │
   ▼
main
```

---

# Best Practices

- Create one branch for one task.
- Keep Pull Requests small and focused.
- Rebase or update your branch regularly with `develop`.
- Delete merged branches.
- Never commit directly to `main`.
- Never force push to protected branches.
- Write meaningful commit messages using Conventional Commits.
- Ensure all CI checks pass before requesting a review.

---

# Branch Creation Commands

Create a feature branch:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/user-authentication
```

Create a bugfix branch:

```bash
git checkout develop
git pull origin develop
git checkout -b bugfix/login-crash
```

Create a hotfix branch:

```bash
git checkout main
git pull origin main
git checkout -b hotfix/payment-failure
```

Create a release branch:

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

---

# Pull Request Target

| Source Branch | Target Branch |
| ------------- | ------------- |
| feature/*     | develop       |
| bugfix/*      | develop       |
| chore/*       | develop       |
| docs/*        | develop       |
| refactor/*    | develop       |
| test/*        | develop       |
| ci/*          | develop       |
| release/*     | main          |
| hotfix/*      | main          |

---

# Version

This branching strategy is based on a simplified Git Flow workflow and is intended for collaborative development of the Memora application.
