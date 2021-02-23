# Crypto Letter of Instruction
Endowl plugin to generate a letter of instruction regard crypto assets.

## Tool Installation
Install liquid: `yarn global liquidjs`

## Generate a document
`npx liquidjs sample-data.json < template.liquid`

## Notes on Liquid and rendering
**TODO** It turns out that generating md with liquid is problematic. Liquid adds a bunch of whitespace that makes formatting the markdown properly an issue.

Things to try:
- Turn off `greedy` in liquid config
- Use HTML or another markup language that isn't as sensitive to whitespace.
- Try [11ty](https://www.11ty.dev/docs/languages/markdown/). It seems that it understands markdown and has a utility to cleanup rendered markdown after after liquid mangles it (at the expense of `code` blocks not working).

## About the data
`sample-data.json` is an example of the data structure that *has been preprocessed* for use by a template. The pre-processor hasn't been written, yet, but this is what it's output will look like.

`unprocessed-data.json` is more representative of how the data will be stored.

The preprocessor:
1. Copies the document metadata for the document from the `documents` array to `this`.
2. Translates `contacts` and `devices` to dictionaries so that they can be easily referenced by id in other data fields (i.e. `cryptoassets.trusted_helpers` and `cryptoassets.wallets.x.device_id`).