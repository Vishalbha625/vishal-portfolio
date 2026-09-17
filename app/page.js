const assetPath = process.env.NODE_ENV === "production" ? "/vishal-portfolio" : "";

export default function Home() {
  return (
    <>
<nav>
  <div className="nav-inner">
    <a href="#top" className="brand-mark">Vishal Bhardwaj</a>
    <div className="nav-links">
      <a href="#journey">Journey</a>
      <a href="#anveshan">Anveshan</a>
      <a href="#projects">Design</a>
      <a href="#bring">Skills</a>
      <a href="#founders">Contact</a>
    </div>
  </div>
</nav>

<div id="top" className="wrap">

  <header className="hero">
    <div className="hero-copy">
    <span className="kicker"><span className="dot"></span>Gurugram, India · open to talk</span>
    <h1 className="headline">I started on the phones. Now I lead the team and build the tools it runs on.</h1>
    <p className="sub">Customer-support leader and UI/UX designer who taught myself design and automation along the way — so I can spot a broken customer journey, redesign it, and ship the fix myself.</p>
    <div className="tags">
      <span className="tag">Support &amp; team leadership</span>
      <span className="tag">UI/UX design</span>
      <span className="tag">Automation &amp; ops tooling</span>
    </div>
    <div className="cta-row">
      <a href="mailto:bhardwaj.vishal0614@gmail.com" className="btn btn-primary">Get in touch</a>
      <a href={`${assetPath}/Vishal-Bhardwaj-CV.pdf`} download="Vishal-Bhardwaj-CV.pdf" className="btn btn-soft">Download CV</a>
      <a href="https://www.linkedin.com/in/vishal-bhardwaj-778b4426a" target="_blank" rel="noopener" className="btn btn-ghost">View LinkedIn</a>
    </div>
    </div>
    <div className="hero-photo"><div className="frame"><img src={`${assetPath}/vishal.jpg`} alt="Portrait of Vishal Bhardwaj" /></div></div>
  </header>

  <section id="story" style={{ paddingTop: "12px" }}>
    <div className="intro-block">
      <p>Five years ago I was resolving 50 support tickets a day. Since then I've built customer-support operations from the ground up — the team, the intake portal, the SOPs, and the automations behind them — and became a UI/UX designer along the way.</p>
    </div>
  </section>

  <section id="impact" style={{ paddingTop: "20px" }}>
    <div className="impact">
      <div className="stat hero-stat"><div className="big">0</div><div className="lab">Pending tickets today</div><div className="was">from a 500+ daily backlog</div></div>
      <div className="stat"><div className="big">30 sec</div><div className="lab">First response time</div><div className="was">from 45 min · 5k chats in Aug</div></div>
      <div className="stat"><div className="big">1m 40s</div><div className="lab">Queue wait time</div><div className="was">from 2 hours</div></div>
      <div className="stat"><div className="big">80%+</div><div className="lab">CSAT</div><div className="was">last 3 months</div></div>
      <div className="stat"><div className="big">15</div><div className="lab">Agents led</div><div className="was">across 3 specialized teams</div></div>
    </div>
  </section>

  <section id="journey">
    <h2 className="sec-head">The journey</h2>
    <p className="sec-note">Every step added a skill. Front line taught me the customer, design taught me the product, and leadership taught me how to scale both.</p>
    <div className="timeline">
      <div className="node">
        <div className="yr">2021 — 2022</div>
        <div className="org">Globiva</div>
        <div className="role">Customer Service Representative</div>
        <p className="desc">Where it started. Handled ~50 queries a day across phone and email at a 95% satisfaction rate, and built my first customer-feedback survey — it lifted positive feedback 20% in six months.</p>
      </div>
      <div className="node">
        <div className="yr">2023</div>
        <div className="org">Kochar Tech</div>
        <div className="role">Senior Customer Service Representative</div>
        <p className="desc">Set up and ran a structured feedback-collection system that raised customer-satisfaction ratings by 20%.</p>
      </div>
      <div className="node">
        <div className="yr">2023 — 2024</div>
        <div className="org">Dew Solutions</div>
        <div className="role">Customer Service Representative</div>
        <p className="desc">Owned end-to-end resolution across chat, email, and calls while holding a 95% quality score.</p>
      </div>
      <div className="node">
        <div className="yr">2024</div>
        <div className="org">upGrad</div>
        <div className="role">UI/UX Design Certification</div>
        <p className="desc">The pivot. A hands-on UI/UX program in Figma, user research, wireframing, and interface design — the foundation for everything I've designed since.</p>
      </div>
      <div className="node">
        <div className="yr">2025</div>
        <div className="org">EpiCred</div>
        <div className="role">UX Designer (intern) → UI Designer</div>
        <p className="desc">Led the end-to-end design process — research and ideation through to high-fidelity UI and developer handoff — designing user-centric interfaces that improved usability and the customer experience.</p>
      </div>
      <div className="node now">
        <div className="yr">2025 — now</div>
        <div className="org">Anveshan <span className="badge">Where I am now</span></div>
        <div className="role">Senior Customer Support Executive → Team Lead (promoted in 3 months)</div>
        <p className="desc">Promoted to Team Lead within three months. Built a 15-person team and the portal, SOPs, and systems it runs on — taking a 500+ daily backlog to zero pending.</p>
      </div>
    </div>
  </section>

  <section id="anveshan">
    <h2 className="sec-head">Rebuilding support at Anveshan</h2>
    <p className="anv-lead">When I joined, support was drowning — <strong>500+ tickets piling up in a single day</strong>, logged through a scattered Google Form. I was promoted to Team Lead within three months and rebuilt the operation end to end: a custom intake portal, SOPs that turned multi-day resolutions into real-time ones, in-house training and QA, and a 15-person team. <strong>Today we run at zero pending tickets, resolving issues in real time.</strong></p>

    <div className="voc">
      <span className="feature-label">Internal tool · built from scratch</span>
      <h3>The VOC portal</h3>
      <p>Agents used to log issues through a long Google Form — slow, and easy to get wrong. I built a Voice-of-Customer portal wired directly into the <strong>Shopify</strong> and <strong>EasyEcom</strong> APIs, so order and customer data auto-populate. An agent can now raise a fully-detailed issue in <strong>under a minute</strong> instead of hunting for details across tabs.</p>
      <div className="flow">
        <div className="stack">
          <div className="box">Shopify API</div>
          <div className="box">EasyEcom API</div>
        </div>
        <span className="arrow">→</span>
        <div className="box portal">VOC Portal</div>
        <span className="arrow">→</span>
        <div className="box out">Issue raised in &lt; 1 min</div>
      </div>
    </div>

    <h3 className="sec-head" style={{ fontSize: "1.35rem", marginTop: "34px" }}>SOPs that turned days into minutes</h3>
    <p className="sec-note">I rewrote how each issue type moves through the org — plugging agents straight into the teams that resolve them.</p>
    <div className="sop">
      <div className="sop-row">
        <div className="type">Dispatch <span>post-delivery</span></div>
        <div className="shift"><span className="from">up to 48 hrs</span><span className="ar">→</span><span className="to">real time</span></div>
        <div className="how">Onboarded a VMS tool for direct coordination with the warehouse team.</div>
      </div>
      <div className="sop-row">
        <div className="type">Packaging</div>
        <div className="shift"><span className="from">up to 24 hrs</span><span className="ar">→</span><span className="to">real time</span></div>
        <div className="how">Built a direct line from agents to the packaging team over Slack.</div>
      </div>
      <div className="sop-row">
        <div className="type">Delivery</div>
        <div className="shift"><span className="from">4–5 days</span><span className="ar">→</span><span className="to">72-hr SLA</span></div>
        <div className="how">New SOP with the Shiprocket team; date-breaches escalated upfront with proactive customer comms.</div>
      </div>
      <div className="sop-row">
        <div className="type">Quality</div>
        <div className="shift"><span className="from">72 hrs</span><span className="ar">→</span><span className="to">same day</span></div>
        <div className="how">Split cases into three categories and embedded an R&amp;D member alongside agents.</div>
      </div>
    </div>

    <div className="duo">
      <div className="mini">
        <h4>Training &amp; certification, in-house</h4>
        <p>I built a playbook and cheat sheet for new and existing agents. New hires train, take a test, and earn their certificate — all on the same portal, so onboarding is consistent and self-serve.</p>
      </div>
      <div className="mini">
        <h4>An in-house quality team</h4>
        <p>I stood up a dedicated QA function to audit tickets, score agent quality, and steadily raise the standard of every customer conversation.</p>
      </div>
      <div className="mini">
        <h4>Sharper customer policies</h4>
        <p>Rewrote customer-facing policy: cut the return &amp; replacement window from 5 days to 48 hours, introduced Proof-of-Delivery (POD) timelines, and added a clear cancellation flow for customers cancelling due to an issue.</p>
      </div>
    </div>

    <div className="team-note">
      <h4>A team built to scale</h4>
      <p>Grew and structured a 15-person team into three specialized units, running on a pre-built roster that maps the right people to the right work each shift. Set clear performance targets for every agent, and developed two <strong>Assistance Team Coaches (ATCs)</strong> — sub-leads who run the individual teams day to day.</p>
      <div className="team-tags">
        <span>Chat team</span>
        <span>Ticket / email team</span>
        <span>Calling team</span>
      </div>
    </div>

    <div className="hood">
      <div className="h-item"><b>Migrated</b> the whole operation from BIK to Freshdesk</div>
      <div className="h-item"><b>Automated</b> reports &amp; dashboards with Sheets, Apps Script &amp; APIs</div>
      <div className="h-item"><b>Ran</b> UI/UX audits feeding back into the product</div>
      <div className="h-item"><b>Partnered</b> across Product, Tech, Ops &amp; Logistics</div>
    </div>
  </section>

  <section id="projects">
    <h2 className="sec-head">Design work</h2>
    <p className="sec-note">Product-design projects where I owned the process from research to high-fidelity UI. Each opens the full case study on Behance.</p>
    <div className="pgrid">

      <div className="pcard">
        <div className="cover"><img src={`${assetPath}/enlytical-dashboard.jpg`} alt="Enlytical eCommerce Intelligence Dashboard — five module screens" /></div>
        <div className="pbody">
          <div className="period">Jul 2025 – Aug 2025</div>
          <h4>eCommerce Intelligence Dashboard</h4>
          <p>Designed an eCommerce intelligence dashboard from the ground up for Enlytical — helping beauty brands track product performance, sentiment, reviews, and marketplace insights across Amazon, Flipkart, and Myntra. Built the IA, wireframes, and high-fidelity UI across five modules: Overview, Products, Platforms, Alerts, and Export.</p>
          <div className="chips"><span className="chip">UI Design</span><span className="chip">Dashboards</span><span className="chip">Data viz</span></div>
          <a className="blink" href="https://www.behance.net/gallery/255771973/Enlytical-eCommerce-Intelligence-Dashboard" target="_blank" rel="noopener">View on Behance ↗</a>
        </div>
      </div>

      <div className="pcard">
        <div className="cover"><img src={`${assetPath}/enlytical-website.jpg`} alt="Enlytical homepage redesign shown on a laptop" /></div>
        <div className="pbody">
          <div className="period">Mar 2025 – Jun 2025</div>
          <h4>AI-Powered eCommerce Website Redesign</h4>
          <p>Reimagined Enlytical's homepage to make an AI-powered growth platform clearer and more conversion-focused. Ran UX analysis and competitive benchmarking, restructured the IA, simplified navigation, strengthened CTAs and social proof, and turned low-fi wireframes into a modern responsive UI.</p>
          <div className="chips"><span className="chip">UX Research</span><span className="chip">UX Audit</span><span className="chip">IA</span></div>
          <a className="blink" href="https://www.behance.net/gallery/255771759/Enlytical-AI-Powered-eCommerce-Website-Redesign" target="_blank" rel="noopener">View on Behance ↗</a>
        </div>
      </div>

      <div className="pcard">
        <div className="cover"><img src={`${assetPath}/hdfc.jpg`} alt="HDFC Bank mobile app redesign case study cover" /></div>
        <div className="pbody">
          <div className="period">Banking · mobile</div>
          <h4>HDFC Bank App Redesign</h4>
          <p>Redesigned a banking app to improve usability and streamline the user journey. Ran usability testing and optimized the experience around real customer satisfaction rather than assumptions.</p>
          <div className="chips"><span className="chip">Figma</span><span className="chip">Mobile design</span><span className="chip">User testing</span></div>
          <a className="blink" href="https://www.behance.net/gallery/219760399/HDFC-Re-Design" target="_blank" rel="noopener">View on Behance ↗</a>
        </div>
      </div>

      <div className="pcard">
        <div className="cover"><img src={`${assetPath}/serenemom.jpg`} alt="Serene MOM pregnancy tracking app cover" /></div>
        <div className="pbody">
          <div className="period">May 2024 – Sep 2024</div>
          <h4>Serene MOM — Pregnancy Tracking App</h4>
          <p>Designed a pregnancy-tracking app built around user-friendly interfaces for expectant mothers. Conducted user research, developed wireframes, and created interactive prototypes for a seamless experience.</p>
          <div className="chips"><span className="chip">User research</span><span className="chip">Wireframing</span><span className="chip">Prototyping</span></div>
          <a className="blink" href="https://www.behance.net/gallery/209482773/SereneMOM" target="_blank" rel="noopener">View on Behance ↗</a>
        </div>
      </div>

    </div>
  </section>

  <section id="bring">
    <h2 className="sec-head">What I bring</h2>
    <p className="sec-note">Three overlapping strengths — most useful to a team that needs one person to cover all three.</p>
    <div className="bring">
      <div className="pillar">
        <div className="num">01</div>
        <h4>Lead &amp; operate</h4>
        <ul>
          <li>Team building &amp; rostering</li>
          <li>SOPs &amp; issue-type workflows</li>
          <li>In-house QA &amp; training</li>
          <li>Freshdesk &amp; BIK</li>
          <li>Cross-functional collaboration</li>
        </ul>
      </div>
      <div className="pillar">
        <div className="num">02</div>
        <h4>Design</h4>
        <ul>
          <li>UI/UX design (Figma)</li>
          <li>User research &amp; behavior</li>
          <li>Wireframing &amp; prototyping</li>
          <li>Dashboards &amp; data viz</li>
          <li>UI/UX audits</li>
        </ul>
      </div>
      <div className="pillar">
        <div className="num">03</div>
        <h4>Build</h4>
        <ul>
          <li>Portals &amp; internal tools</li>
          <li>Shopify &amp; EasyEcom APIs</li>
          <li>Google Sheets &amp; Apps Script</li>
          <li>Dashboards &amp; reporting</li>
          <li>Workflow automation</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="founders">
    <div className="founder">
      <h2>Looking for someone who just figures it out?</h2>
      <p>That's the thread through everything here: I don't wait to be handed a process — I build it. If you're a founder who needs one person to own support, sharpen the product, and automate the grind, let's talk.</p>
      <div className="cta-row">
        <a href="mailto:bhardwaj.vishal0614@gmail.com" className="btn btn-primary">Email me</a>
        <a href="https://www.linkedin.com/in/vishal-bhardwaj-778b4426a" target="_blank" rel="noopener" className="btn btn-ghost">Connect on LinkedIn</a>
      </div>
    </div>
  </section>

</div>

<footer>
  <div className="wrap foot-inner">
    <span className="name">Vishal Bhardwaj</span>
    <div className="foot-links">
      <a href="mailto:bhardwaj.vishal0614@gmail.com">bhardwaj.vishal0614@gmail.com</a>
      <a href="tel:+919311614396">+91 93116 14396</a>
      <a href="https://www.linkedin.com/in/vishal-bhardwaj-778b4426a" target="_blank" rel="noopener">LinkedIn</a>
      <a href="/Vishal-Bhardwaj-CV.pdf" download="Vishal-Bhardwaj-CV.pdf" className="cv">Download CV</a>
    </div>
  </div>
</footer>
    </>
  );
}
