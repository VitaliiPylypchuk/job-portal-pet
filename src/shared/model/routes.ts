import "react-router-dom"

export const ROUTES = {
  HOME: '/',
  ABOUT_US: '/about-us',
  CONTACT_US: '/contact-us',
  LOGIN: '/login',
  REGISTER: '/register',
  JOBS: '/jobs',
  JOB: '/jobs/:jobId',
} as const

export type PathParams = {
  [ROUTES.JOB]: {
    jobId: string
  }
}

declare module "react-router-dom" {
  interface Register {
    params: PathParams
  }
}