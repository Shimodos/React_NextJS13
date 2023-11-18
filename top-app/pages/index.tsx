import React, { useEffect, useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter', counter);
    return function cleanup() {
      console.log('clear' + counter);
    };
  });

  useEffect(() => {
    console.log('Mounted');
  }, []);

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearence="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
