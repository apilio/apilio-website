# Apilio — Product Overview

> Reliable automation for your smart home

## What is Apilio?

Apilio is a cloud-based smart home automation platform that lets users connect devices and services from different brands and build sophisticated automation routines — going far beyond simple "if this, then that" logic. It acts as a logic layer (middleware) between smart devices, enabling complex conditional automations without writing code.

No hub required. Set up once, runs in the cloud.

## Value Proposition

Most smart home platforms (including IFTTT) only support simple one-trigger, one-action automations. Apilio fills the gap for users who need:

- **Complex conditions** — Combine multiple criteria: "IF I'm home AND it's after sunset AND the humidity is above 60%, THEN..."
- **Multi-step actions with delays** — Chain actions with individual timing: "Turn on lights, wait 30 minutes, close blinds, wait 10 minutes, adjust thermostat"
- **Cross-brand control** — Unify devices from Tuya, Philips Hue, Sonoff/eWeLink, Tado, Alexa, and 600+ IFTTT-connected brands in a single automation
- **State persistence** — Apilio remembers device states and sensor values, using them as inputs for future decisions
- **Reliability** — Precise geofencing without false positives, timeouts to handle flaky sensors, pre-execution warnings before routines run

**Positioning:** More powerful than IFTTT, more accessible than Home Assistant. For people who find mainstream platforms too limited but don't want to run their own server or write code.

## Core Concepts

### Logicblocks
The primary automation unit. A logicblock evaluates conditions and, when satisfied, executes actions. Supports boolean logic: ALL conditions must be true, ANY condition, or compound expressions.

### Variables
Apilio's memory system. Stores data from devices, sensors, and services (temperature readings, occupancy states, timestamps). Variables are used as inputs for conditions.

### Conditions
Rules that must be satisfied before actions execute. Types include:
- **Time-based** — "Between sunset and midnight", "Every weekday at 7am", cron expressions
- **Location-based** — "I'm within 50m of home" (geofencing)
- **Sensor/device-based** — "Temperature > 22°C", "Motion detected"
- **State-based** — "Nobody is home", "Guest mode is on"
- **Timeouts** — "No motion for 5 minutes" (prevents false triggers)

### Devices
Apilio mirrors devices from connected services (Tuya, Hue, Sonoff, Tado) and also supports user-created **custom devices** with boolean, string, or numeric attributes. Device statuses work like variables under the hood but provide a more intuitive, hardware-first interface. Navigation is device-centric — devices are the primary entry point.

### Actions
What happens when conditions are met. Can target:
- Tuya/Smart Life devices
- Sonoff/eWeLink devices
- Philips Hue lights
- IFTTT applets
- Alexa routines
- Tado thermostats
- Any webhook-compatible service
- Email notifications

Each action can have its own delay, enabling sequenced multi-step routines.

## Features

### Automation Engine
- Multiple triggers and actions per routine
- Complex boolean condition logic (AND/OR/NOT)
- Delayed actions with per-step timing
- Timeouts to handle unreliable sensors
- Cron expressions for precise scheduling
- Sunset/sunrise-aware time conditions

### Execution Modes
- **Normal** — Runs automatically when conditions are met
- **Warning** — Sends notification before executing, giving time to cancel
- **Suggestion** — Requires manual confirmation before running

### Devices & Custom Devices
- Automatic device import from Tuya, Hue, Sonoff/eWeLink, Tado
- Custom device creation with user-defined attributes (boolean, string, numeric)
- Device-centric navigation — devices as the primary UI entry point
- Support for Tuya raw data type devices (alert detectors, cameras, niche products)

### Monitoring & Control
- Real-time event logging
- CSV export of logs
- Tagging and dashboards — group by room or project
- Centralized device view across brands
- Native email notifications (up to 300/month on higher plans)
- Web and mobile access

### REST API
Full JSON-based API for programmatic access to Apilio. Enables external systems and scripts to interact with Apilio without the UI.

**What you can do:**
- Get and update variable values (boolean, string, numeric)
- Get condition details and their current evaluation state
- Trigger logicblock evaluations
- Query all data programmatically

**Use cases:**
- Feed external data into Apilio (e.g. weather API data, electricity prices, CO2 levels)
- Display Apilio states on smart displays or dashboards
- Integrate with Home Assistant or custom scripts
- Build fully custom automation flows around Apilio's logic engine

**Authentication:** Token-based (unique API keys per account). Documentation hosted on Postman.

### Webhooks
Two-directional webhook system — Apilio can both receive and send webhooks, making it a flexible integration hub.

**Incoming webhooks (external → Apilio):**
Every variable and logicblock in Apilio gets its own unique webhook URL. External services call these URLs to:
- Set, toggle, or clear boolean variables
- Update string variables (`&value=new_value`)
- Set, add, or subtract numeric variables
- Trigger logicblock evaluations on demand
- Activate or deactivate logicblocks remotely (e.g. disable automations during holidays)

Device statuses also expose webhook URLs for external updates.

Works with any system that can make HTTP requests: iOS Shortcuts (Siri), Tasker, Zapier, Locative, Life360, Node-RED, custom scripts, cron jobs, etc.

**Outgoing webhook actions (Apilio → external):**
When a logicblock's actions execute, Apilio can send HTTP requests to external services:
- Configurable URL, headers, and request body
- Support for basic authorization headers
- Custom Content-Type headers for JSON APIs
- Variable values can be inserted into request parameters
- Individual delay per webhook action
- Can be combined with Tuya, Hue, IFTTT, and other actions in the same logicblock

**Real-world webhook integrations from the community:**
- SMS notifications via ClickSend
- Smart lock control via Nuki API
- Push notifications via Pushover and Vybit
- Location updates from Life360
- Geofencing triggers from Locative
- iOS Shortcuts for voice-controlled status checks ("Hey Siri, is the garage door open?")
- Tasker automations on Android (notification interception, widget buttons)
- Zapier workflows

## Integrations

### Native (Direct)
| Integration | Capabilities |
|---|---|
| **Tuya / Smart Life** | Real-time events, bulbs, sockets, switches, plugs, temperature sensors, presence sensors, cameras. Supports raw data type devices (alert detectors, niche products). |
| **Sonoff / eWeLink** | Native integration (Feb 2026). Real-time updates, no IFTTT needed. Switches, plugs, power monitoring (POW/POWR3/SPM), lights, LED strips, fans, door/motion/temperature/water/smoke sensors, remote controls. WiFi and Zigbee devices across all regions. |
| **Philips Hue** | Full light control, scenes, combined with other brands |
| **Tado** | Native integration (Dec 2025). Set temperature, turn off heating, resume Tado auto mode (unique — hard to do on other platforms). |
| **Amazon Alexa** | Trigger Alexa routines from Apilio (one-directional, Oct 2025) |
| **IFTTT** | Access to 600+ device brands and services |

### Via Webhooks & API
| Integration | How |
|---|---|
| **Zapier** | Webhook connection |
| **iOS Shortcuts** | Webhook triggers |
| **Tasker (Android)** | Webhook triggers |
| **Locative** | Geofencing via webhooks |
| **Life360** | Location via webhooks |
| **Any REST-compatible service** | Via API or webhooks |

### Mentioned by Community Users
- Google Assistant (via IFTTT)
- Netatmo (via IFTTT)
- SmartThings (via IFTTT)
- LIFX (via IFTTT)
- Ring (via IFTTT)
- LaMetric (via IFTTT/webhooks)
- Google Nest thermostat (via community workarounds)

### Future
- Matter protocol support (in development)

## Use Cases

### Lighting
- **Motion-activated lights** — Turn on when motion detected AND it's dark; keep on while someone is present; turn off after timeout
- **Arrival lighting** — Lights on when you arrive home after dark (geofence + sunset condition)
- **Smart switch control** — One switch controlling multiple smart bulbs from different brands

### Climate & Energy
- **Heating optimization** — Control Tado/thermostat based on who's home, weather forecast, time of day, and open windows
- **Airbnb climate control** — Automate temperature and humidity for rental properties; reduce energy when unoccupied
- **Energy-aware heating** — Use electricity pricing and CO2 data to choose optimal heating times

### Security & Access
- **Garage door automation** — Open when you're within 50m of home; auto-close if left open; voice assistant integration
- **Presence simulation** — Lights and devices behave as if someone is home

### Comfort & Convenience
- **Humidity management** — Activate extraction fans when indoor humidity exceeds outdoor levels
- **Weather-aware reminders** — "Grab your umbrella" notifications via LaMetric or phone
- **Routine overrides** — Temporarily disable automations for parties or special occasions

### Precision Control
- **Small-radius geofencing** — 50m triggers without false positives (using Locative + Apilio)
- **Sensor timeout handling** — Prevent false triggers from flaky motion sensors or WiFi drops

## Target Audience

### Primary: Smart Home Enthusiasts
People who already have smart devices from multiple brands and find IFTTT or native apps too limited. They want more control without running a home server or writing code.

### User Segments (per Apilio)
| Segment | Description |
|---|---|
| **Basic users** | Want to reliably automate a few things at home or work |
| **Power users** | Build complex multi-device, multi-condition automations (heating + weather + presence + time) |
| **Developers** | Control Apilio via REST API, build custom integrations |
| **New users** | Getting started with home automation, want something approachable |

### Common Profile
- Owns devices from 2+ brands (Tuya, Hue, Sonoff, Alexa, etc.)
- Frustrated by the limitations of IFTTT or single-brand apps
- Technically curious but not necessarily a programmer
- Values reliability and precision over tinkering
- May manage properties (Airbnb hosts, facilities)

## Pricing

21-day free trial, no credit card required.

| Plan | Monthly | Logicblocks | Variables & Conditions | Notable Features |
|---|---|---|---|---|
| **Essential** | $1.50 | 3 | 50 | Action delays, IFTTT/Tuya/Hue, webhooks, 1-week logs, 50 emails/mo |
| **Home** | $2.40 | 10 | 50 | All Essential features |
| **Advanced** | $2.90 | 10 | 50 | + Month of logs, value passing to IFTTT, complex condition linking, execution modes, CSV export, cron, REST API, 300 emails/mo |
| **Pro** | $3.90 | 50 | 50 | All Advanced features |
| **Extra** | $6.90 | 350 | 350 | All Advanced features, higher limits |

Special pricing available for charities and educational institutions.

## Competitive Landscape

| Platform | Comparison |
|---|---|
| **IFTTT** | Apilio adds complex logic, delays, state persistence, and multi-condition support on top of IFTTT (and uses IFTTT as an integration layer) |
| **Home Assistant** | More powerful and open, but requires a server/hub and technical skill. Apilio is cloud-based and no-code. |
| **Native apps** (Tuya, Hue, Alexa) | Limited to their own ecosystems. Apilio bridges across brands. |
| **Zapier** | Focused on business/SaaS automation, not smart home devices |

## Key Differentiators

1. **Logic layer, not a replacement** — Works alongside IFTTT, Tuya, Hue, Sonoff, Tado, and Alexa rather than replacing them
2. **Open and extensible** — REST API + bidirectional webhooks make Apilio a programmable automation hub. Any system that can make or receive HTTP requests can integrate. No vendor lock-in.
3. **No hub, no code** — Cloud-based SaaS; accessible via browser and mobile. But developers can go deep with API and webhooks if they want.
4. **Affordable** — Plans from $1.50/month
5. **Active community** — Forum with 200+ support threads, use case sharing, and feature voting
6. **Precision** — Timeouts, execution modes, and granular delay control that other platforms lack
