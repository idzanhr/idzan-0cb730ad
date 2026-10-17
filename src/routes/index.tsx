import { createFileRoute } from "@tanstack/react-router";
import projects from "@/lib/projects.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Projects Showcase — Marko Idžan" },
      { name: "description", content: "Every website and project built by Marko Idžan, in one place." },
      { property: "og:title", content: "Projects Showcase — Marko Idžan" },
      { property: "og:description", content: "Every website and project built by Marko Idžan, in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function toggleTheme() {
  const root = document.documentElement;
  const dark = !root.classList.contains("dark");
  root.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

const clean = (t: string) => t.replace(/[“”"]/g, "");

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="https://idzan.hr" className="font-display text-lg font-bold tracking-tight">
            Marko <span className="text-primary">Idžan</span>
          </a>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="theme-toggle">
            <span className="sun">☀</span>
            <span className="moon">☾</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            Every project<br />I've ever built.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Websites, tools and side projects — for clients, parishes, businesses and for fun.
          </p>
          <p className="mt-8 font-display text-5xl font-bold text-primary">
            {projects.length}
            <span className="ml-2 text-base font-medium text-muted-foreground">projects</span>
          </p>
        </section>

        <section className="grid gap-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="project-card group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={clean(p.title)} loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.client}</p>
                <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{clean(p.title)}</h2>
                <span className="mt-4 inline-block text-sm text-link">View project →</span>
              </div>
            </a>
          ))}
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Marko Idžan · <a className="text-link" href="https://idzan.hr">idzan.hr</a>
      </footer>
    </div>
  );
}
