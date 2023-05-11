import { useEffect } from "react";
import { useRouter } from "next/router";
import  JobCard from "@/components/JobCard";
import { jobsData } from "@/data/job-data";

export default function AboutUs() {
    const router = useRouter();

    // setTimeout(()=>{
    //     return router.push('/search')
    // },3000)
    console.log(router.query.keyword);

    useEffect(()=>{
        const rNums =[];

        for (let count =0;count< 100;count++){
            rNums.push(Math.round(Math.random()*100000))
        }
        console.log(rNums);

    },[]);


    return (
        <div>
            {jobsData.map ((job)=>{
                return <JobCard key={job.id} title={job.title} description={job.description}>
                    <h1>Info block</h1>
                    <p>some information</p>
                </JobCard>
            })}



            {/* <JobCard title='remote react next-js developer' description='we employ multiple developers'/>
            <JobCard title='web-design developer' description='designation of websites'/> */}
        </div>
    )
}