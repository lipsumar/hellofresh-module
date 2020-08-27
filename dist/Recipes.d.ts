import BaseRepository from "./BaseRepository";
/**
 * Request HelloFresh Recipes
 * @hideconstructor
 */
declare class Recipes extends BaseRepository {
    /**
     * Retrieve details for a recepie with ID
     * @param {string} id - Retrieves details for recipe item with ID
     */
    getById(id: string): Promise<unknown>;
    /**
     * List all the recipes available
     * @param {number} [page] - Page through the results
     */
    list(skip?: number): Promise<unknown>;
    /**
     * @todo Detail out all of the search criteria descriptions.
     * @typedef {Object} SearchCriteria
     * @property {string} author
     * @property {string} q - Search query
     * @property {string} product
     * @property {string} preset
     * @property {string} week
     * @property {string} allergen
     * @property {string} id
     * @property {string} ingredient
     * @property {string} cuisine
     * @property {string} tag
     * @property {string} diet
     * @property {string} wine
     * @property {string} level
     * @property {string} name
     */
    /**
     * Search through recipes with a given query
     * @param {SearchCriteria} criteria - Plain text search query
     * @param {number} [offset=0] - Set the page offset for the results
     * @param {number} [limit=10] - Number of results to return
     */
    search(criteria?: {}, offset?: number, limit?: number): Promise<unknown>;
}
export default Recipes;
