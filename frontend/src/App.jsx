import React from 'react';

const sectionStyle = {
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: '1rem',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
};

const App = () => {
  const featureGroups = [
    {
      title: 'Focus & Study Flow',
      items: [
        'Ambient themes (rainy/sunny) with matching soundscapes',
        'Exam deadlines, reminders, and study meeting scheduling',
        'Progress bars, streak tracking, and distraction-aware time tracker',
        'Break planner with lightweight built-in games'
      ]
    },
    {
      title: 'Learning Intelligence',
      items: [
        'Random 5-question pop quizzes for active recall',
        'AI flashcard maker from uploaded notes',
        'Topic-filtered video recommendations based on notes',
        'Past-paper support from multiple sources'
      ]
    },
    {
      title: 'AI Assist Features',
      items: [
        'Noise-level awareness via on-device dB threshold checks',
        'Lighting awareness via lightweight on-device vision model',
        'AI podcast generation with Piper TTS and local MP3 export'
      ]
    },
    {
      title: 'Social & Motivation',
      items: [
        'Collaboration spaces for shared study',
        'Global leaderboard for accountable progress',
        'Sleep schedule prompts to reduce burnout'
      ]
    }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f8fafc',
      color: '#0f172a',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      padding: '2rem'
    }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <header style={{ marginBottom: '1.5rem' }}>
          <p style={{ margin: 0, color: '#475569', fontWeight: 600 }}>Product Blueprint</p>
          <h1 style={{ margin: '0.5rem 0', fontSize: '2rem' }}>CurieOsity (working alias: ClarityTensor)</h1>
          <p style={{ margin: 0, maxWidth: '760px', color: '#334155', lineHeight: 1.5 }}>
            A minimalist, low-distraction study platform that combines AI-powered learning support,
            accountability systems, and Google Drive-centric user data ownership.
          </p>
        </header>

        <section style={{ ...sectionStyle, marginBottom: '1.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Design Direction</h2>
          <ul style={{ marginBottom: 0, lineHeight: 1.7 }}>
            <li>Minimalist interface with no intrusive pop-ups on launch.</li>
            <li>Calm visual style focused on study-first interactions.</li>
            <li>Offline-first mindset for high-reliability learning sessions.</li>
          </ul>
        </section>

        <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {featureGroups.map((group) => (
            <article key={group.title} style={sectionStyle}>
              <h3 style={{ marginTop: 0 }}>{group.title}</h3>
              <ul style={{ marginBottom: 0, lineHeight: 1.6 }}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section style={{ ...sectionStyle, marginTop: '1.5rem' }}>
          <h2 style={{ marginTop: 0 }}>Data Architecture Snapshot</h2>
          <ol style={{ marginBottom: 0, lineHeight: 1.7 }}>
            <li>User signs in with Google OAuth.</li>
            <li>User grants Google Drive permission.</li>
            <li>App creates an app-specific Drive workspace for uploads and generated content.</li>
            <li>Primary study files are read/written through Google Drive APIs.</li>
            <li>Firebase or MongoDB Atlas stores app metadata (leaderboards, streaks, collaboration state).</li>
          </ol>
        </section>
      </section>
    </main>
  );
};

export default App;
