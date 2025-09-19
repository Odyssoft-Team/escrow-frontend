import api from "@/lib/axios";
import type { ServiceResponse } from "@/types/service-response";

export const getContractPreview = async (
  id: number
): Promise<ServiceResponse> => {
  try {
    const response = await api.get(`/preview/${id}`, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    console.log("respuesta del preview", response);

    return {
      success: true,
      data: response,
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
