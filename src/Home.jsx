import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Description as IconExportXls, Search as SearchIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Button, MenuItem, Menu, InputBase, List, ListItem, Link } from '@material-ui/core';
import { green } from '@material-ui/core/colors';


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];


function createData(status, customer, farm, country, rep, dist, dealer) {
  return { status, customer, farm, country, rep, dist, dealer };
}

const rows = [
  createData('Active', 'WJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Not Active', 'YJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Tackle', 'AJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'BJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'ZJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'VJohn', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John1', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John2', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John3', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John4', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John5', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John6', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John7', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John8', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John9', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John10', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John11', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John12', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John13', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John14', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John15', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John16', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John17', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John18', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John19', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John20', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John21', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'),
  createData('Active', 'John22', 'j1', 'USA', 'John do', 'Izhar', 'Izhar'), 
];



function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

// const headCells = [
//   { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
//   { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
//   { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
//   { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
//   { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
// ];

const headCells = [
  { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
  { id: 'customer', numeric: false, disablePadding: true, label: 'Customer' },
  { id: 'farm', numeric: false, disablePadding: true, label: 'Farm' },
  { id: 'country', numeric: false, disablePadding: true, label: 'Country' },
  { id: 'rep', numeric: false, disablePadding: true, label: 'REP' },
  { id: 'dist', numeric: false, disablePadding: true, label: 'Dist' },
  { id: 'dealer', numeric: false, disablePadding: true, label: 'Dealer' },
  { id: 'farmdetails', numeric: false, disablePadding: true, label: '' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{width: '13%',}}            
          >
            <TableSortLabel
              IconComponent={FilterListIcon}
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
              style={{width:'16px'}}
            >
              {headCell.label === 'Status'? <span style={ {marginLeft: '10px'}}>{headCell.label}</span> : <span>{headCell.label}</span>}              
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    borderBottom: 'solid 1px #e0e0e0',
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const FiltersTableToolbarStyles = makeStyles(() => ({
    root: {
        textAlign: 'left',
        borderBottom: 'solid 1px #e0e0e0',
        paddingTop: '1px',
        paddingBottom: '40px',
        paddingLeft: '100px',
    },
    rootBtn: {
        display: 'flex',
    },
    filterButton:{
        border: 'solid 1px green',
        borderRadius: '20px',
        padding: '10px 20px',
        marginRight: '20px'
    },    
}));

const FiltersTableToolbar = (props) => {
    const classes = FiltersTableToolbarStyles();
    const {handlerFilterTopOpen} = props;
    const handlerOpenFilter = (event) => {
        handlerFilterTopOpen(event.currentTarget);
    }   
    return (      
      <div className={classes.root}>
        <h3>Filters</h3>
        <div className={classes.rootBtn}>
            <Button className={classes.filterButton} onClick={(node) => handlerOpenFilter(node)}>Distributer</Button>
            <Button className={classes.filterButton}>Dealer</Button>
            <Button className={classes.filterButton}>Customer</Button>
        </div>
      </div>
    );
  };
  

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={classes.root}
    >     
      {numSelected > 0 ? (
        <Tooltip title="Import to XLS">
          <IconButton aria-label="Import to XLS" style={{marginLeft: 'auto',}}>
            <IconExportXls />
          </IconButton>
        </Tooltip>
      ) : ''}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '0 auto', 
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  topTitleContainer: {
    textAlign: 'left',
    margin: '30px 0',
  },
  topTitleH1:{
    marginBlockEnd: '0em',
    fontWeight: 700,
    letterSpacing: '1px',
    color: '#312f2fde', 
  },
  topTitleText:{
    fontSize: '20px',
    color: '#312f2fde', 
  },
  topFilterDistributerBtnContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '35px 20px 20px 20px',
  },
  topFilterDistributerBtnCancel:{
    color: 'green',
    border: 'solid 1px green',
    borderRadius: '20px',
    padding: '2px 20px',
    width: '110px',
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  topFilterDistributerBtnOK:{
    color: '#fff',
    backgroundColor: 'green',
    border: 'solid 1px green',
    borderRadius: '20px',
    padding: '2px 20px',
    width: '110px',
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  topFilterDistrSearchLi:{
    paddingRight: 'unset', 
    paddingLeft: 'unset',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&:focus': {
      backgroundColor: '#fff',
    },
    '&:active': {
      backgroundColor: '#fff',
    },
  },
  topFilterDistrSearchContainer:{
    display: 'flex', 
    border: 'solid 1px #ccc', 
    borderRadius: '5px', 
    padding: '5px', 
    width: '80%', 
    justifyContent: 'space-between', 
    margin: '0 auto',        
  },
  btnFarmDetails:{
    color: 'green',
    border: 'solid 1px green',
    borderRadius: '30px',
    padding: '5px',
    width: '150px',
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  tableCell:{
    padding: '5px',
  },
  tableStatus: {
    backgroundColor: '#495049',
    border: 'solid 1px #495049',
    borderRadius: '15px',
    padding: '10px 20px',
    color: '#fff',
  },
  tableStatusActive: {
    backgroundColor: '#2b7749',
    border: 'solid 1px #2b7749',
    borderRadius: '15px',
    padding: '10px 20px',
    color: '#fff',
  },
  filterCellItem:{
    paddingBottom: 'unset', 
    paddingTop: 'unset', 
    width: '300px',
    paddingLeft: 30
  },
  filterCellLinkDiv:{
    display: 'flex',
    padding: '10px 20px 20px 20px',
    justifyContent: 'space-between',
    margin: '0 10px',    
  },
  filterCellLinkBtn:{
    color: 'green',
  },
  filterCellSearchContainer:{
    display: 'flex', 
    border: 'solid 1px #ccc', 
    borderRadius: '5px', 
    padding: '5px', 
    width: '80%', 
    justifyContent: 'space-between', 
    margin: '0 auto',        
  },
  filterCellButtons:{
    display: 'flex',
    padding: '35px 27px 20px 28px',
    justifyContent: 'space-between',
  },

}));

const GreenCheckbox = withStyles({
    root: {
      color: '#868383',
      '&$checked': {
        color: '#30704f',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

function Home() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('status');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5); 
  const [filterTopOpenEl, setFilterTopOpenEl] = React.useState(null);
  const [filterCellOpenEl, setFilterCellOpenEl] = React.useState(null);
  const [filterTopOpenChecked, setFilterTopOpenChecked] = React.useState([0]);

  const handleRequestSort = (event, property) => {    
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    handleFilterCellButton(event.currentTarget);
  };

  const handleCellSort = (sortOrder) => {  
    setOrder(sortOrder);   
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.customer);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleFilterButton = el => {    
    setFilterTopOpenEl(el);
  }

  const closeFilterButton = () =>{
    setFilterTopOpenEl(null)
  }

  const handleFilterCellButton = el => {    
    setFilterCellOpenEl(el);
  }

  const closeFilterCellButton = () =>{
    setFilterCellOpenEl(null)
  }

  const onSelectFilterTopCB = (value) =>{
    const currentIndex = filterTopOpenChecked.indexOf(value);
    const newChecked = [...filterTopOpenChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }    
    setFilterTopOpenChecked(newChecked);
  }

  const renderFilterTop = (
    <Menu
      anchorEl={filterTopOpenEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}      
      keepMounted
      transformOrigin={{ vertical: -170, horizontal: 'center' }}
      open={Boolean(filterTopOpenEl)}
      onClose={closeFilterButton}      
    > 
      <List style={{maxHeight: '240px', overflowY: 'auto'}}>
        {['Robinson', 'Terner', 'Johnnson', 'Israeli', 'Izharon', 'John', 'Samanta'].map(value => {
            const labelId = `checkbox-list-label-${value}`;
            return(
              <ListItem style={{paddingBottom: 'unset', paddingTop: 'unset', width: '300px'}} onClick={()=>{onSelectFilterTopCB(value)}}>
                  <GreenCheckbox                    
                    checked={filterTopOpenChecked.indexOf(value) !== -1}                    
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                <span>{value}</span>
              </ListItem>
            );
        })}
      </List>
      <div style={{width: '80%', backgroundColor: '#ccc', height: '1px', margin: '20px auto'}}>&nbsp;</div>
      <MenuItem className={classes.topFilterDistrSearchLi}>
        <div className={classes.topFilterDistrSearchContainer}>            
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div style={{paddingTop: '5px'}}>
              <SearchIcon />
            </div>
        </div>
      </MenuItem>
      <div className={classes.topFilterDistributerBtnContainer}>
            <Button className={classes.topFilterDistributerBtnCancel} onClick={closeFilterButton}>Cancel</Button>
            <Button className={classes.topFilterDistributerBtnOK} onClick={closeFilterButton}>OK</Button>
      </div>
    </Menu>
  );

  const renderFilterCell = (
    <Menu
      anchorEl={filterCellOpenEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}      
      keepMounted
      transformOrigin={{ vertical: -50, horizontal: 'left' }}
      open={Boolean(filterCellOpenEl)}
      onClose={closeFilterCellButton}       
    > 
      
      <MenuItem className={classes.filterCellItem} style={{marginTop: '20px',}} onClick={() => {handleCellSort('asc')}}>
          <span>Sort A to Z</span>
      </MenuItem>
      <MenuItem className={classes.filterCellItem} onClick={() => {handleCellSort('desc')}}>
          <span>Sort Z to A</span>
      </MenuItem>
      <div style={{width: '80%', backgroundColor: '#ccc', height: '1px', margin: '10px auto'}}>&nbsp;</div>
      <MenuItem className={classes.filterCellItem}>
          <span>Filter by condition</span>
      </MenuItem>
      <MenuItem className={classes.filterCellItem}>
          <span>Filter by values</span>
      </MenuItem>
      <div className={classes.filterCellLinkDiv}>
          <Link href='#' className={classes.filterCellLinkBtn} onClick={closeFilterCellButton}>Select all</Link>
          <Link href='#' className={classes.filterCellLinkBtn} onClick={closeFilterCellButton}>Clear</Link>
      </div>      
      <div className={classes.filterCellSearchContainer}>            
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <div style={{paddingTop: '5px'}}>
            <SearchIcon />
          </div>
      </div>     
      <div className={classes.filterCellButtons}>
            <Button className={classes.topFilterDistributerBtnCancel} onClick={closeFilterCellButton}>Cancel</Button>
            <Button className={classes.topFilterDistributerBtnOK} onClick={closeFilterCellButton}>OK</Button>
      </div>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <div className={classes.topTitleContainer}>
          <h1 className={classes.topTitleH1}>Farms</h1>
          <span className={classes.topTitleText} >Information for you about all your farms</span>
      </div>
      <Paper className={classes.paper}>
        <FiltersTableToolbar handlerFilterTopOpen={handleFilterButton} />
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.customer);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.customer)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.customer}
                      selected={isItemSelected}
                      className={classes.rowTable}
                    >
                      <TableCell padding="checkbox" className={classes.tableCell}>
                          {isItemSelected ? 
                            <GreenCheckbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }}/>
                            :
                            <Checkbox  checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                          }
                      </TableCell>
                      <TableCell className={classes.tableCell} component="th" id={labelId} scope="row" padding="none">
                        <span className={row.status === 'Active'? classes.tableStatusActive : classes.tableStatus}>{row.status}</span> 
                      </TableCell>
                      <TableCell className={classes.tableCell} align="left">{row.customer}</TableCell>
                      <TableCell className={classes.tableCell} align="left">{row.farm}</TableCell>
                      <TableCell className={classes.tableCell} align="left">{row.country}</TableCell>
                      <TableCell className={classes.tableCell} align="left">{row.rep}</TableCell> 
                      <TableCell className={classes.tableCell} align="left">{row.dist}</TableCell>
                      <TableCell className={classes.tableCell} align="left">{row.dealer}</TableCell>
                      <TableCell className={classes.tableCell} align="right">
                          <Button className={classes.btnFarmDetails} onClick={closeFilterButton}>Farm details</Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {renderFilterTop}
      {renderFilterCell}      
    </div>
  );
}

export default Home;
