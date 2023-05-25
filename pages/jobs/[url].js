import { db } from "@/settings/firebase/firebase.setup"
import { getDocs,doc,collection,query,where } from "firebase/firestore"

export  async function getStaticPaths() {
    const onSnap = await getDocs(collection(db,'jobs'))
    const paths = onSnap.doc.map(document =>{
        return{
            params:document.data().url
        }
    })

    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps(context) {
    
}

export default function Job (){
    return (
        <></>
    )
}