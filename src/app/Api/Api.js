const Api_Base_Url ='http://localhost:5000/api'
const Api_Router ={
    signup:'/auth/signup',
    login:'/auth/login',
    product:{
        search:'/product/searchProduct'
    }
}

//Signup 
export const Signup = async(data)=>{
    console.log("api function invoked")
    const header ={
        method:"POST",
        headers:{"Content-type":'application/json'},
        body:JSON.stringify(data)
    }
    const res = await fetch(Api_Base_Url+Api_Router.signup,header);
    return await res.json()
}

//Login
export const LoginApi = async(data)=>{
    console.log("api function invoked")
    const header ={
        method:"POST",
        headers:{"Content-type":'application/json'},
        body:JSON.stringify(data)
    }
    const res = await fetch(Api_Base_Url+Api_Router.login,header);
    // console.log(res.json())
    return  await res.json()
}

//product search
export const SerachApi =async(data)=>{
    console.log('name',data)
    const res = await fetch(`${Api_Base_Url}${Api_Router.product.search}?name=${data}`,{method:"GET"})
    const x = await res.json()
    // console.log('x',x)
}