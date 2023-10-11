import { redirect } from 'next/navigation'
 
const page = () => {
  return redirect("/signin")
}

export default page