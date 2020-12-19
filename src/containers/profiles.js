import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../Y\'sFILM.png';

export function SelectProfileContainer({ user, setProfile }) {
  console.log('user', user);
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={`${process.env.PUBLIC_URL}/${logo}`} alt="NetFilm" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title> Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL
              })}
            data-testid="user-profile"
          >
            <Profiles.Picture src={`${process.env.PUBLIC_URL}/${user.photoURL}`} />
            {/* <Profiles.Name src={user.displayName} /> */}
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
};


