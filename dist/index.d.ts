import { UtilConfig } from "./Util";
import Recipes from "./Recipes";
declare class HelloFreshApi {
    Recipes: Recipes;
    constructor(options: UtilConfig);
}
export default HelloFreshApi;
