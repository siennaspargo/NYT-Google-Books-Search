import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Book = (props) => {
  return(
      <div>
        { props.book ? (
            <Card>
              <CardMedia style={{height: 0, paddingTop: '56.25%'}}
              image={props.book.fields.bookImage.fields.file.url}
              title={props.book.fields.title}
              />
              <CardContent>
                <Typography gutterButton variant="headline" component="h2">
                {props.book.fields.title}
                </Typography>
                <Typography component="p">
                  {props.book.fields.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary" href={props.book.fields.url} target="_blank">
                Go To Book
                </Button>
              </CardActions>            
            </Card>
        ): null }
      </div>
  )
}

export default Book;