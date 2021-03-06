import React from 'react'

import { Navigation, InternalLink } from './Navbar.styles'

type Props = {
  toggleHidden?: any
  hidden?: boolean
}

const Navbar: React.FC<Props> = ({ toggleHidden, hidden }) => (
  <Navigation hidden={hidden}>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/"
    >
      Home
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/tablature"
    >
      Tablature
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/lessons"
    >
      Lessons
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/chords"
    >
      Chords
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/clef-to-tab"
    >
      Clef to Tab
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/terminology"
    >
      Terminology
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/community"
    >
      Community
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/newsletter"
    >
      Newsletter
    </InternalLink>
    <InternalLink
      onClick={() => (toggleHidden ? toggleHidden(false) : null)}
      to="/accessibility"
    >
      Accessibility
    </InternalLink>
  </Navigation>
)

export default Navbar
