import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AlignIcon from '@material-ui/icons/ViewHeadlineOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    containerPadding: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    borderBottom: {
        borderBottom: '1px solid #ccc',
    },
    titleColor: {
        color: 'grey',
        fontSize: theme.spacing.unit * 2.3,
    },
    alignVCener: {
        display: 'flex',
        alignItems: 'center'
    },
    alignVHCener: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    marginRight: {
        marginRight: 15,
    },
    alignButton: {
        color: 'white',
        borderRadius: 0,
        minWidth: 35,
        height: 35,
        padding: 0
    }
});

class TopNav extends Component {
    state = {
        open: false,
    };
    dialogOpen() {
        this.setState({
            open: true,
        });
    }
    handleClose() {
        this.setState({
            open: false,
        });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <Fragment>
                <Grid container className={[classes.root, classes.borderBottom, classes.containerPadding].join(' ')} spacing={16}>
                    <Grid item xs={5} className={classes.alignVCener}>
                        <Typography variant="subtitle2" className={classes.titleColor}>
                            Task Tracker
                        </Typography>

                    </Grid>
                    <Grid item xs={7} className={classes.alignVHCener}>
                        <div className={classes.marginRight}>
                            <IconButton style={{
                                backgroundColor: "#32CD32",
                                color: 'white',
                                width: 35,
                                height: 35,
                                padding: 0}}
                                onClick={this.dialogOpen.bind(this)}>
                                <AddIcon style={{
                                    fontSize: 20
                                }}/>
                            </IconButton>
                            
                        </div>
                        <div>
                            <Input
                                style={{
                                    backgroundColor: '#EEEEEE',
                                    padding: '2px 0px 2px 10px',
                                    borderRadius: 5
                                }}
                                disableUnderline={true}
                                type='text'
                                placeholder='Search'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton style={{ backgroundColor: 'transparent' }}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                    </Grid>
                </Grid>
                <Dialog
                    open={open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create New Card</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Card Name"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose.bind(this)} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>

            </Fragment>
        );
    }
}

TopNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNav);