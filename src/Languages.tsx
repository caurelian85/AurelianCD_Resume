import * as React from 'react';
import { BulletedList } from './core/BulletedList';
import { Section } from './core/Section';

export const Languages: React.FC = () => {
  return (
    <Section header="Languages">
      <BulletedList bullets={["English (C2)", "French (B2)", "Romanian (Native)"]} />
    </Section>
  );
};
