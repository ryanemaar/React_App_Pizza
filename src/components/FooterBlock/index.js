import React from 'react';
import s from './FooterBlock.module.scss';

const FooterBlock = ({footer_copyright}) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {footer_copyright && <p className={s.copyright} >{footer_copyright}</p>}
            </div>
        </div>
    );
}

export default FooterBlock;