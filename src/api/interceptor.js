import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000
})


axiosInstance.interceptors.request.use(
  (config) => {
    config.metadata = {startTime: new Date()}
    console.log("Request:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (resp) => {
    const duration = new Date() - resp.config.metadata.startTime;
    console.log(`url: ${resp.config.url}\nmethod:${resp.config.method}\nduration time:${duration}`);
    return resp;
  },
  (error) => {
    if (error.status === 404) {
      window.location.href = "/not-found"
    }
    if (error.status === 500) {
      window.location.href = "/hard-stop"
    }
    console.error("Response Error:", error.status);
    return Promise.reject(error);
  }
)

export default axiosInstance;