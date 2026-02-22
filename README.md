# CurieOsity (aka ClarityTensor)

CurieOsity is a minimalist AI-assisted study platform focused on deep work, active recall, and sustainable exam preparation.

## Product Direction

### Core UX principles
- Minimalist interface with no immediate popups.
- Calm, low-distraction study-first design.
- Offline-friendly architecture where feasible.

### Feature roadmap

#### 1) Focus & consistency
- Environment themes (rainy/sunny) with matching audio ambience.
- Exam deadlines, notifications, and weekly pre-exam study meeting planner.
- Progress bar, time tracking, and study streaks.
- Smart break scheduling and built-in mini games.

#### 2) AI-powered learning loop
- Random 5-question pop quizzes for active recall.
- AI flashcard creation from uploaded notes.
- Topic-only video discovery from notes.
- Past paper aggregation from multiple sources.

#### 3) Wellbeing and distraction awareness
- Noise-level alerts (dB threshold checker).
- On-device lighting awareness via lightweight vision model.
- Sleep schedule nudges to prevent overstress.

#### 4) Social motivation
- Collaborative study groups.
- Availability voting for group sessions.
- Global leaderboard.

#### 5) Media + integrations
- Spotify playlist controller.
- AI podcast generator (Piper TTS) with local MP3 download.
- Google login + Gmail/Drive ecosystem fit.

## Data architecture
1. User signs in with Google account.
2. User grants Google Drive permissions.
3. CurieOsity creates an app-specific Google Drive folder/workspace.
4. User content uploaded to CurieOsity is written to Drive.
5. Content reads/writes are served from Drive as the source of truth for study assets.
6. Firebase or MongoDB Atlas stores app metadata (leaderboard, study time, streaks, collaboration state).

## Local development

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
npm install
npm start
```

## Vercel deployment
This repo is now structured for Vercel with:
- React static build from `frontend/`.
- Serverless API from `api/index.js` (which reuses the Express app in `backend/app.js`).

### One-time setup
1. Import this repository into Vercel.
2. Keep project root at repository root.
3. Vercel will use `vercel.json` for build/routes.
4. Add environment variables for Google/Firebase/Spotify credentials in the Vercel dashboard.

### API routes
- `GET /api/health`
- `POST /api/auth/google`
- `GET /api/auth/spotify`
- `GET /api/auth/google-drive`

## Suggested build phases
- **Phase 1 (MVP):** login, Drive-backed storage, time tracking, progress/streaks, flashcards, quiz mode.
- **Phase 2:** deadlines/notifications, collaboration, leaderboard, Spotify control.
- **Phase 3:** distraction awareness (dB + lighting), offline enhancements, podcast generation.
