import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['LearnMore', 'GetInTouch', 'first'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="LearnMore">
                    <a href="#">Learn More</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="8hours">
                    <a href="#">8 Hours</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="GetInTouch">
                    <a href="#">Get in Touch</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
