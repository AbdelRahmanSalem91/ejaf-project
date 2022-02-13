import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default {
  install(app) {
    const baseComponents = require.context(
      "../components/",
      false,
      /[A-Za-z0-9-_,\s]+\.vue$/i
    );
    baseComponents.keys().forEach((fileName) => {
      const componentConfig = baseComponents(fileName);
      const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
      );

      console.log(componentName);
      app.component(
        `Base${componentName}`,
        componentConfig.default || componentConfig
      );
    });
  },
};
