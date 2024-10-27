import type { Preview } from "@storybook/react";
import '../src/index.css';

import { withThemeByClassName } from "@storybook/addon-themes";
import { toastDecorator } from "./decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: 'light',
          dark: 'dark',
      },
      defaultTheme: 'light',
  }),toastDecorator]
};

export default preview;
