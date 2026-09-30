import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Pelajaran', href: '#pelajaran' },
  { label: 'Sistem Belajar', href: '#sistem' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: '#kontak' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(23,43,77,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(23,43,77,0.15)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <a href="#beranda" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img
              src="/rumah-belajar-dh-logo.png"
              alt="Logo Rumah Belajar DH"
              style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}
            />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: '#fff', lineHeight: 1.2 }}>
              Rumah Belajar<br />
              <span style={{ fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Les Privat MIPA SMA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none' }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#fff'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              style={{
                marginLeft: 8,
                backgroundColor: '#F2C94C',
                color: '#172B4D',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                transition: 'all 0.2s',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e6b93a'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#F2C94C'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
          >
            <div style={{ width: 24, height: 2, backgroundColor: '#fff', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 24, height: 2, backgroundColor: '#fff', marginBottom: 5, borderRadius: 2 }} />
            <div style={{ width: 24, height: 2, backgroundColor: '#fff', borderRadius: 2 }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: '#F2C94C',
                color: '#172B4D',
                textDecoration: 'none',
                padding: '12px 20px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                textAlign: 'center',
                marginTop: 8,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </nav>
  )
}

function StemDecoration() {
  return (
    <svg
      viewBox="0 0 600 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', opacity: 0.12 }}
    >
      {/* Atom */}
      <ellipse cx="300" cy="250" rx="120" ry="45" fill="none" stroke="#F2C94C" strokeWidth="1.5" />
      <ellipse cx="300" cy="250" rx="120" ry="45" fill="none" stroke="#F2C94C" strokeWidth="1.5" transform="rotate(60 300 250)" />
      <ellipse cx="300" cy="250" rx="120" ry="45" fill="none" stroke="#F2C94C" strokeWidth="1.5" transform="rotate(120 300 250)" />
      <circle cx="300" cy="250" r="10" fill="#F2C94C" />
      <circle cx="300" cy="205" r="5" fill="#2F80ED" />

      {/* Formula text */}
      <text x="30" y="80" fill="#fff" fontSize="14" fontFamily="monospace" opacity="0.9">E = mc²</text>
      <text x="500" y="150" fill="#fff" fontSize="12" fontFamily="monospace" opacity="0.8">F = ma</text>
      <text x="60" y="400" fill="#fff" fontSize="13" fontFamily="monospace" opacity="0.8">∫f(x)dx</text>
      <text x="450" y="420" fill="#fff" fontSize="12" fontFamily="monospace" opacity="0.7">λ = h/mv</text>
      <text x="150" y="460" fill="#F2C94C" fontSize="11" fontFamily="monospace" opacity="0.8">ax² + bx + c = 0</text>

      {/* Grid lines */}
      <line x1="0" y1="0" x2="600" y2="500" stroke="#2F80ED" strokeWidth="0.5" />
      <line x1="600" y1="0" x2="0" y2="500" stroke="#2F80ED" strokeWidth="0.5" />
      <line x1="0" y1="250" x2="600" y2="250" stroke="#2F80ED" strokeWidth="0.5" />
      <line x1="300" y1="0" x2="300" y2="500" stroke="#2F80ED" strokeWidth="0.5" />

      {/* Dots at intersections */}
      <circle cx="150" cy="125" r="3" fill="#2F80ED" opacity="0.7" />
      <circle cx="450" cy="125" r="3" fill="#2F80ED" opacity="0.7" />
      <circle cx="150" cy="375" r="3" fill="#2F80ED" opacity="0.7" />
      <circle cx="450" cy="375" r="3" fill="#2F80ED" opacity="0.7" />

      {/* Sine wave */}
      <path d="M 0 350 Q 50 300 100 350 Q 150 400 200 350 Q 250 300 300 350 Q 350 400 400 350 Q 450 300 500 350 Q 550 400 600 350"
        fill="none" stroke="#F2C94C" strokeWidth="1.5" opacity="0.6" />

      {/* Triangle */}
      <polygon points="80,200 130,130 180,200" fill="none" stroke="#fff" strokeWidth="1" opacity="0.5" />
      <text x="98" y="215" fill="#fff" fontSize="10" fontFamily="monospace" opacity="0.6">90°</text>

      {/* Scattered circles */}
      <circle cx="520" cy="80" r="30" fill="none" stroke="#2F80ED" strokeWidth="1" />
      <circle cx="520" cy="80" r="15" fill="none" stroke="#F2C94C" strokeWidth="1" />

      {/* Axis arrows */}
      <line x1="400" y1="180" x2="570" y2="180" stroke="#fff" strokeWidth="1" />
      <line x1="400" y1="180" x2="400" y2="80" stroke="#fff" strokeWidth="1" />
      <polygon points="570,176 578,180 570,184" fill="#fff" />
      <polygon points="396,80 400,72 404,80" fill="#fff" />
      <path d="M 410 175 Q 440 140 470 160 Q 500 180 540 130" fill="none" stroke="#F2C94C" strokeWidth="1.5" />
    </svg>
  )
}

function HeroSection() {
  return (
    <section
      id="beranda"
      style={{
        background: 'linear-gradient(160deg, #0D1F3C 0%, #172B4D 50%, #1a3464 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Background STEM visual */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <StemDecoration />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        background: 'linear-gradient(to bottom, transparent, #F7F9FC)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 120px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ maxWidth: 680 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(242,201,76,0.15)',
            border: '1px solid rgba(242,201,76,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F2C94C' }} />
            <span style={{ color: '#F2C94C', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em' }}>
              Les Privat MIPA · SMA Kelas 10–12
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(34px, 5vw, 60px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.12,
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}>
            Belajar Lebih{' '}
            <span style={{ color: '#F2C94C' }}>Paham</span>,<br />
            Bukan Sekadar<br />Hafal Rumus
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.72)',
            fontSize: 'clamp(15px, 2vw, 18px)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 520,
          }}>
            Les privat Matematika, Fisika, dan Kimia untuk SMA kelas 10–12 dengan pengalaman mengajar selama 30 tahun.
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}>
            {[
              { icon: '🏆', label: '30 Tahun Pengalaman' },
              { icon: '📚', label: 'SMA Kelas 10–12' },
              { icon: '⏱', label: '90 Menit/Sesi' },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10,
                  padding: '10px 18px',
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a
              href="#kontak"
              style={{
                backgroundColor: '#F2C94C',
                color: '#172B4D',
                padding: '14px 32px',
                borderRadius: 12,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 15,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#e6b93a'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(242,201,76,0.35)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#F2C94C'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              Hubungi Kami
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#pelajaran"
              style={{
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 12,
                border: '2px solid rgba(255,255,255,0.25)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
              }}
            >
              Lihat Pelajaran
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="tentang" style={{ backgroundColor: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left: tutor card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{
              backgroundColor: '#F7F9FC',
              borderRadius: 24,
              padding: 36,
              border: '1px solid #E2E8F0',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative top-right */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: 'rgba(242,201,76,0.12)',
              }} />
              <div style={{
                position: 'absolute',
                top: -10,
                right: -10,
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'rgba(47,128,237,0.1)',
              }} />

              {/* Avatar placeholder */}
              <div style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: 'linear-gradient(135deg, #2F80ED 0%, #172B4D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  color: '#F2C94C',
                }}>DH</span>
              </div>

              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: '#172B4D',
                marginBottom: 4,
              }}>Dedi Herdiawan</h3>
              <p style={{ color: '#2F80ED', fontWeight: 600, fontSize: 14, marginBottom: 20 }}>
                Tutor & Pendiri Rumah Belajar DH
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '⭐', text: '30 tahun pengalaman mengajar' },
                  { icon: '🏫', text: 'Guru Fisika di SMA Negeri 1 Sumber' },
                  { icon: '🎯', text: 'Fokus pemahaman konsep mendalam' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                    <span style={{ color: '#475569', fontSize: 14, lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { value: '30+', label: 'Tahun Mengajar', color: '#2F80ED' },
                { value: '3', label: 'Mata Pelajaran', color: '#172B4D' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: '#F7F9FC',
                    border: '1px solid #E2E8F0',
                    borderRadius: 16,
                    padding: '20px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{stat.value}</div>
                  <div style={{ color: '#64748B', fontSize: 13, fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(47,128,237,0.08)',
              border: '1px solid rgba(47,128,237,0.2)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 20,
            }}>
              <span style={{ color: '#2F80ED', fontSize: 13, fontWeight: 600 }}>Tentang Kami</span>
            </div>

            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 800,
              color: '#172B4D',
              lineHeight: 1.2,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              Belajar Langsung<br />
              Bersama{' '}
              <span style={{ color: '#2F80ED' }}>Pak Dedi</span>
            </h2>

            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
              Rumah Belajar DH menyediakan pembelajaran tatap muka yang personal dengan fokus membantu siswa memahami materi sekolah secara mendalam — bukan sekadar menghafal rumus.
            </p>

            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              Dengan pengalaman lebih dari 30 tahun sebagai guru Fisika di SMA Negeri 1 Sumber, Pak Dedi memahami secara langsung pola kesulitan yang dihadapi siswa dalam pelajaran MIPA.
            </p>

            <div style={{
              backgroundColor: 'rgba(242,201,76,0.1)',
              border: '1px solid rgba(242,201,76,0.3)',
              borderLeft: '4px solid #F2C94C',
              borderRadius: 12,
              padding: '16px 20px',
            }}>
              <p style={{ color: '#172B4D', fontSize: 15, fontWeight: 600, fontStyle: 'italic', lineHeight: 1.6 }}>
                "Tujuan saya bukan hanya membantu siswa lulus ujian, tetapi memastikan mereka benar-benar paham konsep yang mendasarinya."
              </p>
              <p style={{ color: '#64748B', fontSize: 13, marginTop: 8, fontWeight: 500 }}>— Dedi Herdiawan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SUBJECTS = [
  {
    title: 'Matematika Wajib',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    color: '#2F80ED',
    bg: 'rgba(47,128,237,0.08)',
    topics: ['Aljabar & Fungsi', 'Trigonometri', 'Kalkulus', 'Statistika'],
    desc: 'Kuasai fondasi matematika yang wajib dikuasai seluruh siswa SMA.',
  },
  {
    title: 'Matematika Terapan',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: '#172B4D',
    bg: 'rgba(23,43,77,0.07)',
    topics: ['Matriks & Vektor', 'Program Linear', 'Peluang & Statistik', 'Barisan & Deret'],
    desc: 'Matematika untuk jurusan IPS dan terapan, dengan konteks nyata.',
  },
  {
    title: 'Fisika',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    topics: ['Mekanika', 'Termodinamika', 'Elektromagnetisme', 'Gelombang & Optik'],
    desc: 'Fisika dari konsep dasar hingga soal-soal tingkat lanjut.',
  },
  {
    title: 'Kimia',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 7h14l-4-7V3" />
      </svg>
    ),
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    topics: ['Stoikiometri', 'Kimia Organik', 'Termokimia', 'Larutan & pH'],
    desc: 'Kimia SMA dari struktur atom hingga reaksi organik.',
  },
]

function SubjectsSection() {
  return (
    <section id="pelajaran" style={{ backgroundColor: '#F7F9FC', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(47,128,237,0.08)',
            border: '1px solid rgba(47,128,237,0.2)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 16,
          }}>
            <span style={{ color: '#2F80ED', fontSize: 13, fontWeight: 600 }}>Mata Pelajaran</span>
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 800,
            color: '#172B4D',
            marginBottom: 14,
            letterSpacing: '-0.02em',
          }}>
            Pelajaran untuk Kelas 10–12
          </h2>
          <p style={{ color: '#64748B', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Fokus pada materi pembelajaran sekolah.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {SUBJECTS.map(subject => (
            <div
              key={subject.title}
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: 28,
                border: '1px solid #E2E8F0',
                boxShadow: '0 2px 12px rgba(23,43,77,0.06)',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(23,43,77,0.12)'
                ;(e.currentTarget as HTMLElement).style.borderColor = subject.color
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(23,43,77,0.06)'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#E2E8F0'
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                backgroundColor: subject.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                color: subject.color,
              }}>
                {subject.icon}
              </div>

              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: '#172B4D',
                marginBottom: 8,
              }}>{subject.title}</h3>

              <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                {subject.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {subject.topics.map(topic => (
                  <div
                    key={topic}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 13,
                      color: '#475569',
                    }}
                  >
                    <div style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      backgroundColor: subject.color,
                      flexShrink: 0,
                    }} />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Tatap Muka / Offline',
    desc: 'Pembelajaran langsung bertatap muka untuk interaksi yang lebih efektif.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Belajar di Rumah Pak Dedi',
    desc: 'Suasana belajar yang tenang dan kondusif di rumah tutor.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Durasi 90 Menit/Sesi',
    desc: 'Waktu yang cukup untuk pembahasan materi dan latihan soal mendalam.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Jadwal Fleksibel',
    desc: 'Atur jadwal sesuai kebutuhan dan waktu luang siswa.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Pembayaran Per Bulan',
    desc: 'Sistem pembayaran bulanan yang mudah dan transparan.',
  },
]

function SystemSection() {
  return (
    <section id="sistem" style={{
      background: 'linear-gradient(160deg, #172B4D 0%, #1a3464 100%)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative background */}
      <div style={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47,128,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -80,
        left: -80,
        width: 320,
        height: 320,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(242,201,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(242,201,76,0.12)',
            border: '1px solid rgba(242,201,76,0.25)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 16,
          }}>
            <span style={{ color: '#F2C94C', fontSize: 13, fontWeight: 600 }}>Sistem Belajar</span>
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            Belajar dengan Sistem yang{' '}
            <span style={{ color: '#F2C94C' }}>Fleksibel</span>
          </h2>
        </div>

        {/* Features grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}>
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: 28,
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(242,201,76,0.4)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                backgroundColor: i === 0 ? 'rgba(242,201,76,0.18)' : 'rgba(47,128,237,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 18,
                color: i === 0 ? '#F2C94C' : '#60a5fa',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: '#fff',
                marginBottom: 8,
              }}>{feature.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section id="lokasi" style={{ backgroundColor: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56,
          alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: 'rgba(47,128,237,0.08)',
              border: '1px solid rgba(47,128,237,0.2)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 20,
            }}>
              <span style={{ color: '#2F80ED', fontSize: 13, fontWeight: 600 }}>Lokasi</span>
            </div>

            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 'clamp(28px, 3vw, 42px)',
              fontWeight: 800,
              color: '#172B4D',
              lineHeight: 1.2,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              Lokasi<br />
              <span style={{ color: '#2F80ED' }}>Rumah Belajar DH</span>
            </h2>

            <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Pembelajaran dilaksanakan secara tatap muka di rumah Pak Dedi, suasana kondusif yang mendukung proses belajar.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                backgroundColor: '#F7F9FC',
                borderRadius: 14,
                padding: '16px 20px',
                border: '1px solid #E2E8F0',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: 'rgba(47,128,237,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: '#2F80ED',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: '#172B4D', fontSize: 15, marginBottom: 2 }}>
                    Perumahan Puri Sartika
                  </p>
                  <p style={{ color: '#64748B', fontSize: 14 }}>Sumber, Jawa Barat</p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                backgroundColor: 'rgba(242,201,76,0.08)',
                borderRadius: 14,
                padding: '16px 20px',
                border: '1px solid rgba(242,201,76,0.25)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: 'rgba(242,201,76,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: 18 }}>📍</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: '#172B4D', fontSize: 15, marginBottom: 2 }}>
                    ±1 km dari SMAN 1 Sumber
                  </p>
                  <p style={{ color: '#64748B', fontSize: 14 }}>Mudah dijangkau</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps location */}
          <div style={{
            backgroundColor: '#F7F9FC',
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 24px rgba(23,43,77,0.08)',
          }}>
            <iframe
              title="Peta lokasi Rumah Belajar DH di Puri Sartika, Sumber"
              src="https://www.google.com/maps?output=embed&q=Rumah%20Belajar%20DH%2C%20Sumber%2C%20Jawa%20Barat"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ display: 'block', width: '100%', height: 340, border: 0 }}
            />
            <a
              href="https://share.google/2pWJOYG3ZMoYKp7HF"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', padding: '16px 20px', color: '#2F80ED', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, textDecoration: 'none', backgroundColor: '#fff' }}
            >
              Buka lokasi di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="kontak" style={{
      background: 'linear-gradient(135deg, #172B4D 0%, #1e3a6e 50%, #172B4D 100%)',
      padding: '96px 24px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(47,128,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Decorative formula lines */}
      <div style={{ position: 'absolute', top: 30, left: 40, opacity: 0.12, fontFamily: 'monospace', color: '#F2C94C', fontSize: 14 }}>
        E = mc²
      </div>
      <div style={{ position: 'absolute', bottom: 30, right: 60, opacity: 0.1, fontFamily: 'monospace', color: '#fff', fontSize: 13 }}>
        F = ma
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          backgroundColor: 'rgba(242,201,76,0.12)',
          border: '1px solid rgba(242,201,76,0.25)',
          borderRadius: 100,
          padding: '6px 16px',
          marginBottom: 24,
        }}>
          <span style={{ color: '#F2C94C', fontSize: 13, fontWeight: 600 }}>Daftar Sekarang</span>
        </div>

        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          lineHeight: 1.15,
          marginBottom: 18,
          letterSpacing: '-0.02em',
        }}>
          Siap Belajar Bareng<br />
          <span style={{ color: '#F2C94C' }}>Pak Dedi?</span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
          Hubungi Rumah Belajar DH untuk informasi jadwal dan pendaftaran.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <a
            href="https://wa.me/6285155356549"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: '#25D366',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: 17,
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#1fb958'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.3)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hubungi via WhatsApp
          </a>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.18 19.79 19.79 0 011.28 4.21 2 2 0 013.26 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.16 6.16l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.02em' }}>
              0851-5535-6549
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0D1F3C',
      padding: '48px 24px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 24,
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8,
                background: 'linear-gradient(135deg, #2F80ED 0%, #172B4D 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#F2C94C', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13 }}>DH</span>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: '#fff', fontSize: 16 }}>
                Rumah Belajar DH
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6 }}>
              Les Privat Matematika • Fisika • Kimia<br />
              SMA Kelas 10–12
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  fontSize: 13,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 36,
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          color: 'rgba(255,255,255,0.3)',
          fontSize: 12,
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Rumah Belajar DH · Perumahan Puri Sartika, Sumber
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SubjectsSection />
      <SystemSection />
      <LocationSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
