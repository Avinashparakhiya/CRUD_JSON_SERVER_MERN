import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom';

    const useStyle=makeStyles({
        header:{
            background:'#FFF000'
        },
        tabs:{
            textDecoration:'none',
            marginRight:'20px',
            fontSize:'20px'
        }
    })

function Navbar() {
const classes=useStyle();
  return (
    <AppBar className={classes.header} position="static">
        <Toolbar>
            <Link className={classes.tabs} to='/'>Welcome</Link>
            <Link className={classes.tabs} to='/all'>All User</Link>
            <Link className={classes.tabs} to='/add'>Add Users</Link>
        </Toolbar>
    </AppBar>
  )
}
export default Navbar;