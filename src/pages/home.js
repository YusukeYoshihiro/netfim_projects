import React from 'react';
import { Feature, OptForm } from '../components'
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
           Welcome to Y'sFILM, <br/>Let's enjoy New Experience here. 
         </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
         </Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your membership
          </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
};

