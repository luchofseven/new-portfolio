interface StackGroup {
  label: string;
  items: string[];
}

const stack: StackGroup[] = [
  {
    label: 'frontend',
    items: [
      'React',
      'TypeScript',
      'Next.js',
      'Astro',
      'Tailwind',
      'Redux Toolkit',
      'RTK Query',
    ],
  },
  {
    label: 'backend',
    items: ['Node.js', 'NestJS', 'TypeORM', 'MySQL', 'PostgreSQL'],
  },
  {
    label: 'herramientas / ia',
    items: ['Git', 'GitHub', 'Vercel', 'Claude Code', 'IA / LLMs'],
  },
];

export default function TechStack(): JSX.Element {
  return (
    <div id="tech-stack" className="tech-stack">
      <p className="section-eyebrow">{'// 04 — stack técnico'}</p>
      <div className="tech-stack-groups">
        {stack.map((group) => (
          <div key={group.label} className="tech-stack-group">
            <p className="tech-stack-label">{group.label}</p>
            <div className="tech-stack-items">
              {group.items.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
