const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  plugins: [
    // Plugins for PostCSS
    ["autoprefixer", { sourceMap: isDev }], // Parses CSS and adds vendor prefixes.
    "postcss-preset-env", // Convert modern CSS into something most browsers can understand.
    "postcss-import-ext-glob", // Extend postcss-import path resolver to allow glob usage as a path.
    "postcss-easy-import", // Inline @import rules content with extra features.
    "postcss-extend", // Minimize the number of repeat selectors and rules you write in CSS.
    "postcss-nested", // Unwrap nested rules like how Sass does it.
    "postcss-combine-media-query", // Looks for equal media query rules and appends them combined.
  ],
};
