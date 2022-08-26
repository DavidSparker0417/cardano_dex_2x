import React from 'react'

import { Nav } from '../../components/Nav';
export const Main = ({ content }) => {
    return (
        <div className={`bg-[url("/src/assets/img/Rectangle.png")] bg-no-repeat bg-cover min-h-screen flex flex-col items-center`}>
            <Nav />
            {content}
        </div>
    )
}
