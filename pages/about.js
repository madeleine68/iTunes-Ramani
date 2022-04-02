import Head from "next/head";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { CardContent } from "@mui/material";
import Link from "@mui/material/Link";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Created By Madeleine Moghadasi
          </Typography>
          <Button
            href="https://github.com/madeleine68"
            sx={{ mb: 2 }}
            size="small"
          >
            Learn More
          </Button>
        </CardContent>
        <Card>
          <CardContent>
            <Link href="/">Go Back</Link>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}