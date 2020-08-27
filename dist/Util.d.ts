export interface UtilConfig {
    bearerToken: string;
    locale: string;
    country: string;
}
declare class Util {
    config: any;
    constructor(config: UtilConfig);
    keysToURLParams(keys: Record<string, string>): string;
    query(route: string, query?: {}): Promise<unknown>;
    httpGetAsync(path: string): Promise<unknown>;
}
export default Util;
