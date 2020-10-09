import {
  Card,
  CardActionArea,
  CardContent
} from "@material-ui/core";

export const ArticlePreview = () => {
  return (
    <Card variant="outlined">
      <CardActionArea>
        <img style={{height: '100%', width: '100%'}} src="/stoat.jpg"></img>
      </CardActionArea>
    </Card>
  );
};
