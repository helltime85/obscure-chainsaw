import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [selectTopic, setSelectTopic] = useState('');
    const handleSelect = (selectedButton) => {
        setSelectTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectTopic) {
        tabContent = (
            <>
                <h3>{EXAMPLES[selectTopic].title}</h3>
                <p>{EXAMPLES[selectTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectTopic].code}
                    </code>
                </pre>
            </>
        );
    }
    return (
        <Section title="Examples" id='examples'>
            <Tabs 
           // ButtonsContainer="menu"
            //ButtonsContainer={Section}
            buttons={<>
                <TabButton isSelected={selectTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>}>{tabContent}</Tabs>
            <menu>

            </menu>

        </Section>
    );
}