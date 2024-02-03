
const leetcodedetails = async () => {
    document.getElementById('l-rating').classList.add('loader')
    document.getElementById('l-ranking').classList.add('loader')
    document.getElementById('l-solved').classList.add('loader')
    document.getElementById('l-contest').classList.add('loader')
    document.getElementById('c-rating').classList.add('loader')
    document.getElementById('c-ranking').classList.add('loader')
    document.getElementById('c-solved').classList.add('loader')
    document.getElementById('c-contest').classList.add('loader')
    try {
        const response = await fetch('https://compitativecoding.onrender.com/leetcode');
        const leetcode = await response.json();
        codechefdetails(leetcode,operations)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const codechefdetails= async (leetcode,operations)=>{
    try{
        const response=await fetch('https://compitativecoding.onrender.com/codechef')
        const codechef=await response.json()
        operations(leetcode,codechef)
    }catch(error){
        console.log(error)
    }
}
leetcodedetails(codechefdetails)
const children =(text)=>{
    let child=document.createElement('h3')
    child.textContent=text
    return child
}
const operations = (leetcode, codechef)=>{
    document.getElementById('l-rating').classList.remove('loader')
    document.getElementById('l-ranking').classList.remove('loader')
    document.getElementById('l-solved').classList.remove('loader')
    document.getElementById('l-contest').classList.remove('loader')
    document.getElementById('c-rating').classList.remove('loader')
    document.getElementById('c-ranking').classList.remove('loader')
    document.getElementById('c-solved').classList.remove('loader')
    document.getElementById('c-contest').classList.remove('loader')
    console.log("leetcode :",leetcode['contest_rating'])
    console.log("codechef :",codechef['global_rank'])
    document.getElementById('l-rating').appendChild(children(leetcode.contest_rating))
    document.getElementById('l-ranking').appendChild(children(leetcode.global_ranking.split('/')[0]))
    document.getElementById('l-solved').appendChild(children(leetcode.problems_solved))
    document.getElementById('l-contest').appendChild(children(leetcode.contests_attended))
    document.getElementById('c-rating').appendChild(children(codechef.rating))
    document.getElementById('c-ranking').appendChild(children(codechef.rankings.global_rank))
    document.getElementById('c-solved').appendChild(children(codechef.problems_solved_count))
    document.getElementById('c-contest').appendChild(children(codechef.contest_attended.length))
}

