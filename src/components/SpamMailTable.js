import React from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./Styles.scss";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AnimationIcon from '@mui/icons-material/Animation';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TableData from './TableData';
import DataTable from './DataTable';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(3),
    // color: theme.palette.text.secondary,
}));

const SpamMailTable = () => {
    return (
        <div>
            <div className='spam_mail_tablle'>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Item>
                            <div className='span_mail_content'>
                                <KeyboardBackspaceOutlinedIcon  className='back'/>
                                <div className="span_mail_tools">
                                    <AnimationIcon />
                                    <h5>Experimets</h5>
                                    <ArrowRightIcon />
                                </div>
                                <div className="span_mail_tools">
                                    <AnimationIcon />
                                    <h5>Data</h5>
                                    <ArrowRightIcon />
                                </div>
                                <div className="span_mail_tools">
                                    <AnimationIcon />
                                    <h5>Data Source</h5>
                                    <ArrowRightIcon />
                                </div>
                                <div className="span_mail_tools">
                                    <AnimationIcon />
                                    <h5>Model Factory</h5>
                                    <ArrowRightIcon />
                                </div>
                                <div className="span_mail_tools">
                                    <AnimationIcon />
                                    <h5>Model tunning</h5>
                                    <ArrowRightIcon />
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item>
                          <div className='data_table'>
                            <DataTable/>
                            {/* <DataTable/> */}
                          </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default SpamMailTable