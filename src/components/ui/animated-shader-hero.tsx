'use client';

import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

/* ─── Green nebula shader ──────────────────────────────────────────────────
   Adapted from Matthias Hurrle (@atzedent) original.
   Palette shifted to the site's forest-green: vec3 reordering + final tint.
   ─────────────────────────────────────────────────────────────────────────── */
const SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p){
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
float noise(in vec2 p){
  vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);
  return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),
             mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);
}
float fbm(vec2 p){
  float t=.0,a=1.;
  mat2 m=mat2(1.,-.5,.2,1.2);
  for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}
  return t;
}
float clouds(vec2 p){
  float d=1.,t=.0;
  for(float i=.0;i<3.;i++){
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);d=a;p*=2./(i+1.);
  }
  return t;
}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.4,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    // vec3(2.8,1.0,1.8) shifts nebula palette toward green
    col+=.0013/d*(cos(sin(i)*vec3(2.8,1.0,1.8))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.0018*b/length(max(p,vec2(b*p.x*.02,p.y)));
    // dark forest-green background
    col=mix(col,vec3(bg*.03,bg*.18,bg*.05),d);
  }
  // final tint: cap R/B, keep G at full → site green
  col*=vec3(0.3,1.0,0.42);
  O=vec4(col,1);
}`;

/* ─── Minimal WebGL2 setup ─────────────────────────────────────────────────── */
function initGL(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl2');
  if (!gl) return null;

  const mkShader = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
    }
    return s;
  };

  const VERT = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

  const vs  = mkShader(gl.VERTEX_SHADER, VERT);
  const fs  = mkShader(gl.FRAGMENT_SHADER, SHADER);
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,1,-1,-1,1,1,1,-1]), gl.STATIC_DRAW);
  const posLoc = gl.getAttribLocation(prog, 'position');
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    prog,
    uRes:  gl.getUniformLocation(prog, 'resolution'),
    uTime: gl.getUniformLocation(prog, 'time'),
    vs, fs, buf,
  };
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const labelRef   = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const nameRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  /* WebGL render loop */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = initGL(canvas);
    if (!ctx) return;
    const { gl, prog, uRes, uTime, vs, fs, buf } = ctx;

    let raf: number;
    let start: number | null = null;

    const render = (now: number) => {
      if (start === null) start = now;
      gl.useProgram(prog);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };

    const resize = () => {
      const dpr = Math.max(1, 0.5 * devicePixelRatio);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      gl.deleteBuffer(buf);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(prog);
    };
  }, []);

  /* GSAP entrance animations */
  useEffect(() => {
    const label   = labelRef.current;
    const tagline = taglineRef.current;
    const name    = nameRef.current;
    const cta     = ctaRef.current;
    if (!label || !tagline || !name || !cta) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(label,   { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0.4);
    tl.fromTo(tagline, { y: 70,  opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, 0.6);
    tl.fromTo(name,    { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.3);
    tl.fromTo(cta,     { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.55);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#080D08' }}
    >
      {/* WebGL shader canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* Gradient fade — dark to cream so sections below connect cleanly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, transparent 68%, rgba(245,240,232,0.35) 82%, rgba(245,240,232,0.82) 92%, #F5F0E8 100%)',
          zIndex: 5,
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center h-full min-h-[100svh] px-8 md:px-20 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Role label */}
        <p
          ref={labelRef}
          className="font-condensed uppercase text-xs tracking-[0.55em] mb-12 opacity-0"
          style={{ color: '#8FB87A', fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Brand &amp; Digital Strategist
        </p>

        {/* Main tagline */}
        <h1
          ref={taglineRef}
          className="font-display font-black italic text-bg leading-[0.9] opacity-0"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3.2rem, 9.5vw, 10.5rem)',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 40px rgba(0,0,0,0.6)',
          }}
        >
          Lancia il tuo<br />brand in orbita
        </h1>

        {/* Divider */}
        <div
          className="my-9 h-px w-14"
          style={{ background: 'rgba(143,184,122,0.45)' }}
        />

        {/* Name */}
        <p
          ref={nameRef}
          className="font-condensed uppercase tracking-[0.45em] text-sm opacity-0"
          style={{
            color: 'rgba(245,240,232,0.60)',
            fontFamily: 'var(--font-barlow-condensed)',
          }}
        >
          Samuele Barchet
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex items-center gap-4 mt-12 opacity-0">
          <a
            href="/#collaborazioni"
            className="inline-flex items-center gap-2 px-7 py-3 font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              background: 'var(--green)',
              color: 'var(--bg)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--green-mid)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--green)')}
          >
            Scopri i lavori
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/#contact"
            className="font-condensed uppercase text-sm tracking-[0.2em] transition-colors duration-300 underline underline-offset-4"
            style={{
              fontFamily: 'var(--font-barlow-condensed)',
              color: 'rgba(245,240,232,0.75)',
              textDecorationColor: 'rgba(143,184,122,0.55)',
              textShadow: '0 1px 8px rgba(0,0,0,0.7)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F0E8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
          >
            Scrivimi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: 0.3, zIndex: 10 }}
      >
        <div
          className="w-px origin-top"
          style={{
            height: 48,
            background: 'var(--green-light)',
            animation: 'scaleY 1.8s ease-in-out infinite alternate',
          }}
        />
      </div>
    </section>
  );
}
