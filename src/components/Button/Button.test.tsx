import React from 'react';

import fireEvent from '@testing-library/user-event';

import { render } from '../../tests/utils/render';
import { Button } from './Button';

describe('<Button />', () => {
  it('should be render without any error', async () => {
    const { findByText } = render(<Button>my button</Button>);
    expect(await findByText('my button')).toBeInTheDocument();
  });

  it('should render `startIcon` when passed it', () => {
    const { getByTestId } = render(
      <Button startIcon={<span data-testid="startIcon"></span>}>
        my button
      </Button>,
    );
    expect(getByTestId('startIcon')).toBeInTheDocument();
  });

  it('should be render with correct theme color', () => {
    const { getByText } = render(<Button color="success">my button</Button>);
    expect(getByText('my button')).toHaveStyle({
      'background-color': '#039B00',
    });
  });

  it('should call `onClick` function when button was pressed', () => {
    const onclickSpy = jest.fn();
    const { getByText } = render(
      <Button color="success" onClick={onclickSpy}>
        my button
      </Button>,
    );
    fireEvent.click(getByText('my button'));
    expect(onclickSpy).toHaveBeenCalled();
  });

  it('should render button withou any style if used `unstyled` variant', () => {
    const { getByText } = render(<Button variant="unstyled">my button</Button>);
    expect(getByText('my button')).toHaveStyle({
      alignItems: 'unset',
      backgroundColor: 'transparent',
      borderRadius: 'unset',
      display: 'unset',
      gap: 'unset',
      justifyContent: 'unset',
      margin: '0px',
      maxWidth: 'unset',
      minHeight: 'unset',
      minWidth: 'unset',
      padding: '0px',
      textTransform: 'initial',
    });
  });
});
