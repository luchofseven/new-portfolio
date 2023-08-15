import { EmailIcon, GithubIcon, LinkedinIcon } from '@/icons/Icons'
import Image from 'next/image'

export default function Footer (): JSX.Element {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-info">
        <div>
          <a href="mailto:luchofseven@gmail.com">
            <EmailIcon />luchofseven@gmail.com
          </a>
          <a
            href="https://github.com/luchofseven"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />luchofseven
          </a>
          <a
            href="https://www.linkedin.com/in/luchofseven/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon />/in/luchofseven
          </a>
        </div>
      </div>
      <div className="footer-logo">
        <a href="#">
          <Image
            src="/lf-logo.webp"
            alt="Logo de Luciano Fernández"
            width={100}
            height={100}
          />
        </a>
      </div>
    </footer>
  )
}
