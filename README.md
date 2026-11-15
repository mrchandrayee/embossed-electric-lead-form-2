# Embossed Electric Lead Form

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/embossed-electric-lead-form-2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the lead enquiry form shown in the uploaded screen recording.

## Visible design reproduced
- Dark charcoal/navy page with blue title glow
- Embossed dark form card with rounded corners
- "Get In Touch" heading and supporting text
- Full Name, Email Address and Mobile Number fields
- Service dropdown: UI/UX Design, Web Development, Branding, Social Media Marketing, Other
- Your Requirement textarea
- Bright cyan gradient SUBMIT ENQUIRY button
- Orange-bordered CSS snippet panel

## Functionality
- Required-field validation
- Email format validation
- Mobile number length validation
- Submitting/loading state
- Success feedback after client-side demo submission
- Copy CSS button
- Responsive mobile styling and reduced-motion support

## Run locally
No dependencies or build step required.

```bash
python -m http.server 8000
```

Open http://localhost:8000.

## Files
- `index.html` — form markup, dropdown, and code preview
- `style.css` — embossed surface, cyan controls, responsive styling
- `script.js` — validation, demo submit state, and copy button

## Backend note
The demo currently validates the form in the browser and displays a success message. It does not send or store enquiries. Connect a backend/API endpoint or form service before production.

## Extraction note
The video is 21.97 seconds long and shows an "Embossed Electric Lead Form" with Full Name, Email Address, Mobile Number, service dropdown, Your Requirement textarea, cyan SUBMIT ENQUIRY button, and a CSS code inset. The visible `.lead-form` CSS excerpt includes relative positioning, z-index 2, 38px padding, 22px border radius, a dark 145-degree gradient, inset shadows and a deep outer shadow. This code excerpt is recreated from the legible screen; the rest of the implementation completes the visible design and form behavior rather than claiming a verbatim dump of unseen source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
