import createFetchClient from 'openapi-fetch'
import {CONFIG} from "@/shared/config.ts";
import createClient from "openapi-react-query";
import type {ApiPaths} from "@/shared/api/schema";

export const fetchClient = createFetchClient<ApiPaths>({
  baseUrl: CONFIG.API_BASE_URL,
})

export const rqClient = createClient(fetchClient)
