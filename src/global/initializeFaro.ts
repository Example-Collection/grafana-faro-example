import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import type { Faro } from "@grafana/faro-react";
import {
  initializeFaro as coreInit,
  getWebInstrumentations,
  ReactIntegration,
  ReactRouterVersion,
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { FARO_URL } from "./settings";

export const initializeFaro = (): Faro => {
  const faro = coreInit({
    url: FARO_URL,
    instrumentations: [
      new TracingInstrumentation(),
      ...getWebInstrumentations({
        captureConsole: true,
      }),
      new TracingInstrumentation(),
      new ReactIntegration({
        router: {
          version: ReactRouterVersion.V6,
          dependencies: {
            createRoutesFromChildren,
            matchRoutes,
            Routes,
            useLocation,
            useNavigationType,
          },
        },
      }),
    ],
    session: (window as any).__PRELOADED_STATE?.faro?.session,
    app: {
      name: "faro-demo-react",
      version: "1.0.0",
      environment: "production",
    },
  });

  faro.api.pushLog(["Faro for faro-demo-react has been initialized."]);
  return faro;
};
