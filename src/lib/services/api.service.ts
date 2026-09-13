import axios from "axios";
import { AppConfig } from "../../config/AppConfig"

const axiosService = axios.create({
    baseURL: AppConfig.baseUrl,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    responseEncoding: "utf-8",
    responseType: "json",
    headers: {
        "Content-Type":"application/json"
    }

})

// transform/intercept
axiosService.interceptors.response.use(
    (response) => response.data,
    (exception) => {
        console.error({exception})
        throw exception?.response ? exception.response : {code: exception.status, message: exception.message}
    }
)

export default axiosService