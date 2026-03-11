export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'zinc',
    },
    table: {
      slots: {
        root: 'relative overflow-auto border border-(--ui-border) rounded-xl',
      },
    },
  },
});
