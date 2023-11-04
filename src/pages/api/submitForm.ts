import axios, { AxiosError } from "axios";
import FormData from "form-data";

// pages/api/submitForm.js
export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const formData = new FormData();
    // const formData = req.body;

    console.log(process.env.REACT_APP_ACCESS_KEY);

    // Append your secret API key server-side
    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    try {
      const response = await axios({
        method: "post",
        url: "https://api.web3forms.com/submit",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Forward the response from the external API back to the client
      res.status(200).json(response.data);
    } catch (error: unknown) {
      // Type 'error' as 'unknown' which is more correct for a catch clause
      if (axios.isAxiosError(error)) {
        // Now TypeScript knows that 'error' is an AxiosError
        const axiosError = error as AxiosError;
        console.error("Axios error:", axiosError.message);
        // You can now access axiosError.response, axiosError.request, etc.
        // Handle Axios error here
      } else if (error instanceof Error) {
        // This is a generic error
        const genericError = error as Error;
        console.error("Unexpected error:", genericError.message);
        // Handle generic error here
      } else {
        // This is an error that's not an instance of Error (very unlikely)
        console.error("An unexpected error occurred:", error);
        // Handle unknown errors here
      }
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
