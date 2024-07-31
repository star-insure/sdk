import React from 'react';
import { usePage } from './page';

type FetchOptions = {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    params?: Record<string, any>;
    headers?: Record<string, string>;
};

type FetcherFunction<T> = () => Promise<
    | {
          ok: false;
          message: string | undefined;
          data?: undefined;
      }
    | {
          ok: true;
          data?: T;
          message: string | undefined;
      }
>;

/**
 * A helper to return a fetch function including default headers and authorization.
 */
export function useFetch<T = any>({
    url: baseUrl,
    method = 'GET',
    params = {},
    headers = {},
}: FetchOptions): FetcherFunction<T> {
    const { access_token } = usePage().props;

    let url = baseUrl;

    if (method === 'GET') {
        const queryParams = new URLSearchParams(params);
        url = `${url}?${queryParams.toString()}`;
    }

    return React.useMemo(
        () => async () => {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: access_token ? `Bearer ${access_token}` : '',
                    ...headers,
                },
                body: Object.keys(params).length > 0 && method !== 'GET' ? JSON.stringify(params) : null,
            });

            const { ok } = res;
            const body = await res.text();

            let parsedBody: T | string = body;

            try {
                parsedBody = JSON.parse(body) as T;
            } catch (error) {
                // Response wasn't JSON, just use the text version.
            }

            const message = typeof parsedBody === 'string' ? parsedBody : undefined;

            if (!ok) {
                return {
                    ok,
                    message,
                };
            }

            const data = typeof parsedBody !== 'string' ? parsedBody : undefined;

            return { ok, data, message };
        },
        [access_token, url, params, headers, method],
    );
}
