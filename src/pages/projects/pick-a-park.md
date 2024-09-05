---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Pick A Park'
subtitle: 'A Golang PWA for discovering National Parks near you.'
logo: '/pick-a-park-logo.webp'
description: "The app utilizes the browser's geolocation API to find National Parks close to a user's location, then retrieves driving distances to the parks from the Mapbox Matrix API, and current weather at the parks from the OpenWeatherMap API. The app can also be used to find campsites and reserve them."
projectURL: 'https://pick-a-park.com'
githubLink: 'https://github.com/bogdano/pick-a-park'
order: 1
---

Throughout my time at university in the US, many of my most memorable experiences took place in the National Parks. The impetus behind this project was to create a tool that
could substitute the many hours I had already spent over the years in cross-referencing which parks were closest to me, whether the weather would be tolerable for camping,
and whether there were any campsites available on short notice.<br /><br />

**Golang** has become my go-to language for personal projects due to its speed, simplicity, and its blazingly fast compilation speed compared to other C-like languages.
I took the opportunity to explore **Pocketbase** with this project, which is attractive to me as an open-source, lightweight, and self-hosted alternative to managed backend solutions like
Firebase or Supabase, with a beautiful admin interface.<br /><br />

The majority of the logic within this app is focused on bringing API calls down to an absolute minimum, and on optimizing the views and images in the app to provide as
smooth a user experience as possible. One part of this minimalist approach was the choice of using **HTMX** on the frontend. I have been pleasantly surprised at how
much can be done with the minimalist hypermedia-driven approach, and my choice to use HTMX here stems from my desire to become familiar with the types of projects that do
benefit from the decreased complexity of having a single source of application state (while not compromising on UX), and which types of projects would be better off
sticking with the SPA approach.<br /><br />
