"use server";

import apiIA from "@/lib/axios-ia";

export const getBotResponse = async (id: string, msg: string) => {
  try {
    const response = await apiIA.get(`/chat/${id}?message=${msg}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("json", response.data.answer);

    return {
      success: true,
      data: response.data.answer,
    };
  } catch (error: any) {
    console.log("GAAAAAAA", error.response);

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
