# thisisthepy.github.io

The thisisthepy organization site, served at https://thisisthepy.org/.

- `/`: the ecosystem, what it is for and how the projects connect.
- `/projects/<project>/`: one page per project, about its role and its design for the future.
- Project guides are published by each project's own repository at `/<project>/`, so this site
  never uses those paths.

Plain HTML and CSS, no build step: `assets/site.css`, `assets/site.js` (language toggle, English and
Korean in every page). `.github/workflows/pages.yml` publishes `main` on every push.
