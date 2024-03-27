'use client'
import InterestsPage from '@/components/InterestsPage';
import React from 'react';
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
        <InterestsPage />
        </Container>
    );
};

export default Page;