import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apicabins";

export function useCabins() {
  const {
    isPending,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isPending, error, cabins };
}
