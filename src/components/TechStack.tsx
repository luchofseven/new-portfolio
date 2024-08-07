import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  MysqlIcon,
  NextJsIcon,
  NodeIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TypeScriptIcon
} from '@/icons/Icons'

export default function TechStack () {
  return (
    <section id="tech-stack" className="section-container tech-stack-container">
      <article>
        <header className="section-title">
          <h2>MIS TECNOLOGÍAS</h2>
        </header>
        <div className="tech-stack">
          <span className="html-icon">
            <HTMLIcon />
          </span>

          <span className="css-icon">
            <CSSIcon />
          </span>

          <span className="javascript-icon">
            <JavaScriptIcon />
          </span>

          <span className="react-icon">
            <ReactIcon />
          </span>

          <span className="typescript-icon">
            <TypeScriptIcon />
          </span>

          <span className="sass-icon">
            <SassIcon />
          </span>

          <span className="tailwind-icon">
            <TailwindIcon />
          </span>

          <span className="nextjs-icon">
            <NextJsIcon />
          </span>

          <span className="node-icon">
            <NodeIcon />
          </span>

          <span className="mysql-icon">
            <MysqlIcon />
          </span>
        </div>
      </article>
    </section>
  )
}
