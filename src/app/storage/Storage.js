"use client";
const Storage_key ='userlogged';
export  function SetStorage(data){
 localStorage.setItem(Storage_key,JSON.stringify(data))
}
export function GetToken(){
    const token = localStorage.getItem(Storage_key)
    if(token) {
        return JSON.parse(localStorage.getItem(Storage_key)).token
    }
    else return false
}