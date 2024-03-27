'use client'
import React from 'react';
import WorkPage from '@/components/WorkPage';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;
  /* color: blue; */
`

const Page = () => {
    return (
        <Container>
        <WorkPage />
        </Container>
    );
};

export default Page;