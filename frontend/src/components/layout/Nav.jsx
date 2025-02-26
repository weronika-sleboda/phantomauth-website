import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  const style = (isActive) => isActive? styles.active : undefined;
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink 
            className={({ isActive}) => style(isActive)}
            to='/' 
            end>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => style(isActive)}
            to='/demo' 
            end>
            DEMO
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => style(isActive)}
            to='/docs' 
            >
            DOCS
          </NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => style(isActive)}
            to='/tutorial' 
            >
            TUTORIAL
          </NavLink>
        </li>
      </ul>
    </div>
  );
}