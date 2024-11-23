/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/form/login',
                destination:'/',
                permanent:false
            },
            {
                source:'/user/:userid',
                destination:'/',
                permanent:false
            }
        ]
    }
};

export default nextConfig;
