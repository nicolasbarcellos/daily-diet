module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@styles": "./src/styles",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
