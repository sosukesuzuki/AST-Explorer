import React, { useState } from 'react';
import styled from 'styled-components';
import { BaseStyles } from '@primer/components';
import TopNav from './templates/TopNav';
import { parserContext } from '../lib/contexts';
import { Parser } from '../lib/types';
import { BABEL } from '../lib/constants';
import CodeEditor from './templates/CodeEditor';
import ASTPreviewer from './templates/ASTPreviewer';

const Container = styled.div`
    display: flex;
    flex-flow: column;
`;
const DetailContainer = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
`;

const App: React.FC = () => {
    const [parser, setParser] = useState<Parser>(BABEL);
    return (
        <parserContext.Provider value={{ parser, setParser }}>
            <BaseStyles>
                <Container>
                    <TopNav />
                    <DetailContainer>
                        <CodeEditor />
                        <ASTPreviewer />
                    </DetailContainer>
                </Container>
            </BaseStyles>
        </parserContext.Provider>
    );
};

export default App;
