import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/app/router.tsx";

async function enableMocking() {
  if (import.meta.env.PROD) {
    return
  }

  const {worker} = await import("@/shared/api/mocks/browser")
  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  )
})