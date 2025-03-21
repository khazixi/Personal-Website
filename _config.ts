import lume from "lume/mod.ts";
import lightningCss from "lume/plugins/lightningcss.ts"

const site = lume({
  src: './src'
});

//site.copy('_includes/styles')
site.use(lightningCss())
site.copy('/static', '.')

export default site;
