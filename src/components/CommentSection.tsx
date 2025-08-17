import React, {useEffect} from 'react';
import commentBox from 'commentbox.io';
import {useColorMode} from '@docusaurus/theme-common';

export default function CommentSection() {
    const {colorMode} = useColorMode();
    const textColor = colorMode === 'dark' ? 'white' : 'black';

    useEffect(() => {
        const box = commentBox('5734122580344832-proj', {
            textColor: textColor,
        });
        return () => box();
    }, [colorMode]);


    return (
        <div style={{
            marginTop: '54px',
        }} className="commentbox"/>
    );
}