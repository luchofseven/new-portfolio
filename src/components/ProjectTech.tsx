interface IProjectTech {
  name: string;
  backgroundColor?: string;
  textColor: string;
  border: string;
  icon: JSX.Element;
}

export default function ProjectTech({
  name,
  backgroundColor = 'transparent',
  textColor,
  icon,
  border,
}: IProjectTech) {
  return (
    <span
      className="project-tech"
      style={{ backgroundColor, color: textColor, border }}
    >
      {icon}
      <p>{name}</p>
    </span>
  );
}
