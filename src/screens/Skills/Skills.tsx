import React from "react";
import {
    List,
    Block,
    Image,
    Subtitle,
    TextWrapper,
    Text,
} from "./Skills.style";
import img_1 from "../../assets/img/icon_code.png";
import img_2 from "../../assets/img/icon_prog.png";
import img_3 from "../../assets/img/icon_frameworks.png";
import img_4 from "../../assets/img/icon_teh.png";

const skillsBlocks: ISkillsBlock[] = [
    {
        img: img_1,
        title: "Html & Css",
        textStrings: [
            "Flexbox",
            "Grid",
            "Animate",
            "Responsiveness",
            "Adaptivity",
            "Validity",
        ],
    },
    {
        img: img_2,
        title: "Languages",
        textStrings: ["ECMAscript 5+", "TypeScript", "SQL"],
    },
    {
        img: img_3,
        title: "Frameworks & Libraries",
        textStrings: [
            "React",
            "Redux",
            "MobX",
            "Vue",
            "Vuex",
            "jQuery",
            "RxJS",
            "Node.js",
            "Express",
        ],
    },
    {
        img: img_4,
        title: "Technologies",
        textStrings: [
            "Git",
            "Webpack",
            "GraphQL",
            "Sass/Scss",
            "Styled-components",
            "Jest",
            "Enzyme",
        ],
    },
];

interface ISkillsBlock {
    img: string;
    title: string;
    textStrings: string[];
}

const Skills: React.FC = () => {
    return (
        <List>
            {skillsBlocks.map((block: ISkillsBlock) => (
                <Block>
                    <Image src={block.img} />
                    <Subtitle>{block.title}</Subtitle>
                    <TextWrapper>
                        {block.textStrings.map((string: string) => (
                            <Text>{string}</Text>
                        ))}
                    </TextWrapper>
                </Block>
            ))}
        </List>
    );
};

export default Skills;
