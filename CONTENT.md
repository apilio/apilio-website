# Apilio Website — Structure & Content Plan

Goal: Lean, clear website that communicates what Apilio does and gets visitors to sign up. Reduce content from the current Webflow site. Every page should have a clear purpose.

## Site Map

```
/                   Home (main landing page)
/features           Features overview
/integrations       Integrations & connectivity
/pricing            Pricing plans
/about              About Apilio
/404                Error page
```

### Pages removed from Foxi template
- `/changelog` — Updates belong on the community forum
- `/faq` — Fold key questions into pricing page and about page instead
- `/blog` — Not needed at launch (can add later)
- `/blog/tags/[tag]` — Removed with blog
- `/contact` — Fold into about page
- `/terms` — Link to external terms if needed

---

## Page-by-Page Content

---

### Home `/`

**Purpose:** Make the target user think "this is for me" within seconds. Transport the value proposition, show what's possible, drive trial signups.

**Target user arriving here:** Owns smart devices from 2+ brands. Has tried IFTTT or native apps and hit the ceiling. Wants more control but doesn't want to set up Home Assistant.

#### Sections

**1. Hero**
Component: `HomeCTA`

The hero must acknowledge their world and position Apilio as the missing piece.

- Headline: "The logic layer your smart home is missing"
- Subheadline: "Your devices are powerful. But simple if-then rules hold them back. Apilio lets you build real automation logic — across brands, no hub required."
- Primary CTA: "Start free trial"
- Secondary CTA: "See how it works" (scrolls to How it works)

Alternative headlines to consider:
- "Your smart devices can do more than if-then"
- "Smart home automation that actually thinks"

**2. Integration logos**
Component: `SocialProof`

Immediately answers "does it work with my stuff?" — the first question every smart home user has.

Logos: Tuya / Smart Life, Philips Hue, Sonoff / eWeLink, Tado, Amazon Alexa, IFTTT

Small text: "Works with 600+ brands via IFTTT"

**3. How it works**
Component: `FeatureCards` (3 cards)

De-mystify the product. Show it's not intimidating.

| Step | Title | Description |
|---|---|---|
| 1 | Connect your devices | Link your Tuya, Hue, Sonoff, Tado, or Alexa accounts. Devices import automatically. |
| 2 | Build your logic | Combine conditions — time, location, sensors, device states — into powerful automation rules. |
| 3 | Let it run | Apilio runs in the cloud 24/7. No hub, no maintenance. Set it and forget it. |

**4. Key benefits**
Component: `FeatureCards` (4 cards)

Not features — pain points solved. Each card = one reason to switch from what they're using now.

| Benefit | Title | Description |
|---|---|---|
| Complex logic | Beyond if-then | Combine multiple conditions with AND/OR/NOT logic. "If I'm home AND it's dark AND motion detected" — in a single rule. |
| Cross-brand | All your brands, one brain | Tuya lights, Hue sensors, Tado heating, Alexa routines — controlled together in one automation. |
| Timing | Timing that actually works | Delay actions by minutes or hours. Schedule with cron precision. Trigger at sunset. Timeout after no motion. |
| Cloud-based | No hub, no server | Runs in the cloud. Access from anywhere. Nothing to install, maintain, or update. |

**5. Use case highlights**
Component: `HighlightRows` (3 rows, alternating text + visual)

Make it concrete. "I want that" moments.

| Use case | Title | Description |
|---|---|---|
| Lighting | Lights that know you're home | Motion detected + it's after sunset + no one triggered the override = lights on. Leave the room for 5 minutes = lights off. No false triggers. |
| Climate | Heating that thinks ahead | Control your Tado thermostat based on who's home, the weather forecast, and the time of day. Save energy without sacrificing comfort. |
| Geofencing | Garage door opens as you arrive | 50-meter geofence, zero false triggers. Combine location with time and device state for automations that only fire when they should. |

**6. API & Webhooks callout**
Component: `HighlightRows` (single row) or `TextImage`

Dedicated section for power users. Shows depth without overwhelming beginners above.

- Title: "Connect anything"
- Description: "Full REST API and bidirectional webhooks. Feed in weather data, electricity prices, or CO2 levels. Trigger actions in any service that speaks HTTP. Use iOS Shortcuts, Tasker, Zapier, or your own scripts."
- Small CTA: "View API docs" (links to Postman)

**7. Bottom CTA**
Component: `CTABasicDark`

- Headline: "Try Apilio free for 21 days"
- Subheadline: "No credit card required. Plans start at $1.50/month."
- CTA: "Start free trial"

---

### Features `/features`

**Purpose:** Detailed feature breakdown for visitors who want to understand the product deeply before signing up. Organized by what you can *do*, not by technical concept. Each section should feel self-contained — a visitor scanning the page should be able to stop at any section and understand the value.

#### Sections

**1. Header**
Component: `PageHeader`

- Title: "Everything you need to automate your home"
- Subtitle: "Apilio gives you the building blocks for automations that actually match how you live."

**2. Feature groups**
Component: `FeatureSticky` (sticky scroll sections — one per group, with illustration on the sticky side)

---

**Group 1: Automation Logic**

- Section title: "Build rules that match real life"
- Section subtitle: "Simple if-then doesn't cut it. Real life is messy — your automations should handle that."

| Feature | Description |
|---|---|
| Logicblocks | The core building block. Each logicblock combines conditions and actions into a single automation rule. Name them, tag them, organize them by room or project. |
| Complex conditions | Combine multiple conditions with AND, OR, and NOT logic. "If I'm home AND it's after sunset AND the front door sensor triggered" — one rule, not three. |
| Multiple triggers | A single logicblock can be triggered by different events — a sensor update, a schedule, a webhook, or an IFTTT applet. |
| Multiple actions | One rule can control several devices and services at once. Turn on the lights, adjust the thermostat, and send a notification — all from one trigger. |
| Condition sources | Build conditions from time, location, device states, sensor data, IFTTT triggers, Tuya events, or webhook inputs. Mix and match freely. |

Example scenario: *"If motion is detected AND it's between sunset and 2am AND the 'party mode' override is off → turn on hallway lights, wait 5 minutes after last motion, turn them off."*

---

**Group 2: Timing & Delays**

- Section title: "Precise control over when things happen"
- Section subtitle: "Not everything should happen instantly. Apilio lets you orchestrate timing down to the minute."

| Feature | Description |
|---|---|
| Action delays | Delay individual actions within a logicblock. "Turn on lights now, close blinds in 30 minutes, adjust thermostat in 1 hour" — all from one trigger. |
| Cron expressions | Schedule logicblock evaluations with cron precision. Every 5 minutes, every weekday at 7am, the first Monday of each month — whatever you need. |
| Sunset & sunrise | Time conditions that adapt to your location and the season. "Between sunset and midnight" just works — no manual adjustment needed. |
| Timeouts | Reset a condition after a set period. If your motion sensor doesn't report "no motion" reliably, a timeout handles it. Prevents false triggers from flaky sensors or dropped connections. |
| Time windows | Restrict when automations are active. "Only on weekdays", "only between 22:00 and 06:00", "not on holidays". |

Example scenario: *"Every day at sunset → turn on porch light. At 23:00 → dim to 20%. At sunrise → turn off."*

---

**Group 3: Devices**

- Section title: "Your devices, all in one place"
- Section subtitle: "No matter the brand, Apilio brings them together in a single dashboard."

| Feature | Description |
|---|---|
| Auto-import | Connect your Tuya, Hue, Sonoff, or Tado account and your devices appear automatically. Real-time status updates, no manual configuration. |
| Custom devices | Create your own virtual devices with boolean, string, or numeric attributes. Useful for tracking states that don't come from a physical device — "vacation mode", "guest count", "last watered". |
| Device-centric dashboard | Devices are the primary entry point. See all your hardware at a glance, grouped by room, project, or integration. |
| Tagging & grouping | Tag devices, logicblocks, and variables. Filter your dashboard by tag. Manage a whole room or project as a unit. |
| Broad compatibility | Tuya covers thousands of white-label products. Sonoff/eWeLink covers WiFi and Zigbee. Hue for lighting. Tado for heating. Alexa for routines. IFTTT for 600+ more brands. |

Example scenario: *"I have Tuya motion sensors, Hue lights, a Tado thermostat, and a Sonoff power plug. All show up in one dashboard. One logicblock controls all of them based on presence and time."*

---

**Group 4: Execution Modes**

- Section title: "Stay in control"
- Section subtitle: "Not every automation should run silently. Sometimes you want a heads-up, sometimes you want to decide."

| Mode | Description |
|---|---|
| Normal | The default. Conditions met → actions run. Fully automatic, no intervention needed. |
| Warning | Apilio notifies you before executing. You get a window to cancel. Useful for high-impact automations like locking doors or turning off heating. |
| Suggestion | Apilio evaluates conditions but waits for your manual confirmation before acting. You stay in the loop for sensitive routines. |
| Override | Temporarily disable automations. Hosting a party? One toggle pauses all your lighting routines until you re-enable them. |

Example scenario: *"Warning mode on the garage door automation — I get a notification 'Garage door will close in 2 minutes' and can cancel if I'm still unloading groceries."*

---

**Group 5: Monitoring & Notifications**

- Section title: "See what's happening"
- Section subtitle: "Real-time visibility into every automation, every device, every event."

| Feature | Description |
|---|---|
| Event log | See every trigger, condition evaluation, and action execution in real time. Understand exactly what happened and when. |
| CSV export | Download your event history for analysis. Debug complex automations or track patterns over time. |
| Email notifications | Get notified when specific logicblocks fire or conditions change. Up to 300 emails/month on higher plans. |
| Centralized view | One place for all devices, all brands. No switching between Tuya, Hue, and Tado apps to understand your system. |
| Web & mobile | Access Apilio from any browser, any device. Check status, adjust settings, review logs — from anywhere. |

Example scenario: *"Something turned on the living room lights at 3am. Check the event log → motion sensor triggered → but the timeout was too short. Adjust from 2 to 5 minutes, problem solved."*

---

**Group 6: REST API & Webhooks**

- Section title: "For the tinkerers and builders"
- Section subtitle: "Full programmatic access. If it speaks HTTP, it works with Apilio."

| Feature | Description |
|---|---|
| REST API | Full JSON API. Read and write variables, query condition states, trigger logicblock evaluations. Token-based authentication. Documented on Postman. |
| Incoming webhooks | Every variable and logicblock gets its own unique URL. Update values, trigger evaluations, activate or deactivate logicblocks — from any external system. |
| Outgoing webhooks | When actions fire, Apilio can send HTTP requests to any URL. Custom headers, body, and authorization. Variable values injected into requests. Individual delays per webhook. |
| Extensibility | Works with iOS Shortcuts (Siri), Tasker, Zapier, Locative, Life360, Node-RED, Home Assistant, or anything that can make an HTTP request. |
| Real-world uses | SMS via ClickSend, smart locks via Nuki, push via Pushover, voice queries via Siri Shortcuts ("Is the garage door open?"), Android automation via Tasker. |

Example scenario: *"A script reads electricity prices from an API every hour, pushes the current rate to an Apilio variable via webhook. A logicblock checks: if price is low AND I'm home AND temperature < 20°C → turn on heating."*

---

**3. Cross-link section**
Component: `FeatureCards` (2 cards)

| Card | CTA |
|---|---|
| "See what devices work with Apilio" | → /integrations |
| "Find the right plan for you" | → /pricing |

**4. Bottom CTA**
Component: `CTABasicLight`

- "Start your free trial"
- "21 days free, no credit card required"

---

### Integrations `/integrations`

**Purpose:** Answer "does it work with my stuff?" in full detail. Important for SEO (people search for "[brand] + automation"). Important for purchase decisions.

This is a **new page** (not in Foxi template). Build with `PageHeader` + `FeatureCards` + content sections.

#### Sections

**1. Header**
Component: `PageHeader`

- Title: "Works with your devices"
- Subtitle: "Native integrations with real-time updates. Plus webhooks and API to connect anything else."

**2. Native integrations**
Component: `FeatureCards` (6 cards with logos)

| Integration | Description |
|---|---|
| **Tuya / Smart Life** | Real-time events from bulbs, sockets, switches, plugs, temperature sensors, presence sensors, and cameras. Supports raw data type devices. The largest smart home ecosystem — one integration covers thousands of products. |
| **Sonoff / eWeLink** | Switches, plugs, power monitoring (POW/POWR3/SPM), lights, LED strips, fans, and all sensor types. WiFi and Zigbee. All regions. Real-time updates, no IFTTT needed. |
| **Philips Hue** | Full control over lights, scenes, and groups. Combine Hue with devices from other brands in a single automation. |
| **Tado** | Set temperature, turn off heating, or resume Tado auto mode — the last one is nearly impossible on other platforms. |
| **Amazon Alexa** | Trigger Alexa routines directly from Apilio. Use Alexa's vast device support as an output for your Apilio logic. |
| **IFTTT** | Access 600+ device brands and services. Apilio adds the logic layer that IFTTT lacks — complex conditions, delays, state persistence. |

**3. Webhooks & API**
Component: `HighlightRows` or `TextImage`

- Title: "Connect anything with webhooks and API"
- Key points:
  - Every variable and logicblock in Apilio has its own webhook URL
  - Send data in from any service, trigger logic on demand
  - Outgoing webhooks with custom headers, body, and authorization
  - Full REST API for programmatic control
- Show logos/names: Zapier, iOS Shortcuts, Tasker, Locative, Life360, Node-RED
- Real-world examples: SMS via ClickSend, smart locks via Nuki, push notifications via Pushover

**4. Via IFTTT**
Component: `SocialProof` or logo grid

- Title: "600+ more brands through IFTTT"
- Show logos: Google Assistant, Netatmo, SmartThings, LIFX, Ring, LaMetric
- Text: "Anything that works with IFTTT works with Apilio — but with real logic on top."

**5. Coming soon**
Brief mention: Matter protocol support is in development.

**6. Bottom CTA**
Component: `CTABasicDark`

- "Start automating your devices" → trial signup

---

### Pricing `/pricing`

**Purpose:** Clear plan comparison, remove friction, drive trial signups. Visitors here are already interested — don't oversell, just make it easy to choose.

#### Sections

**1. Header**
Component: `PageHeader`

- Title: "Simple, affordable pricing"
- Subtitle: "Start free for 21 days. No credit card required."

**2. Pricing cards**
Component: `PricingColumns`

Show 3 cards prominently (Essential, Advanced, Pro) with Home and Extra as secondary options or a toggle.

| Plan | Price | Logicblocks | Vars & Conditions | Highlight features |
|---|---|---|---|---|
| **Essential** | $1.50/mo | 3 | 50 | Action delays, IFTTT/Tuya/Hue/Sonoff/Tado, webhooks, 1-week logs, 50 emails/mo |
| **Home** | $2.40/mo | 10 | 50 | All Essential features, more logicblocks |
| **Advanced** | $2.90/mo | 10 | 50 | + REST API, cron scheduling, execution modes, complex condition linking, value passing to IFTTT, 1-month logs, CSV export, 300 emails/mo |
| **Pro** | $3.90/mo | 50 | 50 | All Advanced features |
| **Extra** | $6.90/mo | 350 | 350 | All Advanced features, highest limits |

Highlight **Advanced** as "Most popular" — it unlocks REST API, cron, and execution modes at only $0.50 more than Home.

**3. Feature comparison matrix**
Component: `FeatureList`

Full feature-by-feature comparison table below the cards for people who want to compare in detail.

**4. Pricing FAQ**
Component: `FaqSticky` or `Accordion`

| Question | Answer summary |
|---|---|
| Is there a free trial? | 21 days, no credit card, full access |
| Can I change plans anytime? | Yes, upgrade or downgrade with a click |
| What happens after the trial? | Inactive accounts deleted after 1 month |
| Do you offer refunds? | Non-refundable, but convertible to credits |
| Discounts for charities/education? | Yes — get in touch |

**5. Bottom CTA**
Component: `CTABasicLight`

- "Start your free trial" + "No credit card required"

---

### About `/about`

**Purpose:** Build trust. Show there are real people behind the product. Provide a way to get in touch. Connect to the community.

#### Sections

**1. Header**
Component: `PageHeader`

- Title: "About Apilio"
- Subtitle: "Built for people who want their smart home to actually be smart."

**2. The story**
Component: `TextImage`

Brief origin/mission. Keep it human and concise:
- Why Apilio was built (the problem: mainstream platforms too limited, Home Assistant too complex)
- Who it's for (smart home enthusiasts who want more without running servers)
- What drives us (making powerful automation accessible to everyone)

~100–150 words. Not a corporate "about us" — more like a founder's note.

**3. Community**
Component: `FeatureCards` (2–3 cards)

| Card | Content |
|---|---|
| Community forum | 200+ support threads, use case sharing, feature voting. "Built with our users, not just for them." Link to community.apilio.com |
| Documentation | Getting started guides, how-tos, integration tutorials. Link to docs/community |
| Feature requests | Users propose and vote on features. The roadmap is shaped by the community. |

**4. Contact**
Component: `BasicForm` or `ContactCards`

- Contact form (name, email, message) or email link
- "Questions? Ideas? Just want to say hi?"
- Response time expectation

**5. Social links**
From `socialLinks.ts` — Twitter, etc.

---

## Navigation

### Header nav
```
Home | Features | Integrations | Pricing | About    [Start free trial]
```

CTA button: "Start free trial" (primary style, links to app.apilio.com signup)

### Footer

| Column 1: Product | Column 2: Resources | Column 3: Connect |
|---|---|---|
| Features | Community Forum | Contact |
| Integrations | Documentation | Twitter |
| Pricing | API Docs (Postman) | |

About text: "Apilio is the logic layer for your smart home. Connect devices from any brand and build automations that go beyond simple if-then."

Copyright: © Apilio 2026

---

## Content to Prepare

### Copy needed (by priority)

| Priority | Item | Status |
|---|---|---|
| P1 | Hero headline + subheadline | Draft in this doc |
| P1 | "How it works" — 3 steps | Draft in this doc |
| P1 | Key benefits — 4 cards | Draft in this doc |
| P1 | Use case highlights — 3 scenarios | Draft in this doc |
| P1 | Pricing table data | Source: APILIO.md |
| P1 | Navigation labels + CTA | Draft in this doc |
| P1 | Footer content | Draft in this doc |
| P2 | Feature descriptions — 6 groups | Draft in this doc |
| P2 | Integration descriptions — 6 native + webhooks | Draft in this doc |
| P2 | Pricing FAQ — 5 questions | Draft in this doc |
| P2 | About page copy — story + community | TODO — needs your input |
| P2 | API & Webhooks callout (homepage) | Draft in this doc |
| P3 | Meta titles + descriptions for SEO (per page) | TODO |

### Assets needed

| Item | Status |
|---|---|
| Apilio logo (SVG) | TODO — replace `public/logo.svg` |
| Favicon | TODO — replace `public/favicon.svg` |
| OG image for social sharing | TODO — replace `public/og.jpg` |
| Integration logos (Tuya, Hue, Sonoff, Tado, Alexa, IFTTT) | TODO — replace `src/assets/logos/` |
| Hero image or illustration | TODO — replace or remove `src/assets/hero-01.png` |
| Feature illustrations (6 groups) | TODO — replace `src/assets/cards/` |
| Use case visuals (3 scenarios) | TODO — replace `src/assets/highlights/` |

### Configuration changes

| File | Changes |
|---|---|
| `src/config/config.ts` | Site title, description, logo, OG image |
| `src/config/navigationBar.ts` | 5 nav items + CTA (see Navigation above) |
| `src/config/footerNavigation.ts` | 3 columns + about text (see Navigation above) |
| `src/config/socialLinks.ts` | Actual social media URLs |
| `src/config/analytics.ts` | GA tracking ID |
| `tailwind.config.mjs` | Brand colors (replace pink #E2187D), fonts if needed |
| `astro.config.mjs` | Site URL (apilio.com) |

---

## Brand & Tone

- **Voice:** Clear, practical, confident. Not hype-y or overly technical.
- **Audience awareness:** Readers know what smart home devices are but may not be developers. Avoid jargon (explain "logicblock" on first use, for example).
- **Key message:** "Your smart devices are powerful. Apilio makes them work together."
- **Tagline options:** "The logic layer your smart home is missing" / "Reliable automation for your smart home"

### Brand Colors

Source: [Confluence Brand Guidelines](https://apilio.atlassian.net/wiki/spaces/APILIO/pages/80445441/Brand+Guidelines)

| Role | Name | Hex | Tailwind token |
|---|---|---|---|
| Primary | Amber / Gold | `#FFC400` | `primary-400` |
| Neutral | Apilio Grey (Blue Grey 700) | `#455A64` | `neutral-700` |
| Accent | Complementary Blue | `#003BFF` | — (add if needed) |
| Light accent | Light Green | `#E5F4E3` | — |
| Mid accent | Sky Blue | `#5DA9E9` | — |
| Dark accent | Deep Blue | `#003F91` | — |

Full palette applied in `tailwind.config.mjs`. Primary scale built around `#FFC400`, neutral scale built around `#455A64` (Material Blue Grey).

### Fonts

| Usage | Font | Tailwind token | File |
|---|---|---|---|
| Body | Roboto Variable | `font-sans` | `@fontsource-variable/roboto` |
| Headings | Montserrat Variable | `font-headings` | `@fontsource-variable/montserrat` |
| Logo | Source Code Pro | — | Logo SVG/image |

Configured in `tailwind.config.mjs` and imported in `src/layouts/Layout.astro`. Replaces Foxi's Inter/Outfit.

### Logo Assets

Production logos are in Google Drive: [Logo folder](https://drive.google.com/drive/folders/1lME3laGzJMwmIlM6qb6iiVd-qsD7M5D9?usp=share_link)

Files needed:
- `public/logo.svg` — Main logo (horizontal, for header/footer)
- `public/favicon.svg` — Favicon
- `public/og.jpg` — Open Graph image for social sharing
