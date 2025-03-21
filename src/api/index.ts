import toast from "react-hot-toast";

export const postData = async (route: string, data: string, token?: string) => {
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    origin: process.env.NEXT_PUBLIC_ORIGIN as string,
  });
  if (token) {
    myHeaders.append("token", token);
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}`, {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${
          errorData.message || "Unknown error"
        }`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

export const googleAuth = async () => {
  window.location.replace(`${process.env.NEXT_PUBLIC_API_URL + "auth/google"}`);
  // fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/google`, { method: "GET" })
  //   .then((response) => response.json())
  //   .then((data) => console.log("Response:", data))
  //   .catch((error) => console.error("Error:", error));
  // try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + "auth/google"}`);
  //     if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const result = await response.json();
  //     console.log(result);

  //     return result
  // } catch (error) {
  //     return error
  // }
};
