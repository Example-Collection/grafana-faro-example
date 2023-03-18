import axios, { AxiosRequestConfig } from "axios";
import { ITEM_API, WEATHER_API, API_KEY } from "./settings";
import { WeatherResponse, ItemResponse } from "./interface";
import { context, propagation } from "@opentelemetry/api";

const weatherAxiosconfig: AxiosRequestConfig = {
  params: {
    key: API_KEY,
    q: "Seoul",
  },
};

export const getWeather = async (): Promise<WeatherResponse> => {
  const Axios = axios.create(weatherAxiosconfig);
  const response = await Axios.get<WeatherResponse>(`${WEATHER_API}`);
  console.log(`response.data: ${JSON.stringify(response.data)}`);
  return response.data;
};

interface TraceCarrier {
  traceparent: string;
}

export const validateItem = async (
  name: string,
  price: number
): Promise<ItemResponse> => {
  const carrier: TraceCarrier = { traceparent: "" };
  propagation.inject(context.active(), carrier);
  const Axios = axios.create();
  const response = await Axios.post<ItemResponse>(
    `${ITEM_API}`,
    {
      name,
      price,
    },
    {
      headers: {
        traceparent: carrier.traceparent,
      },
    }
  );
  console.log(`response.data: ${JSON.stringify(response.data)}`);
  return response.data;
};
