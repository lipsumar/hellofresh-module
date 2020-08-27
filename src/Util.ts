import https from "https";

export interface UtilConfig {
  bearerToken: string;
  locale: string;
  country: string;
}

class Util {
  config: any;
  constructor(config: UtilConfig) {
    this.config = config;
  }

  keysToURLParams(keys: Record<string, string>) {
    let params_string = "";
    Object.keys(keys).forEach((key, index) => {
      params_string += `${index ? "&" : "?"}${key}=${keys[key]}`;
    });
    return encodeURI(params_string);
  }

  query(route: string, query = {}) {
    const params = {
      ...query,
      country: this.config.country,
      locale: this.config.locale,
    };
    let urlParams = this.keysToURLParams(params);
    const path = `/api/${route}${urlParams}`;
    return this.httpGetAsync(path);
  }

  async httpGetAsync(path: string) {
    return new Promise((resolve, reject) => {
      const request = https.request(
        {
          host: "gw.hellofresh.com",
          path,
          method: "GET",
          headers: {
            authorization: `Bearer ${this.config.bearerToken}`,
          },
        },
        (response: any) => {
          if (response.statusCode < 200 || response.statusCode > 299) {
            reject(
              new Error(
                "Failed to load page, status code: " + response.statusCode
              )
            );
          }
          let data = "";
          response.on("data", (chunk: any) => {
            data += chunk;
          });
          response.on("end", () => {
            resolve(JSON.parse(data));
          });
        }
      );
      request.on("error", (error: Error) => reject(error));
      request.end();
    });
  }
}

export default Util;
