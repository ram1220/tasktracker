
import React from 'react';
import FishEye from '@material-ui/icons/PanoramaFishEyeOutlined';
import TimeLapse from '@material-ui/icons/TimelapseOutlined';
import Check from '@material-ui/icons/CheckCircle';
import Schedule from '@material-ui/icons/ScheduleOutlined';
import Cancel from '@material-ui/icons/CancelOutlined';
import ArrowUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import ItemCard from './itemcard';
export default ({ classes, columnWidth, cardData, alignmentMode, iconSize = 22 }) => {
    const styleObject = {
        color: cardData.color,
        width: iconSize,
        height: iconSize
    }
    return (
        <div style={{
            width: columnWidth
        }}>
            <div className={classes.flexContent}>
                <div className={classes.flexContent}>
                    <div className={[classes.alignVCenter, classes.marginRight].join(' ')}>
                        {cardData.icon == 'circle' ? (
                            <FishEye style={styleObject} />
                        ) : null}

                        {cardData.icon == 'timelapse' ? (
                            <TimeLapse style={styleObject} />
                        ) : null}

                        {cardData.icon == 'check' ? (
                            <Check style={styleObject} />
                        ) : null}

                        {cardData.icon == 'schedule' ? (
                            <Schedule style={styleObject} />
                        ) : null}

                        {cardData.icon == 'cancel' ? (
                            <Cancel style={styleObject} />
                        ) : null}

                    </div>
                    <div className={classes.alignVCenter}>
                        <Typography variant="body1" className={classes.title}>
                            {cardData.title}
                        </Typography>
                    </div>
                </div>
                <div className={classes.alignVCenter}>
                    <div style={{
                        height: 26,
                        marginRight: 8
                    }}>
                        <div style={{
                            height: 5
                        }}>
                            <ArrowUpIcon style={{
                                color: 'darkgrey',
                                width: 22,
                                height: 22

                            }}
                            />
                        </div>
                        <div style={{
                            height: 5
                        }}>
                            <ArrowDownIcon style={{
                                color: 'darkgrey',
                                width: 22,
                                height: 22

                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.autoScroll}>
                {cardData.items.map((item, i) => {
                    return <ItemCard key={i} cardInfo={item} classes={classes} />
                })}
            </div>
        </div>
    )
}