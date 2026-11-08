import Image from "next/image";
import { Camera, Code2, Laptop, MonitorCog, Video } from "lucide-react";
import QuoteRequest from "@/components/QuoteRequest";

const websitePrices = [
  { name: "Starter website", price: "$500", detail: "Up to 3 pages", copy: "A clean, responsive foundation for a small business, ministry, or personal brand." },
  { name: "Professional website", price: "$850", detail: "Up to 5 pages", copy: "A more complete site with custom page layouts, contact forms, and room to grow.", featured: true },
];

const photoPrices = [
  { name: "Portrait session", price: "$100", detail: "10 edited photos" },
  { name: "Business branding", price: "$175", detail: "20 edited photos" },
  { name: "Event photography", price: "$125", detail: "Per hour · 2-hour minimum" },
];

const videoPrices = [
  { name: "Promotional video", price: "$200", detail: "Short-form project" },
  { name: "Business / ministry video", price: "$350", detail: "Project-based" },
  { name: "Event videography", price: "$150", detail: "Per hour · 2-hour minimum" },
];

const technologyPrices = [
  { name: "Technology consultation", price: "$35", detail: "Talk through a goal or challenge" },
  { name: "Equipment recommendations", price: "$50", detail: "A setup matched to your needs" },
  { name: "Basic workstation", price: "$100", detail: "A tidy, connected workspace" },
  { name: "Complete workstation", price: "$200+", detail: "Full setup · custom scope" },
];

function PriceCard({ name, price, detail, copy, featured = false }: {
  name: string; price: string; detail: string; copy?: string; featured?: boolean;
}) {
  return (
    <article className={`price-card${featured ? " price-card--featured" : ""}`}>
      <div className="price-card__top"><p className="price-card__name">{name}</p><p className="price-card__detail">{detail}</p></div>
      <p className="price-card__price">{price}</p>
      {copy ? <p className="price-card__copy">{copy}</p> : null}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Creative · Media · Digital</p>
            <h1>Stories through the lens.<span>Solutions beyond the frame.</span></h1>
            <p className="hero-description">Creative media and practical technology for small businesses, churches, ministries, individuals, and professionals.</p>
            <div className="hero-actions">
              <a className="button button--gold" href="#digital">Explore services </a>
              <a className="button button--outline-light" href="#contact">Request a quote</a>
            </div>
            <div className="hero-meta"><span>Introductory launch pricing</span><span className="hero-meta__dot" /><span>Remote and in-person</span></div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-frame">
              <Image src="/images/about-cover.svg" alt="Portrait of Victor Visuals founder Jason Victor" width={900} height={1352} priority className="hero-photo" />
              <div className="hero-photo-shade" />
              <div className="hero-photo-caption"><span>Purposeful craft.</span><span>People first.</span></div>
            </div>
            <div className="hero-mark-card" aria-hidden="true">
              <Image src="/images/logo.png" alt="" width={72} height={72} />
              <span>Victor Visuals</span><small>Creative media &amp; technology</small>
            </div>
            <span className="hero-side-note" aria-hidden="true">EST. WITH INTENTION</span>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Service overview">
        <div className="site-container intro-strip__inner">
          <p>One creative partner for your digital presence, visual stories, and workspace.</p>
          <div className="intro-strip__tags">
            <span><Code2 size={15} aria-hidden="true" /> Websites</span><span><Camera size={15} aria-hidden="true" /> Photography</span><span><Video size={15} aria-hidden="true" /> Video</span><span><Laptop size={15} aria-hidden="true" /> Technology</span>
          </div>
        </div>
      </section>

      <section id="digital" className="content-section section-paper">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span className="eyebrow__line" /> 01 · Digital</p><h2>Build a web presence<br />that feels like you.</h2></div>
            <p className="section-lead">Thoughtful website design, redesign, and ongoing care for people and organizations ready to show up with clarity.</p>
          </div>
          <div className="service-intro-card">
            <div className="service-intro-card__icon"><Code2 size={22} aria-hidden="true" /></div>
            <div><h3>Website design &amp; development</h3><p>Mobile-ready layouts, clear navigation, and useful contact paths. Project content and scope are confirmed together before work begins.</p></div>
            <span className="service-intro-card__label">One-time projects</span>
          </div>
          <div className="price-grid price-grid--two">{websitePrices.map((item) => <PriceCard key={item.name} {...item} />)}</div>
          <div className="add-on-row"><div><span>Website redesign</span><strong>$350+</strong></div><div><span>Additional page</span><strong>$60</strong></div></div>

          <div className="maintenance-block">
            <div className="maintenance-block__heading"><div><p className="eyebrow">Ongoing care</p><h3>Website maintenance</h3></div><p>Keep your site current with a plan that fits your needs.</p></div>
            <div className="maintenance-grid">
              <article className="maintenance-card"><div className="maintenance-card__title"><h4>Basic</h4><strong>$50<span>/month</span></strong></div><p>Minor text and image updates, plus basic website checks.</p></article>
              <article className="maintenance-card maintenance-card--featured"><div className="maintenance-card__title"><h4>Standard</h4><strong>$85<span>/month</span></strong></div><p>Everything in Basic, plus up to 2 hours of website updates and support each month.</p></article>
            </div>
            <p className="fine-print">Work outside a plan is quoted separately. Hosting, domain registration, and software costs are billed separately when applicable.</p>
          </div>
        </div>
      </section>

      <section id="creative" className="content-section section-ink">
        <div className="site-container">
          <div className="section-heading section-heading--split section-heading--light">
            <div><p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> 02 · Creative</p><h2>Make the moments<br />mean something.</h2></div>
            <p className="section-lead">Photography and video for people, businesses, churches, and ministries—with care in the details and intention in the final cut.</p>
          </div>
          <div className="creative-columns">
            <div className="creative-service">
              <div className="creative-service__heading"><span className="service-icon"><Camera size={20} aria-hidden="true" /></span><div><p className="eyebrow eyebrow--muted">Still stories</p><h3>Photography</h3></div></div>
              <div className="dark-price-list">{photoPrices.map((item) => <div className="dark-price-row" key={item.name}><div><strong>{item.name}</strong><span>{item.detail}</span></div><b>{item.price}</b></div>)}</div>
              <p className="fine-print fine-print--light">Event photography requires a 2-hour minimum.</p>
            </div>
            <div className="creative-service">
              <div className="creative-service__heading"><span className="service-icon"><Video size={20} aria-hidden="true" /></span><div><p className="eyebrow eyebrow--muted">Stories in motion</p><h3>Videography &amp; editing</h3></div></div>
              <div className="dark-price-list">
                {videoPrices.map((item) => <div className="dark-price-row" key={item.name}><div><strong>{item.name}</strong><span>{item.detail}</span></div><b>{item.price}</b></div>)}
                <div className="dark-price-row"><div><strong>Video editing</strong><span>Additional editing work</span></div><b>$75+</b></div>
              </div>
              <p className="fine-print fine-print--light">Event videography requires a 2-hour minimum. Final length, filming time, and revisions are agreed before booking.</p>
            </div>
          </div>
          <div className="creative-note"><span className="creative-note__mark">“</span><p>Thoughtful visuals help people feel the story, not just see it.</p></div>
        </div>
      </section>

      <section id="tech" className="content-section section-paper">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span className="eyebrow__line" /> 03 · Tech</p><h2>Make your setup<br />work better for you.</h2></div>
            <p className="section-lead">Clear equipment guidance and hands-on workstation setup—from choosing the right pieces to getting your space connected and tidy.</p>
          </div>
          <div className="tech-layout">
            <div className="tech-copy-card">
              <span className="tech-copy-card__icon"><MonitorCog size={25} aria-hidden="true" /></span>
              <h3>Practical technology, made personal.</h3>
              <p>Get a second opinion on what to buy, plan a workspace around the way you work, or have the core equipment set up and organized.</p>
              <a className="text-link" href="#contact">Talk through a setup </a>
            </div>
            <div className="tech-price-grid">{technologyPrices.map((item) => <PriceCard key={item.name} {...item} />)}</div>
          </div>
          <p className="fine-print">Equipment, materials, software, and travel may be extra. In-person travel is arranged case by case.</p>
        </div>
      </section>

      <section id="portfolio" className="content-section section-sand">
        <div className="site-container">
          <div className="section-heading section-heading--split">
            <div><p className="eyebrow"><span className="eyebrow__line" /> Selected visuals</p><h2>A look at the work<br />behind the story.</h2></div>
            <p className="section-lead">A growing collection of portraits, visual studies, and creative work from Victor Visuals.</p>
          </div>
                    <div className="portfolio-grid portfolio-grid--no-photos">
            <article className="portfolio-card">
              <div className="portfolio-art portfolio-art--digital"><Code2 size={42} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className="portfolio-caption"><div><p className="eyebrow">Digital · Web</p><h3>Clear online presence</h3></div><span>01</span></div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-art portfolio-art--creative"><Camera size={42} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className="portfolio-caption"><div><p className="eyebrow">Photography · Video</p><h3>Stories with intention</h3></div><span>02</span></div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-art portfolio-art--technology"><Laptop size={42} strokeWidth={1.2} aria-hidden="true" /></div>
              <div className="portfolio-caption"><div><p className="eyebrow">Technology</p><h3>Workspaces that work</h3></div><span>03</span></div>
            </article>
          </div>
          
        </div>
      </section>

      <section id="about" className="content-section section-paper">
        <div className="site-container about-layout">
          <div className="about-photo-wrap">
            <div className="about-brand-art" aria-hidden="true"><span className="about-brand-art__letters">VV</span><span className="about-brand-art__caption">Creative · Media · Digital</span></div>
            <div className="about-photo-tag"><Image src="/images/logo.png" alt="" width={34} height={34} /><span>Victor Visuals</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow__line" /> About Victor Visuals</p>
            <h2>Creative care.<br /><em>Practical solutions.</em></h2>
            <p>Victor Visuals brings visual craft and useful technology together. The work spans websites, photography, videography, and hands-on workstation support—helping people communicate clearly and feel confident in the tools they use.</p>
            <p>Based on a simple idea: good work should make the next step easier. Whether it is a new website, a moment worth keeping, or a desk that finally works the way you do, each project starts with listening and a clear plan.</p>
            <div className="about-audience"><span>Small businesses</span><span>Churches &amp; ministries</span><span>Individuals &amp; professionals</span></div>
            <a className="text-link" href="#contact">Start a conversation </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="site-container">
          <div className="contact-heading">
            <p className="eyebrow eyebrow--gold"><span className="eyebrow__line" /> Let’s make a plan</p>
            <h2>Tell me what you’re<br /><em>working toward.</em></h2>
            <p>Share a little about your project. You’ll get a clear next step and a custom quote for the scope.</p>
          </div>
          <div className="contact-layout">
            <div className="contact-details">
              <p className="contact-label">Get in touch</p>
              <a className="contact-email" href="mailto:victorvisuals.prod@gmail.com">victorvisuals.prod@gmail.com</a>
              <div className="contact-detail-line"><span>Website</span><a href="https://victorvisuals.tech">victorvisuals.tech</a></div>
              <div className="contact-detail-line"><span>Availability</span><strong>Remote &amp; in person</strong></div>
              <p className="fine-print fine-print--light">Travel is arranged case by case. Equipment, materials, hosting, domain registration, and software may be additional.</p>
              <div className="contact-social-note">Focused on websites, media production, and practical technology. Social media management is not offered.</div>
            </div>
            <QuoteRequest />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container site-footer__inner">
          <a className="footer-brand" href="#home"><Image src="/images/logo.png" alt="" width={38} height={38} /><span>Victor Visuals<small>Stories through the lens. Solutions beyond the frame.</small></span></a>
          <p>© {new Date().getFullYear()} Victor Visuals · Creative media &amp; technology</p>
          <a href="#home" className="footer-top">Back to top </a>
        </div>
      </footer>
    </>
  );
}
