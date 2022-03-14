import React from 'react';
import {Button} from 'react-scroll';


import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({

lightBg,
id,
imgStart,
topLine,
lightText,
headline,
darkText,
description,
buttonLabel,
img,
alt

}) => {

    return (
        <>
        <InfoContainer lightBg={lightBg, id, imgStart, topLine, lightText} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart }>
                    <Column1>
                    <TextWrapper>
                        <TopLine>
                            {topLine}
                        </TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to='home'/>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    </InfoRow>
            </InfoWrapper>
            
            </InfoContainer>
        
        </>
    )
}

export default InfoSection