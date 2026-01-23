# AI HTML Architecture Overview

This repository is a small static web project (class deliverable) that currently contains plain HTML pages, Markdown notes, and project documentation. It is a front-end prototype with several planned backend features described in the docs but not implemented in the workspace.

**Project Layout**
- `index.html`: Landing / login placeholder; includes an example 3rd-party art image and a simple form that navigates to `stories.html`.
- `stories.html`: Story feed UI mock; contains comments, a new-story flow linking to `drafting.html`, and mentions WebSocket usage for live updates.
- `drafting.html`: (present) Page intended for creating/posting new stories (posting to database placeholder).
- `tags.html`: Tag management UI mock (add/remove tags).
- `notes.md`: Developer notes describing Bootstrap usage, SVG logo, React/Vite plans, and deployment details.
- `README.md`: Project description, design sketches, and an explicit technology plan (React, backend service, DB, WebSocket). See [README.md](README.md).
- `LICENSE`: Project license file.

**Technologies (actual vs planned)**
- Actual in repo: HTML, inline CSS snippets, use of Bootstrap referenced in `notes.md`, static images, and Markdown docs. No JavaScript framework source or Node tooling is present in the repository itself.
- Referenced / planned: React + Vite (frontend bundling), Node.js / Express service, MongoDB (or similar) for storage, WebSocket for real-time comments, and an Art Institute of Chicago 3rd-party API used as an example image source. Deployment notes reference Caddy and hosting on AWS with a custom domain (memorybox.click).

**Behavioral overview**
- The current pages are static mocks that demonstrate intended flows: login → stories feed, post a new story, add tags, and show comments. Forms navigate between pages via plain HTML actions; there is no server-side handling present in the workspace.
- `stories.html` and `tags.html` include inline notes indicating where database and WebSocket interactions would be integrated.

**Deployment & infra notes**
- `notes.md` documents use of Caddy as a reverse proxy / static server and an AWS-hosted instance (IP and domain referenced).
- No CI, build scripts, or package manifests (e.g., `package.json`) are present in the repo root.

**Suggested next steps to realize the planned architecture**
1. Add a frontend toolchain: scaffold a Vite + React app (`npm init vite@latest`) and move the static pages into React components.
2. Initialize Node service: create an Express app with REST endpoints for stories, tags, comments, and auth; add WebSocket support (Socket.IO or ws).
3. Add a database: configure MongoDB (Atlas or local) and add models for users, stories, tags, comments.
4. Add a `package.json` and basic scripts (`start`, `dev`, `build`) and a README section with run instructions.
5. Add minimal automated tests and a basic CI pipeline for deployments.

**Where to look in this repo**
- Primary documentation: [README.md](README.md) and [notes.md](notes.md)
- UI mocks: `index.html`, `stories.html`, `tags.html`, `drafting.html`

This file was generated from the repository's current static files and the project notes; it summarizes the present state and the intended architecture described by the author.

## Critique of HTML usage

Below are practical pros/cons observed in the project's HTML files and suggested alternatives with short code examples.

- **Pros**
	- Clear, simple static mocks that demonstrate user flows (login → stories → drafting → tags).
	- Labels are present for many inputs, and examples show awareness of accessibility needs.
	- Uses semantic elements like `nav`, `header`, `main`, and `footer` in places.

- **Cons**
	- Several pages use an invalid or non-standard document structure: there is no proper `<head>` section and some metadata (e.g., `<meta charset>`) is placed inside a `header` element.
	- `lang` attributes use `eng` instead of the correct `en` locale code.
	- Some files contain duplicate or misplaced `<body>` tags (e.g., `tags.html`) and inconsistent nesting which can break parsers and accessibility tools.
	- Inline styles and visual notes are mixed with structural markup; this reduces separation of concerns and makes theming harder.
	- Forms use plain `action` navigation without method specificity or CSRF/auth considerations; there is no JavaScript progressive enhancement or API hookup.

### Example: incorrect snippet (common pattern in repo)

```html
<!-- Note: meta inside header and no <head> element -->
<header>
	<meta charset="UTF-8" />
	<title>Memory Box</title>
	<link rel="icon" href="/favicon.ico" />
</header>
```

### Corrected structure

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>Memory Box</title>
		<link rel="icon" href="/favicon.ico">
	</head>
	<body>
		<header>
			<nav><!-- nav links --></nav>
		</header>
		<main><!-- content --></main>
		<footer><!-- footer --></footer>
	</body>
</html>
```

### Accessibility & form improvements

Problems: forms submit via `GET` to other static pages; no `method`, `aria` hints, or client-side validation.

Suggested accessible form pattern:

```html
<form action="/api/login" method="post" novalidate>
	<label for="loginName">Name</label>
	<input id="loginName" name="loginName" required autocomplete="name">

	<label for="loginEmail">Email</label>
	<input id="loginEmail" name="loginEmail" type="email" required autocomplete="email">

	<label for="loginPassword">Password</label>
	<input id="loginPassword" name="loginPassword" type="password" required autocomplete="current-password">

	<button type="submit">Sign in</button>
	<div role="status" aria-live="polite"></div>
</form>
```

### Progressive enhancement example (submit to API)

```html
<script>
	const form = document.querySelector('form');
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const data = new FormData(form);
		const resp = await fetch(form.action, {
			method: form.method || 'POST',
			body: JSON.stringify(Object.fromEntries(data)),
			headers: { 'Content-Type': 'application/json' }
		});
		if (resp.ok) location.href = '/stories.html';
	});
</script>
```

### Notes on semantics and small fixes
- Use `lang="en"` and a proper `<head>` block.
- Avoid duplicate `<body>` tags; validate HTML with validators during CI.
- Prefer CSS classes over inline styles and centralize styling (e.g., `styles.css` or a framework).
- Use semantic tags (`article`, `section`, `aside`, `time`) for story and comment content to improve SEO and assistive tech.

These changes improve robustness, accessibility, and make it easier to later migrate to React/Vite and hook up APIs securely.

## Additional HTML Structure Recommendations

Below are concise, actionable HTML-focused suggestions you can apply across the existing static pages before adding CSS/JS.

- **Document scaffold:** Always use a canonical document skeleton: `<!doctype html>`, `<html lang="en">`, a single `<head>` with metadata (`charset`, `viewport`, `title`, favicons, link to `styles.css`), and one `<body>`.
- **Headings hierarchy:** Use a single `h1` per page for the main title, then descend (`h2` → `h3`) for sections; never skip levels (don't jump from `h1` to `h4`).
- **Landmark elements:** Wrap top-level regions in `header`, `nav`, `main`, `aside`, and `footer` to enable screen-reader navigation. Use `role` only when semantic element is unavailable.
- **Story/Feed markup:** Represent each story as an `article`. Put metadata in a `header` inside the `article` and the body in an element such as `div` or `section`. Use `time datetime="..."` for dates.

	Example:

	```html
	<main>
		<section aria-labelledby="feed-title">
			<h2 id="feed-title">Recent Stories</h2>
			<article class="story">
				<header>
					<h3 class="story-title">Grandma's Picnic</h3>
					<p class="meta">By <a href="/profiles/amy">Amy</a> · <time datetime="2024-09-01">Sep 1, 2024</time></p>
				</header>
				<p>Short excerpt of the story…</p>
				<footer class="story-actions"> <!-- buttons / links --> </footer>
			</article>
		</section>
	</main>
	```

- **Navigation:** Use `nav` with a list (`ul > li > a`) for links. Include a visually hidden "Skip to main content" link at the top for keyboard users.
- **Interactive controls:** Use `<button>` for actions (like open, close, like) and `<a>` for navigation. Buttons that trigger navigation should either be links or use progressive enhancement to perform client-side navigation.
- **Forms & labels:** Always associate `label` with inputs via `for`/`id`. Use `fieldset` + `legend` for grouped controls. Provide `aria-invalid`, `aria-describedby` for error messaging, and an `aria-live="polite"` region for status updates.

- **Images & media:** Provide meaningful `alt` text. For decorative images use empty `alt=""` and `role="presentation"`. Use `<figure>` and `<figcaption>` for images that need captions or attribution.
- **Icons & SVG:** Inline SVG should include `<title>` and `<desc>` for accessibility; if using icon fonts, provide accessible labels or `aria-hidden="true"` when purely decorative.

- **Semantic lists:** Use `ul`/`ol` for lists of links or items (e.g., tag lists, comment lists). Each comment can be an `li` containing an `article` or `section` with appropriate metadata.
- **Avoid misuse of tables:** Only use `<table>` for tabular data; do not use tables for layout.

- **Template fragments for JS:** Add `<template id="story-template">` that contains the HTML for a story item. This makes future client-side rendering easier while keeping the HTML valid now.

	Example template:

	```html
	<template id="story-template">
		<article class="story">
			<header>
				<h3 class="story-title"></h3>
				<p class="meta"><time></time></p>
			</header>
			<p class="story-body"></p>
		</article>
	</template>
	```

- **Accessibility extras:** Add a `lang` attribute, include a visible focus style (in CSS later), and use ARIA only to complement missing semantics. Include `aria-live` regions for dynamic status messages.
- **Microcopy & link semantics:** Use descriptive link text (avoid "click here"); external links should include `rel="noopener noreferrer"` and `target="_blank"` when needed.

- **Naming conventions:** Use meaningful classes and IDs (avoid presentational names like `.red-heading`). Consider a simple atomic/BEM-like pattern for class names so later CSS is predictable.

- **Validation & automation:** Add a simple HTML validation step to CI (e.g., `html-validate`) or run the W3C validator locally to catch structural errors (missing `lang`, duplicate `id`, stray `body` tags).

These suggestions focus purely on HTML structure and semantics so the project is robust and accessible before CSS/JS are added.
