import Link from "next/link";
import Home from "./components/Home";

export default function H() {
  return (
    <div>
      <Home/>
      <Link
        href="https://github.com/heysujal/ts-accordion"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          margin: '1.5rem 0',
          color: '#2563eb',
          fontWeight: 600,
          textDecoration: 'none',
          fontSize: '1.1rem',
        }}
      >
        View Source on GitHub
      </Link>
    </div>
  );
}
