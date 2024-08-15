import React from 'react'

// function Icon({ name, width = 24, height = 24, fill = 'currentColor', ...props }) {
//     return (
//         <svg width={width} height={height} fill={fill} {...props}>
//             <use xlinkHref={`#${name}`} />
//         </svg>
//     )
// };




export default function Index() {




    return (
        <>Index
            {/* <Icon name="icon-name-1" width={24} height={24} fill="currentColor" /> */}

            <svg width={24} height={24}  >
                <use xlinkHref="#icon-name-1" />
            </svg>
        </>
    )
}

Index.propTypes = {
};