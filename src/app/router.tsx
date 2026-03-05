import {createBrowserRouter, redirect} from "react-router-dom";
import App from "@/app/App.tsx";
import {ROUTES} from "@/shared/model/routes.ts";
import {Providers} from "@/app/providers.tsx";

export const router = createBrowserRouter([
  {
    element:
      <Providers>
        <App/>
      </Providers>,
    children: [
      {
        path: ROUTES.JOBS,
        lazy: () => import("@/features/jobs/Jobs.page.tsx")
      },
      {
        path: ROUTES.JOB,
        lazy: () => import("@/features/job/Job.page.tsx")
      },
      {
        path: ROUTES.ABOUT_US,
        lazy: () => import("@/features/about/AboutUs.page.tsx")
      },
      {
        path: ROUTES.CONTACT_US,
        lazy: () => import("@/features/contact/ContactUs.page.tsx")
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/Login.page.tsx")
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import("@/features/auth/Register.page.tsx")
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.JOBS)
      },
    ]
  },
])