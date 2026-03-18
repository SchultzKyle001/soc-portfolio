"use client";
export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Cybersecurity Portfolio</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#soc">SOC Center</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#training">Training</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <section className="hero-card">
            <div className="eyebrow">Security+ Certified • SOC Analyst Track</div>

            <h1>
              Developing real SOC analyst skills through hands-on SIEM
              investigations and a self-built security operations lab.
            </h1>

            <p>
              I am developing practical blue-team experience through a
              self-built SOC lab environment including Wazuh SIEM monitoring,
              Windows event log analysis, lateral movement investigation, and
              structured incident documentation. My focus is learning how
              analysts actually investigate alerts, validate activity, and
              document findings.
            </p>

            <div className="button-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact Info
              </a>
            </div>
          </section>

          <aside className="hero-card hero-side">
            <h3>Quick Snapshot</h3>

            <ul>
              <li>CompTIA Security+ certified</li>
              <li>Built and maintain a home Security Operations Center (SOC) lab</li>
              <li>Investigate alerts using Wazuh SIEM</li>
              <li>Analyze Windows Security Event Logs for suspicious activity</li>
              <li>Simulated lateral movement and remote execution scenarios</li>
              <li>Document incidents using structured analyst-style reports</li>
              <li>Completed TryHackMe SIEM investigation simulator</li>
            </ul>
          </aside>
        </div>
      </header>

      <main className="container">
        <section className="section" id="about">
          <h2 className="section-title">About Me</h2>
          <p className="section-sub">
            I am pursuing cybersecurity work with a focus on SOC analysis, SIEM
            operations, host investigation, and defensive monitoring. My
            training is built around doing the work directly: creating a lab,
            troubleshooting connectivity and authentication issues, generating
            activity, validating evidence in logs, and documenting the results
            clearly.
          </p>
          <div className="stats">
            <div className="panel stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Primary lab systems documented</div>
            </div>
            <div className="panel stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">
                TryHackMe SIEM simulator accuracy
              </div>
            </div>
            <div className="panel stat">
              <div className="stat-number">1</div>
              <div className="stat-label">Dedicated Wazuh SIEM home lab</div>
            </div>
            <div className="panel stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">
                Portable static portfolio ready for GitHub Pages
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="soc">
          <h2 className="section-title">SOC CENTER Home Lab</h2>
          <p className="section-sub">
            My home lab is used to practice the core workflow of an entry-level
            analyst: create activity, investigate alerts, confirm evidence, and
            document findings. The environment includes a SIEM server, an attack
            workstation, and Windows endpoints for host-based investigation and
            lateral movement testing.
          </p>
          <div className="grid-2">
            <div className="panel">
              <h3>Lab Environment</h3>
              <ul className="tight">
                <li>Wazuh SIEM server</li>
                <li>Kali Linux attacker system</li>
                <li>Windows endpoints for investigation and attack simulation</li>
                <li>VM-based isolated training environment</li>
              </ul>
              <div className="tag-row">
                <span className="tag">Wazuh</span>
                <span className="tag">Kali Linux</span>
                <span className="tag">Windows Logs</span>
                <span className="tag">SOC Workflow</span>
              </div>
            </div>
            <div className="panel">
              <h3>Documented IP Snapshot</h3>
              <ul className="tight">
                <li>EP1: 192.168.***.***</li>
                <li>Wazuh SIEM: 192.168.***.***</li>
                <li>Kali: 192.168.***.***</li>
                <li>EP2 / secondary endpoint: 192.168.***.***</li>
              </ul>
              <p style={{ marginTop: "12px" }}>
                This snapshot is included to show that my training is based on a
                real working lab build, not only theory or coursework.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <h2 className="section-title">Highlighted Cybersecurity Work</h2>
          <div className="grid-3">
            <article className="panel">
              <h3>Lateral Movement Investigation</h3>
              <p>
                Practiced remote authentication, SMB access testing,
                connectivity troubleshooting, and remote command execution
                workflow between Windows systems. Investigated where activity
                appeared in Windows logs and in the Wazuh dashboard.
              </p>
            </article>
            <article className="panel">
              <h3>Windows Event Validation</h3>
              <p>
                Used host logs and SIEM data together to confirm activity,
                compare timestamps, and determine whether expected artifacts
                appeared on the endpoint and in centralized monitoring.
              </p>
            </article>
            <article className="panel">
              <h3>Firewall and Connectivity Troubleshooting</h3>
              <p>
                Resolved communication issues in the lab by validating host
                reachability, enabling required rules, and correcting
                configuration problems that blocked testing and monitoring
                visibility.
              </p>
            </article>
            <article className="panel">
              <h3>SMB and Authentication Testing</h3>
              <p>
                Opened and verified required access paths for SMB testing,
                including manual firewall changes and credential troubleshooting
                needed to support later attack simulation and investigation
                work.
              </p>
            </article>
            <article className="panel">
              <h3>Remote Execution / PsExec-Oriented Practice</h3>
              <p>
                Worked through remote execution scenarios to understand how
                administrator activity, service creation, authentication events,
                and related traces appear during lateral movement testing.
              </p>
            </article>
            <article className="panel">
              <h3>Structured Incident Documentation</h3>
              <p>
                Built the habit of writing repeatable incident summaries after
                major lab events so investigations can be reviewed consistently
                and improved over time.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <h2 className="section-title">Technical Skills and Working Strengths</h2>
          <div className="grid-2">
            <div className="panel">
              <h3>Technical Focus Areas</h3>
              <div className="tag-row">
                <span className="tag">SIEM Monitoring</span>
                <span className="tag">Alert Review</span>
                <span className="tag">Windows Security Logs</span>
                <span className="tag">Event Correlation</span>
                <span className="tag">Lateral Movement Testing</span>
                <span className="tag">Remote Authentication</span>
                <span className="tag">Firewall Troubleshooting</span>
                <span className="tag">SMB Testing</span>
                <span className="tag">Incident Documentation</span>
                <span className="tag">Analyst Reporting</span>
              </div>
            </div>
            <div className="panel">
              <h3>How I Work</h3>
              <ul className="tight">
                <li>
                  Strong troubleshooting mindset during technical setup and
                  investigation
                </li>
                <li>
                  Patient when tracking down configuration and visibility issues
                </li>
                <li>Careful with small log details that affect conclusions</li>
                <li>
                  Prefer validating current state before moving to the next task
                </li>
                <li>
                  Focused on building repeatable analyst habits, not just quick
                  answers
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="training">
          <h2 className="section-title">Training and Documentation Approach</h2>
          <div className="timeline">
            <div className="timeline-item">
              <strong>TryHackMe SIEM Simulator</strong>
              Completed the SIEM simulator with 100% accuracy on true-positive
              and false-positive identification while practicing log review and
              escalation thinking.
            </div>
            <div className="timeline-item">
              <strong>Incident Reporting Format</strong>
              Current report structure includes: time of activity, affected
              entities, reason for true-positive classification, reason for
              escalation, recommended remediation actions, and attack
              indicators.
            </div>
            <div className="timeline-item">
              <strong>Analyst Improvement Focus</strong>
              Training feedback emphasized including observed impact and more
              precise timing in reports, which I now treat as a deliberate
              development area.
            </div>
            <div className="timeline-item">
              <strong>Next Planned Lab Expansion</strong>
              Future lab work includes exploring Active Directory in the
              environment for additional testing, detection, and attack
              simulation scenarios.
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="grid-2">
            <div className="panel">
              <h3>Replace These Before Publishing</h3>
              <ul className="tight">
                <li>Name: Kyle Schultz</li>
                <li>Email: Schultz.Kyle001@gmail.com</li>
                <li>
                  LinkedIn:{" "}
                  <a href="https://www.linkedin.com/in/kyle-schultz-9548543b1/" target="_blank" rel="noreferrer">
                    https://www.linkedin.com/in/kyle-schultz-9548543b1/
                  </a>
                </li>
                <li>GitHub: SchultzKyle001</li>
              </ul>
            </div>
            <div className="panel">
              
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Built as a static portfolio site for GitHub Pages hosting.</p>
        </footer>
      </main>

      <style jsx>{`
        :global(:root) {
          --bg: #081120;
          --panel: #0f1b2e;
          --panel-2: #12233c;
          --text: #e8eef9;
          --muted: #9db0cf;
          --accent: #4db6ff;
          --accent-2: #79f2c0;
          --border: rgba(255, 255, 255, 0.09);
          --shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(77, 182, 255, 0.13), transparent 28%),
            radial-gradient(circle at top right, rgba(121, 242, 192, 0.12), transparent 24%),
            linear-gradient(180deg, #07101d 0%, #091426 100%);
          color: var(--text);
          line-height: 1.6;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1150px, calc(100% - 32px));
          margin: 0 auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(12px);
          background: rgba(8, 17, 32, 0.76);
          border-bottom: 1px solid var(--border);
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          gap: 16px;
        }

        .brand {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .hero {
          padding: 72px 0 34px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .hero-card,
        .panel {
          background: linear-gradient(180deg, rgba(18, 35, 60, 0.92), rgba(11, 22, 38, 0.96));
          border: 1px solid var(--border);
          border-radius: 24px;
          box-shadow: var(--shadow);
        }

        .hero-card {
          padding: 34px;
        }

        .eyebrow {
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          margin-bottom: 14px;
        }

        h1 {
          font-size: clamp(2.2rem, 5vw, 4.25rem);
          line-height: 1.02;
          margin: 0 0 18px;
          letter-spacing: -0.04em;
        }

        .hero p {
          color: var(--muted);
          max-width: 760px;
          margin: 0 0 24px;
          font-size: 1.02rem;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 10px;
        }

        .btn {
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.95rem;
          border: 1px solid var(--border);
        }

        .btn-primary {
          background: linear-gradient(90deg, var(--accent), #2f8fff);
          color: #06101d;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.02);
          color: var(--text);
        }

        .hero-side {
          padding: 28px;
        }

        .hero-side h3 {
          margin: 0 0 14px;
          font-size: 1.55rem;
        }

        .hero-side ul {
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
        }

        .section {
          padding: 18px 0 8px;
        }

        .section-title {
          margin: 0 0 16px;
          font-size: 1.65rem;
          letter-spacing: -0.02em;
        }

        .section-sub {
          margin: 0 0 22px;
          color: var(--muted);
          max-width: 800px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 12px 0 8px;
        }

        .stat {
          padding: 22px;
          text-align: left;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          color: var(--accent-2);
        }

        .stat-label {
          color: var(--muted);
          font-size: 0.95rem;
        }

        .grid-2,
        .grid-3 {
          display: grid;
          gap: 16px;
        }

        .grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .panel {
          padding: 24px;
        }

        .panel h3 {
          margin: 0 0 10px;
          font-size: 1.15rem;
        }

        .panel p,
        .panel li {
          color: var(--muted);
          font-size: 0.97rem;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .tag {
          padding: 8px 12px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 999px;
          font-size: 0.88rem;
          color: #dce8fb;
        }

        .timeline {
          display: grid;
          gap: 14px;
        }

        .timeline-item {
          padding: 18px 20px;
          border-left: 3px solid var(--accent);
          background: rgba(255, 255, 255, 0.025);
          border-radius: 16px;
        }

        .timeline-item strong {
          display: block;
          margin-bottom: 6px;
        }

        .footer {
          padding: 38px 0 60px;
          color: var(--muted);
          font-size: 0.92rem;
        }

        ul.tight {
          margin: 10px 0 0;
          padding-left: 18px;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .grid-2,
          .grid-3,
          .stats {
            grid-template-columns: 1fr;
          }

          .nav-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
