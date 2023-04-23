## Acknowledgement

- Boilerplate comes from: https://github.com/Gaweph/p5-typescript-starter

## Development

```
npm install
npm run dev
```

- I have made modifications to the original boilerplate such that multiple sketches may be incorporated into a single project.
- To create your own sketches,
  - Copy the contents of `./sketches/sketch-template.html` into a new `./sketches/sketchx/index.html` file
  - Copy the contents of `./sketch/sketch-template.ts` into a new `./sketch/sketchx.ts` where x is a unique sketch id
  - Link the compiled `./build/sketchx.js` file in `./build` to the corresponding `./sketches/sketchx/index.html` file.
    - Look out for the comment in `index.html`
    ```html
    <!-- >>>> MODIFY THIS TO POINT TO THE CORRECT SKETCH <<<< -->
    <script src="../../build/sketch-template.js"></script>
    <!-- >>>> MODIFY THIS TO POINT TO THE CORRECT SKETCH <<<< -->
    ```
  - Modify the `nav` and `footer` accordingly to credit yourself
