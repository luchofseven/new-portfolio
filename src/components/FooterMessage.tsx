import Image from 'next/image';

export default function FooterMessage(): JSX.Element {
  return (
    <footer className="footer-message">
      <Image
        src="/lf-logo.webp"
        alt="Logo de Luciano Fernández"
        width={100}
        height={100}
      />
      <p>
        {new Date().getFullYear() ?? '2026'} — diseñado y desarrollado con ♥
        por Luciano
      </p>
    </footer>
  );
}
