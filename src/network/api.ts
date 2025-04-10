const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_BASE_USER_URL = process.env.NEXT_PUBLIC_USER_API_URL!;

// Step 1: Use actual string values in the enum
export enum BASEURL {
  FREIGHTFORWARDER = "FREIGHTFORWARDER",
  USER = "USER",
}

// Step 2: Map enum to real URLs
const BASE_URL_MAP: Record<BASEURL, string> = {
  [BASEURL.FREIGHTFORWARDER]: API_BASE_URL,
  [BASEURL.USER]: API_BASE_USER_URL,
};

// Step 3: Main request function
export async function request(
  endpoint: string,
  method = "GET",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = null,
  headers = {},
  baseURL: BASEURL = BASEURL.FREIGHTFORWARDER
) {
  const url = `${BASE_URL_MAP[baseURL]}${endpoint}`;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    next: { tags: ["cargoweb"] },
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(url, config);
    const result = await response?.json();

    if (result?.status === 500) throw new Error("Internal Server error 500");
    if (!response.ok) throw new Error(result?.errors);

    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Request failed:", error);
    throw error?.message || "An error occurred";
  }
}
export async function getRequest(
  endpoint: string,
  headers = {},
  baseURL: BASEURL = BASEURL.FREIGHTFORWARDER
) {
  return request(endpoint, "GET", null, headers, baseURL);
}

export async function postRequest(
  endpoint: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = {},
  headers = {},
  baseURL: BASEURL = BASEURL.FREIGHTFORWARDER
) {
  const defaultBody = {
    sortBy: "id",
    orderDirection: 1,
    criteria: {},
    page: 1,
    pageSize: 15,
  };

  return request(
    endpoint,
    "POST",
    { ...defaultBody, ...data },
    headers,
    baseURL
  );
}

export async function putRequest(
  endpoint: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any,
  headers = {},
  baseURL: BASEURL = BASEURL.FREIGHTFORWARDER
) {
  return request(endpoint, "PUT", data, headers, baseURL);
}

export async function deleteRequest(
  endpoint: string,
  headers = {},
  baseURL: BASEURL = BASEURL.FREIGHTFORWARDER
) {
  return request(endpoint, "DELETE", null, headers, baseURL);
}
