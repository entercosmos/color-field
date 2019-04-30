import React from 'react'
import {css, cx} from 'emotion'

const ColorPicker = ({colors, value, onChange}) => (
    <div
        className={css`
                            max-height: 400px;
                            overflow: hidden auto;
                    `}
    >
        <div
            className={css`
                                padding: 16px;
                                display: flex;
                                flex-wrap: wrap;
                            `}
        >
            {colors.map(color => (
                <button
                    key={color.id}
                    type="button"
                    className={cx(
                        css`
                                    position: relative;
                                    width: 44px;
                                    height: 44px;
                                    display: inline-block;
                                    align-items: center;
                                    border: none;
                                    border-radius: 50%;
                                    cursor: pointer;
                                    border: 2px solid transparent;
                                    &:hover {
                                        border-color: #07f;
                                    }
                                    &:focus {
                                        outline: none;
                                    }
                                `,
                        value === color.id ? css`
                                    border-color: #07f;
                                ` : null
                    )}
                    onClick={(e) => {

                        e.stopPropagation()

                        onChange({
                            value: color.id
                        })
                    }}
                >
                    <div
                        className={css`
                        position: absolute;
                        top: 4px;
                        left: 4px;
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                            background-color: ${color.backgroundColor};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        `}
                    >
                        <div

                            className={css`
                                width: 6px;
                                height: 6px;
                                border-radius: 50%;
                                background-color: ${color.color};
                            `}
                        />
                    </div>
                </button>
            ))}
        </div>
    </div>
)

export default ColorPicker