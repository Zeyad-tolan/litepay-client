import {  usePathname, useRouter, useSearchParams } from "next/navigation";

export const useFilters = ()=>{
    const search = useSearchParams()
    const router = useRouter()
    const url = usePathname()

    const addFilter = (name:string,value:string)=>{
        const currentParams = new URLSearchParams(search.toString());
        if (search.get(name)) {
            if(value.length > 0){
                currentParams.set(name, value);
            }
            else{
                currentParams.delete(name)
            }
        }
        else currentParams.append(name, value);
        router.push(`${url}?${currentParams.toString()}`)
    }
    return addFilter
}