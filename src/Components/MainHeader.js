import classes from './MainHeader.module.css';
import {NavLink} from 'react-router-dom';

function MainHeader(){
    return(
        <header className={classes.header}>
        <nav className={classes.navigation}>
        <ul className={classes['navigation-list']}>
        <li><NavLink activeClassName={classes.active} to={'/get-loan'} >GetLoan</NavLink></li>
        <li><NavLink activeClassName={classes.active} to={'/dashboard'}>DashBoard</NavLink></li>
           
        </ul>
    </nav>
    </header>
    );
};

export default MainHeader;