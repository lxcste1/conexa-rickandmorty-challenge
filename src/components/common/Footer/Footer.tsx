import React from "react";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm">
            Built with the{" "}
            <Link
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-orange-300 transition-colors"
            >
              Rick and Morty API
            </Link>
          </p>
          <p className="text-xs text-secondary-foreground mt-2">
            © {currentYear} Conexa Challenge | Rick & Morty Character Comparison
            App
          </p>
          <p className="text-xs text-secondary-foreground mt-2">
            Developed by{" "}
            <Link
              href={"https://www.linkedin.com/in/tellolucas/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              lxcste
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
