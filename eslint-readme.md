
# eslint-1-warnings-2-errors

https://gist.github.com/xgqfrms-gildata/7d861fde6dd15262ae007e68ca0898f0

http://eslint.org/docs/rules/indent


"indent": ["error", 4],

"semi": [2, "always"],


"comma-dangle": [2, "never"],
// or

"comma-dangle": ["error", "never"],
// or

"comma-dangle": ["error", {
    "arrays": "never",
    "objects": "never",
    "imports": "never",
    "exports": "never",
    "functions": "ignore",
}]