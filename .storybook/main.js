module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack4",
  },
  refs: {
    'design-system': {
      title: "Storybook Design System",
      url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
      expanded: false // optional, true by default
    },
    'task': {
      title: 'Sample 1 - Task A',
      url: 'https://ashish-chopra-1987.github.io/childStorybook/',
      expanded: false,
    },
    'child-storybook': {
      title: 'Child Example',
      url: 'https://main--62b1557051c261c323ffae51.chromatic.com/',
      expanded: false,
    },
    'child-storybook-metadata': {
      title: 'Child Storybook Example',
      url: 'https://main--62b1b9ef50b3e0e9a6b8b90f.chromatic.com/',
      expanded: false,
    },
  },
};
