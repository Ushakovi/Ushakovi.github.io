import React from 'react';
import { List, Block, Image, Subtitle, TextWrapper, Text } from './Skills.style';
import img_1 from '../../assets/img/icon_code.png';
import img_2 from '../../assets/img/icon_prog.png';
import img_3 from '../../assets/img/icon_frameworks.png';
import img_4 from '../../assets/img/icon_teh.png';

interface ISkillsBlock {
    img: string;
    title: string;
    textStrings: string[];
};

const skillsBlocks: ISkillsBlock[] = [
    {
        img: img_1,
        title: 'Html & Css',
        textStrings: ['Flexbox', 'Grid', 'Animate', 'Responsiveness', 'Adaptivity', 'Validity']
    },
    {
        img: img_2,
        title: 'JavaScript',
        textStrings: ['ECMAscript 5+', 'TypeScript', 'Node.js']
    },
    {
        img: img_3,
        title: 'Frameworks & Libraries',
        textStrings: ['React', 'React Router Dom', 'Redux', 'Vue', 'Vue Router', 'Vuex', 'jQuery', 'Express']
    },
    {
        img: img_4,
        title: 'Technologies',
        textStrings: ['Git', 'Webpack', 'Babel', 'Gulp', 'Styled-components', 'Sass/SCSS', 'Bootstrap', 'BEM']
    }
];

const Skills: React.FC = () => {
    return (
        <List>
            {
                skillsBlocks.map((block: ISkillsBlock) => (
                    <Block>
                        <Image src={block.img} />
                        <Subtitle>{block.title}</Subtitle>
                        <TextWrapper>
                            {
                                block.textStrings.map((string: string) => (
                                    <Text>{string}</Text>
                                ))
                            }
                        </TextWrapper>
                    </Block>
                ))
            }
        </List>
    );
};

export default Skills;