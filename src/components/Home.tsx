import React from "react";
import styled from "styled-components";
import { Image, ImageContainer, ImageDescription } from "./Image";
import FaroOverview from "../assets/Faro-Overview.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161b22;
  padding: 1rem;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a7f37;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5a1e02;
  color: #c9d1d9;
  border-radius: 8px;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

const ErrorButton = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  color: #c9d1d9;
  border-radius: 8px;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;
`;

const ItemsButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  background-color: #1f6feb;
  color: #c9d1d9;
  border-radius: 8px;
  padding: 1rem;
  font-family: "Roboto", sans-serif;
`;

const ExtraMessage = styled.div`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0.3rem;
`;

const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #161b22;
  padding: 1rem;
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
`;

const Explanation = styled.div`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
`;

const Link = styled.a`
  font-size: 1rem;
  background-color: #555c5a;
  border-radius: 4px;
  text-decoration: none;
  color: #58a6ff;
  padding: 0.1rem;
`;

const Command = styled.span`
  font-size: 1rem;
  background-color: #555c5a;
  border-radius: 4px;
  text-decoration: none;
  padding: 0.1rem;
`;

const ENV_LINK =
  "https://github.com/Example-Collection/grafana-faro-example/blob/main/src/global/settings.ts";
const FASTAPI_SERVER_1 =
  "https://github.com/Example-Collection/fastapi-server-1";
const FASTAPI_SERVER_2 =
  "https://github.com/Example-Collection/fastapi-server-2";
const FASTAPI_SERVER_3 =
  "https://github.com/Example-Collection/fastapi-server-3";
const OTEL_URL =
  "https://github.com/Example-Collection/fastapi-server-1/blob/main/app/otel.py";
const SERVICE_URL =
  "https://github.com/Example-Collection/fastapi-server-1/blob/main/app/service.py";
const VALUES_URL =
  "https://github.com/Example-Collection/fastapi-server-1/blob/main/deploy/helm/values.yaml";
const DEMO_URL = "https://github.com/Example-Collection/grafana-faro-example";
const OTEL_OPERATOR_URL = "https://opentelemetry.io/docs/k8s-operator/";
const OTEL_COLLECTOR_URL =
  "https://opentelemetry.io/docs/collector/getting-started/#kubernetes";
const OTEL_COLLECTOR_CONFIGURATION_URL =
  "https://opentelemetry.io/docs/collector/configuration/#exporters";
const Home = (): JSX.Element => (
  <Container>
    <ContentBox>
      <Title>Faro-Demo-React</Title>
      <Content>
        Demo of Grafana Faro on Grafana Cloud with React Application.
      </Content>
      <ExtraMessage>Call API provided by external service.</ExtraMessage>
      <LinkButton href="/weather">Click to view weather.</LinkButton>
      <ExtraMessage>
        View error from Faro dashboard, and log from Loki.
      </ExtraMessage>
      <ErrorButton href="/error">Click to generate error</ErrorButton>
      <ExtraMessage>
        View distributed trace result from Tempo dashboard.
      </ExtraMessage>
      <ItemsButton href="/items">Click to validate items</ItemsButton>
    </ContentBox>
    <ExplanationContainer>
      <Explanation>
        How to test this app with Grafana Faro: <br />
        1. Specify Grafana Cloud Faro URL in .env file. See &nbsp;
        <Link href={ENV_LINK}>src/global/settings.ts</Link>.
        <br />
        2. Install{" "}
        <Link href={OTEL_OPERATOR_URL}>
          OpenTelemetry Kubernetes Operator
        </Link>{" "}
        and <Link href={OTEL_COLLECTOR_URL}>Collector</Link> on your Kubernetes
        cluster. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;You should configure OpenTelemetry Collector to
        export data to Grafana Cloud.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;See{" "}
        <Link href={OTEL_COLLECTOR_CONFIGURATION_URL}>here</Link> for more
        details.
        <br />
        3. Clone three repositories below: <br />
        &nbsp;&nbsp; - <Link href={FASTAPI_SERVER_1}>fastapi-server-1</Link>
        <br />
        &nbsp;&nbsp; - <Link href={FASTAPI_SERVER_2}>fastapi-server-2</Link>
        <br />
        &nbsp;&nbsp; - <Link href={FASTAPI_SERVER_3}>fastapi-server-3</Link>
        <br />
        4. In each of cloned project, you should configure OTLPSpanExporter's
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;endpoint to your OpenTelemetry Collector's
        endpoint in your Kubernetes cluster. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;See <Link href={OTEL_URL}>app/otel.py</Link> in
        each project. <br />
        5. In each project, run{" "}
        <Command>helm install fastapi-server-n ./deploy/helm</Command>.
        <br />
        6. In fastapi-server-1 and fastapi-server-2, configure the endpoint of
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;fastapi-server-2 and fastapi-server-3,
        respectively.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;For example, if fastapi-server-2 is running in
        namespace <Command>tmp</Command>,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;endpoint for fastapi-server-2 should be{" "}
        <Command>fastapi-server-2.tmp.svc.cluster.local:8000</Command>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Configure them at{" "}
        <Link href={SERVICE_URL}>app/service.py</Link>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;By default, namespace for fastapi servers is{" "}
        <Command>sangwoo-otel-poc</Command>.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;You can change this by setting custom value of{" "}
        <Command>deployment.namespace</Command>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;at{" "}
        <Link href={VALUES_URL}>deploy/helm/values.yaml</Link> of each projects.
        <br />
        7-1. Clone this project from <Link href={DEMO_URL}>here</Link> and run{" "}
        <Command>yarn start</Command> to start this app. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;You will be able to access this app at{" "}
        <Command>http://localhost:3000</Command>.<br />
        7-2. You can also run this app as a container by running <br />
        &nbsp;&nbsp;&nbsp;&nbsp;<Command>
          docker build -t demo:0.0.0 .
        </Command>{" "}
        and running <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Command>docker run -dp 8000:80 demo:0.0.0</Command>.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;You will be able to access this app at{" "}
        <Command>http://localhost:8000</Command>.
        <br />
        7-3. Or, you can run this app in your Kubernetes cluster by running
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Command>helm install faro-demo-react ./k8s/helm</Command>. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;After installing this app, port-forward it to
        your local machine by
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;running{" "}
        <Command>
          kubectl port-forward -n faro-demo-react svc/faro-demo-react 3000:80
        </Command>
        .
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;You will be able to access this app at{" "}
        <Command>http://localhost:3000</Command>.<br />
        8. Port-forward fastapi-server-1 by running
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Command>
          kubectl port-forward -n tmp svc/fastapi-server-1-svc 8080:8000
        </Command>
        .
        <br /> 9. Checkout functions in this app. <br />
        &nbsp;&nbsp; - <Link href="/">/</Link> is this page. <br />
        &nbsp;&nbsp; - <Link href="/weather">/weather</Link> is a page that
        calls Open API. <br />
        &nbsp;&nbsp; - <Link href="/error">/error</Link> is a page that
        generates error. Check errors in Faro and logs in Loki.
        <br />
        &nbsp;&nbsp; - <Link>/items</Link> is a page that calls fastapi-servers.
        Check distributed traces in Tempo.
        <br />
      </Explanation>
    </ExplanationContainer>
    <ImageContainer>
      <ImageDescription>
        View various metrics on Faro Overview tab.
      </ImageDescription>
      <Image src={FaroOverview} />
    </ImageContainer>
  </Container>
);

export default Home;
