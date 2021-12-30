import { toast } from "react-toastify";

const handleError = (err) => {
    console.log(err.response);

    if (err.response.status === 400) {
        if (typeof err.response?.data === "string") {
            toast.error(err.response.data);
        } else {
            Object.keys(err.response?.data).forEach(key => {
                err.response.data[key].forEach(error => {
                    toast.error(error);
                })
            })
        }
    } else if (err.response.status === 429) {
        toast.error("You reached your daily request limit");
    } else if (err.response.status === 404) {
        toast.error("Video not found");
    } else {
        toast.error("Something went wrong, please try again later");
    }

}

export default handleError;