'use client'
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function AccountPage() {
  const { data: session } = useSession();
  const [d,dto] = useState()
  fetch("/app/api/check-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: session?.user?.email,
    }),
  }).then(async(response)=>{
    const dt = await response.json()
    dto(dt)
  });

  return(
    <div>{d}</div>
  )
}
