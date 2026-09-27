# Lucas Guenebaud — portfolio

Personal portfolio for a Senior Data, Cloud & ML Engineer. Rebuilt around the CV in `../web/resume.json`, retaining the original DeveloperFolio purple palette, Montserrat typography, Agustina signature, illustrations, dark theme and animated reveals.

## Run locally

Just change `src/portfolio.js` to get your personal portfolio. Feel free to use it as-is or customize it as much as you want.

But if you want to **contribute** and make this much better for other developer have a look at [Issues](https://github.com/lucasguenebaud/developerFolio/issues).


If you created something awesome and want to contribute then feel free to open an [pull request](https://github.com/lucasguenebaud/developerFolio/pulls).

## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to Github](#linking-portfolio-to-github)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)
- [For the Future](#for-the-future)
- [Contributors](#project-maintainers)

## Sections
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects Connected with Github\
✔️ Big Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ Twitter Timeline\
✔️ Github Profile

To view a live example, **[click here](https://developerfolio.js.org/)**.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

Open the local URL printed by Vite. For a production build:

```sh
npm run build
npm run preview
```

Upload the contents of `build/` to a static host. Relative asset paths support both a domain root and a subdirectory. Nothing is published by these commands. No API keys, GitHub token or backend are needed. Fonts and artwork are served locally.

On Google Drive for Windows, npm may fail with `EBADF` / `TAR_ENTRY_ERROR`. In that case copy the project (excluding `node_modules`, `.git` and `build`) to a local disk, run the commands there, and copy the generated `build/` back.

## Content and CV updates

The canonical career history, projects, education, skills and contact details live in `../web/resume.json`. The portfolio commits a snapshot in `src/data/resume.json` so it also builds as a standalone repository.

After editing the canonical CV, install the dependencies in `../web` if needed, then run:

```sh
npm run sync:cv
npm run build
```

The sync command regenerates the Elegant Pink HTML and PDF with the existing CV renderer, then copies both into `public/cv/` and updates the data snapshot. If Puppeteer cannot find Chrome, set `PUPPETEER_EXECUTABLE_PATH` to your Chrome executable before syncing. On Windows, for example:

```powershell
$env:PUPPETEER_EXECUTABLE_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe'
npm run sync:cv
```

`src/portfolio-data.js` contains the short editorial summaries and technology selections. `src/App.jsx` provides the page sections; `src/App.css` and `src/index.css` define responsive layout, motion and themes. Employment highlights are taken directly from the CV. The displayed spelling of Sorbonne is corrected without altering the source CV. Chevalue has a contact link because no public project URL is provided in the CV. The previous GitHub profile link is retained; LinkedIn comes from the new CV.

## Browser checks

```sh
npm run build
npm test
```

Tests use an installed Chrome/Chromium browser (set `PUPPETEER_EXECUTABLE_PATH` if it is not in a standard location). They check desktop/mobile overflow, real CV content and downloads, theme persistence, mobile navigation, keyboard access and reduced motion against the production build.

## Credits

This portfolio originated from [DeveloperFolio by Saad Pasta and contributors](https://github.com/saadpasta/developerFolio). The original contributor list is retained in `.all-contributorsrc`. Existing illustration and font assets are retained from that project; the Chevalue graph illustration is original SVG. Employer names are typeset text, not downloaded brand marks. No remote image, font, social embed, analytics or GitHub API requests are made by the portfolio.

The old Create React App, Apollo and react-reveal stack has been replaced with React, Vite and native CSS/IntersectionObserver animations. Empty template sections and obsolete integrations have been removed. Theme preferences are saved locally; reduced-motion preferences disable animations. The original implementation remains in Git history.
