import Util, { UtilConfig } from "./Util";
import Recipes from "./Recipes";
class HelloFreshApi {
  Recipes: any;
  constructor(options: UtilConfig) {
    const util = new Util(options);

    this.Recipes = new Recipes(util);
  }
}

export default HelloFreshApi;
