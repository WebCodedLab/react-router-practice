import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);

    const showGithubData = async () => {
        const response = await fetch('https://api.github.com/users/webcodedlab')
        let data = await response.json();
        setData(data)
    }

    useEffect(()=> {
        showGithubData()
    })

  return (
    <div className='flex justify-center items-center text-center flex-col gap-10 m-10'>
        <h1 className='text-2xl font-semibold'>
        Welcome, {data.login} <br />
        <span className='text-sm font-medium'>{data.name}</span> <br />
        <span className='text-sm font-medium'>{data.location}</span>
        </h1>
        <img src={data.avatar_url} width={200}/>
    </div>
  )
}

export default Github