import React from 'react'

function List(props) {
    return (
    <div className='list'>
        <img src={props.image} className='list--image'/>
        <div className='list--data'>
            <span className='list--name'>{props.name}</span>
            <span className='list--age'>{props.age} years</span>
        </div>
    </div>
    )
}

export default List