/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react'
import { PropTypes } from 'prop-types'
import Wrapper, { A } from './Wrapper'

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Developed by </span>
        <A
          key="website"
          href="https://mitestainer.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matheus Mitestainer
        </A>
      </div>
    </Wrapper>
  )
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired
}

export default LeftMenuFooter
