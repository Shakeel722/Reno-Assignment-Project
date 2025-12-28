import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        School Management System
      </h1>

      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Web Assignment Project
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/addSchool">
          <button style={buttonStyle}>Add School</button>
        </Link>

        <Link href="/showSchools">
          <button style={buttonStyle}>View Schools</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#2563eb',
  color: '#fff',
  cursor: 'pointer',
};
