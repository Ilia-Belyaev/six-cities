import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { City } from '../../types/models';
import { getCityName } from '../../store/slices/town/selectors';
import { changeTown } from '../../store/slices/town/town';

type TownProps = {
  town: City;
}

export default function Town({town}: TownProps) {
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCityName);
  const handleClick = () => dispatch(changeTown(town));

  return (
    <li className="locations__item" onClick={handleClick} data-testid='town-container'>
      <a className={cn('locations__item-link', 'tabs__item', {'tabs__item--active': city === town.name})} href="#" data-testid='href-container'>
        <span>{town.name}</span>
      </a>
    </li>
  );
}
