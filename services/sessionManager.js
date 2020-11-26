//import axios from "axios";

export default class sessionManager{

    constructor(){
        this.localstorage=window.localStorage;
    }

    login(mail,name,documentNumber,userType,clientId){
        this.localstorage.setItem('usermail',mail)
        this.localstorage.setItem('name',name)
        this.localstorage.setItem('documentNumber',documentNumber)
        this.localstorage.setItem('userType',userType)
        this.localstorage.setItem('clientId',clientId)
    }

    setClientId(clientId){
        this.localstorage.setItem('clientId',clientId)
    }

    logout(){
        this.localstorage.clear()
    }

    isLogged(userType){
        return this.localstorage.getItem('userType') === userType
    }

    getUserName(){ 
        return this.localstorage.getItem('name')        
    }

    getClientId(){ 
        return this.localstorage.getItem('clientId')        
    }


}