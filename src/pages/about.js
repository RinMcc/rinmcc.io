import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import MarkDownFile from '../data/about.md';

import Main from '../layouts/Main';


const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(MarkDownFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const count = content.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

  return (
    <Main
    title="About"
    description="Learn about Aaron McCarthy"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown children={content} />
    </article>
  </Main>
  );
};

export default About;
