import { ImageResponse } from 'next/og';
import { PROFILE } from '@/lib/site';

export const alt = `${PROFILE.name} — ${PROFILE.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #080D16 0%, #002B4A 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 44, height: 4, background: '#F2BF42' }} />
          <div
            style={{
              color: '#F2BF42',
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
            }}
          >
            Portafolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              color: '#E9EEF6',
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -1,
            }}
          >
            {PROFILE.name}
          </div>
          <div style={{ color: '#94A3B8', fontSize: 32 }}>{PROFILE.title}</div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #1D2B41',
            paddingTop: 28,
            color: '#94A3B8',
            fontSize: 24,
          }}
        >
          <div style={{ display: 'flex' }}>Canvas LMS · Moodle · Python · Ciberseguridad</div>
          <div style={{ display: 'flex', color: '#F2BF42' }}>Loja, Ecuador</div>
        </div>
      </div>
    ),
    size,
  );
}
