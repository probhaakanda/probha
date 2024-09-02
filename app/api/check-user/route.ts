
import { connectToDatabase } from "@/mongodb/connectToDatabase"
import { NextResponse } from "next/server"

export async function POST(request:Request){

  const email = await request.json()

  const db = await connectToDatabase()
  const user =await db.collection('users').findOne({email})

  if(user){
    NextResponse.json({exists:true})
  }else{
    NextResponse.json({exists:false})
  }
}












