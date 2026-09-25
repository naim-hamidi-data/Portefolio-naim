/* =========================================================
   NAÏM HAMIDI — DIGITAL AGRICULTURE
   Homepage
   ========================================================= */


/* ---------- VARIABLES ---------- */

:root {
    --black: #111411;
    --dark: #1a1d1a;
    --cream: #f4f3ee;
    --white: #ffffff;

    --green: #526b4f;
    --green-dark: #314431;
    --green-light: #d9e0d3;

    --grey: #777b76;
    --line: #d8d9d3;

    --max-width: 1440px;
}


/* ---------- RESET ---------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--black);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
}

a {
    color: inherit;
    text-decoration: none;
}


/* ---------- NAVIGATION ---------- */

.navbar {
    width: 100%;
    height: 82px;

    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--line);

    position: absolute;
    top: 0;
    left: 0;

    z-index: 10;
}

.logo {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
}

.nav-links {
    display: flex;
    gap: 34px;
}

.nav-links a {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    transition: opacity 0.25s ease;
}

.nav-links a:hover {
    opacity: 0.45;
}


/* ---------- MENU MOBILE ---------- */

.menu-button {
    display: none;

    border: 0;
    background: none;

    cursor: pointer;
}

.menu-button span {
    display: block;

    width: 25px;
    height: 1px;

    background: var(--black);

    margin: 6px 0;
}


/* ---------- HERO ---------- */

.hero {
    min-height: 100vh;

    max-width: var(--max-width);
    margin: auto;

    padding: 150px 5vw 80px;

    display: grid;
    grid-template-columns: 1fr 0.9fr;

    gap: 8vw;

    align-items: center;
}


/* ---------- HERO LEFT ---------- */

.hero-left {
    position: relative;
    z-index: 2;
}

.eyebrow {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: var(--green);

    margin-bottom: 35px;
}

.hero h1 {
    font-size: clamp(75px, 10vw, 165px);

    line-height: 0.78;

    letter-spacing: -0.075em;

    font-weight: 700;

    margin-left: -7px;
}

.hero h1 span {
    color: var(--green);
}

.hero-description {
    margin-top: 55px;

    display: flex;
    gap: 55px;

    align-items: flex-start;
}

.profession {
    font-size: 18px;
    line-height: 1.3;

    max-width: 260px;
}

.tagline {
    color: var(--grey);

    font-size: 14px;

    line-height: 1.6;

    max-width: 300px;
}

.hero-button {
    margin-top: 55px;

    display: inline-flex;
    align-items: center;
    gap: 35px;

    padding-bottom: 9px;

    border-bottom: 1px solid var(--black);

    font-size: 12px;

    text-transform: uppercase;
    letter-spacing: 0.12em;

    transition:
        gap 0.3s ease,
        color 0.3s ease;
}

.hero-button span {
    font-size: 18px;
}

.hero-button:hover {
    gap: 50px;
    color: var(--green);
}


/* ---------- HERO VISUAL ---------- */

.hero-visual {
    position: relative;

    width: 100%;
    aspect-ratio: 0.92;

    max-height: 670px;

    background: var(--green-dark);

    overflow: hidden;
}


/* ---------- MAP ---------- */

.field-map {
    position: absolute;

    inset: 12% 10% 13% 10%;

    transform: rotate(-7deg) scale(1.08);

    display: grid;

    grid-template-columns:
        1.1fr
        0.8fr
        1.3fr;

    grid-template-rows:
        1fr
        1.25fr
        0.75fr;

    gap: 4px;
}

.field {
    border: 1px solid rgba(255,255,255,0.38);

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,0.13),
            rgba(255,255,255,0.03)
        );
}

.field-1 {
    border-radius: 48% 15% 10% 35%;
}

.field-2 {
    border-radius: 15% 55% 20% 10%;
}

.field-3 {
    border-radius: 30% 12% 40% 15%;
}

.field-4 {
    border-radius: 15% 30% 50% 20%;
}

.field-5 {
    border-radius: 50% 15% 15% 40%;
}

.field-6 {
    border-radius: 15% 40% 25% 10%;
}

.field-7 {
    border-radius: 25% 10% 35% 50%;
}

.field-8 {
    border-radius: 20% 45% 10% 30%;
}

.field-9 {
    border-radius: 40% 15% 40% 15%;
}


/* ---------- MAP DETAILS ---------- */

.map-line {
    position: absolute;

    width: 150%;
    height: 1px;

    background: rgba(255,255,255,0.5);

    top: 48%;
    left: -20%;

    transform: rotate(19deg);
}

.map-point {
    position: absolute;

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: white;

    box-shadow: 0 0 0 7px rgba(255,255,255,0.08);
}

.point-1 {
    top: 26%;
    left: 43%;
}

.point-2 {
    top: 61%;
    left: 70%;
}

.point-3 {
    top: 75%;
    left: 25%;
}


/* ---------- VISUAL LABELS ---------- */

.visual-label {
    position: absolute;

    color: rgba(255,255,255,0.7);

    font-size: 9px;

    letter-spacing: 0.18em;

    text-transform: uppercase;
}

.visual-label.top {
    top: 25px;
    left: 28px;
}

.visual-label.bottom {
    bottom: 25px;
    right: 28px;
}

.visual-info {
    position: absolute;

    bottom: 25px;
    left: 28px;

    display: flex;
    flex-direction: column;

    color: rgba(255,255,255,0.5);

    font-size: 9px;

    letter-spacing: 0.12em;
}


/* ---------- DISCIPLINE BAR ---------- */

.discipline-bar {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    min-height: 100px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 5vw;

    overflow: hidden;
}

.discipline-bar span {
    font-size: 10px;

    text-transform: uppercase;

    letter-spacing: 0.16em;

    color: var(--grey);
}

.discipline-bar span::before {
    content: "—";

    margin-right: 14px;

    color: var(--green);
}


/* ---------- INTRO ---------- */

.intro {
    max-width: var(--max-width);

    margin: auto;

    padding: 170px 5vw;

    display: grid;

    grid-template-columns: 120px 1fr;

    gap: 7vw;
}

.section-number {
    font-size: 11px;

    color: var(--green);

    letter-spacing: 0.1em;
}

.section-kicker {
    font-size: 10px;

    letter-spacing: 0.2em;

    color: var(--grey);

    margin-bottom: 35px;
}

.intro h2 {
    max-width: 850px;

    font-size: clamp(42px, 5.5vw, 78px);

    line-height: 1;

    letter-spacing: -0.045em;

    font-weight: 500;
}

.intro h2 em {
    color: var(--green);

    font-family: Georgia, serif;

    font-weight: normal;
}

.intro-text {
    max-width: 560px;

    margin-top: 55px;

    color: var(--grey);

    font-size: 15px;

    line-height: 1.8;
}


/* ---------- CLOSING ---------- */

.closing {
    background: var(--black);

    color: white;

    min-height: 520px;

    padding: 100px 5vw;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;
}

.closing p {
    font-size: 10px;

    letter-spacing: 0.2em;

    color: #969b96;

    margin-bottom: 35px;
}

.closing h2 {
    font-size: clamp(55px, 9vw, 130px);

    line-height: 0.9;

    letter-spacing: -0.07em;

    font-weight: 600;
}

.closing h2 span {
    color: var(--green-light);

    font-weight: normal;
}


/* ---------- CONTACT ---------- */

.contact-preview {
    padding: 130px 5vw;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid var(--line);
}

.contact-preview p {
    font-size: 10px;

    letter-spacing: 0.18em;

    color: var(--grey);
}

.contact-preview a {
    font-size: clamp(24px, 4vw, 55px);

    letter-spacing: -0.04em;

    transition: color 0.25s ease;
}

.contact-preview a:hover {
    color: var(--green);
}


/* ---------- FOOTER ---------- */

footer {
    min-height: 80px;

    padding: 0 5vw;

    display: flex;

    justify-content: space-between;

    align-items: center;

    color: var(--grey);

    font-size: 10px;

    letter-spacing: 0.08em;

    text-transform: uppercase;
}


/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 900px) {

    .nav-links {
        display: none;
    }

    .menu-button {
        display: block;
    }

    .hero {
        grid-template-columns: 1fr;

        padding-top: 135px;

        gap: 70px;
    }

    .hero-visual {
        max-width: 600px;

        justify-self: center;
    }

    .hero h1 {
        font-size: clamp(70px, 18vw, 130px);
    }

    .intro {
        grid-template-columns: 1fr;

        gap: 30px;
    }

    .section-number {
        margin-bottom: 10px;
    }

    .discipline-bar {
        justify-content: flex-start;

        gap: 35px;

        overflow-x: auto;

        white-space: nowrap;
    }

    .discipline-bar span {
        flex-shrink: 0;
    }
}


@media (max-width: 600px) {

    .navbar {
        height: 70px;
    }

    .hero {
        padding-left: 6vw;
        padding-right: 6vw;
    }

    .hero-description {
        flex-direction: column;

        gap: 25px;

        margin-top: 45px;
    }

    .hero-button {
        margin-top: 40px;
    }

    .hero-visual {
        aspect-ratio: 0.82;
    }

    .visual-label.top {
        top: 18px;
        left: 18px;
    }

    .visual-label.bottom {
        bottom: 18px;
        right: 18px;
    }

    .visual-info {
        bottom: 18px;
        left: 18px;
    }

    .intro {
        padding: 110px 6vw;
    }

    .intro h2 {
        font-size: 43px;
    }

    .intro-text {
        margin-top: 40px;
    }

    .closing {
        min-height: 400px;
    }

    .contact-preview {
        padding: 90px 6vw;

        flex-direction: column;

        align-items: flex-start;

        gap: 30px;
    }

    footer {
        padding: 25px 6vw;

        flex-direction: column;

        align-items: flex-start;

        gap: 10px;
    }
}
