import Button from '@/components/ui/button';
import { render } from '@testing-library/react';

describe('Button component', () => {
  it('render Button component', () => {
    const { container } = render(<Button>button</Button>);
    expect(container).toMatchSnapshot();
  });
});
