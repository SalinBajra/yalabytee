export default function PageHero({ eyebrow, title, text, actions }) {
  return (
    <section className="inner-hero">
      <div className="inner-hero__grid" aria-hidden="true" />
      <div className="motion-soft studio-container inner-hero__content">
        <p>{eyebrow}</p>
        <div>
          <h1>{title}</h1>
          <div className="inner-hero__aside">
            <p>{text}</p>
            {actions ? <div className="inner-hero__actions">{actions}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
