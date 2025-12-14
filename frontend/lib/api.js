// Roman Urdu: Backend se secure API calls
export const api = {
  get: async (url: string) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    });

    return res.json();
  },

  post: async (url: string, data: any) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },

  put: async (url: string, data: any) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  },
};
