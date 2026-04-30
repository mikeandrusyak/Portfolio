import Head from 'next/head';
import { experience } from '../data/experience';
import { cvConfig } from '../data/cv';
import { QRCode } from '../components/cv/QRCode';
import { Mail, Phone, Globe, Github, Linkedin, Printer, MapPin } from 'lucide-react';

const ACCENT = '#c0392b';

export default function CV() {
  return (
    <>
      <Head>
        <title>{`${cvConfig.name} — CV`}</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* Print button — hidden on print */}
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>
      </div>

      <main
        className="no-bg min-h-screen py-10"
        style={{ background: '#f5f5f0' }}
      >
        <div
          className="cv-page mx-auto bg-white shadow-lg"
          style={{ maxWidth: '794px', padding: '32px 44px', fontFamily: 'Inter, SF Pro Display, Segoe UI, Arial, sans-serif', color: '#1a1a1a' }}
        >
          {/* ── Header ─────────────────────────────────────── */}
          <header style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
              {/* Left: name + summary */}
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px', margin: 0, color: '#1a1a1a' }}>
                  {cvConfig.name}
                </h1>
                <p style={{ fontSize: '14px', color: ACCENT, fontWeight: 600, margin: '4px 0 12px' }}>
                  {cvConfig.title}
                </p>
                <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.6, margin: 0, maxWidth: '420px' }}>
                  {cvConfig.summary}
                </p>
              </div>

              {/* Right: QR codes */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexShrink: 0 }}>
                <QRCode value={cvConfig.contact.website} label="Website" size={60} />
                <QRCode value={cvConfig.contact.githubUrl} label="GitHub" size={60} />
                <QRCode value={cvConfig.contact.linkedinUrl} label="LinkedIn" size={60} />
              </div>
            </div>

            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px', fontSize: '12px', color: '#555' }}>
              <ContactItem icon={<MapPin size={12} />} text={cvConfig.location} />
              <ContactItem icon={<Mail size={12} />} text={cvConfig.contact.email} href={`mailto:${cvConfig.contact.email}`} />
              <ContactItem icon={<Phone size={12} />} text={cvConfig.contact.phone} href={`tel:${cvConfig.contact.phone.replace(/\s/g, '')}`} />
              <ContactItem icon={<Globe size={12} />} text={cvConfig.contact.website.replace('https://', '')} href={cvConfig.contact.website} />
              <ContactItem icon={<Github size={12} />} text={cvConfig.contact.githubLabel} href={cvConfig.contact.githubUrl} />
              <ContactItem icon={<Linkedin size={12} />} text={cvConfig.contact.linkedinLabel} href={cvConfig.contact.linkedinUrl} />
            </div>
          </header>

          <Divider />

          {/* ── Experience ──────────────────────────────────── */}
          <Section title="Experience">
            {experience.map((exp, idx) => (
              <div key={idx} className="cv-section" style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: '14px' }}>{exp.title}</span>
                    <span style={{ color: '#555', fontSize: '13px' }}> @ {exp.company}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: '#888', whiteSpace: 'nowrap', marginLeft: '12px' }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#555', margin: '4px 0 6px', lineHeight: 1.5 }}>
                  {exp.description}
                </p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul style={{ margin: '2px 0 4px', paddingLeft: '14px' }}>
                    {exp.achievements.map((a, i) => (
                      <li key={i} style={{ fontSize: '11px', color: '#444', lineHeight: 1.4, marginBottom: '1px' }}>
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                  {exp.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Divider />

          {/* ── Education ───────────────────────────────────── */}
          <Section title="Education">
            {cvConfig.education.map((edu, idx) => (
              <div key={idx} className="cv-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>{edu.degree}</span>
                  <span style={{ color: '#555', fontSize: '13px' }}> — {edu.institution}</span>
                  {edu.location && <span style={{ color: '#888', fontSize: '12px' }}>, {edu.location}</span>}
                </div>
                <span style={{ fontSize: '12px', color: '#888', whiteSpace: 'nowrap', marginLeft: '12px' }}>{edu.period}</span>
              </div>
            ))}
          </Section>

          <Divider />

          {/* ── Skills ──────────────────────────────────────── */}
          <Section title="Skills">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {cvConfig.skills.map((group) => (
                <div key={group.category} style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#555', minWidth: '96px' }}>{group.category}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          {/* ── Languages ───────────────────────────────────── */}
          <Section title="Languages">
            <div style={{ display: 'flex', gap: '32px' }}>
              {cvConfig.languages.map((lang) => (
                <div key={lang.name} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontWeight: 600, fontSize: '13px' }}>{lang.name}</span>
                  <span style={{ fontSize: '11px', color: '#888' }}>{lang.level}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Portfolio note ──────────────────────────────── */}
          <div style={{ textAlign: 'center', paddingTop: '4px' }}>
            <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>
              Full project portfolio available at{' '}
              <a href={cvConfig.contact.website} style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
                {cvConfig.contact.website.replace('https://', '')}
              </a>
            </p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .cv-page { box-shadow: none !important; padding: 0 !important; max-width: 100% !important; }
          .cv-section { break-inside: avoid; }
          @page { size: A4; margin: 8mm 12mm; }
        }
      `}</style>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '14px' }}>
      <h2 style={{
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: ACCENT,
        margin: '0 0 8px',
        paddingBottom: '3px',
        borderBottom: `1px solid ${ACCENT}22`,
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '10px 0' }} />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: '10px',
      padding: '2px 7px',
      borderRadius: '3px',
      background: '#f0f0ec',
      color: '#444',
      border: '1px solid #ddd',
    }}>
      {children}
    </span>
  );
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const inner = (
    <>
      {icon}
      <span>{text}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#555', textDecoration: 'none' }}>
        {inner}
      </a>
    );
  }
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#555' }}>
      {inner}
    </span>
  );
}
