import './Sidebar.scss'

import meditate from '../../assets/sidebar/meditate.svg'
import swim from '../../assets/sidebar/swim.svg'
import bike from '../../assets/sidebar/bike.svg'
import dumbbell from '../../assets/sidebar/dumbbell.svg'

function Sidebar () {
    return (
        <nav className='sidebar'>
            <ul className='activity-container'>
                <li className='activity-element'><img src={meditate} alt="icone meditation" /></li>
                <li className='activity-element'><img src={swim}  alt="icone natation" /></li>
                <li className='activity-element'><img src={bike}  alt="icone cyclisme" /></li>
                <li className='activity-element'><img src={dumbbell}  alt="icone musculation" /></li>
            </ul>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </nav>
    )
}

export default Sidebar;

