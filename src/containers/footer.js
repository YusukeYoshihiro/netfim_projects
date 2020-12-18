import React from 'react'
import { Footer } from '../components'

export function FooterContainer() {
  return(
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#"> FAQ</Footer.Link>
          <Footer.Link href="#"> Investor Relations</Footer.Link>
          <Footer.Link href="#"> Way to Watch</Footer.Link>
          <Footer.Link href="#"> Corporate Information</Footer.Link>
          <Footer.Link href="#"> Y'sFILM Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#"> HELP</Footer.Link>
          <Footer.Link href="#"> Jobs</Footer.Link>
          <Footer.Link href="#"> Terms of Use</Footer.Link>
          <Footer.Link href="#"> Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#"> Account</Footer.Link>
          <Footer.Link href="#"> Redeem Gift Cards</Footer.Link>
          <Footer.Link href="#"> Privacy</Footer.Link>
          <Footer.Link href="#"> Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#"> Media Center</Footer.Link>
          <Footer.Link href="#"> Buy Gift Cards</Footer.Link>
          <Footer.Link href="#"> Cookie Preference</Footer.Link>
          <Footer.Link href="#"> Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Y'sFILM Yusuke Yoshihiro &copy;2020 All Rights Reserved</Footer.Text>
    </Footer>
  )
}