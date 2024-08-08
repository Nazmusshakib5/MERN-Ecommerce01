import {create} from 'zustand'
import axios from 'axios'

const FeatureStore=create((set)=>({
    FeatureList:null,
    FeatureListRequest:async ()=>{
        const res= await axios.get(`${window.location.origin}/api/v1/FeaturesList`)
        if(res.data['status']==='success'){
            set({FeatureList:res.data['data']})
        }
    },
        LegalList:null,
        LegalListRequest:async (type)=>{
            set({LegalList:null})
            const res= await axios.get(`${window.location.origin}/api/v1/LegalDetails/${type}`)
            if(res.data['status']==='success'){
                set({LegalList:res.data['data']})
            }
        }
  }

))

export default FeatureStore