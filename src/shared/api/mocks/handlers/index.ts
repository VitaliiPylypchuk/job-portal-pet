import type {ApiSchemas} from "@/shared/api/schema";
import {http} from "@/shared/api/mocks/http.ts";
import {HttpResponse} from "msw";


const jobs: ApiSchemas['Job'][] = [
  {
    id: 'job-1',
    name: 'Frontend Developer'
  },
  {
    id: 'job-2',
    name: 'Backend Developer'
  },
]


export const handlers = [
  http.get("/jobs", () => {
    return HttpResponse.json(jobs)
  })
]