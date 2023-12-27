/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foundation-errorerror-50": "var(--foundation-errorerror-50)",
        "foundation-errorerror-500": "var(--foundation-errorerror-500)",
        "foundation-infoinfo-50": "var(--foundation-infoinfo-50)",
        "foundation-infoinfo-500": "var(--foundation-infoinfo-500)",
        "foundation-infoinfo-600": "var(--foundation-infoinfo-600)",
        "foundation-successsuccess-100": "var(--foundation-successsuccess-100)",
        "foundation-successsuccess-50": "var(--foundation-successsuccess-50)",
        "foundation-successsuccess-500": "var(--foundation-successsuccess-500)",
        "foundation-successsuccess-600": "var(--foundation-successsuccess-600)",
        "foundation-warningwarning-50": "var(--foundation-warningwarning-50)",
        "foundation-warningwarning-500": "var(--foundation-warningwarning-500)",
        "foundation-warningwarning-600": "var(--foundation-warningwarning-600)",
        "foundationbrandbrand-50": "var(--foundationbrandbrand-50)",
        "foundationbrandbrand-500": "var(--foundationbrandbrand-500)",
        "foundationbrandbrand-600": "var(--foundationbrandbrand-600)",
        "foundationbrandbrand-75": "var(--foundationbrandbrand-75)",
        "foundationgraygray-50": "var(--foundationgraygray-50)",
        "foundationgraygray-500": "var(--foundationgraygray-500)",
        "foundationgraygray-700": "var(--foundationgraygray-700)",
        "foundationtext-colorsprimary-text-color": "var(--foundationtext-colorsprimary-text-color)",
        "foundationtext-colorssecondary-text-color": "var(--foundationtext-colorssecondary-text-color)",
        "secondary-colourblueblue-100": "var(--secondary-colourblueblue-100)",
        "secondary-colourblueblue-50": "var(--secondary-colourblueblue-50)",
        "secondary-colourpinkpink-100": "var(--secondary-colourpinkpink-100)",
        "secondary-colourpinkpink-50": "var(--secondary-colourpinkpink-50)",
        "secondary-colourpinkpink-500": "var(--secondary-colourpinkpink-500)",
        "secondary-colourpinkpink-600": "var(--secondary-colourpinkpink-600)",
        white: "var(--white)",
      },
      fontFamily: {
        "typography-styles-body-regular": "var(--typography-styles-body-regular-font-family)",
        "typography-styles-heading-6-bold": "var(--typography-styles-heading-6-bold-font-family)",
        "typography-styles-heading-6-semi-bold": "var(--typography-styles-heading-6-semi-bold-font-family)",
        "typography-styles-large-regular": "var(--typography-styles-large-regular-font-family)",
        "typography-styles-large-semi-bold": "var(--typography-styles-large-semi-bold-font-family)",
        "typography-styles-small-regular": "var(--typography-styles-small-regular-font-family)",
      },
    },
  },
  plugins: [],
};