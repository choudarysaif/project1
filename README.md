# 🌸 Lunar & Floral Wellness Landing Page

A beautifully styled, interactive single-page web interface built using semantic markup, advanced CSS layout systems, and vanilla JavaScript DOM interfaces.

## 🌐 Live Preview
Check out the live interactive site here:
👉 [Visit Live Preview Link](https://choudarysaif.github.io/project1/)

## 🛠️ Key Architecture & Mechanics

### 1. Structure & Layout Systems
* **Layout Isolation:** Uses isolated layout scopes via CSS Flexbox across distinct structural components (`<header>`, `<main>`, and `<footer>`).
* **Micro-interactions:** Configured CSS transitions and transforms on active call-to-action buttons (`.book`, `.services`, `.review`) to provide fluid spatial feedback (`scale: 1.1`) during hover interactions.

### 2. Multi-Overlay Interactive Layer (JavaScript DOM)
The interface features independent dynamic modules driven by event listeners:
* **Account Sidebar (`#myoverlay1`):** Triggers a right-aligned sliding menu containing user metrics and profile data when the `Account` button is clicked.
* **Booking Modal (`#myoverlay2`):** Displays a focused, center-aligned dialogue viewport with clear contact channels when the `Book Now` button is activated.
* **Dismissal Ergonomics:** Overlays support explicit close targets alongside conditional background capture listeners (`event.target`), allowing a user to naturally dismiss views by tapping the surrounding environment backdrop.

## 🧑‍💻 Author
Coded and designed with precision by **M. Saif**
