@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');

:root {
  --ink: #24231f;
  --paper: #f7f4ed;
  --orange: #d96b4d;
  --muted: #817d73;
  --line: #e2ddd2;
  --lime: #dce4c5;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(ellipse at 88% 8%, rgba(220,228,197,.35), transparent 28%),
    var(--paper);
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  letter-spacing: -.01em;
}

a {
  color: inherit;
  text-decoration: none;
}

.wrap {
  width: min(1200px, calc(100% - 64px));
  margin: auto;
}

/* NAVIGATION */

.top {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(226,221,210,.85);
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(247,244,237,.88);
  backdrop-filter: blur(14px);
}

.logo {
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -1.4px;
}

.logo span {
  color: var(--orange);
}

nav {
  display: flex;
  gap: 28px;
  font-size: 12px;
  letter-spacing: .02em;
}

nav a,
.contactlinks a {
  transition: color .2s ease;
}

nav a:hover,
.contactlinks a:hover {
  color: var(--orange);
}

.navright {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.mono,
.eyebrow {
  font-family: 'DM Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 1.55px;
  font-size: 9px;
  color: var(--muted);
}

/* HERO */

.hero {
  padding: 104px 0 96px;
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  gap: 72px;
  align-items: center;
}

h1 {
  font-size: clamp(62px, 8.7vw, 118px);
  line-height: .91;
  letter-spacing: -8px;
  margin: 25px 0 28px;
  font-weight: 600;
}

h1 em {
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: var(--orange);
  letter-spacing: -5px;
}

.intro {
  max-width: 520px;
  font-size: 16px;
  line-height: 1.85;
  color: #6b685f;
}

.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.chip {
  background: rgba(255,255,255,.36);
  border: 1px solid #ded8cb;
  border-radius: 30px;
  padding: 10px 15px;
  font-size: 11px;
  transition: transform .2s ease, border-color .2s ease;
}

.chip:hover {
  transform: translateY(-3px);
  border-color: var(--orange);
}

.hero-art {
  height: 430px;
  background: linear-gradient(145deg,#e2e8d0,#cdd8b7);
  border-radius: 46% 46% 12px 12px;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  box-shadow: 0 22px 55px rgba(65,61,46,.08);
}

.sun {
  width: 235px;
  height: 235px;
  border-radius: 50%;
  background: #e58a68;
  position: absolute;
  top: 35px;
  right: 26px;
  box-shadow: inset -14px -14px 0 rgba(165,75,48,.08);
}

.abstract {
  width: 205px;
  height: 255px;
  background: var(--paper);
  border-radius: 100px 100px 20px 20px;
  position: relative;
  z-index: 1;
  transform: rotate(-8deg);
  border: 2px solid var(--ink);
  box-shadow: 10px 14px 0 rgba(36,35,31,.08);
}

.abstract:before {
  content: '';
  position: absolute;
  width: 118px;
  height: 118px;
  border: 2px solid var(--ink);
  border-radius: 50%;
  left: 42px;
  top: 40px;
  background: var(--orange);
}

.abstract:after {
  content: '✳';
  font-size: 90px;
  position: absolute;
  left: 55px;
  top: 140px;
  color: var(--ink);
}

.scribble {
  position: absolute;
  z-index: 2;
  bottom: 25px;
  left: 22px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 27px;
  transform: rotate(-9deg);
}

/* GENERAL SECTIONS */

.section {
  padding: 86px 0;
  border-top: 1px solid var(--line);
}

.sectionhead {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
}

.sectionhead h2 {
  font-size: clamp(36px,4vw,48px);
  letter-spacing: -2.5px;
  margin: 8px 0 0;
}

.sectionhead h2 em {
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: var(--orange);
}

/* ABOUT */

.aboutgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
}

.aboutcopy {
  font-size: 17px;
  line-height: 1.95;
  color: #56534c;
  max-width: 550px;
}

.aboutnote {
  background: linear-gradient(145deg,#eee9df,#e9e3d7);
  border: 1px solid #e1dbcf;
  border-radius: 12px;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 240px;
}

.aboutnote strong {
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.2;
}

/* EDUCATION */

.education {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.edu {
  background: rgba(255,255,255,.32);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 28px;
  min-height: 150px;
  transition: transform .25s ease, box-shadow .25s ease;
}

.edu:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgba(55,49,39,.08);
}

.edu .year {
  font: 11px 'DM Mono';
  color: var(--orange);
}

.edu h3 {
  font-size: 21px;
  letter-spacing: -.6px;
  margin: 18px 0 5px;
}

.edu p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}

/* SKILLS */

.skills {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 13px;
}

.skill {
  background: #eeebe2;
  border: 1px solid #e6e0d5;
  border-radius: 10px;
  min-height: 125px;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform .25s ease, box-shadow .25s ease;
}

.skill:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgba(55,49,39,.08);
}

.skill b {
  font-size: 16px;
  letter-spacing: -.35px;
}

.skill small {
  font: 10px 'DM Mono';
  color: var(--muted);
  text-transform: uppercase;
}

/* CLICKABLE PROJECT TILES */

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.project {
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  background: rgba(255,255,255,.22);
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
}

.project:hover {
  transform: translateY(-7px);
  box-shadow: 0 18px 38px rgba(55,49,39,.12);
}

.project:focus-visible {
  outline: 3px solid var(--orange);
  outline-offset: 5px;
}

.projectvisual {
  height: 275px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  transition: filter .25s ease;
}

.project:nth-child(1) .projectvisual {
  background: linear-gradient(135deg,#e9b09a,#d98970);
}

.project:nth-child(2) .projectvisual {
  background: linear-gradient(135deg,#d4ddc8,#aebd9e);
}

.project:nth-child(3) .projectvisual {
  background: linear-gradient(135deg,#eee2bd,#d8c68e);
}

.project:nth-child(4) .projectvisual {
  background: linear-gradient(135deg,#d2cbe1,#aaa0c6);
}

.projectvisual span {
  font-family: 'Playfair Display', serif;
  font-size: clamp(34px,4.5vw,60px);
  font-style: italic;
  text-align: center;
  line-height: 1.05;
  max-width: 80%;
  z-index: 1;
  transition: transform .3s ease;
}

.project:hover .projectvisual span {
  transform: scale(1.06);
}

.projectvisual:after {
  content: '';
  position: absolute;
  width: 170px;
  height: 170px;
  border: 1px solid rgba(34,34,31,.5);
  border-radius: 50%;
  right: -30px;
  top: -40px;
  box-shadow:
    0 0 0 18px rgba(255,255,255,.12),
    0 0 0 38px rgba(255,255,255,.1);
}

.projectmeta {
  padding: 20px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projectmeta b {
  font-size: 14px;
}

.projectmeta small {
  font: 10px 'DM Mono';
  color: var(--muted);
}

.hint {
  margin-top: 16px;
  font-size: 10px;
  letter-spacing: .02em;
  color: var(--muted);
}

/* COFFEE CORNER */

.coffee {
  background: linear-gradient(125deg,#282722,#38372f);
  color: var(--paper);
  padding: 55px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  box-shadow: 0 22px 55px rgba(38,36,29,.12);
}

.coffee h2 {
  font: 500 clamp(42px,5vw,56px) 'Playfair Display', serif;
  line-height: 1.04;
  margin: 10px 0;
}

.coffee p {
  color: #c2bfb5;
  line-height: 1.7;
  max-width: 440px;
}

.cup {
  height: 190px;
  display: grid;
  place-items: center;
  font-size: 130px;
  filter: grayscale(1);
  opacity: .9;
}

/* CONTACT */

.contact {
  padding: 90px 0 42px;
}

.contact h2 {
  font-size: clamp(56px,8vw,100px);
  line-height: .98;
  letter-spacing: -6px;
  margin: 18px 0 30px;
}

.contact h2 em {
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  color: var(--orange);
}

.contactbottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--line);
  padding-top: 24px;
  font-size: 12px;
  color: var(--muted);
}

.contactlinks {
  display: flex;
  gap: 20px;
  color: var(--ink);
}

/* SELECTION */

::selection {
  background: #e7b19d;
  color: var(--ink);
}

/* MOBILE RESPONSIVE */

@media (max-width: 760px) {

  .wrap {
    width: min(100% - 34px,560px);
  }

  .top {
    height: 70px;
  }

  nav {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 65px 0 58px;
    gap: 34px;
  }

  h1 {
    letter-spacing: -5px;
  }

  .hero-art {
    height: 310px;
  }

  .section {
    padding: 60px 0;
  }

  .aboutgrid,
  .coffee {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .education {
    grid-template-columns: 1fr;
  }

  .skills {
    grid-template-columns: 1fr 1fr;
  }

  .projects {
    grid-template-columns: 1fr;
  }

  .projectvisual {
    height: 230px;
  }

  .coffee {
    padding: 30px;
  }

  .cup {
    height: 120px;
  }

  .contact {
    padding-top: 65px;
  }

  .contact h2 {
    letter-spacing: -3px;
  }

  .contactbottom {
    gap: 15px;
    flex-direction: column;
  }
}

