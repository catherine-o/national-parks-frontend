import React from 'react'

export default function Search({parks, updateSelectedState}) {

    const listEachState = (parks) => {
        const states = []
        parks.map(park => {
            if (park.states.length === 2 && !states.includes(park.states)) {
                states.push(park.states)
            }
        })
        return createOptions(states.sort())
    } 

    const createOptions = (states) => {
        return states.map(state => {
            return <option value={state}>{state}</option>
        })
    }

    const handleChange = (event) => {
        const selection = event.target.value
        updateSelectedState(selection)
    }


    return (
        <form>
            <label>Search by State</label>
            <select onChange={handleChange}>
                <option selected=''></option>
                {listEachState(parks)}
            </select>
        </form>
    )
}