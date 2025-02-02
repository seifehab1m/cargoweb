"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ParamsType {
  [key: string]: Array<string>;
}

export default function useParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const addParams = (params: ParamsType) => {
    for (const [key, value] of Object.entries(params)) {
      // remove old keys in url bec will append the new array with old so it will make duplicates
      if (newSearchParams.has(key)) {
        newSearchParams.delete(key);
      }
      // add new keys in url
      value.forEach((val) => {
        newSearchParams.append(key, val);
      });
    }
    router.push(pathname + "?" + newSearchParams.toString(), { scroll: false });
  };

  const removeParams = (key: string) => {
    newSearchParams.delete(key); //delete all keys in url
    router.push(pathname + "?" + newSearchParams.toString(), { scroll: false });
  };

  return { addParams, removeParams };
}
