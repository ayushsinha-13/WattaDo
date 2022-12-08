const GetTask = async() => {
    const url = "https://www.boredapi.com/api/activity/"
    const res = await fetch(url)
    const data = await res.json()

    return(data.activity)
}

export default GetTask