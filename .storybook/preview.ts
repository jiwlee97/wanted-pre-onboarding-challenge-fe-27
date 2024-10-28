import type { Preview } from "@storybook/react";
import '../src/index.css';
import { withThemeByClassName } from "@storybook/addon-themes";
import { queryDecorator, toastDecorator } from "./decorators";
import { initialize, mswLoader } from 'msw-storybook-addon'
import { handlers } from "../public/handlers";
import { worker } from "../public/browser";

initialize();
worker.start({
  onUnhandledRequest: 'bypass',  // 또는 'warn'으로 설정해 경고만 출력
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: handlers
    }
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: 'light',
          dark: 'dark',
      },
      defaultTheme: 'light',
  }), toastDecorator, queryDecorator],
  
  loaders: [mswLoader],
};

export default preview;
