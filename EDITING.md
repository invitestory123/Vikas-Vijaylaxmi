# Customer Editing Guide — Vikas & Vijaylaxmi Wedding Celebration

This template is an interactive luxury royal wedding invitation designed with an interactive wax-seal envelope overlay, opening animation video, serene swan background video, classical ambient music, countdown timer, full 3-day multi-event celebration schedule, dual venue location details (Wedding & Reception), and attire/gift etiquette.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week9/vikas-vijayalaksmi-all/editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: Names (`"Vikas"`, `"Vijaylaxmi"`)
- `groomParents`: Groom's Parents name (`"Mrs Chander & Mr Sham Sunder"`)
- `subtitle`: Wedding tagline / subtitle

### Wedding Date & Invitation Note
Edit `wedding` in `editable/wedding-data.js`:
- `dateLabel`: Short date string (`"02.12.26"`)
- `dateISO`: Event start ISO timestamp with timezone offset (`"2026-12-02T19:00:00+05:30"`). Drives live countdown timer and Google Calendar links.
- `invitationNote`: Main invitation message text (HTML tags like `<br />` supported)

### Multi-Day Schedule of Events
Edit `scheduleDays` array in `editable/wedding-data.js`:
- **Day 1 (1st December 2026)**: Mehandi (5:00 PM – 8:00 PM), Jaggo (8:00 PM onwards)
- **Day 2 (2nd December 2026)**: Haldi Ceremony (Morning), Sehra Bandi (5:00 PM), Departure of Barat (7:00 PM), Doli (Taaron Ki Chhaon Mein)
- **Day 3 (3rd December 2026)**: Grand Wedding Reception (7:00 PM onwards)

### Venue & Location Details
Edit `venue` in `editable/wedding-data.js`:
- `wedding`:
  - `name`: `"Oasis Banquets"`
  - `address`: `"Oasis Banquets, Zirakpur"`
  - `mapsUrl`: `"https://maps.app.goo.gl/vr6CnNrpKe7xkWoR7?g_st=ic"`
- `reception`:
  - `name`: `"Reception Residence"`
  - `address`: `"House no. 40, Sector 124, Greater Mohali, Harlalpur village, Kharar"`
  - `mapsUrl`: `"https://www.google.com/maps/search/?api=1&query=House+no.40+Sector+124+greater+mohali+Harlalpur+village+Kharar"`

### Etiquette & Notes
Edit `details` in `editable/wedding-data.js`:
- `giftPreference`: Statement on gifts (`"Your presence and blessings are our greatest gift. Kindly, no boxed gifts please."`)
- `dressCode`: Dress code guideline (`"Traditional / Festive Indian Attire"`)

### Media & Assets
Replace files directly in `editable/assets/` or update `media` in `wedding-data.js`:
- `overlayImage`: Wax-seal envelope graphic (`editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png`)
- `sealVideo`: Wax-seal breaking/opening MP4 (`editable/assets/1782224012851.mp4`)
- `heroVideo`: Ambient background video (`editable/assets/Swans2.mov`)
- `audio`: Background soundtrack (`editable/assets/Einaudi_ Divenire (1) (1).mp3`)

---

## Validation
Validate changes with:
```bash
node --check editable/wedding-data.js
```
