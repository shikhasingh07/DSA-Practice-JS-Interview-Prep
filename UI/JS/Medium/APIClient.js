/**
 * @typedef {Record<string, string>} HeadersMap
 *
 * @typedef {object} APIRequestBuilder
 * @property {(headers: HeadersMap) => APIRequestBuilder} setHeaders
 * @property {() => Promise<Response>} get
 * @property {(body?: BodyInit) => Promise<Response>} post
 */

/**
 * @param {string} baseURL
 * @return {{ url(path: string): APIRequestBuilder }}
 */
const baseURL = createAPI("https://api.example.com");
export default function createAPI(baseURL) {
    return {
        url(path) {
            let _headers = {};

            const builder = {
                setHeaders(headers) {
                    _headers = { ..._headers, ...headers }; // merge karo
                    return builder;
                },

                get() {
                    return fetch(new URL(path, baseURL).href, {
                        method: "GET",
                        headers: _headers,
                    });
                },

                post(body) {
                    return fetch(new URL(path, baseURL).href, {
                        method: "POST",
                        headers: _headers,
                        body: body
                    })
      }
            }
            return builder;
        },
    };
}
