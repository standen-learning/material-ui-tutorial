import React from 'react';
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';


export default function NoteCard({ note, handleDelete }) {
    const avatarColor = {
        "work": yellow[700],
        "money": green[500],
        "todos": pink[500]
    }
  return (
    <div>
        <Card elevation={1}>
            <CardHeader  
                avatar={
                    <Avatar sx={{
                        backgroundColor: avatarColor[note.category] || blue[500]
                    }}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
