import React from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearence="primary" arrow="right">
        Button
      </Button>
      <Button appearence="ghost" arrow="right">
        Button
      </Button>
      <P size="l">Larg</P>
      <P>Medium</P>
      <P size="s">Small</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="grey">Grey</Tag>
    </>
  );
}
