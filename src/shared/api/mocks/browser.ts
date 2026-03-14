import {setupWorker} from "msw/browser";
import {handlers} from "@/shared/api/mocks/handlers";
import {authHandlers} from "@/shared/api/mocks/handlers/auth.ts";

export const worker = setupWorker(...handlers, ...authHandlers)