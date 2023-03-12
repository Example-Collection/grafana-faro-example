import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { OTEL_COLLECTOR_URL } from "./settings";

const resource = Resource.default().merge(
  new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "faro-demo-react",
    [SemanticResourceAttributes.SERVICE_VERSION]: "0.0.0",
  })
);

const provider = new WebTracerProvider({
  resource: resource,
});

const exporter = new OTLPTraceExporter({ url: OTEL_COLLECTOR_URL });
const processor = new BatchSpanProcessor(exporter);

provider.addSpanProcessor(processor);

provider.register();
