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
  <div className={'btn-stack'}>
    <Button {...args}>{args.children}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const All = () => (
  <>
    <div className={'btn-stack'}>
      <Button color="primary">Filled Primary</Button>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
      <Button variant="void" color="primary">
        Void Primary
      </Button>
    </div>
    <br />
    <div className={'btn-stack'}>
      <Button color="success">Filled Success</Button>
      <Button variant="outlined" color="success">
        Outlined Success
      </Button>
      <Button variant="void" color="success">
        Void Success
      </Button>
    </div>
    <br />
    <div className={'btn-stack'}>
      <Button color="warning">Filled Warning</Button>
      <Button variant="outlined" color="warning">
        Outlined Warning
      </Button>
      <Button variant="void" color="warning">
        Void Warning
      </Button>
    </div>
    <br />
    <div className={'btn-stack'}>
      <Button color="danger">Filled Danger</Button>
      <Button variant="outlined" color="danger">
        Outlined Danger
      </Button>
      <Button variant="void" color="danger">
        Void Danger
      </Button>
    </div>
  </>
);

export const Sizes = () => (
  <div className={'btn-stack'}>
    <Button variant="filled" size="lg">
      Large
    </Button>
    <Button variant="filled">Default</Button>
    <Button variant="filled" size="sm">
      Small
    </Button>
  </div>
);

export const WithIcon = () => (
  <div className={'btn-stack'}>
    <Button startIcon disabled>
      Primary
    </Button>
    <Button endIcon disabled>
      Primary
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
