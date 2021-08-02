import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
 
const Items = (props) => {
  const { data } = props;
  return (
    <div className="MuiPaper-root1">
      {data?.requirements &&
        data?.requirements.map((item) => {
          return (
            <Card className="test-data" key={item.code}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={`https://moteghazi.com/image/requirement/${item.code}/256/${item.images[0]}`}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  اشتراک گذاری
                </Button>
                <Button size="small" color="primary">
                  <Link to={`/item-detail/${item.code}`}>
                  اطلاعات بیشتر
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
};

export default Items;
