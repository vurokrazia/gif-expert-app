import { useEffect, useState } from "react";
import { getGifs } from "../heplpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  useEffect(() => {
    getGifs(category).then((response) => {
      setState({
        data: response,
        loading: false
      })
    })
  }, [category])
  return state;
}