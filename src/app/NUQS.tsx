'use client'

import {useQueryState} from "nuqs";
import {useEffect} from "react";


export const NUQS = ()=> {
  const [,setUsername] = useQueryState("username")

  useEffect(() => {

    console.log("Running setUsername")

    setUsername(null)

  }, [setUsername]);

  return null
}