import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { FaDownload } from "react-icons/fa6";


const DocumentComp = ({ document }: any) => {
  // console.log(document);
  const mainColor = "#FF385C";

  return (
    <Card className="shadow-lg rounded-lg overflow-hidden">
      <CardContent>
        <Typography variant="h5" component="h2">
          {document.title}
        </Typography>
        {document.document.endsWith(".pdf") ? (
          <p className="mt-1">PDF Document</p>
        ) : (
          <Typography variant="body2" color="textSecondary">
            Image
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={document.document}
          target="_blank"
          sx={{ color: mainColor }}
        >
          View {document.document.endsWith(".pdf") ? "Document" : "Image"}
        </Button>
        <Button
          // size="small"
          href={document.document}
          download
          sx={{ color: mainColor }}
        >
          <FaDownload />
        </Button>
      </CardActions>
    </Card>
  );
};

export default DocumentComp;
