import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderContainer = styled.header`
  padding: 1rem 0 3rem;

  h1 {
    cursor: default;
    .underline {
      /* text-decoration: underline; */
      border-bottom-width: 5px;
      border-bottom-style: solid;
      display: inline-block;
      margin-bottom: -10px;
    }
    .red {
      color: #f65c00;
    }
    .blue {
      color: #0079ff;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
    }
    .navlinks a {
      margin-right: 0;
      margin-left: 1.3rem;
    }
    @media (max-width: 650px) {
      display: block;
      .navlinks a {
        margin-left: 0;
        margin-right: 1.3rem;
      }
    }
    a {
      color: #999999;
      text-decoration: none;
      margin-right: 1.3rem;
      &:hover {
        color: #666666;
      }
    }
  }

  .active-nav-item {
    color: #000000;
    cursor: default;
    &:hover {
      color: #000000;
    }
  }
`

export default function Header({ about }) {
  const [job, setJob] = useState([
    ['designer', 'red'],
    ['[codes]', 'blue'],
  ])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  function mouseEnter() {
    setJob([
      ['coder', 'blue'],
      ['[designs]', 'red'],
    ])
  }
  function mouseLeave() {
    setJob([
      ['designer', 'red'],
      ['[codes]', 'blue'],
    ])
  }

  return (
    <HeaderContainer>
      <h1 onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
        {data.site.siteMetadata.title} is a{' '}
        <span className={`underline ${job[0][1]}`}>{job[0][0]}</span> who{' '}
        <span className={job[1][1]}>{job[1][0]}</span>.
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active-nav-item">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-nav-item">
              About
            </Link>
          </li>
        </ul>
        <ul className="navlinks">
          <li>
            <a href="mailto:mylesjeffery96@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/myles-jeffery/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mylesjeffery"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="/uploads/mylesjeffery_resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
