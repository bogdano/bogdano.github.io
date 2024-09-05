---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Engage'
subtitle: 'A Python PWA for encouraging inter-collegial engagement in the workplace.'
logo: '/engage-logo.webp'
description: 'As project lead of a team of 4 developers, I coordinated the gathering and documentation of requirements, outlining of project scope, database design, prototyping, and led the development of an internal web app for a Cognizant branch to completion, within 3 months.'
projectURL: 'https://engage.bogz.dev'
githubLink: 'https://github.com/bogdano/atg-engage'
order: 2
---

**Please feel free to create an account and explore the app. If you would like to see what the app looks like to moderators, you can contact me and I will elevate your account's privileges.**<br /><br />

In the Covid and post-Covid years, more and more employees opted to work from home most of the time, and one result of that was the loss
of a feeling of cohesion within the branch. Our app was intended to ameliorate this loss by providing a platform for employees to engage
and compete against each other by participating in various activities.

Users are incentivized by earning points for participating in activities, which can be spent to purchase items in the shop. App administrators
can add rewards to the app's shop. A unifying trait amongst the employees we interviewed was competitiveness, and so the ability to compete via
leaderboards, and the ability to form teams was a high priority. The app needed to be usable both on phones and on desktops, so a mobile-first  PWA seemed like
the most straightforward choice.<br /><br />

Backend-wise, I opted for us to go with **Django**, because the rest of the team was already familiar with it. I chose **SQLite** for the database because a monolithic
architecture is sufficient for an app designed to be used internally by users within the same company branch.

Frontend-wise, we were dealing with two primary constraints-- I was the only team member familiar with the SPA approach to frontend development, and we were severely
constrained by time. As a result of this, I took a leap and decided that we should stick with Django's native templating engine, and use **HTMX** for the dynamic elements.

For styling, I chose **Tailwind** CSS, for two reasons: one, our approach would have us all take on the role of full-stack developers as opposed to separating
front and backend work, and two, Tailwind is granular and versatile enough to not require the use of a component library, with a small team.<br /><br />

Thankfully, this approach worked quite well. In the first week of development, I asked the team to create todo MVC apps in order to familiarize themselves with HTMX.
With this minimal amount of experience, we were able to complete a fully-functional minimum viable product within the given timeframe.
