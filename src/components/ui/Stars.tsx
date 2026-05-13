import { Icon } from './Icon';

type Props = { value?: number; size?: number };

export function Stars({ value = 5, size = 14 }: Props) {
  return (
    <span className="stars" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon.star key={i} size={size} filled={i <= Math.round(value)} />
      ))}
    </span>
  );
}
