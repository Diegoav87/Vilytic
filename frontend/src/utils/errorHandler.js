export const errorHandler = (setError, setCurrent, error) => {
  if (error === 429) {
    setError(
      "You reached your daily search limit. Come back tomorrow to search for more videos."
    );
    setCurrent("error");
    setTimeout(() => {
      setCurrent(null);
    }, 5000);
  } else if (error === 404) {
    setError("Video not found.");
    setCurrent("error");
    setTimeout(() => {
      setCurrent(null);
    }, 3000);
  } else {
    setError("Something went wrong.");
    setCurrent("error");
    setTimeout(() => {
      setCurrent(null);
    }, 3000);
  }
};
