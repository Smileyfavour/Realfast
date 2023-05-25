import Link from "next/link";
import {FaBriefcase} from "react-icons/fa"
import{ BsCash} from "react-icons/bs"


export default function jobs() {
        return(
                <div className={jobStyles.cards}>
            <div className={jobStyles.head}>
            <div className={jobStyles.titleBlock}>
                    <h3 className={jobStyles.jobTitle}>Flight Attendant</h3>
                    <Link href='#' className={jobStyles.company}>Tenaike Enterprise</Link>
                    <p className={jobStyles.location}>Lagos</p>
                    <p className={jobStyles.pay}>NGN85,000 a month</p>
                    <Link href='#' className={jobStyles.apply}>Apply Now</Link>
                </div>
            </div>
            <div className={jobStyles.card}>
                <h3>Job details</h3>
                <p>no matching <i><u><Link href='#'>job preference for now</Link></u></i></p>
                <BsCash  className={jobStyles.salary}/>
                <p className={jobStyles.salary}>salary</p>
                <p>NGN85,000 a month</p>

                    <FaBriefcase/>
                    <p>Job type</p>
                    <p>Full-time</p>
            </div>
            <div className={jobStyles.body}>
                <p className={jobStyles.description}>
                    Demonstrating safety and emergency measures such as seat-blets etc...
                    Job Type: Full-time
                    Salary: ₦85,000.00 per month
                    Ability to commute/relocate:
                </p>
                <li className={jobStyles.descriptions}>
                    Lagos: Reliably commute or planning to relocate before starting work (Required)
                </li>
            </div>
            </div>
        )
        
    }

const jobStyles ={
   
    cards:'border-t border-top-gray-300 rounded-lg border-gray-200 p-3 mb-4',
    card:'border-t border-top-gray-300 p-3 mb-4',
    head:'flex flex-row justify-between',
    body:'border-t border-top-gray-300 ',
    company:'text-lg text-indigo-600',
    salary:'flex flex-row justify-between',
    titleBlock:'',
    jobTitle:'text-3xl',
    location:'',
    description:'text-gray-800 flex flex-row',
    descriptions:'text-gray-800 flex flex-col',
    pay:'',
    apply:'h-[52px] flex justify-center items-center bg-indigo-800 text-white font-bold px-3 rounded-md pointer-cursor mb-4',


}