---
path: "/works/sesimi-app"
date: "2020-current"
order: 1
title: "Sesimi App"
role: "UX Engineer"
del1: "UI/UX design"
del2: "Front-end Engineering (React, Typescript, Tailwind)"
image: "/images/sesimi/main.png"
thumb: "/images/sesimi/thumb.png"
featured: true
---

[main]: /images/sesimi/main.png "Main"
[export]: /images/sesimi/export.png "Export"

<br />

##Role and project
<a href="https://sesimi.com/" target="_blank" rel="noopener">Sesimi</a> is an asset management system empowered by hyper-flexible templates, it is used to aid businesses across the globe in producing advertisements that strictly adhere to branding guidelines while allowing the flexibility of producing multiple variations, formats, and sizes (responsiveness). I currently work as a UX Engineer (part of engineering team), splitting my time between improving and creating user flows (including user research), as well as front-end engineering. Below are some of the problems and solutions that were discovered via user tests and feedback as well as the implemented improvements.

##Template Export

![export][export]

**Problems**: The build and export tabs were separated, making it difficult for the users to seamlessly download their assets, the media pack was taking up a lot of space in the sidebar and was getting lost in the content.

**Solutions**: Merging the "Download" and "Build" functionality into one signle flow, providing a set of sticky buttons so that the user can download an asset at any point in time. Renaming and moving the media pack to "Tray" and creating a visual tray with thumbnails suggesting the ability to download multiple assets at once.

**Ideation/Design**: 
The confusion between the build and export tabs was caught during the pre-release user testing, multiple users were struggling to seamlessly export their assets. A quick iteration of the pattern was implemented (merging the functionalities in UI), and a repeated round of user testing has confirmed that no tested users at that point had any problems navigating the export functionality.

As regarding the tray, after gathering feedback via surveys, telemetry tools, as well as user interviews and ideating with the entre team, it was decided that the name "Tray" could potentially tie into the new visual pattern better than the "Pack". The tray specific actions were decided to be grouped within an actionable dropdown in the static spot to avoid disappearing UI patterns which are known to confuse the users.

**Results**: 
The improvements have been released and the questions to the CS team have dropped significantly, the features are still being closely monitored for potential improvements.


