import dayjs from "dayjs";

export const getKeyByValue = <T extends Record<string, string | number>>(
  obj: T,
  value: string | number
): string | undefined => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

export const dateFormat = (date: string) => {
  if (!date) return;
  return dayjs(date).toISOString();
};

export const getParamsObject = (searchParams: URLSearchParams) => {
  const paramsObject: Record<string, string | string[]> = {};

  searchParams.forEach((value, key) => {
    if (paramsObject[key]) {
      // Convert single value to an array or push to existing array
      paramsObject[key] = Array.isArray(paramsObject[key])
        ? [...paramsObject[key], value]
        : [paramsObject[key] as string, value];
    } else {
      paramsObject[key] = value;
    }
  });
};
