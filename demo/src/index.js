import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'
import colors from '@cmds/colors'
import map from 'lodash/map'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

const colorOptions = map(colors, color => color)

import ColorPicker from '../../src/ColorPicker'

class Demo extends React.Component {

    render() {
        return (
            <Canvas>
                <Heading>
                    ColorPicker
                </Heading>
                <Paragraph>
                    ColorPicker with a predefined set of colors
                </Paragraph>
                <Box>
                    <ColorPicker
                        colors={colorOptions}
                        value={colorOptions[2].id}
                        onChange={({value}) => alert(`You picked ${value}`)}
                    />
                </Box>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
