import { init } from "@rematch/core";
import createLoadingPlugin from "@rematch/loading";

// models
import * as models from "./models";

// plugins
const loading = createLoadingPlugin({});

const store = init({
  models,
  plugins: [loading]
});

export default store;
