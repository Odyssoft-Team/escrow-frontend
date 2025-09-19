import type { AxiosResponse } from "axios";

export type ServiceResponse = {
  success: boolean;
  data?: AxiosResponse;
  error?: string;
};
