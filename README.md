# Study TailwindCSS

This is a repo with tasks from Dave Gray's TailwindCSS course and self exercises.

## Instructions

1. Run `npx tailwindcss init` to initialize its config.
2. Create `build` and `src` directories.
3. In `src` directory create `input.css` file with `@tailwind base;`, `@tailwind components;` and `@tailwind utilities;` instructions.
4. In `build` directory create `index.html` file and connect styles to it via `link` tag.
5. In `tailwind.config.js` add `"./build/*.html"` to `content`.
6. Run `npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch` command to start watching changes in styles and compile them.