import React from 'react';
import { List, Link, Image } from './Contacts.style';
import img_1 from '../../assets/img/icon_email.png';
import img_2 from '../../assets/img/icon_github.png';

const Contacts: React.FC = () => {
    return (
        <List>
            <Link href="mailto:van578@yandex.ru" target="_blank">
                <Image src={img_1} />
            </Link>
            <Link href="https://github.com/Ushakovi" target="_blank">
                <Image src={img_2} />
            </Link>
        </List>
    );
};

export default Contacts;