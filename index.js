const leetcodedetails=async ()=>{
    const response=fetch('https://compitativecoding.onrender.com/leetcode')
    const data=await response.json()
    console.log(data)
}