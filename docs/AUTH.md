# HSK Tutor AI - Authentication Documentation

## Overview
HSK Tutor AI uses **Better Auth** for its authentication and user management system. The platform is configured to use **Native Scholar Authentication** (Built-in Auth Plugins) instead of third-party social providers, ensuring a focused and professional scholar experience.

## Authentication Methods

### 1. Magic Link (Passwordless)
- Users can sign in by requesting a secure link sent to their email.
- This provides the lowest friction entry while maintaining high security.

### 2. Email OTP (One-Time Password)
- Standard 6-digit code verification for sign-in and enrollment.
- Can be used alongside or as an alternative to passwords.

### 3. Passkeys (WebAuthn)
- Secure, biometric authentication (FaceID, TouchID, Windows Hello).
- Recommended for all scholars to ensure "Fast-Track" secure entry.

### 4. Two-Factor Authentication (2FA)
- Users can enable an extra layer of security via TOTP (standard authenticator apps).

### 5. Email & Password (Fallback)
- Traditional credential-based authentication.

## Setup & Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and fill in the following:

```env
# Better Auth
BETTER_AUTH_SECRET=your_generated_secret_here
BETTER_AUTH_URL=http://localhost:3000

# Database (Postgres)
DATABASE_URL=postgres://user:pass@host:port/dbname

# Email Service (Required for Magic Link & OTP)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=HSK Tutor AI <noreply@hsk-tutor.ai>
```

### Local Development
1. **Initialize Database**:
   ```bash
   npx drizzle-kit push
   ```
2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

## User Roles & Authorization
- **Role: `user`**: standard access to learning dashboard and profile.
- **Role: `admin`**: access to the internal user management interface.

### Authorization Helpers
- **Client-side**: Use `authClient.useSession()` for UI state.
- **Server-side**: Use `auth.api.getSession(ctx)` or standard Next.js middleware guards.

## Security Architecture
- **Persistent Progress**: Your scholar identity is tied to the PostgreSQL database via Drizzle ORM.
- **Biometric Vault**: Passkey support ensures that your account is protected by hardware-level security.
- **Zero Third-Party dependencies**: We do not rely on Google, Apple, or Meta for identity, ensuring total data sovereignty.

---
*Maintained by MedKhed & HSK Tutor AI Security Team.*
