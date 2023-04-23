## Acknowledgement

- Boilerplate comes from: https://github.com/Gaweph/p5-typescript-starter

## Development

```
npm install
npm run dev
```

- I have made modifications to the original boilerplate such that multiple sketches may be incorporated into a single project.
- To create your own sketches,
  - Copy the contents of `sketch-template.html` into a new `sketches/sketch-x/index.html`
  - Create a new `sketch-x.ts` in `sketches/sketchx` where x is a unique id
  - Link the compiled `sketch-x.js` file in `build` to the corresponding `index.html` file
- Modify the `nav` and `footer` accordingly to credit yourself
