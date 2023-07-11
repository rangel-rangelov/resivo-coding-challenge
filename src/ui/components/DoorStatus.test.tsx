import { render } from '@testing-library/react';
import { ConnectionStatus } from '@/models/ConnectionStatus';
import { DoorStatus } from './DoorStatus';

jest.mock('next/router', () => require('next-router-mock'));

describe('DoorStatus', () => {
  it('should render correctly', () => {
    const { container } = render(<DoorStatus status={ConnectionStatus.Online} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
