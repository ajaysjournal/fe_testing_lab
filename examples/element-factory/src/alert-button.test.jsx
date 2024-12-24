import { render, screen, act } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {
    render(<AlertButton />);
  });

  afterEach(() => {});

  it.only('should render an alert button', async () => {
    const alertButton = screen.getByRole('button', { name: 'Trigger Alert' });
    const alertSpy = vi.spyOn(window, 'alert');
    expect(alertButton).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(alertButton);
    });

    expect(alertSpy).toHaveBeenCalled();
  });

  it('should trigger an alert', async () => {});
});
