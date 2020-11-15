//import axios from "axios";

export default class sessionManager{

    constructor(){
        this.localstorage=window.localStorage;


        //this.getUserData = this.getUserData.bind(this)
    }

    login(mail,name,documentType,documentNumber,userType,userId){
        this.localstorage.setItem('usermail',mail)
        this.localstorage.setItem('name',name)
        this.localstorage.setItem('documentNumber',documentNumber)
        this.localstorage.setItem('documentType',documentType)
        this.localstorage.setItem('userType',userType)
        this.localstorage.setItem('userId',userId)
    }

    logout(){
        this.localstorage.clear()
    }

    isLogged(userType){
        return this.localstorage.getItem('userType') === userType
    }

    setAccount(account_id){ 
        return this.localstorage.setItem('account',account_id)        
    }

/*     getUserData(){
        return axios.post('http://localhost:5000/users/userdata',{
            mail: this.getUserMail()
        }).then((res)=> res.data)
    } */

    getUserName(){ 
        return this.localstorage.getItem('name')        
    }

    getUserDocument(){ 
        return this.localstorage.getItem('documentNumber')        
    }

    getUserMail(){ 
        return this.localstorage.getItem('usermail')        
    }

    getUserId(){ 
        return this.localstorage.getItem('userId')        
    }

    getAccount(){ 
        return this.localstorage.getItem('account')        
    }

}