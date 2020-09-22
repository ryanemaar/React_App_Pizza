import React from 'react';
import s from './ContentBlock.module.scss';

const ContentBlock = ({content_title, content_text }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {content_title && <h1 className={s.header}>{content_title}</h1>}
                {content_text && <p className={s.descr} >{content_text}</p>}
            </div>
        </div>
    );
}

export default ContentBlock;