import React, {useEffect, useState} from 'react'
import SearchbarStyle from './Searchbar.module.css'


export default function Searchbar()
{
    const [images, setImages] = useState([])
    const [result, setResult] = useState([])
    const [input, setInput] = useState('')
    useEffect(()=> {

        for(let i = 0; i < 12; i++)
        {
            setImages(images => [...images, {val: 'https://dummyimage.com/100x100/000/fff', key:i}])
        } 
    }, []) 

    async function findResults(e)
    {
        
        setInput(e.target.value)
        setResult([])
        // console.log(input)
        await fetch('http://ec2-54-178-56-25.ap-northeast-1.compute.amazonaws.com/?search=' + input)
        .then(response => response.json())
        .then(data => {
            setResult(data)
            // console.log(data)
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <section>
                <div className={SearchbarStyle['image-layout']} >
                    {
                        images.map(el => {
                            return (<img src={el.val} alt='none' key={el.key} />)
                        })
                    }
                </div>
                
            <form className={SearchbarStyle.searchBox} >
                <input placeholder='Player name' value={input} onChange={findResults} />
                <button type='submit'> send </button>
            </form>
            <div className={SearchbarStyle['result-style']}>
                    {
                        result.map(el => {
                            return (
                                <div key={el.id} > {el.name} </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}