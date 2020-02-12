// import React from 'react'
// import { ColorConsumer } from '../../Contexts/color'

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet'
// ]

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상 선택.</h2>
//             {/* <div style={{ display: 'flex'}}>
//                 {colors.map(color => (
//                     <div
//                         key={color}
//                         style={{
//                             background: color,
//                             width: '24px',
//                             height: '24px',
//                             cursor: 'pointer'
//                         }}
//                     />
//                 ))}
//             </div> */}
//             <ColorConsumer>
//                 {({actions}) => (
//                     <div style={{ display: 'flex'}}>
//                         {colors.map(color => (
//                             <div
//                                 key={color}
//                                 style={{
//                                     background: color,
//                                     width: '24px',
//                                     height: '24px',
//                                     cursor: 'pointer'
//                                 }}
//                                 onClick={()=>actions.setColor(color)}
//                                 onContextMenu={e => {
//                                     e.preventDefault();
//                                     actions.setSubcolor(color);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr/>
//         </div>
//     )
// }

// export default SelectColors
import React, { Component } from 'react'
import ColorContext from '../../Contexts/color'

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

export class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    }

    render() {
        return (
            <div>
                <h2>색상 선택.</h2>
                <div style={{ display: 'flex'}}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={()=>this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr/>
            </div>
        )
    }
}

export default SelectColors
