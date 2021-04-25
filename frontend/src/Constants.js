const dev = {
  url: "http://127.0.0.1:8000/",
};

const prod = {
  url: "https://vilytic.herokuapp.com/",
};

export const configUrl = process.env.NODE_ENV === "development" ? dev : prod;
