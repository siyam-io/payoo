# Payoo MFS | Mobile Financial Services

**Live Demo:** [https://ssiyam0123.github.io/payoo/](https://ssiyam0123.github.io/payoo/)

Payoo is a fully featured, interactive mobile financial services (MFS) wallet simulation designed to work inside a mobile device mockup. Built with Tailwind CSS and DaisyUI, it emulates a modern wallet dashboard with transaction validation, dynamic state management, and real-time transaction tracking.

## Core Features

- **Device Mockup**: Housed in a beautiful DaisyUI phone mockup frame.
- **Login Verification**: Restricts access using mobile number format checks (11 digits starting with `01`) and a 4-digit PIN check (Demo PIN: `1234`).
- **Interactive Balance Widget**: A custom "Tap to Show Balance" pill that displays the user's balance with smooth animations and hides itself after a 3-second delay.
- **Transactional Services**:
  - **Add Money**: Credit funds from visa/mastercard cards or linked bank accounts (bKash/DBBL).
  - **Cash Out**: Send funds to MFS agent phone numbers.
  - **Send Money**: Peer-to-peer mobile number transfers.
  - **Pay Bill**: Pay utilities (DESCO, WASA, Titas Gas, Link3 Internet) using billing accounts.
  - **Claim Bonus**: Use promotional code `PAYOO50` to receive a bonus.
- **Real-Time Transaction Log**: Dynamic logging of all activities (cash flow direction, amount, target account, timestamp, and a random transaction ID generator) with a filter tool (All, Cash In, Cash Out).
- **Persistent State**: Retains user balance, transaction logs, and bonus claims across browser reloads using HTML5 LocalStorage.
- **Toast Notifications**: Interactive success, error, and info banners that animate at the top of the mobile screen.

## Technologies Used

- **Markup**: HTML5 (Semantic Structure)
- **Styles**: CSS3, Tailwind CSS CDN, DaisyUI
- **Fonts**: Outfit (Google Fonts)
- **Logic**: Vanilla ES6 JavaScript (State Management, DOM Manipulation, LocalStorage)

## Setup & Running Locally

1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/ssiyam0123/payoo.git
   ```
2. Navigate into the project folder and open `index.html` in any web browser.
3. To view or debug local storage persistence, use Google Chrome DevTools (Application Tab -> Local Storage).

## Security & Project Cleanliness

- Checked for sensitive environment variables or credentials (`.env`, config keys). None found.
- Added standard `.gitignore` config to ignore caches, IDE setups, and node modules.
