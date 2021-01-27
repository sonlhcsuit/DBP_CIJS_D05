export function searchCharity(keywords){
    const apiKey = 'e03ee621-2bc3-46e1-bf40-bdfa1ac36620'

    let url = `https://api.globalgiving.org/api/public/services/search/projects?api_key=${apiKey}&q=${keywords}`
    return fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

}