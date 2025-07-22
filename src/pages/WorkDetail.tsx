import WorkTest from "@/components/WorkDetail/WorkTest";
import { useParams } from "react-router-dom"

export default function WorkDetail(){
  const {id} = useParams();

  return(
    <section>
      <div className="sectionInner ">
        <WorkTest />
      </div>
    </section>
  )
}