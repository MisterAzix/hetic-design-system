import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const All = () => (
  <div className={'btn-stack'}>
    <Button color="primary">Filled Primary</Button>
    <Button color="success">Filled Success</Button>
    <Button variant="outlined" color="primary">
      Outlined Primary
    </Button>
    <Button variant="outlined" color="success">
      Outlined Success
    </Button>
    <Button variant="void" color="primary">
      Void Primary
    </Button>
    <Button variant="void" color="success">
      Void Success
    </Button>
  </div>
);

export const Sizes = () => (
  <div className={'btn-stack'}>
    <Button variant="filled" size="sm">
      Small
    </Button>
    <Button variant="filled">Default</Button>
    <Button variant="filled" size="lg">
      Large
    </Button>
  </div>
);

export const Disabled = () => (
  <div className={'btn-stack'}>
    <Button variant="filled" disabled>
      Primary
    </Button>
    <Button variant="outlined" disabled>
      Primary
    </Button>
    <Button variant="void" disabled>
      Primary
    </Button>
  </div>
);
