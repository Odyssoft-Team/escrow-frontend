import api from "@/lib/axios";
import type { ServiceResponse } from "@/types/service-response";

export const getContractPreview = async (
  id: number
): Promise<ServiceResponse> => {
  //export const getContractPreview = async (id: number) => {
  try {
    const response = await api.get(`/preview-pdf/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("respuesta del preview", response);

    return {
      success: true,
      data: response,
      //data: response.data,
    };
  } catch (error: any) {
    console.log(error);

    let errorMessage = "An error occurred while getting models.";
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = error.response.data.error;
    }
    return {
      success: false,
      error: errorMessage,
    };
  }
};
