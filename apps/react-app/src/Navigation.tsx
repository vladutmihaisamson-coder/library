;

export default function Navigation() {
  return (
    <div style={{ marginTop: 'var(--lib-size-spacing-8)', paddingTop: 'var(--lib-size-spacing-6)', borderTop: 'var(--lib-border-width) solid var(--lib-color-neutral-200)' }}>
      <p>
        <span className="link-group">
          <a href="/" className="link link-default">Home</a>
          <a href="/typography" className="link link-default">Typography</a>
          <a href="/spacing" className="link link-default">Spacing</a>
          <a href="/colors" className="link link-default">Colors</a>
          <a href="/radius" className="link link-default">Radius</a>
          <a href="/shadows" className="link link-default">Shadows</a>
          <a href="/animations" className="link link-default">Animations</a>
          <a href="/buttons" className="link link-default">Buttons</a>
          <a href="/links" className="link link-default">Links</a>
          <a href="/inputs" className="link link-default">Inputs</a>
          <a href="/sample" className="link link-brand">🤖 Sample Page</a>
        </span>
      </p>
    </div>
  );
}
