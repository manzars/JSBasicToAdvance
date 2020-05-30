// && - And
// || - Or
// ! - not

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("Greeting: Hello")
    console.log("Grant Access to all content")
}else if(isVerified || isGuest){
    console.log("Allow free cources")
}else{
    console.log("Please contact admin")
}