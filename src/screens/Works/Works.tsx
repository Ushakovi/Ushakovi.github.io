import React from 'react';
import { List, Block, Image, Overlay, Button } from './Works.style';
import img_1 from '../../assets/img/work_1.png';
import img_2 from '../../assets/img/work_2.png';

const Works: React.FC = () => {
    return (
        <List>
            <Block>
                <Image src={img_1} />
                <Overlay>
                    <Button href="https://ushakovi.github.io/sites/conference/app/" target="_blank">View</Button>
                </Overlay>
            </Block>
            <Block>
                <Image src={img_2} />
                <Overlay>
                <Button href="https://ushakovi.github.io/sites/belazcar/app/" target="_blank">View</Button>
                </Overlay>
            </Block>
        </List>
    );
};

export default Works;