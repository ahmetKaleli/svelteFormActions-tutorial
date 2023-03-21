import {redirect, type Actions} from "@sveltejs/kit"

export const load = ()=>{
    return {
        title:"baslik"
    }
}


export const actions:Actions = {

    async login({request}){
        const form =await request.formData()

        const id = form.get("id")
        const password = form.get("password")

        if(id=="ahmet" && password=="123")
            throw redirect (301, "/user/"+ id)
        return {
            login: false
        }
    }
}