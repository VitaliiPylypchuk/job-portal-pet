import createFetchClient from 'openapi-fetch'
import type {paths} from "@/shared/api/schema/generated.ts";
import {CONFIG} from "@/shared/config.ts";
import createClient from "openapi-react-query";

export const fetchClient = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
})

export const rqClient = createClient(fetchClient)