module.exports = {
  extends: ["standard", "standard-react", "prettier"],
  env: {
		browser: true,
		jest: true,
  },
  plugins: ["prettier"],
  rules: {
    "camelcase": 0,
    "prettier/prettier": [
        "error",
        {
          "tabWidth": 2,
          "trailingComma": "es5",
          "semi": true,
          "singleQuote": true
        }
    ]
  }
}