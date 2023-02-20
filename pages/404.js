import { useEffect } from "react"
import { useRouter } from "next/router"

export default function PageNotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return null
}