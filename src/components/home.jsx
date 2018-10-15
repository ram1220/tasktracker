import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TopNav from './topnav';
import CardList from './cardlist';
import { cardData } from '../data/data';
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    containerPadding: {
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    alignVCenter: {
        display: 'flex',
        alignItems: 'center',
    },
    flexContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    marginTop: {
        marginTop: theme.spacing.unit * 2,
    },
    title: {
        color: '#1992EF',
        fontSize: 17
    },
    marginRight: {
        marginRight: 8,
    },
    autoScroll: {
        maxHeight: 490,
        overflow: 'hidden',
        overflowY: 'auto'
    }
});

class Home extends Component {
    state = {
        columnWidth: '19%'
    };
    onAlignGrid = key => (event, value) => {
        this.setState({
            gridAlign: key,
        });
    }

    render() {
        const { classes } = this.props;
        const { iconSize, columnWidth } = this.state;

        return (
            <Fragment>
                <TopNav />

                <Grid container className={[classes.root, classes.borderBottom, classes.containerPadding].join(' ')} spacing={16}>
                    <Grid item xs={12}>
                        <div className={[classes.flexContent, classes.marginTop].join(' ')}>
                            {cardData.cards.map((data, i) => {
                                return <CardList key={i}
                                    classes={classes}
                                    columnWidth={columnWidth}
                                    cardData={data}
                                />
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Fragment >
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);