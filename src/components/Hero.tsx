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
  // faster cloud movement
  float bg=clouds(vec2(st.x+T*.6,-st.y));
  // more swirl amplitude
  uv*=1.-.38*(sin(T*.28)*.5+.5);
  for(float i=1.;i<12.;i++){
    // larger displacement + faster time factor
    uv+=.14*cos(i*vec2(.1+.01*i,.8)+i*i+T*.75+.13*uv.x);
    vec2 p=uv;
    float d=length(p);
    // brighter glow spots
    col+=.002/d*(cos(sin(i)*vec3(2.8,1.0,1.8))+1.);
    float b=noise(i+p+bg*1.731);
    // brighter nebula wisps
    col+=.003*b/length(max(p,vec2(b*p.x*.02,p.y)));
    // richer green background
    col=mix(col,vec3(bg*.04,bg*.22,bg*.07),d);
  }
  // final tint: boost green channel past 1 (clamped by WebGL output)
  col*=vec3(0.38,1.18,0.5);
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

    // Use ResizeObserver so canvas tracks section height, not window height
    const resize = () => {
      const dpr = Math.max(1, 0.5 * devicePixelRatio);
      const rect = canvas.getBoundingClientRect();
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
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
      style={{ background: '#080D08' }}
    >
      {/* WebGL shader canvas — fills section height set by content */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none pointer-events-none"
      />


      {/* Content — padding-top clears fixed nav, padding-bottom closes section */}
      <div
        className="relative flex flex-col items-center text-center px-8 md:px-20"
        style={{ zIndex: 10, paddingTop: 'calc(var(--nav-h, 64px) + 5rem)', paddingBottom: '5rem' }}
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
          Ciao regina<br />galattica sei<br />molto bella 👑
        </h1>
        <img src="/regina.jpg" alt="regina galattica" style={{ marginTop: '2rem', width: 'clamp(200px, 40vw, 420px)', borderRadius: '1rem', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }} />

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
    </section>
  );
}
