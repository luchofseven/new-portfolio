import {
  AstroIcon,
  CSSIcon,
  ExpressIcon,
  HTMLIcon,
  JavaScriptIcon,
  MysqlIcon,
  NestJsIcon,
  NextJsIcon,
  NodeIcon,
  PostgreSQLIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypeORMIcon,
  TypeScriptIcon,
} from '@/icons/Icons';

export default function TechStack() {
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

          <span className="typescript-icon">
            <TypeScriptIcon />
          </span>

          <span className="astro-icon">
            <AstroIcon />
          </span>

          <span className="react-icon">
            <ReactIcon />
          </span>

          <span className="nextjs-icon">
            <NextJsIcon />
          </span>

          <span className="redux-icon">
            <ReduxIcon />
          </span>

          <span className="node-icon">
            <NodeIcon />
          </span>

          <span className="express-icon">
            <ExpressIcon />
          </span>

          <span className="nestjs-icon">
            <NestJsIcon />
          </span>

          <span className="sass-icon">
            <SassIcon />
          </span>

          <span className="tailwind-icon">
            <TailwindIcon />
          </span>

          <span className="mysql-icon">
            <MysqlIcon />
          </span>

          <span className="postgresql-icon">
            <PostgreSQLIcon />
          </span>

          <span className="typeorm-icon">
            <TypeORMIcon />
          </span>
        </div>
      </article>
    </section>
  );
}
