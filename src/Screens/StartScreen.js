import React from 'react'
import styled from 'styled-components'
import Rating from '../Components/Rating'
import { Link } from 'react-router-dom'
import shortNameImage from '../images/shortname.png'
import systemCheckImage from '../images/systemChecks.png'
import finishingTouchImage from '../images/finishingTouch.png'

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`

const HeaderParagraph = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
`

const VideoDiv = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`

const Step = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Code = styled.code`
  color: lightgreen;
  background-color: black;
  padding: 4px;
  border-radius: 5px;
`

const H2 = styled.h2`
 text-align: center;
`

const Note = styled.div`
 width: 80%;
 background-color: #202020;
 color: white;
 display: flex;
 flex-direction: column;
 padding: 20px;
 margin: 10px auto;
 border-radius: 10px;
`
const ColumnContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
`

const LeftColumnContainer = styled.div`
  width: 50%;
  border-right: 1px solid black;
`

const RightColumnContainer = styled.div`
  background-color: #ebedec;
  width: 50%;
  height: auto;
`

const H1 = styled.h1`
  font-family: 'Raleway', sans-serif;
`

const P = styled.h1`
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 200;
`

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Img = styled.img`
  width: 100%;
`

const StartScreen = () => {
  return (
    <Container>
      <HeaderParagraph>
        <H1>Creating your first Apostrophe Project</H1>
        <InfoDiv>
          <P>aprox. 15 minutes</P>
          <P>Written May 18, 2022</P>
          <P>30 comments</P>
          <Rating value={4.5} text={`10 reviews`} />
        </InfoDiv>
        <h2>
          Start here! This tutorial will show you exactly how to create your first boilerplate project with ApostropheCMS. Once completed you will have a foundation to build out further projects and learn more Apostrophe basics. 
        </h2>
      </HeaderParagraph>
      <VideoDiv>
      <iframe width="840" height="460" src="https://www.loom.com/embed/eba2ad7656404dbdb1ae8784c3e6dafb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <P>Give your eyes a break. This video demo outlines the steps in this tutorial.</P>
      </VideoDiv>

      <Step>
        <H1>Step 1: Apostrophe requires both Node & MongoDB</H1>
        <P>ApostropheCMS relies entirely on Javascript utilizing Node and MongoDB so you will need Node and MongoDB installed properly in your local environment. To check if you have Node installed in your local environment run <Code>node -v</Code> from the terminal. To check if you have npm installed run <Code>npm -v</Code>. To check for mongo run <Code>mongod --version</Code></P>
        <Img src={systemCheckImage}/>
        <P>Should Node be missing reference this document to install</P>
        <P>Should MongoDB be missing reference this document to install</P>
      </Step>

      <Step>
        <H1>Step 2: Initiate MongoDB in your local environment</H1>
        <P>ApostropheCMS will be using MongoDB to store its information so it needs to be running before creating a project. To create an instance of MongoDB in your local environment run the command <Code>mongo</Code>. If needed, follow the MongoDB documentation for more details.</P>
      </Step>

      <Step>
        <H1>Step 3: Make a Decision</H1>
      </Step>
      <Note>
        <h3>Important: There are two ways to start a project</h3>
        <P>Although not required you can use the ApostropheCLI tool to make things easier. The CLI tool will give you access to the apos command within your local project's terminal. With a single apos command you can create boilerplate for projects, add module functionality, and much more! Decide whether you will use this tool and proceed to step 4 accordingly.</P>
        <P>To install the ApostropheCLI with npm run <Code>npm install @apostrophe/cli</Code></P>
        <P>To install the ApostropheCLI with yarn run <Code>yarn global add @apostrophe/cli</Code></P>
      </Note>

      <ColumnContainer>
          <LeftColumnContainer>
            <H2>With ApostropheCLI</H2>
            <Step>
              <H1>Step 4: Create A Project</H1>
              <P>The CLI will take care of installing dependencies and will create your first user with the name "admin".</P>
              <P>In the terminal of your local environment call the command <Code>apos create apos-app</Code></P>
              <P>Once run, you will be prompted to provide a password. This password corresponds to the admin user that is automatically create. Enter any password and proceed to Finishing Touches.</P>
            </Step>
          </LeftColumnContainer>
          <RightColumnContainer>
            <H2>Without ApostropheCLI</H2>
            <Step>
              <H1>Step 4: Clone Starter Repo</H1>
              <Code>git clone https://github.com/apostrophecms/a3-boilerplate apos-app</Code>
              <P>If you want to change the project directory name, please do so. We will continue referring to "apos-app"</P>
            </Step>
            <Step>
              <H1>Step 5: Change shortname setting</H1>
              <P>Open the app.js file in the root project directory. Find the shortName setting and change it to match your project (only letters, digits, hyphens and/or underscores). This will be used as the name of your database.</P>
              <Img src={shortNameImage} />
            </Step>
            <Step>
              <H1>Step 6: Install Dependencies</H1>
              <P><Code>npm install</Code></P>
            </Step>
            <Step>
              <H1>Step 7: Create Admin User</H1>
              <P>Before starting up you'll need to create an admin-level user so that you can log in. After running the following command, Apostrophe will ask you to enter a password for this user.</P>
              <P>Run <Code>node app @apostrophecms/user:add my-user admin</Code> and you can replace `my-user` with the name you want for your first user.</P>
              <P>Proceed to Finishing Touches once complete.</P>
            </Step>
          </RightColumnContainer>
      </ColumnContainer>

      <Step>
        <H1>Finishing Touches: Update Session Secret</H1>   
        <P>You should also update the session secret for Express.js to a unique, random string. The starter project has a placeholder for this option already. If you do not update this, you will see a warning each time the app starts up.</P>
        <Img src={finishingTouchImage} />
        <P>Please make sure your secret is a String <Code>'abc'</Code> for example.</P>
      </Step>

      <Step>
        <H1>Launch project</H1>   
        <Code>npm run start</Code>
        <P>This boilerplate project can now be used as a foundation to build more projects. See <Link to="/projects">more projects here </Link></P>
      </Step>
    </Container>
  )
}

export default StartScreen