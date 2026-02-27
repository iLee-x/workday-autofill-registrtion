# Workday Account Creation Auto-Fill

A Chrome extension that automatically fills in your email and password on Workday "Create Account" forms, saving you time when applying to jobs.

## Features

- Auto-fills email, password, confirm password, and checkbox on Workday account creation pages
- Works across all Workday job sites (`*.myworkdayjobs.com`)
- Configurable via a simple popup UI
- Enable/disable with a single toggle
- Lightweight — uses MutationObserver, no background polling

## Installation

### From Chrome Web Store

* [Chrome extension link](https://chromewebstore.google.com/detail/workday-account-auto-fill/imccdinemdmahngpbhnaanbnmabnjgla)

### Manual (Developer Mode)

1. Clone or download this repository
2. Open `chrome://extensions` in Chrome
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the extension folder
5. Click the extension icon in the toolbar and enter your email and password

## Usage

1. Click the extension icon and enter your Workday email and password
2. Make sure the **Enabled** toggle is on
3. Visit any Workday job application page — the "Create Account" form will be filled automatically

## Privacy Policy

**Effective Date: February 26, 2026**

### 1. Information We Collect
This extension stores only the email address and password that you manually enter through the extension popup. This data is saved locally on your device using Chrome's built-in storage API and is never transmitted to any external server.

### 2. How We Use Information
Your stored credentials are used solely to auto-fill "Create Account" forms on Workday job application sites (*.myworkdayjobs.com). The extension does not use your data for any other purpose.

### 3. Data Storage & Security
Your credentials are stored in Chrome's local storage, which is **not encrypted**. Anyone with access to your computer or browser profile could potentially read this data. We strongly recommend:
- Using a unique password specifically for Workday accounts
- Not reusing passwords from email, banking, or other sensitive accounts

### 4. Sharing Information
We do not sell, share, or transfer any user information to third parties. Your data never leaves your device.

### 5. Third-Party Services
This extension does not integrate with any third-party analytics, advertising, or tracking services.

### 6. Changes to This Policy
If we update this privacy policy, the revised version will be posted here with an updated effective date.

### 7. Contact
If you have any questions about this privacy policy, you can contact us at: ilee-x@outlook.com

## Project Structure

```
workday-autofill-extension/
├── manifest.json   # Extension manifest (v3)
├── content.js      # Auto-fill content script
├── popup.html      # Settings popup UI
├── popup.js        # Settings logic
├── privacy.html    # Privacy policy
├── README.md
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## License

MIT
