import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useFilters = () => {
  const search = useSearchParams();
  const router = useRouter();
  const url = usePathname();

  const addFilter = (name: string, value: string) => {
    const currentParams = new URLSearchParams(search.toString());
    if (value.trim().length > 0) {
      currentParams.set("pageNo", "1");
    } else {
      currentParams.delete("searchWord");
    }

    if (search.get(name)) {
      if (value.trim().length > 0) {
        currentParams.set(name, value.trim());
      } else {
        currentParams.delete(name);
      }
    } else currentParams.append(name, value.trim());
    router.push(`${url}?${currentParams.toString()}`);
  };
  return addFilter;
};
