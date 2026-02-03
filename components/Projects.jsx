import React from 'react'
import InfiniteMenu from "@/components/InfiniteMenu.jsx";

const items = [
    {
        image: 'https://picsum.photos/300/300?',
        link: 'https://google.com/',
        title: 'Item 1',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/400/400?',
        link: 'https://google.com/',
        title: 'Item 2',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/500/500?',
        link: 'https://google.com/',
        title: 'Item 3',
        description: 'This is pretty cool, right?'
    },
    {
        image: 'https://picsum.photos/600/600?',
        link: 'https://google.com/',
        title: 'Item 4',
        description: 'This is pretty cool, right?'
    }
];

const Projects = ({ }) => {
    return (
        <>
            <div id="infinite-menu" style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}>
                <InfiniteMenu items={items}
                    scale={0.9} />
            </div>
            <div id="overlay-text" className="lg:hidden relative mt-40 items-center flex justify-center">
                <div className="absolute w-70 h-30 rounded-full bg-gradient-to-r from-black/90 via-black/90 to-black/90 blur-3xl" />
                <h2 className="relative text-3xl lg:text-4xl font-jost text-center">
                    My Latest Works
                </h2>
            </div>
        </>
    )
}

export default Projects
