import styled from 'styled-components'
import React from 'react'

const defaultSquare = ({className, value, onClick}) => {
    return (
            <button data-testid="square" className={className} onClick={onClick}>{value}</button>
    )
}

export const Square = styled(defaultSquare)`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
`;

