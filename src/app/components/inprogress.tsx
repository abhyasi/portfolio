import React from 'react'

const Inprogress = () => {
    const inProgress = [
        {
            name: '8085 Simulator',
            description: 'Web Application'
        },
        {
            name: 'Text Adventure Game',
            description: 'Web Application'
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Work in Progress</h2>
                <ul className="list-inside">
                    {
                        inProgress.map((project, index) => (
                            <li key={index}>
                                <span className="font-medium">{project.name}</span> <span>({project.description})</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Inprogress