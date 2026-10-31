/**
 * wedding-data.js — Customer-facing editable data layer for Vikas & Vijaylaxmi Wedding Celebration
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Vikas",
    bride: "Vijaylaxmi",
    groomParents: "Mrs Chander & Mr Sham Sunder",
    subtitle: "Two Souls · One Destiny · Beginning Our Forever",
  },

  wedding: {
    dateLabel: "02.12.26",
    longDate: "Wednesday, 2nd December 2026",
    dateISO: "2026-12-02T19:00:00+05:30",
    invitationNote: "Dear Family and Friends,<br />With the heavenly blessings of our ancestors and the loving blessings of Mrs Chander & Mr Sham Sunder, we joyfully invite you to join us in celebrating the wedding festivities of Vikas & Vijaylaxmi as they embark upon their journey of lifetime together.",
  },

  scheduleDays: [
    {
      id: "day-1",
      dateLabel: "Tuesday, 1st December 2026",
      shortDate: "1 Dec",
      title: "Mehandi & Jaggo",
      events: [
        {
          title: "Mehandi Ceremony",
          time: "5:00 PM – 8:00 PM",
          note: "An evening filled with vibrant henna, festive music, and laughter"
        },
        {
          title: "Jaggo Celebration",
          time: "8:00 PM onwards",
          note: "Traditional Punjabi beats, lively dance, and celebration through the night"
        }
      ]
    },
    {
      id: "day-2",
      dateLabel: "Wednesday, 2nd December 2026",
      shortDate: "2 Dec",
      title: "The Wedding Day",
      events: [
        {
          title: "Haldi Ceremony",
          time: "Morning",
          note: "Auspicious turmeric blessings with close family & friends"
        },
        {
          title: "Sehra Bandi",
          time: "5:00 PM",
          note: "Blessing ceremony and tying of the traditional sehra"
        },
        {
          title: "Departure of Barat",
          time: "7:00 PM",
          note: "Barat departure to Oasis Banquets, Zirakpur"
        },
        {
          title: "Doli Ceremony",
          time: "Taaron Ki Chhaon Mein",
          note: "Bid farewell under the canopy of stars"
        }
      ]
    },
    {
      id: "day-3",
      dateLabel: "Thursday, 3rd December 2026",
      shortDate: "3 Dec",
      title: "Wedding Reception",
      events: [
        {
          title: "Grand Wedding Reception",
          time: "7:00 PM onwards",
          note: "House no. 40, Sector 124, Greater Mohali, Harlalpur village, Kharar"
        }
      ]
    }
  ],

  // Fallback 5-event flat schedule
  schedule: [
    { title: "Mehandi (1 Dec)", time: "5:00 PM" },
    { title: "Jaggo Night (1 Dec)", time: "8:00 PM" },
    { title: "Haldi & Sehra Bandi (2 Dec)", time: "Morning & 5 PM" },
    { title: "Departure of Barat (2 Dec)", time: "7:00 PM" },
    { title: "Grand Reception (3 Dec)", time: "7:00 PM" },
  ],

  venue: {
    name: "Oasis Banquets",
    address: "Zirakpur, Punjab (Wedding) | Sector 124, Greater Mohali, Kharar (Reception)",
    mapsUrl: "https://maps.app.goo.gl/vr6CnNrpKe7xkWoR7?g_st=ic",
    wedding: {
      name: "Oasis Banquets",
      city: "Zirakpur, Punjab",
      address: "Oasis Banquets, Zirakpur",
      occasion: "Wedding Ceremony · 2nd December (Barat 7:00 PM)",
      mapsUrl: "https://maps.app.goo.gl/vr6CnNrpKe7xkWoR7?g_st=ic"
    },
    reception: {
      name: "Reception Venue",
      city: "Greater Mohali, Kharar",
      address: "House no. 40, Sector 124, Greater Mohali, Harlalpur village, Kharar",
      occasion: "Wedding Reception · 3rd December (7:00 PM onwards)",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=House+no.40+Sector+124+greater+mohali+Harlalpur+village+Kharar"
    }
  },

  details: {
    giftPreference: "Your presence and blessings are our greatest gift. Kindly, no boxed gifts please.",
    dressCode: "Traditional / Festive Indian Attire",
  },

  media: {
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
