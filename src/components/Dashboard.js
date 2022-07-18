import React from 'react';
import Header from './Header';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SpamMailTable from './SpamMailTable';
import "./Styles.scss";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));


const Dashboard = () => {
    return (
        <>
            <div className='dashboard_container'>
                <Header />
                <div className='dashboard_content'>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Item>
                                <div className='left_content'>
                                    <SearchOutlinedIcon />
                                    <TextField
                                        label="Search field"
                                        type="search"
                                    />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <div className='spam_mails'>
                                <div>
                                    <h4>Spam Mail Project</h4>
                                    <div className='spam_mails_icons'>
                                        <SummarizeOutlinedIcon/>
                                        <InsertPageBreakOutlinedIcon/>
                                        <DeleteOutlineOutlinedIcon/>
                                    </div>
                                </div>
                                <div className='auther_content'>
                                    <div className='autor_data'>
                                        <h6>Author Name</h6>
                                        <span>:</span>
                                        <h6 className='h6-1'>Nagarajan More</h6>
                                    </div>
                                    <div className='autor_data'>
                                        <h6>Created On</h6>
                                        <span>:</span>
                                        <h6 className='h6-1'>DD/MM/YYYY</h6>
                                    </div>
                                    <div className='autor_data'>
                                        <h6>Updated On</h6>
                                        <span>:</span>
                                        <h6 className='h6-1'>DD/MM/YYYY</h6>
                                    </div>
                                </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <SpamMailTable/>
            </div>
        </>
    )
}

export default Dashboard