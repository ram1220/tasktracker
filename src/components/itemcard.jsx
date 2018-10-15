
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
export default ({ classes, cardInfo }) => {
    return (
        <div style={{
            margin: 6,
            marginTop: 10,
            marginBottom: 20
        }}>
            <Card>
                <CardContent style={{
                    padding: 10
                }}>
                    <Typography variant="subtitle2" gutterBottom>
                        {cardInfo.title}
                        </Typography>
                    <Typography variant="caption" gutterBottom>
                        {cardInfo.description}
                        </Typography>
                    <div className={classes.flexContent} style={{
                        alignItems: 'flex-end'
                    }}>
                        <div>
                            <Typography variant="caption">
                                03 Oct 2018
                                </Typography>
                        </div>
                        <div>
                            <Avatar aria-label="Recipe" style={{
                                backgroundColor: cardInfo.avatarColor
                            }}>
                                {cardInfo.avatarCode}
                                </Avatar>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}