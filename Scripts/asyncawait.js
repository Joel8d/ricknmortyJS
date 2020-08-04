const asyncawait = async (API) =>{
    try{
        const data = await fetchData(API)
    }catch(error){
        console.error(error)
    }
} 