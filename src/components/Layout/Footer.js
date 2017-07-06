import React from 'react';
import styles from './Footer.less';
import {config} from '../../utils';

const Footer = () => {
    return(
        <div className={styles.footer}>
            {config.footerText}
        </div>
    );
};

export {Footer};
export default Footer;
