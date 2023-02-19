import React from 'react'
import subappIcon from '../../../assets/egg-full.png'
import { useHistory } from 'react-router-dom'

function SubappButton() {
    const history = useHistory()

    const subappPage = () => {
        history.push("/subapp")
    }
  return (
    <div>
        <div className='flex justify-center shadow-xl rounded-full fixed bottom-10 bg-teal-500 hover:bg-teal-700  right-10 h-24 w-24 cursor-pointer items-center' onClick={subappPage}>
            <img className='h-16' src={subappIcon} alt=''/>
        </div>
    </div>
  )
}

export default SubappButton