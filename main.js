import './styles.css';

const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none"/>',
    sparkle: '<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
    chart: '<path d="M4 19V5m0 14h16M7 16l3-4 3 2 5-7"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/>',
    bolt: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 3.7 5.4 3.7 9S14.5 18.6 12 21c-2.5-2.4-3.7-5.4-3.7-9S9.5 5.4 12 3Z"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

document.querySelector('#root').innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-one"></div><div class="ambient ambient-two"></div>
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#top"><span class="brand-mark">${icon('sparkle', 16)}</span><span>LUMEN<span class="brand-dot">.</span></span></a>
      <div class="nav-links"><a href="#product">Product</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a><a href="#stories">Stories</a></div>
      <div class="nav-actions"><a class="login" href="#login">Log in</a><a class="button button-small" href="#start">Start building ${icon('arrow', 15)}</a></div>
      <button class="menu-button" aria-label="Open menu">${icon('menu', 21)}</button>
    </nav>

    <main id="top">
      <section class="hero container">
        <div class="eyebrow"><span class="pulse-dot"></span> The intelligence layer for modern teams <span class="eyebrow-arrow">↗</span></div>
        <h1>Make every decision<br/><span class="gradient-text">feel inevitable.</span></h1>
        <p class="hero-copy foil-text">Lumen turns scattered signals into clear momentum.<br class="desktop-only"/> See what matters. Move with confidence.</p>
        <div class="hero-actions"><a class="button button-primary" href="#start">Start for free ${icon('arrow', 17)}</a><a class="play-link" href="#demo"><span class="play-icon">${icon('play', 13)}</span> See how it works <span class="muted-arrow">↗</span></a></div>
        <div class="social-proof"><div class="avatar-stack"><span class="avatar av-one">MK</span><span class="avatar av-two">JR</span><span class="avatar av-three">AL</span><span class="avatar av-four">+</span></div><div><div class="stars">★★★★★</div><span>Trusted by 2,000+ ambitious teams</span></div></div>
      </section>

      <section class="dashboard-wrap container" id="product" aria-label="Product preview">
        <div class="dashboard-topline"><span><i class="live-dot"></i> Lumen workspace / Overview</span><span>Updated just now <b>•</b> <span class="topline-green">All systems operational</span></span></div>
        <div class="dashboard-grid">
          <aside class="side-panel"><div class="mini-brand"><span class="brand-mark">${icon('sparkle', 12)}</span> LUMEN</div><div class="workspace-label">WORKSPACE</div><div class="side-item active">${icon('chart', 15)} Overview</div><div class="side-item">${icon('layers', 15)} Projects</div><div class="side-item">${icon('globe', 15)} Intelligence</div><div class="workspace-label side-bottom-label">YOUR TEAM</div><div class="side-item">${icon('sparkle', 15)} Activity <span class="side-badge">4</span></div><div class="side-item">${icon('bolt', 15)} Automations</div><div class="user-chip"><span class="user-avatar">AM</span><span><b>Alex Morgan</b><small>Admin</small></span><span class="user-dots">•••</span></div></aside>
          <div class="dashboard-main"><div class="dash-heading"><div><span class="muted-label">OVERVIEW</span><h2>Good morning, Alex <span>✦</span></h2><p>Here's the signal behind your momentum.</p></div><button class="date-select">Last 30 days <span>⌄</span></button></div><div class="metric-row"><div class="metric-card"><span class="muted-label">REVENUE</span><strong>$128,430</strong><span class="metric-up">↗ 18.4%</span><div class="sparkline cyan-line"></div></div><div class="metric-card"><span class="muted-label">ACTIVE USERS</span><strong>8,942</strong><span class="metric-up">↗ 12.7%</span><div class="sparkline violet-line"></div></div><div class="metric-card"><span class="muted-label">CONVERSION</span><strong>24.8%</strong><span class="metric-up">↗ 4.2%</span><div class="sparkline pink-line"></div></div></div><div class="lower-dash"><div class="chart-card"><div class="chart-head"><div><span class="muted-label">GROWTH TRAJECTORY</span><h3>Momentum is compounding</h3></div><span class="chart-period">W <span>▾</span></span></div><div class="chart-area"><div class="chart-gridlines"><span></span><span></span><span></span><span></span></div><svg viewBox="0 0 600 180" preserveAspectRatio="none" class="line-chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#55e7e0" stop-opacity=".25"/><stop offset="1" stop-color="#55e7e0" stop-opacity="0"/></linearGradient></defs><path class="chart-fill" d="M0,152 C42,142 55,143 85,130 S130,142 168,114 S215,111 245,123 S286,94 323,105 S355,86 386,80 S426,96 454,65 S500,57 530,43 S573,31 600,13 V180 H0Z"/><path class="chart-line" d="M0,152 C42,142 55,143 85,130 S130,142 168,114 S215,111 245,123 S286,94 323,105 S355,86 386,80 S426,96 454,65 S500,57 530,43 S573,31 600,13"/></svg><div class="chart-dates"><span>May 01</span><span>May 08</span><span>May 15</span><span>May 22</span><span>May 30</span></div></div></div><div class="signal-card"><div class="chart-head"><div><span class="muted-label">TOP SIGNALS</span><h3>What needs your focus</h3></div><span class="more">•••</span></div><div class="signal-list"><div><span class="signal-icon purple">${icon('sparkle', 15)}</span><span><b>Expansion opportunity</b><small>Northstar Inc. is ready to grow</small></span><i>→</i></div><div><span class="signal-icon orange">${icon('bolt', 15)}</span><span><b>Momentum dip detected</b><small>Activation fell 8% this week</small></span><i>→</i></div><div><span class="signal-icon green">${icon('check', 15)}</span><span><b>Milestone reached</b><small>Q2 growth target complete</small></span><i>→</i></div></div></div></div></div>
        </div>
        <div class="dashboard-glow"></div>
      </section>

      <section class="features container" id="solutions"><div class="section-kicker">ONE CLEAR ADVANTAGE</div><h2>Everything clicks into place.</h2><p class="section-copy foil-text">Your team already has the answers. Lumen gives them a place to connect.</p><div class="feature-grid"><article class="feature-card feature-wide spotlight"><div class="card-content"><div class="feature-icon cyan">${icon('sparkle', 20)}</div><span class="card-label">ONE SOURCE OF TRUTH</span><h3>The full picture,<br/><em>beautifully clear.</em></h3><p>Unify your data, context, and conversations in one intelligent workspace.</p><a href="#start" class="text-link">Explore intelligence ${icon('arrow', 15)}</a></div><div class="orbit-visual"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit-core">✦</div><span class="orbit-tag tag-a">Signals</span><span class="orbit-tag tag-b">Context</span><span class="orbit-tag tag-c">Action</span></div></article><article class="feature-card spotlight"><div class="feature-icon purple">${icon('bolt', 20)}</div><span class="card-label">MOVE FASTER</span><h3>Clarity that<br/><em>creates momentum.</em></h3><p>Turn insight into action before the moment passes.</p><div class="mini-bars"><span style="--h:42%"></span><span style="--h:58%"></span><span style="--h:51%"></span><span style="--h:78%"></span><span style="--h:68%"></span><span style="--h:92%"></span></div></article><article class="feature-card spotlight"><div class="feature-icon gold">${icon('layers', 20)}</div><span class="card-label">BUILT FOR FLOW</span><h3>Work feels better<br/><em>when it flows.</em></h3><p>Give every idea the room to become something remarkable.</p><div class="flow-lines"><span></span><span></span><span></span><span></span></div></article></div></section>
      <section class="closing container" id="start"><div class="closing-orb"></div><div class="section-kicker">YOUR NEXT MOVE</div><h2>See the signal.<br/><span class="gradient-text">Make it matter.</span></h2><p class="foil-text">Join the teams building their clearest future.</p><a class="button button-primary" href="#signup">Start for free ${icon('arrow', 17)}</a><small>No credit card required · 14-day free trial</small></section>
    </main>
    <footer class="footer container"><a class="brand" href="#top"><span class="brand-mark">${icon('sparkle', 14)}</span><span>LUMEN<span class="brand-dot">.</span></span></a><span>© 2024 Lumen Intelligence, Inc.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#status">Status <i class="live-dot"></i></a></div></footer>
  </div>`;

document.querySelectorAll('.spotlight').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - r.left}px`);
    card.style.setProperty('--my', `${event.clientY - r.top}px`);
  });
});
document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('mobile-open'));
